
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Link } from "react-router-dom";

export function AboutSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Students at VSITR" 
                className="w-full aspect-[4/3] object-cover hover-scale"
              />
            </div>
            
            {/* Feature card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-card p-6 max-w-xs animate-fade-in">
              <h3 className="text-lg font-semibold mb-2">Established in 2009</h3>
              <p className="text-sm text-muted-foreground mb-4">
                A decade of excellence in technical education and research
              </p>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-2xl font-bold text-primary">25+</p>
                  <p className="text-xs text-muted-foreground">Faculty Members</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-2xl font-bold text-primary">10+</p>
                  <p className="text-xs text-muted-foreground">Labs & Facilities</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <SectionHeading
              pretitle="About VSITR"
              title="Excellence in Engineering Education"
              description=""
              align="left"
            />
            
            <p className="text-muted-foreground">
              VSITR is an innovative engineering institute affiliated with the University of Mumbai, 
              dedicated to providing quality technical education. Established in 2009, our institute 
              has consistently worked towards creating a nurturing environment for future engineers 
              to thrive academically and professionally.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              <div className="space-y-2">
                <h3 className="text-base font-semibold">State-of-the-Art Facilities</h3>
                <p className="text-sm text-muted-foreground">Modern laboratories, workshops, and digital infrastructure for hands-on learning.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold">Expert Faculty</h3>
                <p className="text-sm text-muted-foreground">Experienced educators with strong academic backgrounds and industry experience.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold">Industry Connections</h3>
                <p className="text-sm text-muted-foreground">Strong partnerships with leading companies for internships and placements.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold">Research Focus</h3>
                <p className="text-sm text-muted-foreground">Emphasis on innovation and research to solve real-world engineering challenges.</p>
              </div>
            </div>
            
            <Button asChild className="mt-4">
              <Link to="/about">Learn More About VSITR</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
