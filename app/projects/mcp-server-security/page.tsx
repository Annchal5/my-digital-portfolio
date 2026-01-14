import { Server } from "lucide-react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function McpServerSecurityPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <Card className="overflow-hidden">
        <div className="relative h-56 w-full">
          <Image src="/secure-cloud-network.png" alt="MCP Server Security" fill className="object-cover" />
        </div>
        <CardHeader>
          <CardTitle>MCP Server Security & Authentication</CardTitle>
          <CardDescription>
            Secured an MCP server with OAuth 2.1, Arcjet, and advanced authentication. Delivered a full security matrix, risk assessment, and operational runbooks for incident response and compliance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Impact Metrics */}
          <div className="mb-4 flex flex-wrap gap-4">
            <div className="bg-primary/10 rounded-lg px-4 py-2 text-primary font-semibold text-sm">100% Auth Success Rate</div>
            <div className="bg-green-100 text-green-800 rounded-lg px-4 py-2 font-semibold text-sm">0 Data Breaches</div>
            <div className="bg-blue-100 text-blue-800 rounded-lg px-4 py-2 font-semibold text-sm">24/7 Monitoring</div>
          </div>
          {/* Tech Stack Badges */}
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-medium">Node.js</span>
            <span className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-medium">Next.js</span>
            <span className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-medium">Arcjet</span>
            <span className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-medium">OAuth 2.1</span>
            <span className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-medium">Drizzle ORM</span>
          </div>
          {/* Project Highlights */}
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
            <li>OAuth 2.1 authentication and access control</li>
            <li>Arcjet firewall and API/data flow security</li>
            <li>Security matrix, audit logging, and monitoring</li>
            <li>Incident response and compliance documentation</li>
          </ul>
          {/* Key Challenges & Solutions */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2 text-primary">Key Challenges & Solutions</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><b>Challenge:</b> Securing sensitive API endpoints.<br /><b>Solution:</b> Implemented Arcjet and strict OAuth 2.1 flows for robust access control.</li>
              <li><b>Challenge:</b> Real-time monitoring and alerting.<br /><b>Solution:</b> Built custom audit logging and alerting for 24/7 visibility.</li>
              <li><b>Challenge:</b> Compliance with enterprise standards.<br /><b>Solution:</b> Delivered detailed runbooks and compliance documentation.</li>
            </ul>
          </div>
          {/* Reflection / What I Learned */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2 text-primary">Reflection</h3>
            <p className="text-sm text-muted-foreground">This project strengthened my skills in secure server architecture, authentication, and compliance. I learned to balance usability with strict security requirements in a real-world enterprise context.</p>
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
