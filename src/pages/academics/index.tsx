
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Academics = () => {
  const undergraduatePrograms = [
    {
      name: "B.Tech in Computer Science & Engineering",
      duration: "4 years",
      description: "A comprehensive program covering algorithms, programming, software engineering, and emerging technologies.",
      seats: 120,
      link: "/academics/programs"
    },
    {
      name: "B.Tech in Information Technology",
      duration: "4 years",
      description: "Focuses on information systems, database management, networking, and IT infrastructure.",
      seats: 60,
      link: "/academics/programs"
    },
    {
      name: "B.Tech in Artificial Intelligence & Data Science",
      duration: "4 years",
      description: "Specialized program in AI, machine learning, data analytics, and intelligent systems.",
      seats: 60,
      link: "/academics/programs"
    }
  ];
  
  const postgraduatePrograms = [
    {
      name: "M.Tech in Computer Science & Engineering",
      duration: "2 years",
      description: "Advanced study in specialized areas of computer science with research opportunities.",
      seats: 30,
      link: "/academics/programs"
    },
    {
      name: "M.Tech in Information Security",
      duration: "2 years",
      description: "Specialized program in cybersecurity, network security, and digital forensics.",
      seats: 30,
      link: "/academics/programs"
    },
    {
      name: "MBA in Technology Management",
      duration: "2 years",
      description: "Combines business administration with technology management for leadership roles.",
      seats: 60,
      link: "/academics/programs"
    }
  ];
  
  const departments = [
    {
      name: "Computer Science & Engineering",
      description: "The department focuses on core computer science principles, software development, and computational theory.",
      image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop",
      link: "/academics/departments"
    },
    {
      name: "Information Technology",
      description: "Specializes in information systems, web technologies, and IT infrastructure management.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
      link: "/academics/departments"
    },
    {
      name: "Artificial Intelligence & Data Science",
      description: "Focuses on machine learning, data analytics, and AI applications across various domains.",
      image: "https://images.unsplash.com/photo-1595475884562-073c30d45670?q=80&w=2069&auto=format&fit=crop",
      link: "/academics/departments"
    },
    {
      name: "Electronics & Communication",
      description: "Covers electronic systems, communication networks, signal processing, and embedded systems.",
      image: "https://images.unsplash.com/photo-1563770557593-bda8bb95246f?q=80&w=2070&auto=format&fit=crop",
      link: "/academics/departments"
    }
  ];

  return (
    <PageLayout 
      title="Academics" 
      description="Explore VSITR's academic programs, departments, faculty, and research opportunities."
    >
      <PageHeader 
        title="Academics"
        subtitle="Excellence in education through innovative programs and research"
        backgroundImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SectionHeading
                pretitle="Academic Excellence"
                title="Transformative Education for Tomorrow's Leaders"
                align="left"
              />
              <p className="text-lg text-muted-foreground">
                At VSITR, we believe in providing a transformative educational experience that goes beyond textbooks and 
                classrooms. Our academic programs are designed to foster critical thinking, innovation, and practical skills 
                that prepare students for successful careers.
              </p>
              <p className="text-lg text-muted-foreground">
                We maintain a balance between theoretical foundations and practical applications, ensuring that our 
                graduates are well-equipped to meet the challenges of a rapidly evolving technological landscape.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild>
                  <Link to="/academics/programs">Explore Programs</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/academics/research">Research Initiatives</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974&auto=format&fit=crop" 
                alt="VSITR Academics" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Academic Programs"
            description="Comprehensive programs designed to meet industry demands and foster innovation"
            className="mb-12"
          />
          
          <Tabs defaultValue="undergraduate" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
                <TabsTrigger value="postgraduate">Postgraduate</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="undergraduate">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {undergraduatePrograms.map((program, index) => (
                  <Card key={index} className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle>{program.name}</CardTitle>
                      <CardDescription>Duration: {program.duration} | Seats: {program.seats}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{program.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link to={program.link}>Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild variant="outline" size="lg">
                  <Link to="/academics/programs">View All Undergraduate Programs</Link>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="postgraduate">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {postgraduatePrograms.map((program, index) => (
                  <Card key={index} className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle>{program.name}</CardTitle>
                      <CardDescription>Duration: {program.duration} | Seats: {program.seats}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{program.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link to={program.link}>Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild variant="outline" size="lg">
                  <Link to="/academics/programs">View All Postgraduate Programs</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Academic Departments"
            description="Specialized departments focusing on various disciplines of technology and management"
            className="mb-12"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((department, index) => (
              <Card key={index} className="overflow-hidden flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 overflow-hidden">
                  <img 
                    src={department.image}
                    alt={department.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 flex flex-col">
                  <CardHeader>
                    <CardTitle>{department.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{department.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link to={department.link}>Explore Department</Link>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/academics/departments">View All Departments</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl order-last md:order-first">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                alt="Research at VSITR" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <SectionHeading
                pretitle="Research & Innovation"
                title="Advancing Knowledge Through Research"
                align="left"
              />
              <p className="text-lg text-muted-foreground">
                Research is an integral part of our academic environment. We encourage faculty and students to engage 
                in innovative research projects that address real-world challenges and contribute to technological advancement.
              </p>
              <p className="text-lg text-muted-foreground">
                Our research centers focus on emerging areas such as Artificial Intelligence, Internet of Things, 
                Cybersecurity, and Sustainable Technologies.
              </p>
              <div className="pt-4">
                <Button asChild size="lg">
                  <Link to="/academics/research">Explore Research Areas</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Academic Resources"
            description="Supporting infrastructure and resources for academic excellence"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 10v6"/><path d="m8 10 8 6"/><path d="m16 10-8 6"/><path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"/><path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M12 10a2 2 0 0 0-2-2"/><path d="M14 6.5A2 2 0 0 0 12 6"/><path d="M19 9.5a5.5 5.5 0 0 1 5.5 5.5v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1h-2"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Library</h3>
              <p className="text-muted-foreground">
                Access to thousands of e-books, journals, and research papers through our digital library resources.
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Learning Management System</h3>
              <p className="text-muted-foreground">
                Comprehensive online platform for course materials, assignments, and virtual classrooms.
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Academic Support</h3>
              <p className="text-muted-foreground">
                Tutoring services, writing center, and academic counseling for student success.
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Career Services</h3>
              <p className="text-muted-foreground">
                Career guidance, internship opportunities, and placement assistance for all students.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Academics;
