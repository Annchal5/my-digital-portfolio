import * as dotenv from "dotenv";
import { resolve } from "path";

// Load environment variables
dotenv.config({ path: resolve(process.cwd(), ".env") });

import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

async function listProjects() {
  const result = await sql`SELECT id, title, image FROM projects ORDER BY id`;
  console.log("Current projects in database:");
  console.log("=====================================");
  result.forEach(p => {
    console.log(`ID ${p.id}: ${p.title}`);
    console.log(`   Image: ${p.image || '(no image)'}`);
  });
  console.log("=====================================");
  console.log(`Total: ${result.length} projects`);
}

listProjects();
