'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Download, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Award, GraduationCap, Briefcase, Code, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function CVPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isDarkMode, setIsDarkMode] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Track mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Animated gradient background with particle effects
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
    }

    const particles: Particle[] = []
    const particleCount = 50

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    const animate = () => {
      // Clear canvas with gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, isDarkMode ? '#0f172a' : '#f8fafc')
      gradient.addColorStop(0.5, isDarkMode ? '#1e293b' : '#f1f5f9')
      gradient.addColorStop(1, isDarkMode ? '#0f172a' : '#f8fafc')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Calculate distance to mouse
        const dx = mousePosition.x - particle.x
        const dy = mousePosition.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Repel from mouse
        if (distance < 150) {
          const angle = Math.atan2(dy, dx)
          particle.vx -= Math.cos(angle) * 0.5
          particle.vy -= Math.sin(angle) * 0.5
        }

        // Slight attraction to center
        particle.vx += (canvas.width / 2 - particle.x) * 0.0002
        particle.vy += (canvas.height / 2 - particle.y) * 0.0002

        // Damping
        particle.vx *= 0.99
        particle.vy *= 0.99

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off walls
        if (particle.x - particle.radius < 0 || particle.x + particle.radius > canvas.width) {
          particle.vx *= -1
          particle.x = Math.max(particle.radius, Math.min(canvas.width - particle.radius, particle.x))
        }
        if (particle.y - particle.radius < 0 || particle.y + particle.radius > canvas.height) {
          particle.vy *= -1
          particle.y = Math.max(particle.radius, Math.min(canvas.height - particle.radius, particle.y))
        }

        // Draw particle
        ctx.fillStyle = isDarkMode ? `rgba(59, 130, 246, ${particle.opacity})` : `rgba(59, 130, 246, ${particle.opacity * 0.7})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections to nearby particles
        for (let j = index + 1; j < particles.length; j++) {
          const other = particles[j]
          const dist = Math.hypot(particle.x - other.x, particle.y - other.y)
          if (dist < 100) {
            ctx.strokeStyle = isDarkMode ? `rgba(59, 130, 246, ${(1 - dist / 100) * 0.1})` : `rgba(59, 130, 246, ${(1 - dist / 100) * 0.05})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isDarkMode, mousePosition])

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        {/* Canvas for particle animation */}
        <canvas ref={canvasRef} className="fixed inset-0 -z-10" />

        {/* Header with theme toggle */}
        <header className="sticky top-0 z-50 backdrop-blur-sm border-b border-primary/20 bg-background/80">
          <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-primary bg-clip-text text-transparent">
              Anchal
            </Link>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="transition-all duration-300"
              >
                {isDarkMode ? '☀️ Light' : '🌙 Dark'}
              </Button>
              <Button size="sm" asChild className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              {/* Left - Text Content */}
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-primary animate-pulse"></div>
                    <span className="text-sm font-semibold text-primary">Available for Opportunities</span>
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-primary to-purple-500 animate-pulse">
                    Cybersecurity Professional & AI Protector
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-delay-1">
                    With 2+ years of consulting experience at KPMG and specialized training in secure AI development, I help organizations strengthen their security posture across SOC operations, incident response, and emerging threats.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 animate-fade-in-delay-2">
                  <div className="space-y-1 p-4 rounded-lg bg-primary/10 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all">
                    <p className="text-2xl font-bold text-primary">2+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="space-y-1 p-4 rounded-lg bg-primary/10 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all">
                    <p className="text-2xl font-bold text-primary">50+</p>
                    <p className="text-sm text-muted-foreground">Projects Secured</p>
                  </div>
                  <div className="space-y-1 p-4 rounded-lg bg-primary/10 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all">
                    <p className="text-2xl font-bold text-primary">10+</p>
                    <p className="text-sm text-muted-foreground">Certifications</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 text-white border-0 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                  <Button size="lg" variant="outline" className="transition-all duration-300 hover:border-primary/70 hover:bg-primary/10">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Button>
                </div>
              </div>

              {/* Right - Profile Image */}
              <div className="relative animate-fade-in-delay-1">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-primary rounded-2xl blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative">
                  <Image
                    src="/anchal-professional.png"
                    width={400}
                    height={400}
                    alt="Anchal"
                    className="rounded-2xl border-4 border-primary/20 shadow-2xl object-cover hover:border-primary/50 transition-all duration-300 w-full"
                  />
                  <div className="absolute -bottom-6 left-6 right-6 bg-background/90 backdrop-blur-lg rounded-xl p-4 border border-primary/20 shadow-lg">
                    <p className="font-semibold text-lg mb-2">Current Focus</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50">AI Security</Badge>
                      <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50">MCP Architecture</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-muted/30 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
                <p className="text-xl text-muted-foreground">Cybersecurity innovator with a passion for secure AI development</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a cybersecurity graduate from Guru Nanak Dev University and former Cybersecurity Analyst at KPMG India with 2+ years of consulting experience. I've supported enterprise clients across SOC operations, incident response, DLP, vulnerability management, and risk assessment.
                  </p>
                  <p>
                    Currently pursuing my Master's in Information Technology (Cybersecurity) at Asia Pacific International College in Melbourne, Australia. I recently completed the AI Protector Workshop—a comprehensive 10-week program—developing expertise in securing AI agents, MCP server architecture, penetration testing, and shift-left security practices.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Key Achievements</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3 items-start">
                      <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Analyzed 1000+ security alerts in SOC operations</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Managed 50-70 DLP alerts weekly, reducing false positives by ~40%</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Supported remediation of 100+ vulnerabilities</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Authored 25+ SOPs and technical guides</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="space-y-12">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-6 w-6 text-primary" />
                  <h2 className="text-4xl font-bold tracking-tight">Professional Experience</h2>
                </div>
              </div>

              {/* Experience Card */}
              <Card className="border-primary/30 bg-gradient-to-br from-background to-background/50 hover:border-primary/70 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4 flex-wrap">
                    <div>
                      <CardTitle className="text-2xl">Cybersecurity Analyst</CardTitle>
                      <CardDescription className="text-base mt-2">KPMG India</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-primary border-primary/50">Oct 2022 - Jan 2025</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Monitored and analyzed 1000+ security alerts daily in SOC operations environment</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Managed 50-70 DLP alerts weekly, reducing false positives by approximately 40%</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Supported remediation efforts for 100+ identified vulnerabilities</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Authored and maintained 25+ SOPs and technical guides for security operations</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Collaborated with cross-functional teams on incident response and threat mitigation</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Gained expertise in SIEM, Forcepoint DLP, Nessus, Qualys, and incident response workflows</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="space-y-12">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Code className="h-6 w-6 text-primary" />
                  <h2 className="text-4xl font-bold tracking-tight">Skills & Expertise</h2>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Security Skills */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Security Operations</h3>
                  <div className="flex flex-wrap gap-2">
                    {['SOC Operations', 'Incident Response', 'Threat Analysis', 'Vulnerability Management', 'Risk Assessment', 'DLP Administration'].map((skill) => (
                      <Badge key={skill} className="bg-primary/20 text-primary border-primary/50 hover:bg-primary/30 transition-all cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Tools & Technologies */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {['SIEM', 'Forcepoint DLP', 'Nessus', 'Qualys', 'Kali Linux', 'Splunk'].map((tool) => (
                      <Badge key={tool} className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50 hover:bg-cyan-500/30 transition-all cursor-default">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* AI & Development */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">AI Security</h3>
                  <div className="flex flex-wrap gap-2">
                    {['AI Agent Security', 'MCP Architecture', 'Shift-Left Security', 'Secure SDLC', 'OAuth 2.1', 'Arcjet'].map((skill) => (
                      <Badge key={skill} className="bg-purple-500/20 text-purple-400 border-purple-500/50 hover:bg-purple-500/30 transition-all cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Programming */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Programming</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Java', 'SQL', 'JavaScript', 'TypeScript', 'Next.js'].map((lang) => (
                      <Badge key={lang} className="bg-green-500/20 text-green-400 border-green-500/50 hover:bg-green-500/30 transition-all cursor-default">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Education */}
              <div className="space-y-8">
                <div className="flex items-center gap-2 mb-8">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h2 className="text-3xl font-bold tracking-tight">Education</h2>
                </div>

                <Card className="border-primary/30 bg-gradient-to-br from-background to-background/50">
                  <CardHeader>
                    <CardTitle>Master's in Information Technology</CardTitle>
                    <CardDescription className="text-base">Specialization: Cybersecurity</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="font-semibold">Asia Pacific International College, Melbourne</p>
                    <p className="text-sm text-muted-foreground">Expected Graduation: December 2026</p>
                  </CardContent>
                </Card>

                <Card className="border-primary/30 bg-gradient-to-br from-background to-background/50">
                  <CardHeader>
                    <CardTitle>Bachelor's in Computer Science & Engineering</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="font-semibold">Guru Nanak Dev University, India</p>
                  </CardContent>
                </Card>
              </div>

              {/* Certifications */}
              <div className="space-y-8">
                <div className="flex items-center gap-2 mb-8">
                  <Award className="h-6 w-6 text-primary" />
                  <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
                </div>

                <div className="space-y-3">
                  {[
                    { name: 'Microsoft Security Engineer (SC-900)', color: 'cyan' },
                    { name: 'DLP Administrator 9.0', color: 'blue' },
                    { name: 'Oracle Cloud Infrastructure Foundations', color: 'orange' },
                    { name: 'AI Protector Workshop (10-week)', color: 'purple' },
                  ].map((cert) => (
                    <Card key={cert.name} className="border-primary/30 bg-gradient-to-br from-background to-background/50 hover:border-primary/50 transition-all">
                      <CardContent className="pt-6">
                        <p className="font-semibold">{cert.name}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  <h2 className="text-4xl font-bold tracking-tight">Awards & Recognition</h2>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-primary/30 bg-gradient-to-br from-background to-background/50 hover:border-primary/70 transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg">Kudos Award</CardTitle>
                    <CardDescription>KPMG India - January 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Recognition for exceptional performance and contributions to security operations</p>
                  </CardContent>
                </Card>

                <Card className="border-primary/30 bg-gradient-to-br from-background to-background/50 hover:border-primary/70 transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg">Accolades Award</CardTitle>
                    <CardDescription>KPMG India - April 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Recognized for outstanding security analysis and incident response coordination</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-2xl">
            <div className="space-y-8 text-center">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold tracking-tight">Let's Connect</h2>
                <p className="text-xl text-muted-foreground">I'm always interested in discussing cybersecurity, AI security, and innovative solutions.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <Card className="border-primary/30 bg-gradient-to-br from-background to-background/50 hover:border-primary/70 hover:shadow-lg transition-all cursor-pointer">
                  <CardContent className="pt-6 space-y-3">
                    <Mail className="h-8 w-8 text-primary mx-auto" />
                    <a href="mailto:anchal1234asr@gmail.com" className="block text-sm hover:text-primary transition-colors">
                      anchal1234asr@gmail.com
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-primary/30 bg-gradient-to-br from-background to-background/50 hover:border-primary/70 hover:shadow-lg transition-all cursor-pointer">
                  <CardContent className="pt-6 space-y-3">
                    <Phone className="h-8 w-8 text-primary mx-auto" />
                    <a href="tel:+61416401374" className="block text-sm hover:text-primary transition-colors">
                      +61 416 401 374
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-primary/30 bg-gradient-to-br from-background to-background/50 hover:border-primary/70 hover:shadow-lg transition-all cursor-pointer">
                  <CardContent className="pt-6 space-y-3">
                    <MapPin className="h-8 w-8 text-primary mx-auto" />
                    <p className="text-sm">Melbourne, Australia</p>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-8 space-y-4">
                <p className="text-sm text-muted-foreground">Connect with me on professional platforms</p>
                <div className="flex justify-center gap-4">
                  <Button size="lg" asChild variant="outline" className="hover:border-primary/70 hover:bg-primary/10 transition-all">
                    <a href="https://www.linkedin.com/in/annchal-634291178/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-5 w-5" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button size="lg" asChild variant="outline" className="hover:border-primary/70 hover:bg-primary/10 transition-all">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-5 w-5" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-primary/20 py-8 bg-muted/40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>&copy; 2024 Anchal. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="/cv" className="hover:text-primary transition-colors">CV</Link>
                <Link href="/" className="hover:text-primary transition-colors">Portfolio</Link>
                <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                <a href="https://www.linkedin.com/in/annchal-634291178/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
