import { db, blogPosts } from "@/lib/db"; // Import blogPosts table
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { BlogPost } from "@/lib/types"; // Import BlogPost type from lib/types
import { formatDate } from "@/lib/utils"; // Assuming formatDate is in utils
import { Play, Shield } from "lucide-react";

export default async function BlogPage() {
  // Use the imported BlogPost type
  const posts: BlogPost[] = await db.select().from(blogPosts).orderBy(blogPosts.createdAt);

  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
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

      {/* Featured Video Section */}
      <section className="w-full py-12 md:py-16 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Featured Video
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Understanding MCP Servers and Security Risks 🔒
            </h2>
            <p className="max-w-[700px] text-muted-foreground">
              Learn about Model Context Protocol (MCP) servers and the security considerations every developer should know.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
              <video 
                controls 
                poster="/thumbnail-image.jpg"
                className="w-full aspect-video"
                preload="metadata"
              >
                <source src="/mcp-security-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4 sm:p-6 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">MCP Security Deep Dive</p>
                    <p className="text-sm text-muted-foreground">Cybersecurity Educational Content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Latest Articles</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => ( // Type is inferred correctly now
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary/50">
                  {post.coverImage && ( // Use coverImage instead of imageUrl
                    <Image
                      src={post.coverImage} // Use coverImage
                      alt={post.title}
                      width={400}
                      height={225}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
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
