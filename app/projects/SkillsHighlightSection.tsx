"use client";
import { Badge } from "@/components/ui/badge";

const skills = [
  // Project‑relevant technologies & tools
  "Next.js digital portfolio hardening",
  "Vercel Firewall / Arcjet",
  "MCP server security (OAuth 2.1)",
  "WAF configuration & tuning",
  "Penetration testing (Kali / Burp / Nmap)",
  "Data Loss Prevention (DLP)",
  "Secure development & shift‑left practices",
  "Threat modeling & risk assessment",
  "Incident response & forensic analysis",
  "Security automation & monitoring (SIEM)",
  "Vulnerability management & remediation",
  "GitHub workflows & secure CI/CD",
  "Python scripting for security automation",
  "API & data flow security",
  "Compliance & audit‑ready reporting"
];

export default function SkillsHighlightSection() {
  const visibleSkills = skills;
  return (
    <section className="w-full py-16 md:py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="border-primary/50 text-primary mb-4">
            Core Competencies
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Technologies & Tools
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience with industry-leading security platforms and methodologies
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto transition-all duration-500">
          {visibleSkills.map((skill) => (
            <Badge 
              key={skill} 
              variant="secondary" 
              className="px-4 py-2 text-sm bg-primary/10 hover:bg-primary/20 transition-colors cursor-default shadow-md hover:scale-105"
            >
              {skill}
            </Badge>
          ))}
        </div>
        {/* All skills are shown on the Projects page; removed the "View More Skills" toggle */}
      </div>
    </section>
  );
}