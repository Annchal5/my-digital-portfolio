import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config();

const sql = neon(process.env.DATABASE_URL!);

async function updateBlog() {
  await sql`UPDATE blog_posts SET cover_image = NULL WHERE slug = 'security-in-ai-model-context-protocol-mcp'`;
  console.log("Updated blog post - removed cover image");
}

updateBlog();
