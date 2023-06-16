import { pgTable, text, varchar } from "drizzle-orm/pg-core";

export const runs = pgTable('runs', {
    id: varchar('id', { "length": 21 }).primaryKey(),
    executor: text('executor').notNull(),
    code: text('code').notNull(),
    language: varchar('language').notNull(),
    output: text('output').notNull(),
    status: varchar('status').notNull(),
    created_at: text('created_at').notNull(),
    updated_at: text('updated_at').notNull()
});