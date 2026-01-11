"use client"

import Link from "next/link"
import { Shield } from "lucide-react"
import { useState, useEffect } from "react"

export function Footer() {
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Anchal</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Cybersecurity professional specializing in AI security, SOC operations, incident response, and penetration testing. Master's candidate in Cybersecurity at APIC, Melbourne.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.linkedin.com/in/annchal-634291178/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:anchal1234asr@gmail.com" className="text-muted-foreground hover:text-foreground">
                  Email
                </a>
              </li>
              <li>
                <a href="tel:+61416401374" className="text-muted-foreground hover:text-foreground">
                  Call
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="text-muted-foreground hover:text-foreground">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {year ?? 2026} Anchal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
