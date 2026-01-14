import Link from "next/link"
import { Shield, Linkedin, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Main Footer Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Anchal</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Cybersecurity professional specializing in SOC operations, 
              SIEM, DLP, and vulnerability management.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <Link 
                href="https://www.linkedin.com/in/annchal-634291178/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <a 
                href="mailto:anchal1234asr@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/resources/tools" className="text-muted-foreground hover:text-foreground transition-colors">
                  Security Tools
                </Link>
              </li>
              <li>
                <Link href="/resources/guides" className="text-muted-foreground hover:text-foreground transition-colors">
                  Security Guides
                </Link>
              </li>
              <li>
                <Link href="/resources/checklists" className="text-muted-foreground hover:text-foreground transition-colors">
                  Checklists
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Melbourne, Australia</span>
              </li>
              <li>
                <a 
                  href="mailto:anchal1234asr@gmail.com" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>anchal1234asr@gmail.com</span>
                </a>
              </li>
              <li>
                <Link 
                  href="https://www.linkedin.com/in/annchal-634291178/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-4 w-4 shrink-0" />
                  <span>LinkedIn</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Anchal. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link href="/legal/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms" className="hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="/legal/cookies" className="hover:text-foreground transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
