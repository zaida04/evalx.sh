CREATE TABLE IF NOT EXISTS "runs" (
	"id" varchar(21) PRIMARY KEY NOT NULL,
	"executor" text NOT NULL,
	"code" text NOT NULL,
	"language" varchar NOT NULL,
	"output" text NOT NULL,
	"status" varchar NOT NULL,
	"created_at" text NOT NULL,
	"updated_at" text NOT NULL
);
