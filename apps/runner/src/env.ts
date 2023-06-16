import { config } from "dotenv";
import { join } from "path";
config({ path: join(__dirname, "..", "..", "..", ".env") })

export const PORT = process.env.PORT ?? 6000;
export const isDev = process.env.NODE_ENV === "development";
export const DATABASE_URL = process.env.DATABASE_URL!;