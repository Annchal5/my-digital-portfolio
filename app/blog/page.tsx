import { db, blogPosts } from "@/lib/db"; // Import blogPosts table
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { BlogPost } from "@/lib/types"; // Import BlogPost type from lib/types
import { formatDate } from "@/lib/utils"; // Assuming formatDate is in utils

export default async function BlogPage() {
  // Use the imported BlogPost type
  const posts: BlogPost[] = await db.select().from(blogPosts).orderBy(blogPosts.createdAt);

  return (
    <div className="flex flex-col">
      <section className="w-full py-8 md:py-16 lg:py-20 bg-black relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-3 text-center">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Cybersecurity Blog</h1>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Insights, tips, and best practices to help you stay secure in an ever-evolving threat landscape.
              </p>
            </div>
          </div>
        </div>
        {/* Animated background */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-10"></div>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </section>

      <section className="w-full py-8 md:py-16 lg:py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => ( // Type is inferred correctly now
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <Card className="overflow-hidden h-full transition-all duration-200 group-hover:border-primary/50 group-hover:shadow-md">
                  {post.coverImage && ( // Use coverImage instead of imageUrl
                    <div className="overflow-hidden">
                      <Image
                        src={post.coverImage} // Use coverImage
                        alt={post.title}
                        width={400}
                        height={225}
                        className="w-full h-48 object-cover transition-all duration-200 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    {/* Excerpt is not nullable in the schema, so no need for null check */}
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    {/* Ensure formatDate handles Date | null if createdAt can be null */}
                    <p className="text-sm text-muted-foreground">{post.createdAt ? formatDate(post.createdAt) : 'Date unavailable'}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
