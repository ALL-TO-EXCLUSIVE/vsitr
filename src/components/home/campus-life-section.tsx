
import { SectionHeading } from "@/components/ui/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CampusLifeSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,rgba(255,255,255,0.1))] -z-10" />
      
      <div className="container px-4 md:px-6">
        <SectionHeading
          pretitle="Campus Life"
          title="Experience Life at VSITR"
          description="Our vibrant campus offers a rich blend of academic excellence, extracurricular activities, and modern facilities to ensure a holistic educational experience."
          className="max-w-3xl mx-auto mb-16"
        />
        
        <Tabs defaultValue="facilities" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="facilities">Facilities</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="clubs">Clubs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="facilities" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <img 
                src="https://images.unsplash.com/photo-1593016250787-670b16df0255?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="VSITR Library" 
                className="rounded-lg shadow-card overflow-hidden aspect-video object-cover"
              />
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">World-Class Facilities</h3>
                <p className="text-muted-foreground">
                  Our campus features modern infrastructure designed to provide an optimal learning environment. 
                  From well-equipped laboratories to spacious classrooms, every facility is created to enhance 
                  the educational experience.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Central Library</h4>
                    <p className="text-sm text-muted-foreground">
                      Extensive collection of books, journals, and digital resources
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Labs & Workshops</h4>
                    <p className="text-sm text-muted-foreground">
                      Specialized labs for every engineering discipline
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Sports Complex</h4>
                    <p className="text-sm text-muted-foreground">
                      Indoor and outdoor sports facilities for physical development
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Cafeteria</h4>
                    <p className="text-sm text-muted-foreground">
                      Modern dining facilities serving nutritious meals
                    </p>
                  </div>
                </div>
                <Button asChild className="mt-4">
                  <Link to="/campus-life/facilities">Explore Facilities</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="events" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <h3 className="text-2xl font-bold">Vibrant Student Events</h3>
                <p className="text-muted-foreground">
                  VSITR hosts a variety of cultural, technical, and sports events throughout the academic year, 
                  providing students with opportunities to showcase their talents, develop leadership skills, 
                  and build lasting memories.
                </p>
                <div className="space-y-4 pt-2">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Techfest</h4>
                    <p className="text-sm text-muted-foreground">
                      Annual technical festival featuring competitions, workshops, and expert talks
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Cultural Festival</h4>
                    <p className="text-sm text-muted-foreground">
                      Celebration of arts, music, dance, and creative performances
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Sports Meet</h4>
                    <p className="text-sm text-muted-foreground">
                      Inter-college and intra-college sports competitions
                    </p>
                  </div>
                </div>
                <Button asChild className="mt-4">
                  <Link to="/campus-life/events">View Events</Link>
                </Button>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="VSITR Event" 
                className="rounded-lg shadow-card overflow-hidden aspect-video object-cover order-1 md:order-2"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="clubs" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="VSITR Student Club" 
                className="rounded-lg shadow-card overflow-hidden aspect-video object-cover"
              />
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Student Clubs & Societies</h3>
                <p className="text-muted-foreground">
                  Our diverse range of student clubs and societies cater to various interests, allowing students 
                  to pursue their passions, develop new skills, and form connections with like-minded peers.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Coding Club</h4>
                    <p className="text-sm text-muted-foreground">
                      Programming competitions, hackathons, and coding workshops
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Robotics Society</h4>
                    <p className="text-sm text-muted-foreground">
                      Building and programming robots for various applications
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Cultural Club</h4>
                    <p className="text-sm text-muted-foreground">
                      Promoting arts, music, dance, and cultural activities
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Sports Club</h4>
                    <p className="text-sm text-muted-foreground">
                      Organizing sports events and promoting physical fitness
                    </p>
                  </div>
                </div>
                <Button asChild className="mt-4">
                  <Link to="/campus-life/clubs">Discover Clubs</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
