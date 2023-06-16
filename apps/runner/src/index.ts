import { Docker } from "@evalx/engine";
import express from "express";
import { validateRequest } from "zod-express-middleware";
import { z } from "zod";
import { minify } from "terser";
import { Stopwatch } from "@sapphire/stopwatch";
import { PORT } from "./env";
import logger from "./logger";
import sLog from "./stopwatch";
import { createId } from "./util";
import { eq, runs } from "@evalx/db";
import db from "./db";

const engine = new Docker({
  BASE: "http://localhost:2375",
});
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  logger.info(`Request received at ${new Date().toISOString()}`);

  return res.json({
    message: "Hello World",
  });
});

app.post(
  "/eval",
  validateRequest({
    body: z.object({
      code: z.string().nonempty(),
      language: z.string().nonempty(),
      skipCache: z.boolean().optional(),
    }),
  }),
  async (req, res) => {
    logger.info("Running eval on code");
    const { code, language, skipCache } = req.body;

    const stopwatch = new Stopwatch();
    stopwatch.start();

    let minifiedCode: string = code;
    try {
      if (language === "js") minifiedCode = (await minify(code)).code!;
    } catch { }

    const existingRun = await db.select().from(runs).where(eq(runs.code, minifiedCode));
    if (existingRun.length && !skipCache) {
      sLog("Run found in cache", stopwatch);

      const output = existingRun[0].output;
      return res.json({ output: output.endsWith("undefined\n") ? output.slice(0, -10) : output });
    }

    const conatinerName = `evalx-${language}-runner-${Date.now()}`;
    const container = await engine.container.containerCreate({
      body: {
        Image: `evalx-${language}-runner`,
        Tty: true,
        Cmd: ["/bin/sh"],
      },
      name: conatinerName,
    });
    sLog("Container created", stopwatch);

    await engine.container.containerStart({ id: container.Id });
    sLog("Container started", stopwatch);

    const exec = await engine.exec.containerExec({
      id: container.Id,
      execConfig: {
        Cmd: ["/bin/sh", "/var/run/run.sh", code],
        AttachStdout: true,
        AttachStderr: true,
      },
    });
    sLog("Exec created", stopwatch);

    const output: string = await engine.exec.execStart({ id: exec.Id, execStartConfig: { Tty: true } });
    logger.info(output);
    sLog("Exec started", stopwatch);
    res.json({ output: output.endsWith("undefined\n") ? output.slice(0, -10) : output });

    await db.insert(runs).values({
      "id": createId(),
      "executor": "user_1",
      "code": minifiedCode,
      "output": output,
      "language": language,
      "status": "success",
      "created_at": new Date().toISOString(),
      "updated_at": new Date().toISOString(),
    });

    await engine.container.containerStop({ id: container.Id });
    await engine.container.containerDelete({ id: container.Id });
    sLog("Container removed", stopwatch);
  },
);

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
