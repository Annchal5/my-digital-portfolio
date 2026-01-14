import { Award, GraduationCap, Briefcase, Calendar, CheckCircle, MapPin, Shield, Server, FileCode, Database, Linkedin, Mail, ExternalLink, Download, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Responsive */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[hsl(218,50%,8%)] relative overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            {/* location badge removed at user's request */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              About Me
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-[700px] leading-relaxed">
              I stop breaches before they happen — strengthening cloud security, streamlining detection, and turning forensic insights into action.
            </p>
          </div>
        </div>
        {/* Background */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px] sm:bg-[size:50px_50px] opacity-10"></div>
      </section>

      {/* Profile Section - Responsive Grid */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
            {/* Text Content */}
            <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Anchal</h2>
                <p className="text-lg sm:text-xl text-primary font-semibold">Cybersecurity Analyst</p>
              </div>
              
              {/* Short paragraphs for readability */}
              <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-prose">
                <p>
                  I have worked on engagements across industries, addressing complex technical and operational challenges.
                </p>

                <p>
                  I developed hands-on experience in:
                </p>
                
                <ul className="space-y-2 pl-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>DLP policy design using Forcepoint & Netskope, reducing data leaks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>Vulnerability assessments and security monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>Cyber forensics support and incident investigation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>Data privacy and protection for enterprise clients</span>
                  </li>
                </ul>

                <p>
                  Currently pursuing my <strong className="text-foreground">Master of IT (Cybersecurity)</strong> at Asia Pacific International College in Australia, 
                  I'm diving deep into cloud security, data privacy, and cyber threat mitigation — staying one step ahead of attackers is what drives me every day.
                </p>

                <p>
                  As an active member of <strong className="text-foreground">AISA, AWSN, ISC2, and ACS</strong>, I stay connected with Australia's cybersecurity community — 
                  learning, sharing ideas, and building a stronger digital future together.
                </p>

                <p className="italic border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r">
                  "I believe cybersecurity isn't just about systems — it's about people, trust, and creating safer digital spaces for everyone."
                </p>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="flex items-center justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px]">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur-3xl opacity-40"></div>
                <div className="relative overflow-hidden rounded-xl border border-border bg-card p-2">
                  <Image
                    src="/cyber-guardian.png"
                    alt="Anchal - Cybersecurity Professional"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section - Two concise cards side-by-side to avoid empty columns */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 sm:mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Education</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Academic Background</h2>
            <div className="hidden sm:block text-sm text-muted-foreground text-right max-w-xs">Practical cybersecurity experience — enterprise consulting & applied research.</div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex gap-6 overflow-x-auto py-2">
              <Card className="min-w-[380px] flex-1 bg-card border-border">
                <div className="flex items-center">
                  <div className="p-6 flex-shrink-0">
                    <Image src="/asia_pacific_international_college_logo.jpg" alt="APIC logo" width={120} height={68} className="object-contain rounded" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">Master of Information Technology (Cybersecurity)</h3>
                    <p className="text-sm text-primary font-medium">Asia Pacific International College, Melbourne • 2025–2026 (Expected)</p>
                    <p className="text-sm text-muted-foreground mt-2">Practical, industry-focused coursework and applied projects in cloud security, data privacy, threat mitigation and incident response.</p>
                    <p className="text-sm text-muted-foreground mt-3">Active in workshops, industry projects and building a live cybersecurity portfolio to bridge academic learning with real-world consulting expectations.</p>
                  </div>
                </div>
              </Card>

              <Card className="min-w-[380px] flex-1 bg-card border-border">
                <div className="flex items-center">
                  <div className="p-6 flex-shrink-0">
                    <Image src="/guru_nanak_dev_university_amritsar_logo.jpg" alt="GNDU logo" width={120} height={68} className="object-contain" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">Bachelor of Technology (Computer Science & Engineering)</h3>
                    <p className="text-sm text-primary font-medium">Guru Nanak Dev University, Amritsar • 2018–2022</p>
                    <p className="text-sm text-muted-foreground mt-2">Built a strong foundation in programming, data structures, databases, networks and operating systems through applied coursework and capstone projects.</p>
                    <p className="text-sm text-muted-foreground mt-3 font-medium">Key focus: programming fundamentals, system design, networking basics, database concepts, and applied problem-solving.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section - Responsive Badges */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 sm:mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Credentials
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Certifications & Awards
            </h2>
            <p className="max-w-[700px] text-muted-foreground text-base sm:text-lg">
              Professional certifications and recognition demonstrating expertise and commitment.
            </p>
          </div>

          {/* Certifications Grid - Responsive wrap */}
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mb-10">
            <Card className="bg-card border-primary hover:border-primary/80 transition-colors text-center p-4">
              <p className="font-semibold">ISC2 CC</p>
              <p className="text-xs text-muted-foreground">Certified in Cybersecurity</p>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors text-center p-4">
              <p className="font-semibold">Microsoft SC-900</p>
              <p className="text-xs text-muted-foreground">Security Fundamentals</p>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors text-center p-4">
              <p className="font-semibold">Forcepoint DLP</p>
              <p className="text-xs text-muted-foreground">Administrator Certified</p>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors text-center p-4">
              <p className="font-semibold">Oracle Cloud</p>
              <p className="text-xs text-muted-foreground">OCI Infrastructure</p>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors text-center p-4">
              <p className="font-semibold">Netskope</p>
              <p className="text-xs text-muted-foreground">Cloud Security</p>
            </Card>

          </div>

          {/* Awards */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-center mb-6">Recognition & Awards</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardHeader className="text-center pb-2">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-2">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">KPMG Kudos Award</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Recognition for excellence in security operations and commitment to client service.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardHeader className="text-center pb-2">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-2">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">KPMG Accolades</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Outstanding contribution to team success and collaborative project delivery.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Professional Memberships */}
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-xl font-semibold text-center mb-6">Professional Memberships</h3>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
              <Card className="bg-card border-border hover:border-primary/50 transition-colors text-center p-4">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mx-auto mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <p className="font-semibold text-sm">AISA</p>
                <p className="text-xs text-muted-foreground">Australian Information Security Association</p>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-colors text-center p-4">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mx-auto mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <p className="font-semibold text-sm">AWSN</p>
                <p className="text-xs text-muted-foreground">Australian Women in Security Network</p>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-colors text-center p-4">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mx-auto mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <p className="font-semibold text-sm">ISC2</p>
                <p className="text-xs text-muted-foreground">International Information System Security Certification Consortium</p>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-colors text-center p-4">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mx-auto mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <p className="font-semibold text-sm">ACS</p>
                <p className="text-xs text-muted-foreground">Australian Computer Society</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Responsive Grid */}
      <section id="skills" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 sm:mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Skills
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Skills & Specializations
            </h2>
            <p className="max-w-[700px] text-muted-foreground text-base sm:text-lg">
              Core competencies developed through the AI Protector Workshop, enterprise consulting, and academic study.
            </p>
          </div>

          {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-card border-border">
              <CardHeader className="pb-3">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Secure AI Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Secure AI Development Lifecycle</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Shift-left Security & Secure Coding</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Environment Hardening (Node.js, Git, VS Code, Copilot, Claude Desktop)</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Threat Modeling & Risk Assessment</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Compliance & Data Residency (AU Focus)</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader className="pb-3">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-3">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Offensive & Defensive Security</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Penetration Testing (Kali Linux, WAF/Arcjet, SQLi, Brute-force)</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Web Application Security (Next.js, Vercel Firewall, Clerk Auth)</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Incident Response & Professional Reporting</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Security Automation & Monitoring</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Operational Runbooks & Playbooks</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader className="pb-3">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-3">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">MCP & Cloud Security</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>MCP Security Architecture (OAuth 2.1, Arcjet, Secure Server Deployment)</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Cloud Security (AWS, Azure, Vercel, Upstash, ChromaDB)</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>API & Data Flow Security</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Authentication & Access Control</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Audit Logging & Security Monitoring</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader className="pb-3">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Cybersecurity & Risk</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Cybersecurity Operations & SOC</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Incident Response & Investigation</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Data Loss Prevention (DLP) policy design & operations</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Vulnerability Management (scanning & remediation)</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Risk Assessment & Mitigation</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Identity & Access Management (IAM)</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Compliance & Policy Support; Security Monitoring & Alert Triage</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader className="pb-3">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-3">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Tools & Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>SIEM tools & log analysis</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Forcepoint DLP</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Nessus, Qualys vulnerability scanners</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Linux & Git</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Oracle Cloud Infrastructure (Foundations)</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader className="pb-3">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-3">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Cloud & Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Cloud Security fundamentals</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>AWS & Azure (theoretical exposure)</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Network Security, Firewalls, IDS/IPS</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Secure Systems Design</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader className="pb-3">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-3">
                  <FileCode className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Programming & Data</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Python, Java, C++</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>HTML, CSS, JavaScript</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>MySQL and basic database design</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader className="pb-3">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-3">
                  <FileCode className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Data Science & Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Python, NumPy, pandas for data processing</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>scikit-learn, TensorFlow/PyTorch basics</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Exploratory Data Analysis & visualization (Matplotlib, Seaborn)</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Feature engineering, model evaluation and validation</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>SQL, data pipelines and basic MLOps concepts</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Model explainability, classification/regression, and NLP basics</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Data visualization & dashboards (Tableau, Power BI)</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader className="pb-3">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-3">
                  <FileCode className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Professional Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Security Reporting & Documentation</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Risk Communication</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Technical Research & Analysis</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Security Best Practices Implementation</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Security Awareness & Training</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Client Engagement & Stakeholder Communication</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Business & Technical Documentation</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Process Improvement & Change Support</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>Problem Solving & Team Collaboration</span></li>
                </ul>
              </CardContent>
            </Card>

            {/* Frontend and Backend skills removed per user request */}
          </div>
        </div>
      </section>

      {/* Case Studies & Security Research Section */}
      <section className="w-full py-12 md:py-20 lg:py-28 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-6">Case Studies & Security Research</h2>
                    <p className="mb-6 text-muted-foreground text-sm">
                      <span className="font-semibold text-primary">Note:</span> These case studies are highlights of my most impactful security projects. For full technical details and outcomes, see the <Link href="/projects" className="underline text-primary">Projects</Link> page.
                    </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Existing case studies... */}
            <div className="bg-card border border-border rounded-lg p-6 flex flex-col gap-4 shadow-sm">
              <h3 className="font-semibold text-lg">Enterprise DLP Implementation (KPMG)</h3>
              <p className="text-muted-foreground text-sm">Led the rollout of Forcepoint & Symantec DLP for a major enterprise, reducing data leaks and improving compliance. Designed policies, managed incidents, and delivered user training.</p>
              <ul className="text-xs text-muted-foreground list-disc pl-4">
                <li>Forcepoint & Symantec DLP deployment</li>
                <li>Custom policy design & incident workflow</li>
                <li>Security awareness and compliance reporting</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 flex flex-col gap-4 shadow-sm">
              <h3 className="font-semibold text-lg">Netskope CASB Cloud Security (KPMG)</h3>
              <p className="text-muted-foreground text-sm">Implemented Netskope CASB for cloud app visibility, threat protection, and policy enforcement. Enhanced data security posture for enterprise clients and enabled secure cloud adoption.</p>
              <ul className="text-xs text-muted-foreground list-disc pl-4">
                <li>Cloud app discovery and risk assessment</li>
                <li>Threat protection and policy enforcement</li>
                <li>Data loss prevention for SaaS and IaaS</li>
                <li>Secure cloud adoption and compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline - Responsive */}
      <section id="experience" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-background scroll-mt-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 sm:mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Career
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Professional Experience
            </h2>
            <p className="max-w-[700px] text-muted-foreground text-base sm:text-lg">
              From data insights to digital defense — where analytics meets security.
            </p>
          </div>

          {/* Experience Card */}
          <div className="max-w-4xl mx-auto">
            {/* Ausbiz Consulting Internship - Current */}
            <Card className="bg-card border-primary overflow-hidden">
              <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[280px_1fr]">
                <div className="bg-primary/5 p-6 flex flex-col justify-center items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-border">
                  <div className="w-16 h-16 rounded-xl overflow-hidden mb-4 shadow-lg bg-white">
                    <Image
                      src="/Ausbiz_logo.jpg"
                      alt="Ausbiz Consulting Logo"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-500/20 text-green-500 text-xs rounded-full mb-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Current
                  </div>
                  <h3 className="text-xl font-bold">Ausbiz Consulting</h3>
                  <p className="text-primary font-medium">Cybersecurity Intern</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                    <Calendar className="h-4 w-4" />
                    <span>Nov 2025 - Present</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <MapPin className="h-4 w-4" />
                    <span>Australia · Remote</span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h4 className="font-semibold text-lg">AI Protector Workshop - 10 Week Immersive Program</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Securing <strong className="text-foreground">AI agents and MCP server infrastructure</strong> using layered defence strategies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Hardening <strong className="text-foreground">Next.js digital applications</strong>, implementing firewalls (WAF/Arcjet) and secure authentication</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Conducting <strong className="text-foreground">penetration testing, threat analysis</strong>, risk assessments, and reporting security insights</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Producing <strong className="text-foreground">executive-ready security documentation</strong> and portfolio deliverables</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Focused on defensive engineering, secure development, and <strong className="text-foreground">threat modelling for AI systems</strong></span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Penetration Testing</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Web Application Security</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Kali Linux</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">OAuth 2.1</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Security Hardening</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* KPMG Experience */}
            <Card className="bg-card border-border overflow-hidden mt-6">
              <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[280px_1fr]">
                {/* Company Sidebar */}
                <div className="bg-primary/5 p-6 flex flex-col justify-center items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-border">
                  <div className="w-16 h-16 rounded-xl bg-[#00338D] flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-white font-bold text-lg">KPMG</span>
                  </div>
                  <h3 className="text-xl font-bold">KPMG India</h3>
                  <p className="text-primary font-medium">Cybersecurity Analyst</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                    <Calendar className="h-4 w-4" />
                    <span>2+ Years</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <MapPin className="h-4 w-4" />
                    <span>Gurugram, India</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-border w-full">
                    <p className="text-xs text-muted-foreground">Teams:</p>
                    <p className="text-sm font-medium">KPMG DLP Team</p>
                    <p className="text-xs text-muted-foreground mt-1">Client Project:</p>
                    <p className="text-sm font-medium text-primary">PhonePe (Fintech)</p>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="p-6 space-y-4">
                  <h4 className="font-semibold text-lg">Key Responsibilities & Achievements</h4>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Monitored and analysed <strong className="text-foreground">1,000+ security alerts</strong> through SIEM platforms, identifying phishing, malware, insider threats & configuration weaknesses</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Managed end-to-end <strong className="text-foreground">DLP operations</strong> - reviewing 50-70 alerts weekly, tuning policies, reducing false positives by <strong className="text-foreground">~40%</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Conducted vulnerability scanning using <strong className="text-foreground">Nessus & Qualys</strong>, supporting remediation of <strong className="text-foreground">100+ vulnerabilities</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Performed <strong className="text-foreground">incident response</strong> activities including alert triage, escalation, investigation & root-cause analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Assisted with <strong className="text-foreground">digital forensic investigations</strong> (E-discovery), log analysis, evidence collection & compliance documentation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Authored <strong className="text-foreground">25+ SOPs</strong>, process workflows & technical guides, improving operational efficiency</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Led <strong className="text-foreground">PhonePe client engagement</strong> - policy creation, incident management & direct client communication</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Coordinated <strong className="text-foreground">GDPR compliance</strong> as Data Steward for security incidents involving PII</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Splunk SIEM</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Forcepoint DLP</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Netskope</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Symantec DLP</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Nessus</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Qualys</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">MS Sentinel</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* TopMentor Internship */}
            <Card className="bg-card border-border overflow-hidden mt-6">
              <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[280px_1fr]">
                <div className="bg-primary/5 p-6 flex flex-col justify-center items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-border">
                  <div className="w-16 h-16 rounded-xl overflow-hidden mb-4 shadow-lg bg-white">
                    <Image
                      src="/top_mentor_logo.jpg"
                      alt="TopMentor Logo"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold">TopMentor</h3>
                  <p className="text-primary font-medium">Data Science Intern</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                    <Calendar className="h-4 w-4" />
                    <span>Internship</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h4 className="font-semibold text-lg">Projects & Outcomes</h4>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Documented model performance metrics and produced <strong className="text-foreground">technical reports</strong> for stakeholders</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Built ETL pipelines and data preprocessing workflows to support model training</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Collaborated with mentors to evaluate models, optimize performance, and present findings</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Python</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Scikit-learn</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Pandas</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">NumPy</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Machine Learning</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">API Testing</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Data Science</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[hsl(218,50%,8%)]">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Connect
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-[600px] mx-auto">
              I&apos;m actively seeking cybersecurity opportunities in Australia. 
              Feel free to reach out to discuss how I can contribute to your security team.
            </p>

            {/* Contact Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="https://www.linkedin.com/in/annchal-634291178/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="w-full sm:w-auto min-h-[48px] gap-2">
                  <Linkedin className="h-5 w-5" />
                  View LinkedIn Profile
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </Link>
              <a 
                href="mailto:anchal1234asr@gmail.com"
                className="w-full sm:w-auto"
              >
                <Button size="lg" variant="outline" className="w-full sm:w-auto min-h-[48px] gap-2">
                  <Mail className="h-5 w-5" />
                  Send Email
                </Button>
              </a>

              {/* Volunteering moved to /volunteering */}

              {/* View More Experience button removed per user request */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
