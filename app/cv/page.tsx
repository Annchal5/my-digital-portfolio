'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Download, Github, Linkedin, Mail, Phone, MapPin, Award, GraduationCap, Briefcase, Code, Shield, Twitter, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function CVPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [formStatus, setFormStatus] = useState('')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Track mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Subtle particle animation background
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
    const particleCount = 30

    // Initialize particles - reduced count and movement for subtlety
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
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
        // Calculate distance to mouse - only subtle effect
        const dx = mousePosition.x - particle.x
        const dy = mousePosition.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Very subtle repel from mouse
        if (distance < 200) {
          const angle = Math.atan2(dy, dx)
          particle.vx -= Math.cos(angle) * 0.1
          particle.vy -= Math.sin(angle) * 0.1
        }

        // Very slight attraction to center
        particle.vx += (canvas.width / 2 - particle.x) * 0.00005
        particle.vy += (canvas.height / 2 - particle.y) * 0.00005

        // Damping
        particle.vx *= 0.98
        particle.vy *= 0.98

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

        // Draw particle - blue color scheme
        ctx.fillStyle = isDarkMode ? `rgba(59, 130, 246, ${particle.opacity})` : `rgba(59, 130, 246, ${particle.opacity * 0.5})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()

        // Draw subtle connections
        for (let j = index + 1; j < particles.length; j++) {
          const other = particles[j]
          const dist = Math.hypot(particle.x - other.x, particle.y - other.y)
          if (dist < 150) {
            ctx.strokeStyle = isDarkMode ? `rgba(59, 130, 246, ${(1 - dist / 150) * 0.05})` : `rgba(59, 130, 246, ${(1 - dist / 150) * 0.02})`
            ctx.lineWidth = 0.5
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('Sending...')
    setTimeout(() => {
      setFormStatus('Message sent! I\'ll get back to you soon.')
      (e.target as HTMLFormElement).reset()
      setTimeout(() => setFormStatus(''), 3000)
    }, 1000)
  }

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <canvas ref={canvasRef} className="fixed inset-0 -z-10" />

        <header className="sticky top-0 z-50 backdrop-blur-sm border-b border-blue-500/20 bg-background/80">
          <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
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
              <Button size="sm" asChild className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </header>

        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 animate-pulse opacity-60"></div>
                    <span className="text-sm font-semibold text-blue-400">Available for Opportunities</span>
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600">
                    Cybersecurity Professional & AI Protector
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-delay-1">
                    With 2+ years of consulting experience at KPMG and specialized training in secure AI development, I help organizations strengthen their security posture across SOC operations, incident response, and emerging threats.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 animate-fade-in-delay-2">
                  <div className="space-y-1 p-4 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/50 transition-all">
                    <p className="text-2xl font-bold text-blue-400">2+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="space-y-1 p-4 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/50 transition-all">
                    <p className="text-2xl font-bold text-blue-400">50+</p>
                    <p className="text-sm text-muted-foreground">Projects Secured</p>
                  </div>
                  <div className="space-y-1 p-4 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/50 transition-all">
                    <p className="text-2xl font-bold text-blue-400">10+</p>
                    <p className="text-sm text-muted-foreground">Certifications</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                  <Button size="lg" variant="outline" className="transition-all duration-300 hover:border-blue-500/70 hover:bg-blue-500/10">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Button>
                </div>
              </div>

              <div className="relative animate-fade-in-delay-1">
                {/* Animated gradient background glow */}
                <div className="absolute -inset-2 bg-gradient-to-br from-blue-400 via-purple-500 to-blue-600 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>
                <div className="absolute -inset-1 bg-gradient-to-tr from-purple-400 to-blue-400 rounded-3xl blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                <div className="relative">
                  {/* Decorative corner elements */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-blue-400 rounded-lg opacity-60"></div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-purple-500 rounded-lg opacity-60"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-purple-500 rounded-lg opacity-60"></div>
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-blue-400 rounded-lg opacity-60"></div>
                  
                  {/* Main image with enhanced styling */}
                  <div className="relative overflow-hidden rounded-3xl border-2 border-blue-400/40 shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:border-purple-400/60 group">
                    <Image
                      src="/anchal-professional.png"
                      width={400}
                      height={400}
                      alt="Anchal"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Enhanced status badge with floating animation */}
                  <div className="absolute -bottom-4 left-6 right-6 bg-gradient-to-r from-blue-500/95 to-purple-600/95 backdrop-blur-xl rounded-2xl p-5 border-2 border-blue-400/50 shadow-2xl hover:shadow-purple-500/60 transition-all duration-300 hover:-translate-y-2 transform animate-float">
                    <p className="font-semibold text-lg text-white mb-3 flex items-center gap-2">
                      <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
                      Currently Focused On
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Badge className="bg-white/20 text-blue-100 border-blue-300/50 hover:bg-white/30 transition-all cursor-default font-medium">🔒 AI Security</Badge>
                      <Badge className="bg-white/20 text-blue-100 border-blue-300/50 hover:bg-white/30 transition-all cursor-default font-medium">⚙️ MCP Architecture</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
                <p className="text-xl text-muted-foreground">Cybersecurity innovator with a passion for secure AI development</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    I'm a cybersecurity graduate from Guru Nanak Dev University and former Cybersecurity Analyst at KPMG India with 2+ years of consulting experience. I've supported enterprise clients across SOC operations, incident response, DLP, vulnerability management, and risk assessment.
                  </p>
                  <p>
                    Currently pursuing my Master's in Information Technology (Cybersecurity) at Asia Pacific International College in Melbourne, Australia. I recently completed the AI Protector Workshop—a comprehensive 10-week program—developing expertise in securing AI agents, MCP server architecture, penetration testing, and shift-left security practices.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Key Achievements</h3>
                  <ul className="space-y-3 text-muted-foreground text-base">
                    <li className="flex gap-3 items-start">
                      <Shield className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Analyzed 1000+ security alerts in SOC operations</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <Shield className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Managed 50-70 DLP alerts weekly, reducing false positives by ~40%</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <Shield className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Supported remediation of 100+ vulnerabilities</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <Shield className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Authored 25+ SOPs and technical guides</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="space-y-12">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-6 w-6 text-blue-400" />
                  <h2 className="text-4xl font-bold tracking-tight">Professional Experience</h2>
                </div>
              </div>

              <Card className="border-blue-500/30 bg-gradient-to-br from-background to-background/50 hover:border-blue-500/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4 flex-col md:flex-row md:items-center">
                    <div>
                      <CardTitle className="text-2xl">Cybersecurity Analyst</CardTitle>
                      <CardDescription className="text-base mt-2">KPMG India</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-blue-400 border-blue-500/50">Oct 2022 - Jan 2025</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>Monitored and analyzed 1000+ security alerts daily in SOC operations environment</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>Managed 50-70 DLP alerts weekly, reducing false positives by approximately 40%</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>Supported remediation efforts for 100+ identified vulnerabilities</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>Authored and maintained 25+ SOPs and technical guides for security operations</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>Collaborated with cross-functional teams on incident response and threat mitigation</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>Gained expertise in SIEM, Forcepoint DLP, Nessus, Qualys, and incident response workflows</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="space-y-12">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Code className="h-6 w-6 text-blue-400" />
                  <h2 className="text-4xl font-bold tracking-tight">Featured Projects</h2>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-blue-500/30 bg-gradient-to-br from-background to-background/50 hover:border-blue-500/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-2">
                  <CardHeader>
                    <CardTitle>AI Protector Workshop</CardTitle>
                    <CardDescription>10-Week Immersive Program</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">Comprehensive training in secure AI development, MCP server architecture, and offensive security testing.</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">AI Security</Badge>
                      <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50">MCP</Badge>
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">Testing</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-500/30 bg-gradient-to-br from-background to-background/50 hover:border-blue-500/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-2">
                  <CardHeader>
                    <CardTitle>Digital Portfolio</CardTitle>
                    <CardDescription>Modern Next.js Platform</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">Production-ready portfolio with interactive animations, dark mode, and responsive design for professional branding.</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">Next.js</Badge>
                      <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50">React</Badge>
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">Tailwind</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-500/30 bg-gradient-to-br from-background to-background/50 hover:border-blue-500/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-2">
                  <CardHeader>
                    <CardTitle>SOC Automation</CardTitle>
                    <CardDescription>Security Operations Center</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">Developed automated alert triage and response workflows for enterprise security operations.</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">Python</Badge>
                      <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50">SIEM</Badge>
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">Automation</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-500/30 bg-gradient-to-br from-background to-background/50 hover:border-blue-500/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-2">
                  <CardHeader>
                    <CardTitle>Penetration Testing Suite</CardTitle>
                    <CardDescription>Security Assessment Tools</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">Comprehensive toolkit for vulnerability assessment and penetration testing with detailed reporting.</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">Kali Linux</Badge>
                      <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50">Testing</Badge>
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">Security</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="space-y-12">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Code className="h-6 w-6 text-blue-400" />
                  <h2 className="text-4xl font-bold tracking-tight">Skills & Expertise</h2>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Security Operations</h3>
                  <div className="flex flex-wrap gap-2">
                    {['SOC Operations', 'Incident Response', 'Threat Analysis', 'Vulnerability Management', 'Risk Assessment', 'DLP Administration'].map((skill) => (
                      <Badge key={skill} className="bg-blue-500/20 text-blue-400 border-blue-500/50 hover:bg-blue-500/30 transition-all cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {['SIEM', 'Forcepoint DLP', 'Nessus', 'Qualys', 'Kali Linux', 'Splunk'].map((tool) => (
                      <Badge key={tool} className="bg-blue-400/20 text-blue-300 border-blue-400/50 hover:bg-blue-400/30 transition-all cursor-default">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

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

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center gap-2 mb-8">
                  <GraduationCap className="h-6 w-6 text-blue-400" />
                  <h2 className="text-3xl font-bold tracking-tight">Education</h2>
                </div>

                <Card className="border-blue-500/30 bg-gradient-to-br from-background to-background/50">
                  <CardHeader>
                    <CardTitle>Master's in Information Technology</CardTitle>
                    <CardDescription className="text-base">Specialization: Cybersecurity</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="font-semibold">Asia Pacific International College, Melbourne</p>
                    <p className="text-sm text-muted-foreground">Expected Graduation: December 2026</p>
                  </CardContent>
                </Card>

                <Card className="border-blue-500/30 bg-gradient-to-br from-background to-background/50">
                  <CardHeader>
                    <CardTitle>Bachelor's in Computer Science & Engineering</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="font-semibold">Guru Nanak Dev University, India</p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-2 mb-8">
                  <Award className="h-6 w-6 text-blue-400" />
                  <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
                </div>

                <div className="space-y-3">
                  {[
                    'Microsoft Security Engineer (SC-900)',
                    'DLP Administrator 9.0',
                    'Oracle Cloud Infrastructure Foundations',
                    'AI Protector Workshop (10-week)',
                  ].map((cert) => (
                    <Card key={cert} className="border-blue-500/30 bg-gradient-to-br from-background to-background/50 hover:border-blue-500/50 transition-all">
                      <CardContent className="pt-6">
                        <p className="font-semibold">{cert}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-blue-400" />
                  <h2 className="text-4xl font-bold tracking-tight">Awards & Recognition</h2>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-blue-500/30 bg-gradient-to-br from-background to-background/50 hover:border-blue-500/70 transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg">Kudos Award</CardTitle>
                    <CardDescription>KPMG India - January 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Recognition for exceptional performance and contributions to security operations</p>
                  </CardContent>
                </Card>

                <Card className="border-blue-500/30 bg-gradient-to-br from-background to-background/50 hover:border-blue-500/70 transition-all">
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

        <section id="contact" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-2xl">
            <div className="space-y-8">
              <div className="space-y-2 text-center">
                <h2 className="text-4xl font-bold tracking-tight">Let's Connect</h2>
                <p className="text-xl text-muted-foreground">I'm always interested in discussing cybersecurity, AI security, and innovative solutions.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-12">
                <Card className="border-blue-500/30 bg-gradient-to-br from-background to-background/50 hover:border-blue-500/70 hover:shadow-lg transition-all cursor-pointer">
                  <CardContent className="pt-6 space-y-3">
                    <Mail className="h-8 w-8 text-blue-400 mx-auto" />
                    <a href="mailto:anchal1234asr@gmail.com" className="block text-sm hover:text-blue-400 transition-colors text-center">
                      anchal1234asr@gmail.com
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-blue-500/30 bg-gradient-to-br from-background to-background/50 hover:border-blue-500/70 hover:shadow-lg transition-all cursor-pointer">
                  <CardContent className="pt-6 space-y-3">
                    <Phone className="h-8 w-8 text-blue-400 mx-auto" />
                    <a href="tel:+61416401374" className="block text-sm hover:text-blue-400 transition-colors text-center">
                      +61 416 401 374
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-blue-500/30 bg-gradient-to-br from-background to-background/50 hover:border-blue-500/70 hover:shadow-lg transition-all cursor-pointer">
                  <CardContent className="pt-6 space-y-3">
                    <MapPin className="h-8 w-8 text-blue-400 mx-auto" />
                    <p className="text-sm text-center">Melbourne, Australia</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-blue-500/30 bg-gradient-to-br from-background to-background/50">
                <CardHeader>
                  <CardTitle>Send Me a Message</CardTitle>
                  <CardDescription>I'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          required
                          className="w-full px-4 py-2 rounded-lg border border-blue-500/30 bg-background/50 focus:border-blue-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          required
                          className="w-full px-4 py-2 rounded-lg border border-blue-500/30 bg-background/50 focus:border-blue-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                      <input
                        id="subject"
                        type="text"
                        placeholder="Message subject"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-blue-500/30 bg-background/50 focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <textarea
                        id="message"
                        placeholder="Your message..."
                        rows={5}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-blue-500/30 bg-background/50 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                      {formStatus && (
                        <p className="text-sm text-blue-400">{formStatus}</p>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>

              <div className="pt-8 space-y-4 text-center">
                <p className="text-sm text-muted-foreground">Connect with me on professional platforms</p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <Button size="lg" asChild variant="outline" className="hover:border-blue-500/70 hover:bg-blue-500/10 transition-all">
                    <a href="https://www.linkedin.com/in/annchal-634291178/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-5 w-5" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button size="lg" asChild variant="outline" className="hover:border-blue-500/70 hover:bg-blue-500/10 transition-all">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-5 w-5" />
                      GitHub
                    </a>
                  </Button>
                  <Button size="lg" asChild variant="outline" className="hover:border-blue-500/70 hover:bg-blue-500/10 transition-all">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <Twitter className="mr-2 h-5 w-5" />
                      Twitter
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-blue-500/20 py-8 bg-muted/40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>&copy; 2024 Anchal. All rights reserved.</p>
              <div className="flex gap-6 flex-wrap justify-center">
                <Link href="/cv" className="hover:text-blue-400 transition-colors">CV</Link>
                <Link href="/" className="hover:text-blue-400 transition-colors">Portfolio</Link>
                <Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
                <a href="https://www.linkedin.com/in/annchal-634291178/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-1">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-1">
                  <Twitter className="h-4 w-4" />
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
