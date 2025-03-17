
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Program {
  id: number;
  title: string;
  degree: string;
  duration: string;
  description: string;
  icon: React.ReactNode;
}

const programs: Program[] = [
  {
    id: 1,
    title: "Computer Engineering",
    degree: "B.Tech.",
    duration: "4 Years",
    description: "Study the fundamentals of computer systems, software development, and emerging technologies.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    ),
  },
  {
    id: 2,
    title: "Information Technology",
    degree: "B.Tech.",
    duration: "4 Years",
    description: "Focus on information systems, networking, and IT infrastructure management.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M21 9V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v3"/><path d="M10 16c.6.3 1.3.5 2 .5s1.4-.2 2-.5"/><path d="M12 12.5a2.5 2.5 0 0 0 2.5-2.5"/><path d="M15 10V9"/><path d="M17 11v4.5a2.5 2.5 0 0 1-2.5 2.5h-5a2.5 2.5 0 0 1-2.5-2.5V9a2.5 2.5 0 0 1 2.5-2.5h1"/></svg>
    ),
  },
  {
    id: 3,
    title: "Electronics & Telecommunication",
    degree: "B.Tech.",
    duration: "4 Years",
    description: "Learn about electronic systems, signal processing, and communication technologies.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"/><line x1="2" y1="20" x2="2" y2="20"/></svg>
    ),
  },
  {
    id: 4,
    title: "Artificial Intelligence & Machine Learning",
    degree: "B.Tech.",
    duration: "4 Years",
    description: "Explore AI algorithms, machine learning models, and their applications in solving complex problems.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2v8"/><path d="M8.5 4.5l7 7"/><path d="M17 17a5 5 0 1 0-10 0"/><path d="M12 22v-2"/><path d="M12 13a5 5 0 0 0-5 5"/></svg>
    ),
  },
];

export function ProgramsSection() {
  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="container px-4 md:px-6">
        <SectionHeading
          pretitle="Academic Programs"
          title="Future-Ready Engineering Programs"
          description="VSITR offers a range of undergraduate and postgraduate programs designed to prepare students for successful careers in various engineering disciplines."
          className="max-w-3xl mx-auto mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <Card key={program.id} className="border border-border hover-lift transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {program.icon}
                </div>
                <CardTitle className="text-xl">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-sm font-medium bg-secondary/80 py-1 px-2 rounded">
                    {program.degree}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {program.duration}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {program.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full text-primary justify-between group">
                  <Link to={`/academics/programs/${program.id}`}>
                    <span>Learn More</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link to="/academics/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
