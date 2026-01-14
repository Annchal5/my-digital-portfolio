import Link from "next/link"
import Image from "next/image"
import { Shield, Lock, Server, Database, AlertTriangle, FileCode, MapPin, Linkedin, Mail, Download, CheckCircle, Award, ExternalLink } from "lucide-react"
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
    <>
      <div className="flex flex-col">
        {/* Hero Section - Responsive Mobile-First */}
        <section className="w-full min-h-[90vh] lg:min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-[hsl(218,50%,8%)] relative overflow-hidden flex items-center">
          <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
              {/* Text Content - Center on mobile, left on desktop */}
              <div className="flex flex-col justify-center space-y-6 text-center lg:text-left order-2 lg:order-1">
                <div className="space-y-4">
                  {/* Location badge removed per user request */}
                
                {/* Name - Responsive Typography */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white">
                  Hi, I&apos;m{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                    Anchal
                  </span>
                </h1>
                
                {/* Title */}
                <p className="text-lg sm:text-xl md:text-2xl font-medium text-primary">
                  Master of IT (Cybersecurity) — Former KPMG Cybersecurity Analyst
                </p>
                
                {/* Tagline */}
                <p className="max-w-[600px] text-base sm:text-lg text-muted-foreground mx-auto lg:mx-0 leading-relaxed">
                  Passionate about securing digital assets and protecting organizations from evolving cyber threats. 
                  Specialized in SOC operations, SIEM, DLP, and vulnerability management.
                </p>
              </div>
              
              {/* CTA Buttons - Thumb-friendly on mobile */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link href="/projects" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto min-h-[48px] text-base px-6">
                    View My Work
                  </Button>
                </Link>
                <Link href="/about" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto min-h-[48px] text-base px-6">
                    About Me
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/40 mt-4">
                <div className="text-center lg:text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-white">2+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-white">KPMG</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Big 4 Consulting</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-white">5+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Certifications</p>
                </div>
              </div>
            </div>
            
            {/* Profile Visual - Stack on mobile */}
            <div className="flex items-center justify-center order-1 lg:order-2">
              <div className="relative">
                {/* Animated glow background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-blue-500/40 rounded-full blur-3xl opacity-50 animate-pulse scale-110"></div>
                
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-[1.15] animate-pulse"></div>
                <div className="absolute inset-0 rounded-full border border-blue-500/10 scale-[1.25]"></div>
                
                {/* Profile Photo */}
                <div className="relative">
                  <Image
                    src="/Anchal pic_Professional.png"
                    alt="Anchal - Cybersecurity Professional"
                    width={350}
                    height={350}
                    className="relative rounded-full border-4 border-primary/40 shadow-2xl object-cover w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[350px] lg:h-[350px]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Professional & Consulting Skills */}
          <div className="mt-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-3">
                  <FileCode className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Professional & Consulting Skills</CardTitle>
                <CardDescription>Consulting, leadership, clear communication, and strong organizational capability</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-muted-foreground">
                  <li>• Consulting</li>
                  <li>• Strategic planning & execution</li>
                  <li>• Leadership & team management</li>
                  <li>• Creative problem solving</li>
                  <li>• Documentation & content writing</li>
                  <li>• Proposal and report writing</li>
                  <li>• Technical & executive communication</li>
                  <li>• Collaborative teamwork</li>
                  <li>• Meticulous attention to detail</li>
                  <li>• Excellent organizational skills</li>
                  <li>• Calm and poised under pressure</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px] sm:bg-[size:50px_50px] opacity-10"></div>
      </section>

      {/* Database Error Alert */}
      {dbError && (
        <div className="container px-4 sm:px-6 py-6">
          <Alert variant="destructive">
            <AlertTitle>Database Error</AlertTitle>
            <AlertDescription>
              There was an error connecting to the database. Please try refreshing the page.
            </AlertDescription>
          </Alert>
        </div>
      )}

      {/* About Preview Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                About Me
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Cybersecurity Professional with Big 4 Consulting Experience
              </h2>
              <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-prose">
                <p>
                  With <strong className="text-foreground">2+ years of cybersecurity consulting experience at KPMG India</strong>, 
                  I bring industry-leading security expertise to every engagement.
                </p>
                <ul className="space-y-2 pl-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>SOC operations & SIEM alert monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>DLP policy optimization & incident response</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>Vulnerability management & remediation</span>
                  </li>
                </ul>
                <p>
                  Currently pursuing <strong className="text-foreground">Master of IT (Cybersecurity)</strong> in Australia, 
                  combining academic excellence with hands-on industry experience.
                </p>
              </div>
              <Link href="/about">
                <Button variant="outline" size="lg" className="min-h-[48px]">
                  Learn More About Me
                </Button>
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[450px]">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl blur-2xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
                  <Image
                    src="/digital-fortress.png"
                    alt="Digital Security Fortress"
                    width={450}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Responsive Grid */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 sm:mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Skills
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Technical Expertise
            </h2>
            <p className="max-w-[700px] text-muted-foreground text-base sm:text-lg">
              Comprehensive cybersecurity skills developed through enterprise consulting and academic study.
            </p>
          </div>

          {/* Responsive Skills Grid: 1 col mobile, 2 col tablet, 4 col desktop */}
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Cybersecurity & Risk */}
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader className="pb-3">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-3">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Cybersecurity & Risk</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• SOC Operations</li>
                  <li>• Incident Response</li>
                  <li>• Risk Assessment</li>
                  <li>• Security Audits</li>
                  <li>• Compliance (ISO 27001)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Tools & Platforms */}
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader className="pb-3">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-3">
                  <Server className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Tools & Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Splunk SIEM</li>
                  <li>• Forcepoint DLP</li>
                  <li>• CrowdStrike</li>
                  <li>• ServiceNow</li>
                  <li>• Qualys</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cloud & Network Security */}
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader className="pb-3">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-3">
                  <Database className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Cloud & Network</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Azure Security</li>
                  <li>• AWS Fundamentals</li>
                  <li>• Network Security</li>
                  <li>• Firewall Config</li>
                  <li>• VPN Management</li>
                </ul>
              </CardContent>
            </Card>

            {/* Programming */}
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader className="pb-3">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-3">
                  <FileCode className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Programming</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Python</li>
                  <li>• Bash Scripting</li>
                  <li>• PowerShell</li>
                  <li>• SQL</li>
                  <li>• Git Version Control</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          {/* View More Skills Button */}
          <div className="flex justify-center mt-8">
            <Link href="/about#skills">
              <Button variant="outline" size="lg" className="min-h-[48px] gap-2">
                View More Skills
                <ExternalLink className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section className="w-full py-12 sm:py-16 bg-background overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
            <p className="text-sm text-primary font-medium uppercase tracking-wider">Real-World Cybersecurity</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative group overflow-hidden rounded-xl aspect-[4/3]">
              <Image
                src="/digital-shield.png"
                alt="Digital Shield Protection"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-medium text-sm">Digital Protection</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl aspect-[4/3]">
              <Image
                src="/secure-cloud-network.png"
                alt="Secure Cloud Network"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-medium text-sm">Cloud Security</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl aspect-[4/3]">
              <Image
                src="/cyber-guardian.png"
                alt="Cyber Guardian"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-medium text-sm">Threat Monitoring</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl aspect-[4/3]">
              <Image
                src="/interconnected-threat-analysis.png"
                alt="Threat Analysis"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-medium text-sm">Threat Analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Responsive */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 sm:mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Experience
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Professional Background
            </h2>
          </div>

          {/* Experience Card */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border overflow-hidden">
              <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr]">
                {/* Company Info - Side panel on desktop, top on mobile */}
                <div className="bg-primary/5 p-6 flex flex-col justify-center items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-border">
                  <div className="w-16 h-16 rounded-xl bg-[#00338D] flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-white font-bold text-lg">KPMG</span>
                  </div>
                  <h3 className="text-xl font-bold">KPMG India</h3>
                  <p className="text-primary font-medium">Cybersecurity Analyst</p>
                  <p className="text-sm text-muted-foreground mt-2">2+ Years</p>
                  <p className="text-sm text-muted-foreground">Gurugram, India</p>
                </div>

                {/* Responsibilities */}
                <div className="p-6 space-y-4">
                  <h4 className="font-semibold text-lg">Key Achievements</h4>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Monitored <strong className="text-foreground">1,000+ security alerts</strong> via SIEM, identifying phishing, malware & insider threats</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Managed end-to-end DLP operations, reducing false positives by <strong className="text-foreground">~40%</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Conducted vulnerability scanning & remediation of <strong className="text-foreground">100+ vulnerabilities</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Led <strong className="text-foreground">PhonePe (Fintech)</strong> client engagement - policy creation & incident management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Authored <strong className="text-foreground">25+ SOPs</strong> & technical documentation for global operations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* View More Experience Button */}
            <div className="flex justify-center mt-8">
              <Link href="/about#experience">
                <Button variant="outline" size="lg" className="min-h-[48px] gap-2">
                  View More Experience
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Responsive Cards */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 sm:mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Projects
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Security Case Studies
            </h2>
            <p className="max-w-[700px] text-muted-foreground text-base sm:text-lg">
              Real-world security projects demonstrating practical expertise.
            </p>
          </div>

          {/* Responsive Project Grid */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-card border-border hover:border-primary/50 transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-3">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>SOC Monitoring Optimization</CardTitle>
                <CardDescription>Enterprise Security Operations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-1">Problem</p>
                  <p className="text-sm text-muted-foreground">High volume of false positive alerts causing alert fatigue</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Tools Used</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Splunk</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">SOAR</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Python</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Outcome</p>
                  <p className="text-sm text-muted-foreground">Reduced false positives by 40%, improved response time</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-3">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>DLP Policy Framework</CardTitle>
                <CardDescription>Data Loss Prevention</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-1">Problem</p>
                  <p className="text-sm text-muted-foreground">Inconsistent data protection across enterprise endpoints</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Tools Used</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Forcepoint</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Regex</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Policy Engine</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Outcome</p>
                  <p className="text-sm text-muted-foreground">Unified DLP coverage, 99.5% sensitive data protection</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-3">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Vulnerability Management</CardTitle>
                <CardDescription>Risk Remediation Program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-1">Problem</p>
                  <p className="text-sm text-muted-foreground">Large backlog of unpatched critical vulnerabilities</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Tools Used</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Qualys</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">ServiceNow</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">CVSS</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Outcome</p>
                  <p className="text-sm text-muted-foreground">200+ critical vulnerabilities remediated in 90 days</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/projects">
              <Button variant="outline" size="lg" className="min-h-[48px]">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications Section - Responsive Badges */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 sm:mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              🏆Recognition & Programs
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              {/* Recognition & Programs section heading */}
            </h2>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto mt-6">
              {/* Grad Girls Program - Victoria Government */}
              <div className="flex items-center gap-4 bg-card/10 border border-border/50 rounded-lg p-4">
                <div>
                  <div className="font-semibold text-primary">Grad Girls Program - Victoria Government</div>
                  <div className="text-sm text-muted-foreground">Selected participant in a competitive, government-backed initiative focused on career readiness, mentoring, and leadership pathways for women in technology.</div>
                </div>
              </div>
              {/* Women in Technology - IT’s Her Future Insights Program by KPMG Australia */}
              <div className="flex items-center gap-4 bg-card/10 border border-border/50 rounded-lg p-4">
                <div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold text-primary">Women in Technology - IT’s Her Future Insights Program - KPMG Australia:</span> Chosen for KPMG’s national program focused on women in tech leadership, innovation, and AI. Engaged in hands-on consulting, developed real client solutions, and networked with industry mentors over an intensive two-day experience.
                  </div>
                </div>
              </div>
          </div>
          {/* LinkedIn button removed as requested */}
        </div>
      </section>

      {/* Contact Section - Responsive Form */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[hsl(218,50%,8%)]">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Contact
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                Get In Touch
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-[600px] mx-auto">
                Interested in discussing cybersecurity opportunities? I&apos;d love to hear from you.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-card/10 border border-border/50 rounded-lg p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-white">Contact Information</h3>
                  
                  <a 
                    href="mailto:anchal@example.com" 
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <span>anchal1234asr@gmail.com</span>
                  </a>
                  
                  <Link 
                    href="https://www.linkedin.com/in/annchal-634291178/"
                    target="_blank"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <span>LinkedIn Profile</span>
                  </Link>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <span>Melbourne, Australia</span>
                  </div>
                </div>

                <a href="/Anchal_Resume.pdf" download="Anchal_Resume.pdf" className="block">
                  <Button variant="outline" size="lg" className="w-full min-h-[48px] gap-2">
                    <Download className="h-5 w-5" />
                    Download Resume
                  </Button>
                </a>
              </div>

              {/* Newsletter / Contact Form */}
              <div className="bg-card/10 border border-border/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Subscribe to receive updates on my latest projects and cybersecurity insights.
                </p>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      {!dbError && latestPosts.length > 0 && (
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 sm:mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Blog
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Latest Insights
              </h2>
              <p className="max-w-[700px] text-muted-foreground text-base sm:text-lg">
                Thoughts on cybersecurity trends, threats, and best practices.
              </p>
            </div>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {/* Featured Video Card */}
              <Card className="overflow-hidden bg-card border-border transition-all duration-200 hover:border-primary/50 hover:-translate-y-1 h-full">
                <div className="aspect-video w-full overflow-hidden relative">
                  <video 
                    controls 
                    poster="/thumbnail-image.jpg"
                    className="w-full h-full object-cover"
                    preload="metadata"
                  >
                    <source src="/mcp-security-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">Understanding MCP Servers and Security Risks 🔒</CardTitle>
                  <CardDescription className="line-clamp-2">Learn about Model Context Protocol servers and security considerations.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Video • Cybersecurity</p>
                </CardContent>
              </Card>

              {latestPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <Card className="overflow-hidden bg-card border-border transition-all duration-200 group-hover:border-primary/50 group-hover:-translate-y-1 h-full">
                    <div className="aspect-video w-full overflow-hidden">
                      <Image
                        src={post.coverImage || "/placeholder.svg?height=400&width=600&query=cybersecurity"}
                        width={600}
                        height={400}
                        alt={post.title}
                        className="object-cover w-full h-full transition-all duration-200 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{formatDate(post.createdAt)}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Link href="/blog">
                <Button variant="outline" size="lg" className="min-h-[48px]">
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}
      </div>
    </>
  )
}

