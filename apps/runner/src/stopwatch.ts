import { Stopwatch } from "@sapphire/stopwatch";
import logger from "./logger";

export default (message: string, stopwatch: Stopwatch) => {
  logger.warn(`${message} ${stopwatch.stop().toString()}`);
  stopwatch.restart();
};
