
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const Infrastructure = () => {
  const facilities = [
    {
      name: "Computer Labs",
      description: "State-of-the-art computer laboratories equipped with the latest hardware and software to facilitate hands-on learning and practical experience.",
      image: "https://images.unsplash.com/photo-1574591313388-998d639d779e?q=80&w=2070&auto=format&fit=crop",
      features: [
        "300+ high-performance computing stations",
        "Latest software including Visual Studio, Adobe Creative Suite, etc.",
        "High-speed internet connectivity",
        "Technical support staff available",
        "24/7 access for project work"
      ]
    },
    {
      name: "Library",
      description: "A comprehensive library with an extensive collection of books, journals, and digital resources to support academic and research activities.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop",
      features: [
        "50,000+ books and reference materials",
        "Subscription to international journals",
        "Digital repository of research papers",
        "Quiet study spaces and discussion rooms",
        "Online catalog and reservation system"
      ]
    },
    {
      name: "Auditorium",
      description: "A fully equipped auditorium for hosting seminars, conferences, cultural events, and other large gatherings.",
      image: "https://images.unsplash.com/photo-1560523160-754a9e25c68f?q=80&w=2036&auto=format&fit=crop",
      features: [
        "500+ seating capacity",
        "Advanced audio-visual equipment",
        "Professional lighting and sound systems",
        "Stage for performances and presentations",
        "Green rooms and backstage facilities"
      ]
    },
    {
      name: "Sports Complex",
      description: "A comprehensive sports facility that encourages physical fitness and sporting excellence among students.",
      image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2029&auto=format&fit=crop",
      features: [
        "Indoor and outdoor sports facilities",
        "Basketball, volleyball, and badminton courts",
        "Cricket and football grounds",
        "Fitness center with modern equipment",
        "Professional coaches for training"
      ]
    },
    {
      name: "Cafeteria",
      description: "A spacious cafeteria serving nutritious and delicious meals throughout the day in a comfortable environment.",
      image: "https://images.unsplash.com/photo-1576458601213-185420528161?q=80&w=2070&auto=format&fit=crop",
      features: [
        "Diverse menu with healthy options",
        "Seating capacity for 200+ students",
        "Hygienic food preparation",
        "Affordable pricing for students",
        "Special dietary requirements accommodated"
      ]
    },
    {
      name: "Research Centers",
      description: "Dedicated research centers equipped with specialized equipment and resources for advanced studies and innovation.",
      image: "https://images.unsplash.com/photo-1581091212991-8891c7d4bd59?q=80&w=2070&auto=format&fit=crop",
      features: [
        "Center for Data Science and AI",
        "IoT and Embedded Systems Lab",
        "Cybersecurity Research Facility",
        "Collaborative spaces for interdisciplinary research",
        "Advanced computing resources for simulations"
      ]
    }
  ];

  return (
    <PageLayout 
      title="Infrastructure" 
      description="Explore VSITR's world-class facilities and infrastructure supporting academic excellence."
    >
      <PageHeader 
        title="Infrastructure & Facilities"
        subtitle="Modern facilities supporting academic excellence and student development"
        backgroundImage="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2069&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Campus Facilities"
            description="Explore the world-class infrastructure that supports our academic programs"
            className="mb-12"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="overflow-hidden flex flex-col h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{facility.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{facility.description}</p>
                  <ul className="space-y-2">
                    {facility.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 mt-1 text-primary">•</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                pretitle="Campus Tour"
                title="Experience VSITR Virtually"
                description="Take a virtual tour of our campus facilities"
                align="left"
                className="mb-8"
              />
              
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  Our modern campus spans over 10 acres and features state-of-the-art facilities designed to provide 
                  students with the best possible learning environment.
                </p>
                <p className="text-lg text-muted-foreground">
                  Every aspect of our infrastructure is carefully planned to enhance the educational experience, 
                  from technology-enabled classrooms to recreational spaces that promote student wellbeing.
                </p>
                <div className="pt-4">
                  <Button size="lg" className="mr-4">Schedule a Visit</Button>
                  <Button size="lg" variant="outline">Contact Us</Button>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1974&auto=format&fit=crop" 
                alt="VSITR Campus Aerial View" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Specialized Learning Spaces"
            description="Purpose-built environments that enhance the learning experience"
            className="mb-12"
          />
          
          <Tabs defaultValue="classrooms" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-2xl grid-cols-3">
                <TabsTrigger value="classrooms">Classrooms</TabsTrigger>
                <TabsTrigger value="labs">Laboratories</TabsTrigger>
                <TabsTrigger value="spaces">Collaborative Spaces</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="classrooms">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Smart Classrooms</h3>
                  <p className="text-muted-foreground">
                    Our classrooms are equipped with the latest audiovisual technology, interactive whiteboards, 
                    and digital teaching aids to enhance the learning experience.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-primary">•</span>
                      <span>40+ smart classrooms with digital projection systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-primary">•</span>
                      <span>Interactive displays for enhanced engagement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-primary">•</span>
                      <span>Ergonomic seating for student comfort</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-primary">•</span>
                      <span>Acoustic design for optimal sound quality</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-primary">•</span>
                      <span>Recording capabilities for lecture capture</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1517502566056-6b1b84b0a55b?q=80&w=2070&auto=format&fit=crop" 
                    alt="Smart Classroom" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="labs">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="rounded-lg overflow-hidden shadow-lg order-last md:order-first">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                    alt="Advanced Laboratory" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Specialized Laboratories</h3>
                  <p className="text-muted-foreground">
                    Our specialized laboratories provide hands-on experience in various domains, equipped with 
                    industry-standard tools and technologies.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-primary">•</span>
                      <span>Software Development Labs with multiple programming environments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-primary">•</span>
                      <span>Networking Labs with Cisco equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-primary">•</span>
                      <span>Electronics and Embedded Systems Labs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-primary">•</span>
                      <span>Project rooms for final year students</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-primary">•</span>
                      <span>IoT and Robotics Labs with cutting-edge equipment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="spaces">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Collaborative Learning Spaces</h3>
                  <p className="text-muted-foreground">
                    Designed to foster teamwork and creative thinking, our collaborative spaces support group projects, 
                    brainstorming sessions, and interdisciplinary learning.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-primary">•</span>
                      <span>Innovation Hub with modular furniture for flexibility</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-primary">•</span>
                      <span>Design Thinking Studio with visualization tools</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-primary">•</span>
                      <span>Multiple breakout rooms for small group discussions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-primary">•</span>
                      <span>Open lounges with connectivity for casual collaboration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-primary">•</span>
                      <span>Maker spaces with 3D printers and prototyping tools</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                    alt="Collaborative Learning Space" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </PageLayout>
  );
};

export default Infrastructure;
