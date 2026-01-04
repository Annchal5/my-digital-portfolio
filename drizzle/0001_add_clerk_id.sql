-- Add clerk_id column and unique index to users table if missing
ALTER TABLE IF EXISTS "users"
ADD COLUMN IF NOT EXISTS "clerk_id" text;

-- Ensure a unique index exists for clerk_id to enforce uniqueness similar to constraint
CREATE UNIQUE INDEX IF NOT EXISTS users_clerk_id_unique ON "users" ("clerk_id");
