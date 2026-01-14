import { Lock } from "lucide-react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function DlpEnterprisePage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <Card className="overflow-hidden">
        <div className="relative h-56 w-full">
          <Image src="/digital-shield.png" alt="Enterprise DLP Implementation" fill className="object-cover" />
        </div>
        <CardHeader>
          <CardTitle>Enterprise DLP Implementation (KPMG)</CardTitle>
          <CardDescription>
            Led the deployment of Forcepoint & Symantec DLP for a large enterprise, reducing data leaks and improving compliance. Included policy design, incident response, and user training.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Impact Metrics */}
          <div className="mb-4 flex flex-wrap gap-4">
            <div className="bg-primary/10 rounded-lg px-4 py-2 text-primary font-semibold text-sm">80% Data Leak Reduction</div>
            <div className="bg-green-100 text-green-800 rounded-lg px-4 py-2 font-semibold text-sm">100% Compliance Achieved</div>
            <div className="bg-blue-100 text-blue-800 rounded-lg px-4 py-2 font-semibold text-sm">500+ Users Trained</div>
          </div>
          {/* Tech Stack Badges */}
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-medium">Forcepoint DLP</span>
            <span className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-medium">Symantec DLP</span>
            <span className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-medium">ServiceNow</span>
            <span className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-medium">Power BI</span>
            <span className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-medium">Python</span>
          </div>
          {/* Project Highlights */}
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
            <li>Forcepoint & Symantec DLP rollout and tuning</li>
            <li>Custom policy design and incident workflow</li>
            <li>Security awareness and user training</li>
            <li>Compliance reporting and executive dashboards</li>
          </ul>
          {/* Key Challenges & Solutions */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2 text-primary">Key Challenges & Solutions</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><b>Challenge:</b> Reducing false positives in DLP alerts.<br /><b>Solution:</b> Tuned policies and implemented user feedback loops.</li>
              <li><b>Challenge:</b> Achieving user adoption and awareness.<br /><b>Solution:</b> Designed engaging training and awareness campaigns.</li>
              <li><b>Challenge:</b> Meeting strict compliance requirements.<br /><b>Solution:</b> Automated compliance reporting and dashboards.</li>
            </ul>
          </div>
          {/* Reflection / What I Learned */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2 text-primary">Reflection</h3>
            <p className="text-sm text-muted-foreground">This project taught me how to drive large-scale security change, balancing technical controls with user engagement. I learned to communicate value to both technical and non-technical stakeholders.</p>
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
