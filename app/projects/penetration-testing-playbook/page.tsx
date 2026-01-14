import { Bug } from "lucide-react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function PenetrationTestingPlaybookPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <Card className="overflow-hidden">
        <div className="relative h-56 w-full">
          <Image src="/interconnected-threat-analysis.png" alt="Penetration Testing Playbook" fill className="object-cover" />
        </div>
        <CardHeader>
          <CardTitle>Penetration Testing Playbook (Kali Linux)</CardTitle>
          <CardDescription>
            Developed a repeatable penetration testing playbook using Kali Linux, WAF/Arcjet, and custom scripts. Includes real-world attack scenarios, SQLi, brute-force, and reporting for executive stakeholders.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Impact Metrics */}
          <div className="mb-4 flex flex-wrap gap-4">
            <div className="bg-primary/10 rounded-lg px-4 py-2 text-primary font-semibold text-sm">15+ Attack Scenarios Simulated</div>
            <div className="bg-green-100 text-green-800 rounded-lg px-4 py-2 font-semibold text-sm">100% Remediation Rate</div>
            <div className="bg-blue-100 text-blue-800 rounded-lg px-4 py-2 font-semibold text-sm">Executive-Ready Reports</div>
          </div>
          {/* Tech Stack Badges */}
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-medium">Kali Linux</span>
            <span className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-medium">Burp Suite</span>
            <span className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-medium">Arcjet</span>
            <span className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-medium">Python</span>
            <span className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-medium">Next.js</span>
          </div>
          {/* Project Highlights */}
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
            <li>Real-world attack simulation (SQLi, brute-force, rate limiting)</li>
            <li>WAF/Arcjet validation and bypass testing</li>
            <li>Automated reporting and executive-ready documentation</li>
            <li>Incident response and remediation steps</li>
          </ul>
          {/* Key Challenges & Solutions */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2 text-primary">Key Challenges & Solutions</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><b>Challenge:</b> Simulating advanced attack vectors.<br /><b>Solution:</b> Used Kali Linux and custom scripts for realistic, up-to-date testing.</li>
              <li><b>Challenge:</b> Ensuring actionable reporting.<br /><b>Solution:</b> Automated executive-ready reports with clear remediation steps.</li>
              <li><b>Challenge:</b> Validating WAF/Arcjet effectiveness.<br /><b>Solution:</b> Designed bypass tests and provided improvement recommendations.</li>
            </ul>
          </div>
          {/* Reflection / What I Learned */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2 text-primary">Reflection</h3>
            <p className="text-sm text-muted-foreground">This project sharpened my offensive security skills and my ability to communicate technical findings to non-technical stakeholders. I learned to bridge the gap between technical testing and business impact.</p>
          </div>
          {/* Call to Action for Recruiters */}
          <div className="mt-8 text-center">
            <div className="text-xs text-muted-foreground">Interested in how I can secure your next project? <a href="mailto:anchal@example.com" className="underline text-primary">Contact me</a></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
