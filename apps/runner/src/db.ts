import { makeDB } from '@evalx/db';
import { DATABASE_URL } from './env';

const { db } = makeDB(DATABASE_URL);

export default db;