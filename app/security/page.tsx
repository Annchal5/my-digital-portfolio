import { Shield, Lock, Key, Database, Users, CheckCircle, AlertTriangle, Server, FileCode, Mail } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function SecurityPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[hsl(218,50%,8%)] relative overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
              <Shield className="h-4 w-4" />
              <span>Security Documentation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Security Plan
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-[700px] leading-relaxed">
              Comprehensive overview of authentication, secrets management, and security practices 
              implemented in this portfolio application.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px] sm:bg-[size:50px_50px] opacity-10"></div>
      </section>

      {/* Security Stack Overview */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 sm:mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Overview
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Security Stack
            </h2>
            <p className="max-w-[700px] text-muted-foreground text-base sm:text-lg">
              Modern security technologies protecting this application.
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            <Card className="bg-card border-border text-center">
              <CardHeader className="pb-2">
                <div className="bg-primary/10 p-4 rounded-lg w-fit mx-auto mb-2">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Clerk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Authentication & Identity Management</p>
                <Badge variant="secondary" className="mt-2">SOC 2 Compliant</Badge>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardHeader className="pb-2">
                <div className="bg-primary/10 p-4 rounded-lg w-fit mx-auto mb-2">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Neon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Serverless PostgreSQL with SSL</p>
                <Badge variant="secondary" className="mt-2">Encrypted</Badge>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardHeader className="pb-2">
                <div className="bg-primary/10 p-4 rounded-lg w-fit mx-auto mb-2">
                  <Server className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Next.js</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Server Components & Middleware</p>
                <Badge variant="secondary" className="mt-2">Edge Protected</Badge>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardHeader className="pb-2">
                <div className="bg-primary/10 p-4 rounded-lg w-fit mx-auto mb-2">
                  <FileCode className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Drizzle ORM</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Type-safe Database Queries</p>
                <Badge variant="secondary" className="mt-2">SQL Injection Safe</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Authentication Flow */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-secondary/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 sm:mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Authentication
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              How Login Works
            </h2>
            <p className="max-w-[700px] text-muted-foreground text-base sm:text-lg">
              Secure authentication flow from user action to database sync.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold">User Clicks Sign In</h4>
                      <p className="text-sm text-muted-foreground">User initiates authentication via Clerk UI component</p>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary/30 ml-4 h-6"></div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold">Clerk Handles Authentication</h4>
                      <p className="text-sm text-muted-foreground">OAuth (Google, GitHub) or email/password verification</p>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary/30 ml-4 h-6"></div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold">JWT Token Issued</h4>
                      <p className="text-sm text-muted-foreground">Secure token stored in HTTP-only cookie</p>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary/30 ml-4 h-6"></div>

                  {/* Step 4 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold">Middleware Validates Token</h4>
                      <p className="text-sm text-muted-foreground">Next.js middleware checks authentication on each request</p>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary/30 ml-4 h-6"></div>

                  {/* Step 5 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">5</div>
                    <div>
                      <h4 className="font-semibold">User Synced to Database</h4>
                      <p className="text-sm text-muted-foreground">syncUser() creates/updates user record with role info</p>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary/30 ml-4 h-6"></div>

                  {/* Step 6 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">6</div>
                    <div>
                      <h4 className="font-semibold">Access Granted</h4>
                      <p className="text-sm text-muted-foreground">User can access resources based on their role (user/admin)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Protected Routes */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 sm:mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Route Protection
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Protected vs Public Routes
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-red-500" />
                  <CardTitle className="text-lg">Protected Routes</CardTitle>
                </div>
                <CardDescription>Require authentication</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Badge variant="destructive" className="text-xs">AUTH</Badge>
                    <code className="bg-muted px-2 py-1 rounded">/admin/*</code>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="destructive" className="text-xs">AUTH</Badge>
                    <code className="bg-muted px-2 py-1 rounded">/resources/*</code>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="destructive" className="text-xs">AUTH</Badge>
                    <code className="bg-muted px-2 py-1 rounded">/projects/*</code>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <CardTitle className="text-lg">Public Routes</CardTitle>
                </div>
                <CardDescription>Accessible to everyone</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">PUBLIC</Badge>
                    <code className="bg-muted px-2 py-1 rounded">/</code>
                    <span className="text-muted-foreground">Home</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">PUBLIC</Badge>
                    <code className="bg-muted px-2 py-1 rounded">/about</code>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">PUBLIC</Badge>
                    <code className="bg-muted px-2 py-1 rounded">/blog</code>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">PUBLIC</Badge>
                    <code className="bg-muted px-2 py-1 rounded">/security</code>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Secrets Management */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-secondary/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 sm:mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Secrets
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Secrets Management
            </h2>
            <p className="max-w-[700px] text-muted-foreground text-base sm:text-lg">
              How sensitive credentials are handled securely.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Critical Secrets */}
            <Card className="bg-card border-red-500/50">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <CardTitle className="text-lg text-red-500">Critical Secrets</CardTitle>
                </div>
                <CardDescription>Never expose these - server-side only</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-red-500/10 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Key className="h-4 w-4 text-red-500" />
                      <code className="text-sm">CLERK_SECRET_KEY</code>
                    </div>
                    <Badge variant="destructive">CRITICAL</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-500/10 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Database className="h-4 w-4 text-red-500" />
                      <code className="text-sm">DATABASE_URL</code>
                    </div>
                    <Badge variant="destructive">CRITICAL</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-500/10 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Lock className="h-4 w-4 text-red-500" />
                      <code className="text-sm">PGPASSWORD</code>
                    </div>
                    <Badge variant="destructive">CRITICAL</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Public Variables */}
            <Card className="bg-card border-green-500/50">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <CardTitle className="text-lg text-green-500">Public Variables</CardTitle>
                </div>
                <CardDescription>Safe for client-side exposure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg">
                    <code className="text-sm">NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code>
                    <Badge className="bg-green-500">SAFE</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg">
                    <code className="text-sm">NEXT_PUBLIC_CLERK_SIGN_IN_URL</code>
                    <Badge className="bg-green-500">SAFE</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg">
                    <code className="text-sm">NEXT_PUBLIC_CLERK_SIGN_UP_URL</code>
                    <Badge className="bg-green-500">SAFE</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RBAC */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 sm:mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Access Control
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Role-Based Access Control
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <CardTitle className="text-lg">User Role</CardTitle>
                </div>
                <CardDescription>Default role for all users</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    View public pages
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Read blog posts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Subscribe to newsletter
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Admin Role</CardTitle>
                </div>
                <CardDescription>Full access privileges</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    All user permissions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Access admin dashboard
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Create/Edit/Delete content
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Manage user roles
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    View subscriber list
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto mt-8">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> The first user to sign up automatically becomes an admin 
                  to ensure initial access to the admin panel.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Best Practices */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-secondary/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 sm:mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Best Practices
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Security Features Implemented
            </h2>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              { title: "SSL/TLS Encryption", desc: "All database connections encrypted" },
              { title: "HTTP-only Cookies", desc: "Session tokens protected from XSS" },
              { title: "Parameterized Queries", desc: "SQL injection prevention via ORM" },
              { title: "Server-side Validation", desc: "All auth checks on server" },
              { title: "Automatic Token Refresh", desc: "Session management by Clerk" },
              { title: "Rate Limiting", desc: "Bot protection via Clerk" },
              { title: "Password-less Auth", desc: "Passwords handled by Clerk only" },
              { title: "MFA Support", desc: "Multi-factor authentication available" },
              { title: "Audit Logging", desc: "Track auth events in Clerk dashboard" },
            ].map((item, i) => (
              <Card key={i} className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-[hsl(218,50%,8%)]">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
              Security Questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              For security concerns or to report vulnerabilities, please contact:
            </p>
            <a 
              href="mailto:anchal1234asr@gmail.com"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <Mail className="h-5 w-5" />
              anchal1234asr@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
