import { Shield } from "lucide-react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function AiPortfolioSecurityPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <Card className="overflow-hidden">
        <div className="relative h-56 w-full">
          <Image src="/digital-fortress.png" alt="AI Portfolio Security" fill className="object-cover" />
        </div>
        <CardHeader>
          <CardTitle>Hardened AI Portfolio (WAF, Arcjet, Clerk)</CardTitle>
          <CardDescription>
            Production-ready digital portfolio with layered security: WAF, Arcjet, Vercel Firewall, and Clerk authentication. Includes secure deployment, threat modeling, and compliance documentation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Impact Metrics */}
          <div className="mb-4 flex flex-wrap gap-4">
            <div className="bg-primary/10 rounded-lg px-4 py-2 text-primary font-semibold text-sm">99.99% Uptime</div>
            <div className="bg-green-100 text-green-800 rounded-lg px-4 py-2 font-semibold text-sm">0 Security Incidents</div>
            <div className="bg-blue-100 text-blue-800 rounded-lg px-4 py-2 font-semibold text-sm">3x Faster Page Loads</div>
          </div>
          {/* Tech Stack Badges */}
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-medium">Next.js</span>
            <span className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-medium">Vercel</span>
            <span className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-medium">Arcjet</span>
            <span className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-medium">Clerk</span>
            <span className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-medium">Tailwind CSS</span>
          </div>
          {/* Project Highlights */}
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
            <li>WAF & Arcjet integration for real-time attack mitigation</li>
            <li>Clerk authentication and secure user flows</li>
            <li>Threat modeling, compliance, and executive reporting</li>
            <li>Deployed on Vercel with custom domain protections</li>
          </ul>
          {/* Key Challenges & Solutions */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2 text-primary">Key Challenges & Solutions</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><b>Challenge:</b> Protecting against automated attacks and bots.<br /><b>Solution:</b> Integrated Arcjet and WAF rules for real-time detection and blocking.</li>
              <li><b>Challenge:</b> Ensuring secure authentication flows.<br /><b>Solution:</b> Used Clerk for robust, user-friendly auth and session management.</li>
              <li><b>Challenge:</b> Maintaining performance with security layers.<br /><b>Solution:</b> Optimized Next.js and Vercel deployment for speed and reliability.</li>
            </ul>
          </div>
          {/* Reflection / What I Learned */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2 text-primary">Reflection</h3>
            <p className="text-sm text-muted-foreground">This project deepened my expertise in secure web app deployment, balancing user experience with strong security controls. I learned to integrate modern authentication and real-time threat mitigation without sacrificing performance.</p>
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
