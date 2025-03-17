
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 -z-10" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-20 w-64 h-64 bg-indigo-200 rounded-full opacity-20 blur-3xl -z-10" />
      
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-xl animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Shaping the Future Through <span className="text-gradient">Excellence</span> in Education
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                VSITR is a premier engineering institute fostering innovation, research, and academic excellence to build the leaders of tomorrow.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group">
                <Link to="/admissions/apply">
                  Apply Now
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/academics/programs">Explore Programs</Link>
              </Button>
            </div>
            
            <div className="pt-4 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className={cn(
                      "w-10 h-10 rounded-full border-2 border-white bg-gray-200",
                      "flex items-center justify-center text-xs font-semibold",
                      i === 4 && "bg-primary text-white"
                    )}
                  >
                    {i === 4 ? "50+" : ""}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Join our community of <span className="font-semibold text-foreground">2,500+</span> students pursuing excellence
              </p>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-indigo-700/40 rounded-2xl z-10 opacity-30" />
            <div className="relative z-20 p-1 bg-gradient-to-br from-white to-gray-200 rounded-2xl shadow-card overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="VSITR Campus" 
                className="w-full aspect-[4/3] object-cover rounded-xl animate-scale-in"
              />
            </div>
            
            {/* Stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-card p-5 max-w-xs animate-slide-in">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Student Success</span>
                <span className="text-sm text-primary font-semibold">94%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full mb-4">
                <div className="h-full bg-primary rounded-full" style={{ width: "94%" }}></div>
              </div>
              <p className="text-xs text-muted-foreground">
                Percentage of our students who secure placements or pursue higher education
              </p>
            </div>
            
            {/* Accreditation card */}
            <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-card p-4 animate-slide-in delay-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><path d="M16 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M18 19h-4"/><path d="M14 15v8"/></svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">NAAC Accredited</h3>
                  <p className="text-xs text-muted-foreground">Grade 'A' Institution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
