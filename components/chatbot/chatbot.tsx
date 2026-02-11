"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  X,
  Send,
  Shield,
  Lock,
  AlertTriangle,
  CheckCircle,
  User,
  Bot
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'options' | 'contact';
  options?: string[];
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: "Hi! I'm Anchal's portfolio assistant. Ask me anything about my cybersecurity experience, projects, skills, or background!",
    sender: 'bot',
    timestamp: new Date()
  }
];

const responses = {
  "Tell me about your background": {
    text: "I'm Anchal, a Cybersecurity Analyst with over 2 years of enterprise experience at KPMG, currently completing an intensive AI Protector Workshop at Ausbiz Consulting.\n\n🎓 **Education**: Master of IT (Cybersecurity) at Asia Pacific International College, Melbourne\n📍 **Location**: Based in Australia, available for remote work\n🏆 **Recognition**: KPMG Kudos Award and Accolades for security operations excellence\n\nMy journey combines hands-on enterprise consulting with cutting-edge AI security practices. I specialize in stopping breaches before they happen through proactive security measures.",
    type: 'text' as const
  },
  "What cybersecurity services do you offer?": {
    text: "Based on my KPMG experience and current AI Protector training, I offer comprehensive cybersecurity services:\n\n🔒 **DLP Implementation & Management**: Forcepoint & Netskope policy design, incident response, and compliance\n🛡️ **Cloud Security**: Netskope CASB deployment, threat protection, and secure cloud adoption\n🔍 **Security Operations**: SIEM monitoring (Splunk, MS Sentinel), alert triage, and incident investigation\n🤖 **AI Security**: Secure AI development, threat modeling, and MCP server protection\n🧪 **Penetration Testing**: Kali Linux testing, WAF validation, and vulnerability assessments\n📊 **Compliance & Risk**: GDPR coordination, ISO 27001 alignment, and security auditing\n\nEach service includes detailed reporting and executive-ready documentation.",
    type: 'text' as const
  },
  "Show me your projects": {
    text: "Here are my key cybersecurity projects and implementations:\n\n🏢 **Enterprise DLP at KPMG**: Led Forcepoint & Symantec DLP rollout for major enterprise, reducing data leaks and improving compliance\n☁️ **Netskope CASB Implementation**: Cloud app visibility, threat protection, and policy enforcement across SaaS/IaaS\n🤖 **AI Portfolio Security**: Hardened digital portfolio with WAF, Arcjet, and Clerk authentication\n🛡️ **MCP Server Security**: OAuth 2.1, Arcjet firewall, and secure API architecture\n🧪 **Penetration Testing Playbook**: Kali Linux methodology with real-world attack scenarios\n\nAll projects include security matrices, risk assessments, and operational runbooks. Check out the Projects page for detailed case studies!",
    type: 'text' as const
  },
  "What's your experience with DLP?": {
    text: "DLP (Data Loss Prevention) is one of my core specialties from my KPMG role:\n\n📊 **Policy Design**: Created custom DLP policies reducing false positives by ~40%\n🚨 **Incident Management**: Handled 50-70 weekly alerts, managed end-to-end response workflows\n🔧 **Platform Expertise**: Forcepoint, Symantec DLP, Netskope, and Microsoft tools\n📈 **Performance Metrics**: Monitored 1,000+ daily security alerts across SIEM platforms\n🎯 **Client Engagement**: Led PhonePe fintech client project with direct stakeholder communication\n📋 **Documentation**: Authored 25+ SOPs and technical guides for operational efficiency\n\nI excel at balancing security controls with business usability while ensuring compliance.",
    type: 'text' as const
  },
  "Tell me about your certifications": {
    text: "I hold industry-recognized certifications and maintain active professional memberships:\n\n🎓 **ISC2 Certified in Cybersecurity (CC)**\n☁️ **Microsoft Security Fundamentals (SC-900)**\n🔒 **Forcepoint DLP Administrator Certified**\n☁️ **Oracle Cloud Infrastructure (OCI) Foundations**\n🌐 **Netskope Cloud Security Certified**\n\n**Professional Memberships:**\n👥 **AISA** - Australian Information Security Association\n🚀 **AWSN** - Australian Women in Security Network\n🎯 **ISC2** - International Information System Security Certification Consortium\n💻 **ACS** - Australian Computer Society\n\nI'm pursuing advanced certifications and stay current with the latest security trends through continuous learning.",
    type: 'text' as const
  },
  "Contact information": {
    text: "I'd love to discuss how I can help secure your organization! Here are the best ways to reach me:\n\n📧 **Email**: anchal1234asr@gmail.com\n💼 **LinkedIn**: [Connect with me](https://www.linkedin.com/in/anchhal-634291178/)\n📱 **Phone**: Available upon request\n🌐 **Portfolio**: You're here! (cybersecurity portfolio)\n\nI'm actively seeking cybersecurity opportunities in Australia and respond within 24 hours. Whether you need DLP implementation, cloud security, or AI protection - I'm here to help!\n\nFeel free to reach out for a consultation or to discuss your specific security needs.",
    type: 'contact' as const
  },
  "More about DLP services": {
    text: "My DLP expertise includes comprehensive data protection services:\n\n📋 **Policy Creation**: Custom rules for PII, financial data, and intellectual property\n🚨 **Alert Management**: Intelligent triage and escalation procedures\n🔍 **Forensic Analysis**: E-discovery support and evidence collection\n📊 **Compliance Reporting**: GDPR, SOX, and industry-specific requirements\n🎯 **User Training**: Security awareness programs and policy communication\n⚡ **Automation**: Workflow optimization and false positive reduction\n\nFrom my KPMG experience managing enterprise DLP for clients like PhonePe, I understand how to balance security with business operations.",
    type: 'text' as const
  },
  "AI security expertise": {
    text: "AI security is my current focus through the AI Protector Workshop:\n\n🤖 **Secure AI Development**: Threat modeling and secure coding practices\n🛡️ **MCP Server Protection**: OAuth 2.1, Arcjet firewalls, and API security\n🔒 **Environment Hardening**: Node.js, Git, VS Code, and Copilot security\n📊 **Data Flow Security**: Protecting AI training data and model integrity\n🧪 **Penetration Testing**: WAF validation and AI system testing\n📋 **Compliance**: AU data residency and AI ethics considerations\n\nI combine traditional cybersecurity with emerging AI threats, ensuring responsible and secure AI deployment.",
    type: 'text' as const
  },
  "Penetration testing details": {
    text: "My penetration testing expertise includes:\n\n🧪 **Methodology**: Structured testing using Kali Linux and industry frameworks\n🌐 **Web Applications**: OWASP Top 10 vulnerability assessments\n🔒 **WAF Testing**: Arcjet and other firewall validation\n💻 **Network Testing**: Infrastructure and system-level assessments\n📱 **API Testing**: RESTful and GraphQL endpoint security\n📊 **Reporting**: Executive summaries and technical remediation guides\n🎯 **Real-World Scenarios**: SQL injection, brute force, and advanced persistent threats\n\nAll testing includes detailed findings, risk prioritization, and actionable remediation steps.",
    type: 'text' as const
  },
  // Additional conversational responses
  "experience": {
    text: "I have over 2 years of enterprise cybersecurity experience at KPMG, where I specialized in:\n\n🔍 **Security Operations**: Monitoring 1,000+ daily alerts across SIEM platforms (Splunk, MS Sentinel)\n🛡️ **DLP Management**: Forcepoint & Symantec DLP implementation, reducing false positives by 40%\n☁️ **Cloud Security**: Netskope CASB deployment for threat protection and compliance\n🚨 **Incident Response**: Alert triage, investigation, and root cause analysis\n📋 **Compliance**: GDPR coordination and security documentation\n\nCurrently completing AI Protector Workshop focusing on secure AI development and MCP server protection.",
    type: 'text' as const
  },
  "projects": {
    text: "Here are my key cybersecurity projects and implementations:\n\n🏢 **Enterprise DLP at KPMG**: Led Forcepoint & Symantec DLP rollout for major enterprise, reducing data leaks and improving compliance\n☁️ **Netskope CASB Implementation**: Cloud app visibility, threat protection, and policy enforcement across SaaS/IaaS\n🤖 **AI Portfolio Security**: Hardened digital portfolio with WAF, Arcjet, and Clerk authentication\n🛡️ **MCP Server Security**: OAuth 2.1, Arcjet firewall, and secure API architecture\n🧪 **Penetration Testing Playbook**: Kali Linux methodology with real-world attack scenarios\n\nAll projects include security matrices, risk assessments, and operational runbooks. Check out the Projects page for detailed case studies!",
    type: 'text' as const
  },
  "certifications": {
    text: "I hold industry-recognized certifications and maintain active professional memberships:\n\n🎓 **ISC2 Certified in Cybersecurity (CC)**\n☁️ **Microsoft Security Fundamentals (SC-900)**\n🔒 **Forcepoint DLP Administrator Certified**\n☁️ **Oracle Cloud Infrastructure (OCI) Foundations**\n🌐 **Netskope Cloud Security Certified**\n\n**Professional Memberships:**\n👥 **AISA** - Australian Information Security Association\n🚀 **AWSN** - Australian Women in Security Network\n🎯 **ISC2** - International Information System Security Certification Consortium\n💻 **ACS** - Australian Computer Society\n\nI'm pursuing advanced certifications and stay current with the latest security trends through continuous learning.",
    type: 'text' as const
  },
  "contact": {
    text: "I'd love to discuss how I can help secure your organization! Here are the best ways to reach me:\n\n📧 **Email**: anchal1234asr@gmail.com\n💼 **LinkedIn**: [Connect with me](https://www.linkedin.com/in/annchal-634291178/)\n📱 **Phone**: Available upon request\n🌐 **Portfolio**: You're here! (cybersecurity portfolio)\n\nI'm actively seeking cybersecurity opportunities in Australia and respond within 24 hours. Whether you need DLP implementation, cloud security, or AI protection - I'm here to help!\n\nFeel free to reach out for a consultation or to discuss your specific security needs.",
    type: 'contact' as const
  },
  "kpmg": {
    text: "My KPMG experience (2+ years) focused on enterprise cybersecurity operations:\n\n🎯 **Security Operations Center**: Monitored and analyzed 1,000+ daily security alerts\n🛡️ **DLP Operations**: Managed Forcepoint & Symantec DLP systems, reducing false positives by 40%\n☁️ **Cloud Security**: Implemented Netskope CASB for cloud app protection\n🚨 **Incident Response**: Led alert triage, investigation, and escalation procedures\n📋 **Client Projects**: Managed PhonePe fintech engagement with direct client communication\n📚 **Documentation**: Authored 25+ SOPs and technical guides\n\nReceived KPMG Kudos Award and Accolades for operational excellence.",
    type: 'text' as const
  },
  "ai security": {
    text: "AI security is my current focus through the AI Protector Workshop:\n\n🤖 **Secure AI Development**: Threat modeling and secure coding practices\n🛡️ **MCP Server Protection**: OAuth 2.1, Arcjet firewalls, and API security\n🔒 **Environment Hardening**: Node.js, Git, VS Code, and Copilot security\n📊 **Data Flow Security**: Protecting AI training data and model integrity\n🧪 **Penetration Testing**: WAF validation and AI system testing\n📋 **Compliance**: AU data residency and AI ethics considerations\n\nI combine traditional cybersecurity with emerging AI threats, ensuring responsible and secure AI deployment.",
    type: 'text' as const
  },
  "tell me about your background": {
    text: "I'm Anchal, a Cybersecurity Analyst with over 2 years of enterprise experience at KPMG, currently completing an intensive AI Protector Workshop at Ausbiz Consulting.\n\n🎓 **Education**: Master of IT (Cybersecurity) at Asia Pacific International College, Melbourne\n📍 **Location**: Based in Australia, available for remote work\n🏆 **Recognition**: KPMG Kudos Award and Accolades for security operations excellence\n\nMy journey combines hands-on enterprise consulting with cutting-edge AI security practices. I specialize in stopping breaches before they happen through proactive security measures.",
    type: 'text' as const
  },
  "what cybersecurity services do you offer?": {
    text: "Based on my KPMG experience and current AI Protector training, I offer comprehensive cybersecurity services:\n\n🔒 **DLP Implementation & Management**: Forcepoint & Netskope policy design, incident response, and compliance\n🛡️ **Cloud Security**: Netskope CASB deployment, threat protection, and secure cloud adoption\n🔍 **Security Operations**: SIEM monitoring (Splunk, MS Sentinel), alert triage, and incident investigation\n🤖 **AI Security**: Secure AI development, threat modeling, and MCP server protection\n🧪 **Penetration Testing**: Kali Linux testing, WAF validation, and vulnerability assessments\n📊 **Compliance & Risk**: GDPR coordination, ISO 27001 alignment, and security auditing\n\nEach service includes detailed reporting and executive-ready documentation.",
    type: 'options' as const,
    options: ["More about DLP services", "AI security expertise", "Penetration testing details"]
  },
  "show me your projects": {
    text: "Here are my key cybersecurity projects and implementations:\n\n🏢 **Enterprise DLP at KPMG**: Led Forcepoint & Symantec DLP rollout for major enterprise, reducing data leaks and improving compliance\n☁️ **Netskope CASB Implementation**: Cloud app visibility, threat protection, and policy enforcement across SaaS/IaaS\n🤖 **AI Portfolio Security**: Hardened digital portfolio with WAF, Arcjet, and Clerk authentication\n🛡️ **MCP Server Security**: OAuth 2.1, Arcjet firewall, and secure API architecture\n🧪 **Penetration Testing Playbook**: Kali Linux methodology with real-world attack scenarios\n\nAll projects include security matrices, risk assessments, and operational runbooks. Check out the Projects page for detailed case studies!",
    type: 'text' as const
  },
  "what's your experience with dlp?": {
    text: "DLP (Data Loss Prevention) is one of my core specialties from my KPMG role:\n\n📊 **Policy Design**: Created custom DLP policies reducing false positives by ~40%\n🚨 **Incident Management**: Handled 50-70 weekly alerts, managed end-to-end response workflows\n🔧 **Platform Expertise**: Forcepoint, Symantec DLP, Netskope, and Microsoft tools\n📈 **Performance Metrics**: Monitored 1,000+ daily security alerts across SIEM platforms\n🎯 **Client Engagement**: Led PhonePe fintech client project with direct stakeholder communication\n📋 **Documentation**: Authored 25+ SOPs and technical guides for operational efficiency\n\nI excel at balancing security controls with business usability while ensuring compliance.",
    type: 'text' as const
  },
  "tell me about your certifications": {
    text: "I hold industry-recognized certifications and maintain active professional memberships:\n\n🎓 **ISC2 Certified in Cybersecurity (CC)**\n☁️ **Microsoft Security Fundamentals (SC-900)**\n🔒 **Forcepoint DLP Administrator Certified**\n☁️ **Oracle Cloud Infrastructure (OCI) Foundations**\n🌐 **Netskope Cloud Security Certified**\n\n**Professional Memberships:**\n👥 **AISA** - Australian Information Security Association\n🚀 **AWSN** - Australian Women in Security Network\n🎯 **ISC2** - International Information System Security Certification Consortium\n💻 **ACS** - Australian Computer Society\n\nI'm pursuing advanced certifications and stay current with the latest security trends through continuous learning.",
    type: 'text' as const
  },
  "contact information": {
    text: "I'd love to discuss how I can help secure your organization! Here are the best ways to reach me:\n\n📧 **Email**: anchal1234asr@gmail.com\n💼 **LinkedIn**: [Connect with me](https://www.linkedin.com/in/annchal-634291178/)\n📱 **Phone**: Available upon request\n🌐 **Portfolio**: You're here! (cybersecurity portfolio)\n\nI'm actively seeking cybersecurity opportunities in Australia and respond within 24 hours. Whether you need DLP implementation, cloud security, or AI protection - I'm here to help!\n\nFeel free to reach out for a consultation or to discuss your specific security needs.",
    type: 'contact' as const
  },
  // Natural language variations
  "who are you": {
    text: "I'm Anchal, a Cybersecurity Analyst with over 2 years of enterprise experience at KPMG, currently completing an intensive AI Protector Workshop at Ausbiz Consulting.\n\n🎓 **Education**: Master of IT (Cybersecurity) at Asia Pacific International College, Melbourne\n📍 **Location**: Based in Australia, available for remote work\n🏆 **Recognition**: KPMG Kudos Award and Accolades for security operations excellence\n\nMy journey combines hands-on enterprise consulting with cutting-edge AI security practices. I specialize in stopping breaches before they happen through proactive security measures.",
    type: 'text' as const
  },
  "what do you do": {
    text: "I specialize in enterprise cybersecurity with expertise in:\n\n🔒 **Data Loss Prevention (DLP)**: Forcepoint & Netskope implementation, policy design, and incident response\n🛡️ **Cloud Security**: Netskope CASB deployment and threat protection across SaaS/IaaS\n🔍 **Security Operations**: SIEM monitoring (Splunk, MS Sentinel), alert triage, and investigation\n🤖 **AI Security**: Secure AI development, MCP server protection, and threat modeling\n🧪 **Penetration Testing**: Kali Linux methodology and vulnerability assessments\n📊 **Compliance**: GDPR coordination, ISO 27001 alignment, and security auditing\n\nI help organizations prevent breaches through proactive security measures and expert implementation.",
    type: 'text' as const
  },
  "your experience": {
    text: "I have over 2 years of enterprise cybersecurity experience at KPMG, where I specialized in:\n\n🔍 **Security Operations**: Monitoring 1,000+ daily alerts across SIEM platforms (Splunk, MS Sentinel)\n🛡️ **DLP Management**: Forcepoint & Symantec DLP implementation, reducing false positives by 40%\n☁️ **Cloud Security**: Netskope CASB deployment for threat protection and compliance\n🚨 **Incident Response**: Alert triage, investigation, and root cause analysis\n📋 **Compliance**: GDPR coordination and security documentation\n\nCurrently completing AI Protector Workshop focusing on secure AI development and MCP server protection.",
    type: 'text' as const
  },
  "what are your skills": {
    text: "My cybersecurity expertise includes:\n\n🛡️ **Technical Skills**:\n- DLP Platforms: Forcepoint, Symantec, Netskope\n- Cloud Security: Netskope CASB, Microsoft Defender\n- SIEM Tools: Splunk, Microsoft Sentinel\n- Penetration Testing: Kali Linux, OWASP methodology\n- AI Security: MCP servers, OAuth 2.1, threat modeling\n\n📊 **Soft Skills**:\n- Client communication and stakeholder management\n- Incident response and crisis management\n- Policy design and compliance implementation\n- Technical documentation and reporting\n- Team leadership and mentoring\n\n🎯 **Certifications**:\n- ISC2 Certified in Cybersecurity (CC)\n- Microsoft Security Fundamentals (SC-900)\n- Forcepoint DLP Administrator\n- Oracle Cloud Infrastructure Foundations\n- Netskope Cloud Security Certified",
    type: 'text' as const
  },
  "how can I contact you": {
    text: "I'd love to discuss how I can help secure your organization! Here are the best ways to reach me:\n\n📧 **Email**: anchal1234asr@gmail.com\n💼 **LinkedIn**: [Connect with me](https://www.linkedin.com/in/annchal-634291178/)\n📱 **Phone**: Available upon request\n🌐 **Portfolio**: You're here! (cybersecurity portfolio)\n\nI'm actively seeking cybersecurity opportunities in Australia and respond within 24 hours. Whether you need DLP implementation, cloud security, or AI protection - I'm here to help!\n\nFeel free to reach out for a consultation or to discuss your specific security needs.",
    type: 'contact' as const
  },
  "what is your education": {
    text: "🎓 **Education**: Master of IT (Cybersecurity) at Asia Pacific International College, Melbourne\n\nMy academic background provides a strong foundation in cybersecurity principles, complemented by extensive hands-on experience in enterprise environments. I continuously update my knowledge through professional development and industry certifications.",
    type: 'text' as const
  },
  "where are you located": {
    text: "📍 **Location**: Based in Australia, available for remote work\n\nI'm located in Australia and open to remote opportunities. I have experience working with international clients and teams, and I'm comfortable with remote collaboration tools and time zone differences.",
    type: 'text' as const
  },
  "what is dlp": {
    text: "DLP (Data Loss Prevention) is a cybersecurity solution that prevents sensitive data from being leaked, lost, or stolen. In my role at KPMG, I specialized in:\n\n📊 **Policy Design**: Creating rules to protect PII, financial data, and intellectual property\n🚨 **Incident Management**: Monitoring and responding to potential data exfiltration attempts\n🔧 **Platform Expertise**: Forcepoint, Symantec DLP, and Netskope implementations\n📈 **Performance Optimization**: Reducing false positives while maintaining security\n\nI helped reduce data leaks and improved compliance for enterprise clients through effective DLP strategies.",
    type: 'text' as const
  },
  "tell me about ai security": {
    text: "AI security is my current focus through the AI Protector Workshop:\n\n🤖 **Secure AI Development**: Threat modeling and secure coding practices\n🛡️ **MCP Server Protection**: OAuth 2.1, Arcjet firewalls, and API security\n🔒 **Environment Hardening**: Node.js, Git, VS Code, and Copilot security\n📊 **Data Flow Security**: Protecting AI training data and model integrity\n🧪 **Penetration Testing**: WAF validation and AI system testing\n📋 **Compliance**: AU data residency and AI ethics considerations\n\nI combine traditional cybersecurity with emerging AI threats, ensuring responsible and secure AI deployment.",
    type: 'text' as const
  },
  "what is penetration testing": {
    text: "Penetration testing (pen testing) is a simulated cyber attack against your systems to identify vulnerabilities before malicious actors can exploit them. My expertise includes:\n\n🧪 **Methodology**: Structured testing using Kali Linux and industry frameworks\n🌐 **Web Applications**: OWASP Top 10 vulnerability assessments\n🔒 **WAF Testing**: Arcjet and other firewall validation\n💻 **Network Testing**: Infrastructure and system-level assessments\n📱 **API Testing**: RESTful and GraphQL endpoint security\n📊 **Reporting**: Executive summaries and technical remediation guides\n\nAll testing includes detailed findings, risk prioritization, and actionable remediation steps.",
    type: 'text' as const
  }
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  };

  useEffect(() => {
    // Small delay to ensure DOM has updated
    setTimeout(() => {
      scrollToBottom();
    }, 100);
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      // Scroll to bottom when chat opens
      setTimeout(() => {
        scrollToBottom();
      }, 100);
    }
  }, [isOpen]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const trimmedText = text.trim();

      // Enhanced matching logic for natural language
      let response = responses[trimmedText as keyof typeof responses];

      if (!response) {
        // Try lowercase match
        const lowerText = trimmedText.toLowerCase();
        response = responses[lowerText as keyof typeof responses];
      }

      if (!response) {
        // Try to find partial matches (case insensitive)
        const responseKeys = Object.keys(responses);
        const matchedKey = responseKeys.find(key =>
          key.toLowerCase().includes(trimmedText.toLowerCase()) ||
          trimmedText.toLowerCase().includes(key.toLowerCase())
        );
        if (matchedKey) {
          response = responses[matchedKey as keyof typeof responses];
        }
      }

      if (!response) {
        // Try keyword-based matching for common questions
        const lowerQuery = trimmedText.toLowerCase();
        if (lowerQuery.includes('who') && (lowerQuery.includes('you') || lowerQuery.includes('are'))) {
          response = responses['who are you'];
        } else if ((lowerQuery.includes('what') && lowerQuery.includes('do')) || lowerQuery.includes('work')) {
          response = responses['what do you do'];
        } else if (lowerQuery.includes('experience') || lowerQuery.includes('background')) {
          response = responses['experience'];
        } else if (lowerQuery.includes('skill') || lowerQuery.includes('expertise')) {
          response = responses['what are your skills'];
        } else if (lowerQuery.includes('contact') || lowerQuery.includes('reach') || lowerQuery.includes('email') || lowerQuery.includes('linkedin')) {
          response = responses['how can I contact you'];
        } else if (lowerQuery.includes('education') || lowerQuery.includes('study') || lowerQuery.includes('degree')) {
          response = responses['what is your education'];
        } else if (lowerQuery.includes('location') || lowerQuery.includes('where') || lowerQuery.includes('live')) {
          response = responses['where are you located'];
        } else if (lowerQuery.includes('dlp') && (lowerQuery.includes('what') || lowerQuery.includes('explain'))) {
          response = responses['what is dlp'];
        } else if (lowerQuery.includes('penetration') || lowerQuery.includes('pentest') || lowerQuery.includes('testing')) {
          response = responses['what is penetration testing'];
        } else if (lowerQuery.includes('ai') && lowerQuery.includes('security')) {
          response = responses['tell me about ai security'];
        }
      }

      if (response) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: response.text,
          sender: 'bot',
          timestamp: new Date(),
          type: response.type,
          options: response.options
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        // Enhanced default response with helpful suggestions
        const defaultMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "I'd be happy to tell you about my cybersecurity experience! Here are some things you can ask me:\n\n💡 **Try asking:**\n• Who are you?\n• What do you do?\n• Tell me about your experience\n• What are your skills?\n• Show me your projects\n• What certifications do you have?\n• How can I contact you?\n• What is DLP?\n• Tell me about AI security\n• What is penetration testing?",
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, defaultMessage]);
      }
      setIsTyping(false);
    }, 800 + Math.random() * 600); // Slightly faster response time
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg z-50 group animate-pulse"
          size="icon"
          title="Chat with Anchal about cybersecurity"
        >
          <MessageCircle className="h-6 w-6" />
          <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center opacity-100 group-hover:opacity-100 transition-opacity animate-bounce">
            <Shield className="h-3 w-3" />
          </div>
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-[500px] shadow-2xl z-40 flex flex-col">
          <CardHeader className="pb-3 bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">Anchal's Portfolio</CardTitle>
                  <p className="text-sm opacity-90">Cybersecurity Analyst</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-green-500/20 text-green-100">
                  Online
                </Badge>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-primary-foreground hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex-1 p-0 flex flex-col overflow-hidden">
            {/* Messages */}
            <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 break-words overflow-hidden ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {message.sender === 'bot' ? (
                          <Bot className="h-4 w-4 text-primary" />
                        ) : (
                          <User className="h-4 w-4" />
                        )}
                        <span className="text-xs opacity-70">
                          {message.sender === 'bot' ? 'Anchal' : 'You'}
                        </span>
                      </div>

                      <div className="text-sm whitespace-pre-line leading-relaxed break-words">
                        {message.text}
                      </div>

                      {message.type === 'contact' && (
                        <div className="mt-3 flex items-center gap-2 text-xs text-green-600">
                          <CheckCircle className="h-4 w-4" />
                          Ready to help secure your business!
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-lg p-3 max-w-[80%] break-words overflow-hidden">
                      <div className="flex items-center gap-2 mb-2">
                        <Bot className="h-4 w-4 text-primary" />
                        <span className="text-xs opacity-70">Anchal</span>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div ref={messagesEndRef} />
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about Anchal's cybersecurity experience..."
                  className="flex-1"
                  disabled={isTyping}
                />
                <Button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim() || isTyping}
                  size="icon"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Powered by AI • Responses are for informational purposes
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}