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
                Cybersecurity professional with 2+ years of consulting experience, specializing in SOC operations, incident response, and secure AI systems. AI Protector trained in shift-left security, MCP server architecture, and penetration testing.
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
                  <span className="text-primary font-semibold">Cybersecurity Graduate & AI Protector</span>
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  I'm a cybersecurity graduate from Guru Nanak Dev University and a former Cybersecurity Analyst at KPMG India with 2+ years of consulting experience. I've supported enterprise clients across cybersecurity operations, incident response, data loss prevention, vulnerability management, and risk assessment. Currently pursuing a Master of Information Technology (Cybersecurity) at Asia Pacific International College in Melbourne, Australia, with an expected graduation of December 2026.
                </p>
                <p className="text-muted-foreground">
                  My professional background includes hands-on experience with SIEM tools, Forcepoint DLP, Nessus, Qualys, and incident response workflows. I have analyzed 1000+ security alerts, managed 50-70 DLP alerts weekly (reducing false positives by ~40%), and supported the remediation of 100+ vulnerabilities. I've authored 25+ SOPs and technical guides, demonstrating my ability to translate complex security concepts into operational documentation.
                </p>
                <p className="text-muted-foreground">
                  I recently completed the AI Protector Workshop—a 10-week immersive program—where I developed expertise in securing AI agents, MCP server architecture, penetration testing with Kali Linux, shift-left security practices, and hardened Next.js deployments. I'm passionate about bridging the gap between technical security implementation and business-focused communication, delivering executive-ready reports that prove systems are production-safe.
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
                <CardTitle>SC-900</CardTitle>
                <CardDescription>Microsoft Security, Compliance & Identity Fundamentals</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Foundational certification in cloud security, identity management, and compliance frameworks.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-primary/20">
              <CardHeader className="pb-2">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>DLP Administrator</CardTitle>
                <CardDescription>Forcepoint Data Loss Prevention 9.0</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Expert-level certification in DLP platform deployment, policy management, and alert triage.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-primary/20">
              <CardHeader className="pb-2">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>OCI Foundations</CardTitle>
                <CardDescription>Oracle Cloud Infrastructure Associate</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cloud infrastructure fundamentals with focus on security, networking, and database services.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-primary/20">
              <CardHeader className="pb-2">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Master's IT (Cybersecurity)</CardTitle>
                <CardDescription>Asia Pacific International College, Melbourne</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Graduate degree in cybersecurity with expected completion December 2026.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-primary/20">
              <CardHeader className="pb-2">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Bachelor's CS & Engineering</CardTitle>
                <CardDescription>Guru Nanak Dev University, India</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Undergraduate degree in Computer Science & Engineering, completed May 2022.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-primary/20">
              <CardHeader className="pb-2">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Additional Credentials</CardTitle>
                <CardDescription>Git & Linux Fundamentals</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Certified in Git Version Control and Linux Administration essentials.
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
              <h3 className="text-xl font-bold">Cybersecurity & Risk</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Security Operations Centre (SOC)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Incident Response & Investigation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Data Loss Prevention (DLP)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Vulnerability Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Risk Assessment & Mitigation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Identity & Access Management (IAM)</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Tools & Platforms</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>SIEM Tools & Alert Triage</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Forcepoint DLP</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Nessus & Qualys</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Linux Administration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Git & Version Control</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Oracle Cloud Infrastructure</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Cloud & Programming</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Cloud Security Fundamentals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>AWS & Azure (theoretical)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Python & Java</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Kali Linux Penetration Testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Network Security & Firewalls</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>HTML, CSS, JavaScript</span>
                </li>
              </ul>
            </div>                </li>
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
              <h3 className="text-2xl font-bold text-white">My AI Protector Journey</h3>
              <p className="text-gray-400 max-w-[700px] mx-auto">
                Through the AI Protector Workshop, I have acquired comprehensive skills and expertise across three progressive cycles of learning, from security foundations to advanced agent security and professional delivery.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-background/50 border border-primary/20 p-6 rounded-lg backdrop-blur-sm">
                <h4 className="font-bold text-white mb-4 text-lg">Acquired Technical Skills</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ <strong>Secure AI Development Lifecycle:</strong> Shift-left security practices and secure coding standards</li>
                  <li>✓ <strong>MCP Security Architecture:</strong> OAuth 2.1 authentication and secure server deployment</li>
                  <li>✓ <strong>Web Application Security:</strong> Hardened Next.js portfolios with Vercel Firewall and Clerk auth</li>
                  <li>✓ <strong>Kali Linux Penetration Testing:</strong> Rate limit evaluation and brute-force testing</li>
                  <li>✓ <strong>WAF & Arcjet Integration:</strong> Layered defensive security for production systems</li>
                  <li>✓ <strong>SQL Injection Mitigation:</strong> Secure database query practices and input validation</li>
                </ul>
              </div>

              <div className="bg-background/50 border border-primary/20 p-6 rounded-lg backdrop-blur-sm">
                <h4 className="font-bold text-white mb-4 text-lg">Professional Deliverables</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ <strong>Hardened Digital Portfolio:</strong> Production-ready with WAF, Vercel Firewall, and custom domain protections</li>
                  <li>✓ <strong>Penetration Testing Playbooks:</strong> Documented Kali Linux workflows with repeatable test cases</li>
                  <li>✓ <strong>Executive Reports:</strong> Compliance-ready documentation and security journey analysis</li>
                  <li>✓ <strong>MCP Authentication Systems:</strong> OAuth 2.1 secured MCP servers based on industry best practices</li>
                  <li>✓ <strong>Operational Runbooks:</strong> Incident response procedures and security automation scripts</li>
                  <li>✓ <strong>Presentation Portfolio:</strong> Executive briefings demonstrating AI agent production readiness</li>
                </ul>
              </div>
            </div>

            <div className="bg-background/50 border border-primary/20 p-6 rounded-lg backdrop-blur-sm mt-6">
              <h4 className="font-bold text-white mb-4">Key Learning Areas Mastered</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="text-sm text-gray-400">
                  <p className="font-semibold text-primary mb-2">🛡️ Security Foundations</p>
                  <p>AI Protector mindset, secure development environment setup, and digital portfolio hardening from the first commit</p>
                </div>
                <div className="text-sm text-gray-400">
                  <p className="font-semibold text-primary mb-2">🔐 Cyber Security Bootcamp</p>
                  <p>Penetration testing, threat detection, incident readiness, and Australian case study analysis for contextual threat intelligence</p>
                </div>
                <div className="text-sm text-gray-400">
                  <p className="font-semibold text-primary mb-2">🌐 MCP Security Architecture</p>
                  <p>OAuth 2.1 authentication, Arcjet firewall integration, and secure MCP server deployment patterns</p>
                </div>
                <div className="text-sm text-gray-400">
                  <p className="font-semibold text-primary mb-2">⚔️ Offensive Security Skills</p>
                  <p>Kali Linux tooling mastery, rate limit evaluation, brute-force testing, and SQL injection mitigation techniques</p>
                </div>
                <div className="text-sm text-gray-400">
                  <p className="font-semibold text-primary mb-2">📊 Professional Reporting</p>
                  <p>Executive dashboards, compliance mapping, portfolio-ready security documentation, and operational procedures</p>
                </div>
                <div className="text-sm text-gray-400">
                  <p className="font-semibold text-primary mb-2">🚀 Career Acceleration</p>
                  <p>Protector mindset development, presentation-ready portfolio, and cyber security specialization for AI agents</p>
                </div>
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
