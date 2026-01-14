import { Shield, AlertTriangle, FileCode, Lock, Server, Users, Eye, Activity, Database, Cloud, Search, Bug, Network, Fingerprint } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ClientProjectAdmin from "@/components/client-project-admin"
import { getProjects } from "@/app/actions/projects"
import Image from "next/image"
import Link from "next/link"

// Map icon strings to Lucide components
const iconMap = {
  AlertTriangle: AlertTriangle,
  Shield: Shield,
  FileCode: FileCode,
  Lock: Lock,
  Server: Server,
  Users: Users,
  Eye: Eye,
  Activity: Activity,
  Database: Database,
  Cloud: Cloud,
  Search: Search,
  Bug: Bug,
  Network: Network,
  Fingerprint: Fingerprint
}

// Default images for projects without custom images
const defaultImages = [
  "/modern-soc-overview.png",
  "/digital-fortress.png",
  "/network-security-dashboard.png",
  "/secure-cloud-network.png",
  "/digital-watchtower.png",
  "/interconnected-threat-analysis.png"
]

const skills = [
  // Previous skills
  "Splunk SIEM", "Forcepoint DLP", "CrowdStrike EDR", "ServiceNow ITSM",
  "Qualys", "Azure Security", "AWS", "Python", "Wireshark", 
  "Nmap", "Burp Suite", "MITRE ATT&CK", "ISO 27001", "NIST Framework",
  // AI Protector Workshop skills
  "Secure AI Development Lifecycle", "Shift-left Security", "Threat Modeling", "Penetration Testing (Kali Linux, WAF, Arcjet)",
  "Web Application Security (Next.js, Vercel Firewall, Clerk)", "MCP Security Architecture (OAuth 2.1, Arcjet)",
  "Cloud Security (AWS, Azure, Vercel)", "API & Data Flow Security", "Incident Response & Reporting",
  "Security Automation", "Audit Logging", "Compliance & Data Residency (AU)", "Git, VS Code, Copilot, Claude Desktop"
];

import SkillsHighlightSectionClientWrapper from "./SkillsHighlightSectionClientWrapper";

export default async function ProjectsPage() {
  // Fetch projects directly using the server action.
  const projects = await getProjects();
  return (
    <div className="flex flex-col">
      {/* Admin section for adding new projects - only visible to admins */}
      <ClientProjectAdmin />
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <Badge variant="outline" className="border-primary/50 text-primary px-4 py-1">
              <Shield className="w-4 h-4 mr-2" />
              Security Portfolio
            </Badge>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Cybersecurity Projects
              </h1>
              <p className="max-w-[800px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive security solutions built with enterprise-grade methodologies. 
                From SOC operations to threat intelligence, explore my hands-on experience 
                protecting organizations from evolving cyber threats.
              </p>
            </div>
            {/* Stats Section */}
            <div className="flex flex-wrap justify-center gap-8 mt-8 pt-8 border-t border-gray-800">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-gray-400">Daily Alerts Monitored</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">40%</p>
                <p className="text-sm text-gray-400">False Positive Reduction</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">2+</p>
                <p className="text-sm text-gray-400">Years Enterprise Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Grid Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Real-world scenario projects, clickable */}
            <Link href="/projects/ai-portfolio-security" className="group">
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group-hover:shadow-lg group-hover:shadow-primary/10 cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/digital-fortress.png"
                    alt="AI Portfolio Security"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-primary/90 backdrop-blur-sm p-2 rounded-lg">
                      <Shield className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    Hardened AI Portfolio (WAF, Arcjet, Clerk)
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    Built a production-ready digital portfolio with layered security: WAF, Arcjet, Vercel Firewall, and Clerk authentication. Includes secure deployment, threat modeling, and compliance documentation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground"><div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0"></div>WAF & Arcjet integration for real-time attack mitigation</li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground"><div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0"></div>Clerk authentication and secure user flows</li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground"><div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0"></div>Threat modeling, compliance, and executive reporting</li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground"><div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0"></div>Deployed on Vercel with custom domain protections</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
            <Link href="/projects/mcp-server-security" className="group">
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group-hover:shadow-lg group-hover:shadow-primary/10 cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/secure-cloud-network.png"
                    alt="MCP Server Security"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-primary/90 backdrop-blur-sm p-2 rounded-lg">
                      <Server className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    MCP Server Security & Authentication
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    Secured an MCP server with OAuth 2.1, Arcjet, and advanced authentication. Delivered a full security matrix, risk assessment, and operational runbooks for incident response and compliance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground"><div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0"></div>OAuth 2.1 authentication and access control</li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground"><div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0"></div>Arcjet firewall and API/data flow security</li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground"><div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0"></div>Security matrix, audit logging, and monitoring</li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground"><div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0"></div>Incident response and compliance documentation</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
            <Link href="/projects/penetration-testing-playbook" className="group">
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group-hover:shadow-lg group-hover:shadow-primary/10 cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/interconnected-threat-analysis.png"
                    alt="Penetration Testing Playbook"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-primary/90 backdrop-blur-sm p-2 rounded-lg">
                      <Bug className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    Penetration Testing Playbook (Kali Linux)
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    Developed a repeatable penetration testing playbook using Kali Linux, WAF/Arcjet, and custom scripts. Includes real-world attack scenarios and executive reporting.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">Real-world attack simulation (SQLi, brute-force)</li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">WAF/Arcjet validation and bypass testing</li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">Automated reporting and executive-ready documentation</li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">Incident response and remediation steps</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/dlp-enterprise" className="group">
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group-hover:shadow-lg group-hover:shadow-primary/10 cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/digital-shield.png"
                    alt="Enterprise DLP Implementation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-primary/90 backdrop-blur-sm p-2 rounded-lg">
                      <Lock className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    Enterprise DLP Implementation (KPMG)
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    Led deployment of Forcepoint & Symantec DLP for a large enterprise, improving data protection and compliance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">Forcepoint & Symantec DLP rollout and tuning</li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">Custom policy design and incident workflow</li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">Security awareness and user training</li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">Compliance reporting and executive dashboards</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/netskope-casb" className="group">
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group-hover:shadow-lg group-hover:shadow-primary/10 cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/digital-watchtower.png"
                    alt="Netskope CASB Cloud Security"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-primary/90 backdrop-blur-sm p-2 rounded-lg">
                      <Cloud className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    Netskope CASB Cloud Security (KPMG)
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    Implemented Netskope CASB for cloud app visibility, threat protection, and policy enforcement across SaaS/IaaS.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">Cloud app discovery and risk assessment</li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">Threat protection and policy enforcement</li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">Data loss prevention for SaaS and IaaS</li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">Secure cloud adoption and compliance</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
      {/* Skills Highlight Section */}
      <SkillsHighlightSectionClientWrapper />
    </div>
  )
}

