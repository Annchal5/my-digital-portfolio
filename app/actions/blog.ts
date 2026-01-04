"use server";

import { db, blogPosts } from "@/lib/db";
import { eq } from "drizzle-orm";

export type BlogPostInput = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  author: string;
  readTime?: string;
};

export type BlogPostResult = {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
};

// Create a new blog post
export async function createBlogPost(post: BlogPostInput): Promise<BlogPostResult> {
  try {
    const result = await db
      .insert(blogPosts)
      .values({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        coverImage: post.coverImage,
        author: post.author,
        readTime: post.readTime,
      })
      .returning();

    return {
      success: true,
      message: "Blog post created successfully",
      data: result[0],
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to create blog post",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

// Get all blog posts
export async function getAllBlogPosts() {
  try {
    const posts = await db.select().from(blogPosts).orderBy(blogPosts.createdAt);
    return {
      success: true,
      data: posts,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

// Get a single blog post by slug
export async function getBlogPostBySlug(slug: string) {
  try {
    const post = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.slug, slug));

    if (post.length === 0) {
      return {
        success: false,
        error: "Blog post not found",
      };
    }

    return {
      success: true,
      data: post[0],
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

// Update a blog post
export async function updateBlogPost(
  id: number,
  post: Partial<BlogPostInput>
): Promise<BlogPostResult> {
  try {
    const result = await db
      .update(blogPosts)
      .set(post)
      .where(eq(blogPosts.id, id))
      .returning();

    return {
      success: true,
      message: "Blog post updated successfully",
      data: result[0],
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to update blog post",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

// Delete a blog post
export async function deleteBlogPost(id: number): Promise<BlogPostResult> {
  try {
    const result = await db
      .delete(blogPosts)
      .where(eq(blogPosts.id, id))
      .returning();

    return {
      success: true,
      message: "Blog post deleted successfully",
      data: result[0],
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to delete blog post",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
