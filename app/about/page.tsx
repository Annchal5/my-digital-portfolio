import { Award, GraduationCap, Briefcase, Calendar, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">About Me</h1>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Cybersecurity professional with over 15 years of experience protecting organizations from evolving
                threats.
              </p>
            </div>
          </div>
        </div>
        {/* Animated background */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-10"></div>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </section>

      {/* Profile Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Anchal</h2>
                <p className="text-xl text-muted-foreground">
                  <span className="text-primary font-semibold">AI Protector & Cybersecurity Professional</span>
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  I am a dedicated cybersecurity professional and AI Protector with a passion for helping organizations strengthen their
                  security posture and protect their valuable digital assets. Through the AI Protector Workshop—a comprehensive 10-week immersive program—I have developed expertise in securing AI-powered applications, MCP servers, and digital portfolios.
                </p>
                <p className="text-muted-foreground">
                  My approach combines technical expertise in secure AI development lifecycle, shift-left security practices, and defensive engineering with a deep understanding of business needs. I specialize in shift-left security practices, secure coding standards, and environment hardening for AI agents. I believe that cybersecurity is not just about implementing technical controls, but also about building a culture of security awareness and resilience across modern AI systems.
                </p>
                <p className="text-muted-foreground">
                  Throughout my journey, I have developed proficiency in hardening digital portfolios with WAF protections, implementing OAuth 2.1 authentication, and deploying secure MCP server architectures. I am committed to staying at the forefront of the rapidly evolving cybersecurity and AI landscape, delivering executive-ready reports that prove systems are production-safe, and sharing my knowledge with the broader security community.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[400px] aspect-square">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-3xl opacity-20"></div>
                <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-background p-2">
                  <Image
                    src="/cyber-guardian.png"
                    alt="Anchal - AI Protector & Cybersecurity Professional"
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

      {/* Certifications Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Credentials</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Certifications & Education</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Professional qualifications and academic background that inform my expertise.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-background border-primary/20">
              <CardHeader className="pb-2">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>CISSP</CardTitle>
                <CardDescription>Certified Information Systems Security Professional</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Globally recognized certification demonstrating expertise across eight security domains.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-primary/20">
              <CardHeader className="pb-2">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>OSCP</CardTitle>
                <CardDescription>Offensive Security Certified Professional</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Hands-on penetration testing certification proving practical exploitation skills.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-primary/20">
              <CardHeader className="pb-2">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>CCSP</CardTitle>
                <CardDescription>Certified Cloud Security Professional</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Specialized certification in cloud security architecture, design, and operations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-primary/20">
              <CardHeader className="pb-2">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>M.S. Cybersecurity</CardTitle>
                <CardDescription>Stanford University</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Advanced degree with focus on security architecture and threat intelligence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Expertise</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Skills & Specializations</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Core competencies and specialized knowledge areas in cybersecurity.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">AI Protector Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Secure AI Development Lifecycle</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Shift-Left Security Practices</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>MCP Server Security Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>OAuth 2.1 Authentication</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Hardened Digital Portfolio Deployment</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Defensive Operations</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>WAF & Arcjet Integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Vercel Firewall Hardening</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Secure Coding Standards</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Environment Hardening</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Threat Modeling & Risk Assessment</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Offensive Security</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Kali Linux Penetration Testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Rate Limit Evaluation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Brute-Force Attack Testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>SQL Injection Mitigation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Incident Readiness & Response</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Web Application Security</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Next.js Hardening</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Clerk Authentication Integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Custom Domain Protections</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Vercel Edge Security</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Secure API Design</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Professional Reporting</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Executive Dashboards</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Compliance Mapping</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Security Documentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Operational Runbooks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Portfolio-Ready Presentations</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Penetration Testing</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Web Application Testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Network Infrastructure Testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Mobile Application Testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Social Engineering Assessments</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Red Team Operations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Protector Workshop Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Program</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">AI Protector Workshop</h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                10-Week Immersive Program: Securing AI Agents, MCP Servers & Digital Portfolios
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-background/80 border-primary/20 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Security Foundations</CardTitle>
                <CardDescription>Weeks 1-3</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• AI Protector Mindset Development</p>
                <p>• Secure Development Environment Setup</p>
                <p>• Digital Portfolio Hardening</p>
                <p>• MCP Server Connections & Evaluation</p>
                <p>• Australian Case Study Analysis</p>
              </CardContent>
            </Card>

            <Card className="bg-background/80 border-primary/20 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Defensive & Offensive Operations</CardTitle>
                <CardDescription>Weeks 4-6</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• WAF & Arcjet Hardening</p>
                <p>• Vercel Firewall Configuration</p>
                <p>• Kali Linux Penetration Testing</p>
                <p>• Project Kickoff & Team Formation</p>
                <p>• GitHub Repo & Specification Planning</p>
              </CardContent>
            </Card>

            <Card className="bg-background/80 border-primary/20 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Advanced Agent Security</CardTitle>
                <CardDescription>Weeks 7-10</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Interim Working Solution Delivery</p>
                <p>• Polished Portfolio Refinement</p>
                <p>• Executive Briefing Preparation</p>
                <p>• Final Presentation & Project Showcase</p>
                <p>• Career Acceleration & Specialization</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-white">Program Outcomes</h3>
              <p className="text-gray-400 max-w-[700px] mx-auto">
                Anchal has developed comprehensive expertise across all key learning areas:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-background/50 border border-primary/20 p-6 rounded-lg backdrop-blur-sm">
                <h4 className="font-bold text-white mb-3">Key Learning Areas</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ Secure AI Development Lifecycle & Shift-Left Security</li>
                  <li>✓ Cyber Security Bootcamp Integration</li>
                  <li>✓ MCP Security Architecture & OAuth 2.1</li>
                  <li>✓ Web Application Security (Next.js, Vercel)</li>
                  <li>✓ Offensive Security Skills (Kali Linux, Penetration Testing)</li>
                  <li>✓ Professional Security Reporting & Compliance</li>
                </ul>
              </div>

              <div className="bg-background/50 border border-primary/20 p-6 rounded-lg backdrop-blur-sm">
                <h4 className="font-bold text-white mb-3">Deliverables & Portfolio</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ Hardened Digital Portfolio with WAF & Firewalls</li>
                  <li>✓ Penetration Testing Playbooks</li>
                  <li>✓ MCP Authentication Mastery</li>
                  <li>✓ Compliance-Ready Documentation</li>
                  <li>✓ Operational Runbooks & Automation</li>
                  <li>✓ Presentation-Ready Security Portfolio</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Animated background */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-5"></div>
        <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      </section>

      {/* Experience Timeline */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Career</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Professional Experience</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                My journey through the cybersecurity industry.
              </p>
            </div>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/40 before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 bg-background shadow-sm z-10 md:group-odd:ml-8 md:group-even:mr-8">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div className="w-full md:w-[calc(50%-4rem)] bg-background p-5 rounded-lg border border-primary/20 shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-bold text-lg">Principal Security Consultant</h3>
                  <time className="font-semibold text-primary flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    2018 - Present
                  </time>
                </div>
                <p className="text-muted-foreground mb-2">CyberShield Consulting</p>
                <p className="text-sm text-muted-foreground">
                  Leading complex security assessments and penetration tests for Fortune 500 clients. Developing custom
                  security frameworks and methodologies. Mentoring junior security consultants and delivering executive
                  briefings on critical security findings.
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 bg-background shadow-sm z-10 md:group-odd:ml-8 md:group-even:mr-8">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div className="w-full md:w-[calc(50%-4rem)] bg-background p-5 rounded-lg border border-primary/20 shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-bold text-lg">Senior Security Engineer</h3>
                  <time className="font-semibold text-primary flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    2014 - 2018
                  </time>
                </div>
                <p className="text-muted-foreground mb-2">SecureTech Solutions</p>
                <p className="text-sm text-muted-foreground">
                  Designed and implemented security architectures for cloud migrations. Led vulnerability management
                  program and security operations center (SOC) initiatives. Conducted internal security assessments and
                  developed remediation strategies.
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 bg-background shadow-sm z-10 md:group-odd:ml-8 md:group-even:mr-8">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div className="w-full md:w-[calc(50%-4rem)] bg-background p-5 rounded-lg border border-primary/20 shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-bold text-lg">Security Analyst</h3>
                  <time className="font-semibold text-primary flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    2010 - 2014
                  </time>
                </div>
                <p className="text-muted-foreground mb-2">Global Financial Services</p>
                <p className="text-sm text-muted-foreground">
                  Performed security monitoring and incident response for a major financial institution. Conducted
                  vulnerability assessments and security awareness training. Assisted in developing security policies
                  and procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
