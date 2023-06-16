import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

export const makeDB = (DATABASE_URL: string) => {
    const client = postgres(DATABASE_URL);
    const db = drizzle(client);
    return { client, db }
};