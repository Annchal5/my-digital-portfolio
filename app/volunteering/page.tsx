import { Briefcase, Calendar } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function VolunteeringPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-20 lg:py-28 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Volunteering</div>
            <h1 className="text-2xl md:text-3xl font-bold mt-4">Volunteering & Community</h1>
            <p className="max-w-[700px] text-muted-foreground mt-3">Selected volunteer roles and student engagement activities that complement my professional work in cybersecurity.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border overflow-hidden">
              <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[280px_1fr]">
                <div className="bg-primary/5 p-6 flex flex-col justify-center items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-border">
                  <div className="w-16 h-16 rounded-xl overflow-hidden mb-4 shadow-lg bg-white">
                    <Image src="/Ausbiz_logo.jpg" alt="Ausbiz Consulting Logo" width={64} height={64} className="w-full h-full object-contain" />
                  </div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full mb-2">Student Ambassador</div>
                  <h3 className="text-xl font-bold">Ausbiz Consulting</h3>
                  <p className="text-primary font-medium">Nov 2025 - Present</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                    <Calendar className="h-4 w-4" />
                    <span>Nov 2025 - Present</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <Briefcase className="h-4 w-4" />
                    <span>Science & Technology</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h4 className="font-semibold text-lg">Volunteering — Student Ambassador</h4>
                  <p className="text-sm text-muted-foreground">Serving as a Student Ambassador at Ausbiz Consulting, contributing to student engagement and outreach initiatives focused on technology, consulting, and professional development.</p>
                  <p className="text-sm text-muted-foreground">Supporting awareness of consulting services and industry practices, assisting with student-focused events, and acting as a liaison between students and the organisation.</p>
                  <p className="text-sm text-muted-foreground">This experience complements my cybersecurity background by enhancing professional communication, collaboration, and industry exposure within the Australian consulting landscape.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
