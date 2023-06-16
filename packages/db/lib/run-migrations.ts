import { config } from "dotenv";
import { join } from "path";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { makeDB } from "./db/client";
config({ path: join(__dirname, "..", "..", "..", ".env") })

// this will automatically run needed migrations on the database
async function main() {
    migrate(makeDB(process.env.DATABASE_URL!).db, { migrationsFolder: "./drizzle" })
        .then(() => {
            console.log("Migrations complete!");
            process.exit(0);
        })
        .catch((err) => {
            console.error("Migrations failed!", err);
            process.exit(1);
        });
}

main();