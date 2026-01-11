import Link from "next/link"
import Image from "next/image"
import { Shield, Lock, Server, Database, AlertTriangle, FileCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NewsletterForm } from "@/components/newsletter-form"
import { db, blogPosts } from "@/lib/db"
import { formatDate } from "@/lib/utils"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default async function Home() {
  // Fetch the latest 3 blog posts with error handling
  let latestPosts: { id: string; slug: string; title: string; excerpt: string; coverImage?: string; createdAt: string }[] = []
  let dbError = false

  try {
    latestPosts = (await db.select().from(blogPosts).orderBy(blogPosts.createdAt).limit(3)).map(post => ({
      id: post.id.toString(),
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      coverImage: post.coverImage || undefined,
      createdAt: post.createdAt ? post.createdAt.toISOString() : ""
    }))
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    dbError = true
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section - Paperfolio Style: Bold Typography & Minimal Design */}
      <section className="w-full py-16 md:py-32 lg:py-40 bg-background relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main Heading - Large & Bold */}
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight">
                I&apos;m{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-blue-500 via-primary to-purple-600 bg-clip-text text-transparent">
                    Anchal
                  </span>
                  <span className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-primary/20 to-purple-600/20 blur-lg -z-10"></span>
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-light text-muted-foreground max-w-2xl">
                Cybersecurity Professional & AI Protector
              </p>
            </div>

            {/* Subheading with accent */}
            <div className="space-y-4 animate-fade-in-delay-1 max-w-2xl">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I&apos;m a cybersecurity graduate with 2+ years of consulting experience at KPMG. I specialize in securing AI agents, MCP servers, penetration testing, and enterprise security operations. Currently completing my Master&apos;s at APIC Melbourne.
              </p>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            </div>

            {/* CTA Buttons - Minimal Style */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-delay-2">
              <Link href="/cv" className="group">
                <Button size="lg" className="bg-black hover:bg-gray-900 text-white border border-white/20 hover:border-primary/50 w-full sm:w-auto transition-all duration-300">
                  <span>View My CV</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </Link>
              <Link href="/projects" className="group">
                <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/5 w-full sm:w-auto transition-all duration-300">
                  <span>Explore Work</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Subtle background accent */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-600/10 to-blue-500/10 rounded-full blur-3xl opacity-30"></div>
      </section>

      {/* Database Error Alert */}
      {dbError && (
        <div className="container px-4 md:px-6 py-6">
          <Alert variant="destructive">
            <AlertTitle>Database Error</AlertTitle>
            <AlertDescription>
              There was an error connecting to the database. Please try refreshing the page or contact support if the
              issue persists.
            </AlertDescription>
          </Alert>
        </div>
      )}

      {/* Services Section - Paperfolio Style */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Section Header */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                What I Offer
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            </div>

            {/* Services Grid - 3 Column */}
            <div className="grid gap-8 md:grid-cols-3">
              {/* Penetration Testing */}
              <div className="space-y-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold">Penetration Testing</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Identify vulnerabilities before attackers do with comprehensive testing across web applications, networks, and mobile platforms.
                </p>
              </div>

              {/* Security Audits */}
              <div className="space-y-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold">Security Audits</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Comprehensive assessment of your security posture against industry standards with compliance and cloud security reviews.
                </p>
              </div>

              {/* Security Training */}
              <div className="space-y-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FileCode className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold">Security Training</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Empower your team with security awareness training, phishing simulations, and incident response readiness.
                </p>
              </div>
            </div>

            <Link href="/projects" className="inline-block pt-4">
              <Button className="border border-primary/50 hover:bg-primary/5 bg-transparent text-foreground">
                <span>View All Services</span>
                <span className="ml-2">→</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section - Paperfolio Style */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Section Header */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Experience
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                2+ years of consulting experience at KPMG supporting enterprise clients across SOC operations, incident response, and emerging AI security threats.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid gap-6 md:grid-cols-3 py-8">
              <div className="border-l-2 border-primary/50 pl-4 space-y-2">
                <p className="text-sm font-medium text-primary">2+ Years</p>
                <p className="text-muted-foreground">Cybersecurity Consulting at KPMG</p>
              </div>
              <div className="border-l-2 border-primary/50 pl-4 space-y-2">
                <p className="text-sm font-medium text-primary">Master&apos;s in Progress</p>
                <p className="text-muted-foreground">Information Technology (Cybersecurity)</p>
              </div>
              <div className="border-l-2 border-primary/50 pl-4 space-y-2">
                <p className="text-sm font-medium text-primary">4+ Certifications</p>
                <p className="text-muted-foreground">SC-900, DLP 9.0, Oracle Cloud, AI Protector</p>
              </div>
            </div>

            <Link href="/cv" className="inline-block">
              <Button className="border border-primary/50 hover:bg-primary/5 bg-transparent text-foreground">
                <span>View Full CV</span>
                <span className="ml-2">→</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Protector Specialization Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Section Header */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                AI Protector Specialization
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                10-week immersive program mastering secure AI development, MCP security architecture, and offensive security testing.
              </p>
            </div>

            {/* Three Focus Areas */}
            <div className="grid gap-8 md:grid-cols-3 py-8">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg">Secure AI Development</h3>
                <p className="text-sm text-muted-foreground">Shift-left security, secure SDLC, hardened AI agents</p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg">MCP Security</h3>
                <p className="text-sm text-muted-foreground">OAuth 2.1, server hardening, edge security</p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg">Offensive Skills</h3>
                <p className="text-sm text-muted-foreground">Penetration testing, Kali Linux, vulnerability assessment</p>
              </div>
            </div>

            <Link href="/about" className="inline-block">
              <Button className="border border-primary/50 hover:bg-primary/5 bg-transparent text-foreground">
                <span>Learn About AI Protector</span>
                <span className="ml-2">→</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Section Header */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Latest Insights
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <p className="text-lg text-muted-foreground">
                Articles on cybersecurity trends, AI security, and best practices.
              </p>
            </div>

            {/* Blog Posts Grid */}
            {dbError ? (
              <div className="py-8 text-center">
                <p className="text-muted-foreground">Unable to load articles. Please try again later.</p>
              </div>
            ) : (
              <>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-8">
                  {latestPosts.map((post, index) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                      <div className="space-y-3 h-full">
                        <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                          <Image
                            src={post.coverImage || "/placeholder.svg?height=400&width=600&query=cybersecurity"}
                            width={600}
                            height={400}
                            alt={post.title}
                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {post.excerpt}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {formatDate(post.createdAt)}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <Link href="/blog" className="inline-block">
                  <Button className="border border-primary/50 hover:bg-primary/5 bg-transparent text-foreground">
                    <span>Read All Articles</span>
                    <span className="ml-2">→</span>
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Stay Updated
              </h2>
              <p className="text-lg text-muted-foreground">
                Get the latest cybersecurity insights and AI security best practices delivered to your inbox.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  )
}
