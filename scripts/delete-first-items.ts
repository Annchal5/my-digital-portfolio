import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { blogPosts, projects } from "@/lib/db";
import { asc, eq } from "drizzle-orm";

// Determine the database connection string
let connectionString: string;

if (process.env.DATABASE_URL) {
  connectionString = process.env.DATABASE_URL;
} else if (
  process.env.PGHOST &&
  process.env.PGUSER &&
  process.env.PGDATABASE &&
  process.env.PGPASSWORD
) {
  connectionString = `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}/${process.env.PGDATABASE}?sslmode=require`;
} else {
  console.error("No database credentials found");
  process.exit(1);
}

const sql = neon(connectionString);
const db = drizzle(sql);

async function deleteFirstItems() {
  try {
    console.log("Fetching first blog post...");
    const firstBlog = await db
      .select()
      .from(blogPosts)
      .orderBy(asc(blogPosts.id))
      .limit(1);

    if (firstBlog.length > 0) {
      console.log(`Found blog post: "${firstBlog[0].title}" (ID: ${firstBlog[0].id})`);
      const result = await db
        .delete(blogPosts)
        .where(eq(blogPosts.id, firstBlog[0].id))
        .returning();
      console.log("✓ Blog post deleted successfully");
    } else {
      console.log("No blog posts found");
    }

    console.log("\nFetching first project...");
    const firstProject = await db
      .select()
      .from(projects)
      .orderBy(asc(projects.id))
      .limit(1);

    if (firstProject.length > 0) {
      console.log(`Found project: "${firstProject[0].title}" (ID: ${firstProject[0].id})`);
      const result = await db
        .delete(projects)
        .where(eq(projects.id, firstProject[0].id))
        .returning();
      console.log("✓ Project deleted successfully");
    } else {
      console.log("No projects found");
    }

    console.log("\n✓ All deletions completed!");
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

deleteFirstItems();
