import { Cloud } from "lucide-react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function NetskopeCasbPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <Card className="overflow-hidden">
        <div className="relative h-56 w-full">
          <Image src="/digital-watchtower.png" alt="Netskope CASB Cloud Security" fill className="object-cover" />
        </div>
        <CardHeader>
          <CardTitle>Netskope CASB Cloud Security (KPMG)</CardTitle>
          <CardDescription>
            Implemented Netskope CASB for cloud app visibility, threat protection, and policy enforcement. Enhanced data security posture for enterprise clients and enabled secure cloud adoption.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Impact Metrics */}
          <div className="mb-4 flex flex-wrap gap-4">
            <div className="bg-primary/10 rounded-lg px-4 py-2 text-primary font-semibold text-sm">100+ Cloud Apps Secured</div>
            <div className="bg-green-100 text-green-800 rounded-lg px-4 py-2 font-semibold text-sm">Zero Data Loss Incidents</div>
            <div className="bg-blue-100 text-blue-800 rounded-lg px-4 py-2 font-semibold text-sm">Full Compliance Achieved</div>
          </div>
          {/* Tech Stack Badges */}
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-medium">Netskope CASB</span>
            <span className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-medium">Azure</span>
            <span className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-medium">AWS</span>
            <span className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-medium">PowerShell</span>
            <span className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-medium">Python</span>
          </div>
          {/* Project Highlights */}
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
            <li>Cloud app discovery and risk assessment</li>
            <li>Threat protection and policy enforcement</li>
            <li>Data loss prevention for SaaS and IaaS</li>
            <li>Secure cloud adoption and compliance</li>
          </ul>
          {/* Key Challenges & Solutions */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2 text-primary">Key Challenges & Solutions</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><b>Challenge:</b> Gaining visibility into shadow IT.<br /><b>Solution:</b> Used Netskope CASB for comprehensive cloud app discovery and risk scoring.</li>
              <li><b>Challenge:</b> Enforcing policies across multiple clouds.<br /><b>Solution:</b> Automated policy enforcement for SaaS and IaaS platforms.</li>
              <li><b>Challenge:</b> Proving compliance to auditors.<br /><b>Solution:</b> Generated detailed compliance and incident reports.</li>
            </ul>
          </div>
          {/* Reflection / What I Learned */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2 text-primary">Reflection</h3>
            <p className="text-sm text-muted-foreground">This project gave me hands-on experience with cloud security at scale, including policy automation and compliance. I learned to deliver measurable results for enterprise clients.</p>
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
