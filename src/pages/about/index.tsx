
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <PageLayout 
      title="About VSITR" 
      description="Learn about VSITR's history, vision, mission, achievements, and infrastructure."
    >
      <PageHeader 
        title="About VSITR"
        subtitle="Explore our history, mission, and vision for the future of education"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SectionHeading
                pretitle="Our Story"
                title="Building a Legacy of Excellence"
                align="left"
              />
              <p className="text-lg text-muted-foreground">
                Established in 1999, Vidyalankar School of Information Technology (VSITR) has grown to become one of the premier educational 
                institutions in Mumbai. Our journey began with a vision to provide quality education that combines academic excellence with 
                practical industry relevance.
              </p>
              <p className="text-lg text-muted-foreground">
                Over the decades, we have consistently evolved our curriculum, infrastructure, and teaching methodologies to 
                meet the changing demands of the technology landscape and prepare students for global challenges.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild>
                  <Link to="/about/vision-mission">Our Vision & Mission</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/about/infrastructure">Explore Our Campus</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop" 
                alt="VSITR Campus" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            pretitle="Why Choose Us"
            title="Excellence in Education"
            description="Discover what makes VSITR the preferred choice for quality education"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Academic Excellence</h3>
              <p className="text-muted-foreground">Our curriculum is designed to provide a strong foundation in technical knowledge while encouraging critical thinking and innovation.</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"/><path d="M12 2a7 7 0 0 0-7 7m7-7a7 7 0 0 1 7 7m-7-7v7h7"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Industry Connections</h3>
              <p className="text-muted-foreground">We maintain strong ties with industry leaders, providing our students with internships, workshops, and placement opportunities.</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M11 18H8a2 2 0 0 1-2-2V9"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Holistic Development</h3>
              <p className="text-muted-foreground">Beyond academics, we focus on developing leadership skills, ethical values, and social responsibility in our students.</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="18" height="10" x="3" y="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" x2="16" y1="16" y2="16"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Modern Infrastructure</h3>
              <p className="text-muted-foreground">Our campus is equipped with state-of-the-art facilities, including advanced labs, libraries, and smart classrooms.</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M17 11a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h4Z"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 10a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9Z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Experienced Faculty</h3>
              <p className="text-muted-foreground">Our highly qualified faculty bring a wealth of academic and industry experience to provide the best guidance to our students.</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"/><rect x="3" y="14" width="7" height="7" rx="1"/><circle cx="17.5" cy="17.5" r="3.5"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Research Opportunities</h3>
              <p className="text-muted-foreground">We encourage students to participate in research activities and innovation projects to develop their analytical and problem-solving skills.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            pretitle="Explore More"
            title="Discover All Aspects of VSITR"
            description="Learn more about what makes our institution special"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <Link to="/about/vision-mission" className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop" 
                alt="Vision & Mission" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">Vision & Mission</h3>
              </div>
            </Link>
            
            <Link to="/about/administration" className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974&auto=format&fit=crop" 
                alt="Administration" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">Administration</h3>
              </div>
            </Link>
            
            <Link to="/about/infrastructure" className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2069&auto=format&fit=crop" 
                alt="Infrastructure" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">Infrastructure</h3>
              </div>
            </Link>
            
            <Link to="/academics" className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                alt="Academics" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">Academics</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
