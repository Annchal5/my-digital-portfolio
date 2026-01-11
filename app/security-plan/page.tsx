import { Lock, Key, FileText, Shield, CheckCircle, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function SecurityPlanPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Digital Portfolio Security Plan
              </h1>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Comprehensive security baseline and upcoming security controls for Anchal's AI Protector-hardened portfolio
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-10"></div>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </section>

      {/* Current Status */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Status</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Current Security Baseline</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Implemented security controls and protections currently in place
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            <Card className="bg-background border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <CardTitle>✅ HTTPS Encryption</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Status:</strong> Active</p>
                <p><strong>Implementation:</strong> Vercel automatic SSL/TLS</p>
                <p><strong>Certificate:</strong> Let's Encrypt (auto-renewed)</p>
                <p><strong>Protocol:</strong> TLS 1.3+</p>
                <p className="mt-3"><strong>Benefit:</strong> All data in transit encrypted end-to-end</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <CardTitle>✅ Environment Variables</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Status:</strong> Configured</p>
                <p><strong>Storage:</strong> Vercel secure environment variables</p>
                <p><strong>Secrets:</strong> No hardcoded keys in source code</p>
                <p><strong>Access:</strong> Restricted to authorized deployments</p>
                <p className="mt-3"><strong>Variables Protected:</strong> DATABASE_URL, CLERK credentials, API keys</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <CardTitle>✅ Clerk Authentication</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Status:</strong> Integrated & Ready</p>
                <p><strong>Provider:</strong> Clerk.com managed authentication</p>
                <p><strong>Features:</strong> OAuth 2.0, Session management, Role-based access</p>
                <p><strong>Protected Routes:</strong> /admin, /db-test (with role checks)</p>
                <p className="mt-3"><strong>Benefit:</strong> Zero-trust authentication model</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <CardTitle>✅ Database Security</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Status:</strong> Production-Grade</p>
                <p><strong>Provider:</strong> Neon serverless PostgreSQL</p>
                <p><strong>Encryption:</strong> In-transit (SSL/TLS) + at-rest</p>
                <p><strong>Access:</strong> Connection strings via environment variables</p>
                <p className="mt-3"><strong>Benefit:</strong> No direct SQL exposed in code</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Controls */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Roadmap</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Upcoming Security Controls</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Enhanced security features planned for implementation
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Authentication Readiness */}
            <div className="bg-muted/40 border border-primary/20 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Lock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">🔐 Authentication Readiness</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <p className="font-semibold text-white mb-1">Current Implementation</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Clerk authentication integrated and deployed</li>
                        <li>Session management with secure tokens</li>
                        <li>Role-based access control (admin, user)</li>
                        <li>Protected routes with middleware verification</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Upcoming Enhancements</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Multi-Factor Authentication (MFA):</strong> Enable 2FA/TOTP for admin accounts</li>
                        <li><strong>Biometric Authentication:</strong> Support WebAuthn/passkey login</li>
                        <li><strong>Session Timeout:</strong> Implement idle session termination (15 minutes for admin)</li>
                        <li><strong>Login Monitoring:</strong> Track failed login attempts and alert on suspicious activity</li>
                        <li><strong>OAuth 2.1 Compliance:</strong> Update to latest OAuth 2.1 standards (PKCE)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secrets Handling */}
            <div className="bg-muted/40 border border-primary/20 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Key className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">🔑 Secrets Handling</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <p className="font-semibold text-white mb-1">Current Implementation</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>All secrets stored in Vercel environment variables</li>
                        <li>No hardcoded credentials in source code</li>
                        <li>.env files excluded from git (.gitignore)</li>
                        <li>Clerk API keys securely managed</li>
                        <li>Database connection strings encrypted at rest</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Upcoming Enhancements</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Secrets Rotation:</strong> Implement automatic key rotation every 90 days</li>
                        <li><strong>Vault Integration:</strong> Integrate HashiCorp Vault for advanced secret management</li>
                        <li><strong>Access Audit Trail:</strong> Log all secret access with timestamps and requester info</li>
                        <li><strong>Secret Scanning:</strong> Implement pre-commit hooks to prevent secret leaks</li>
                        <li><strong>Environment Parity:</strong> Maintain separate credentials for dev/staging/production</li>
                        <li><strong>API Key Scoping:</strong> Restrict API keys to specific endpoints and IP ranges</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Logging & Monitoring */}
            <div className="bg-muted/40 border border-primary/20 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <FileText className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">📜 Logging & Audit Trails</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <p className="font-semibold text-white mb-1">Current Implementation</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Vercel deployment logs and build artifacts</li>
                        <li>PostgreSQL query logging (basic)</li>
                        <li>Console logging for errors and warnings</li>
                        <li>Clerk authentication event logs</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Upcoming Enhancements</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Centralized Logging:</strong> Integrate with ELK Stack or Datadog</li>
                        <li><strong>Audit Logs Table:</strong> Create PostgreSQL audit_logs table for all user actions</li>
                        <li><strong>Login Tracking:</strong> Log all authentication attempts (success/failure)</li>
                        <li><strong>Admin Action Logging:</strong> Track all admin operations with user ID, timestamp, action</li>
                        <li><strong>Database Query Logging:</strong> Extended PostgreSQL logging with statement details</li>
                        <li><strong>Real-time Alerts:</strong> Alert on suspicious patterns (multiple failed logins, etc.)</li>
                        <li><strong>Log Retention:</strong> 90-day retention with encrypted backup to S3</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secure Deployment */}
            <div className="bg-muted/40 border border-primary/20 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">🛡️ Secure Deployment</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <p className="font-semibold text-white mb-1">Current Implementation</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>HTTPS/TLS 1.3+ encryption for all traffic</li>
                        <li>Vercel edge network for DDoS protection</li>
                        <li>Automatic certificate management (Let's Encrypt)</li>
                        <li>Secure headers configured (CSP, X-Frame-Options, etc.)</li>
                        <li>CORS policies configured for API endpoints</li>
                        <li>Rate limiting on authentication endpoints</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Upcoming Enhancements</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Web Application Firewall (WAF):</strong> Deploy Vercel WAF rules against OWASP Top 10</li>
                        <li><strong>Arcjet Protection:</strong> Add Arcjet for advanced bot detection and rate limiting</li>
                        <li><strong>Content Security Policy:</strong> Implement strict CSP headers</li>
                        <li><strong>HSTS:</strong> Enable HTTP Strict Transport Security (1 year validity)</li>
                        <li><strong>Security Headers:</strong> Add X-Content-Type-Options, Referrer-Policy, etc.</li>
                        <li><strong>API Key Rotation:</strong> Automatic rotation of deployment keys</li>
                        <li><strong>Threat Monitoring:</strong> Integration with Vercel Security Dashboard</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Best Practices */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Guidelines</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Security Best Practices</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Principles guiding all security decisions
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Defense in Depth</p>
                  <p className="text-sm text-muted-foreground">Multiple layers of security controls working together</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Least Privilege</p>
                  <p className="text-sm text-muted-foreground">Users and services have minimum required permissions</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Zero Trust</p>
                  <p className="text-sm text-muted-foreground">Never trust, always verify all access requests</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Encryption Everywhere</p>
                  <p className="text-sm text-muted-foreground">Data encrypted in transit and at rest</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Audit Everything</p>
                  <p className="text-sm text-muted-foreground">Log all critical actions for review and investigation</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Secure by Default</p>
                  <p className="text-sm text-muted-foreground">Security features enabled by default, not opt-in</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Regular Updates</p>
                  <p className="text-sm text-muted-foreground">Keep dependencies and systems patched and current</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Incident Response Ready</p>
                  <p className="text-sm text-muted-foreground">Plan and prepare for security incidents before they occur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 max-w-[800px]">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Next Steps</h2>
              <p className="text-muted-foreground">Continuous security improvement:</p>
            </div>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Security Hardening Ongoing</AlertTitle>
              <AlertDescription>
                Continuous enhancements to authentication, secrets handling, logging, and deployment security are planned and in progress.
              </AlertDescription>
            </Alert>

            <div className="space-y-3">
              <h3 className="font-semibold text-white">Priority Areas:</h3>
              <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                <li>Enable MFA for all admin users</li>
                <li>Implement advanced rate limiting and bot detection</li>
                <li>Deploy WAF rules for application protection</li>
                <li>Set up centralized logging and monitoring</li>
                <li>Create comprehensive audit logging for all sensitive operations</li>
              </ol>
            </div>

            <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
              <p className="font-semibold text-white mb-2">Security Leadership:</p>
              <p className="text-sm text-muted-foreground">
                Anchal - AI Protector & Cybersecurity Professional
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Implementing shift-left security practices and layered defense strategies based on AI Protector Workshop expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
