import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { DATABASE_URL } from '../env';

const client = postgres(DATABASE_URL);
const db = drizzle(client);

export default db;