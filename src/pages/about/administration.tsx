
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Administration = () => {
  const leadership = [
    {
      name: "Dr. Rohini Kelkar",
      position: "Principal",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
      qualification: "Ph.D. in Computer Science",
      experience: "25+ years in academia",
      email: "principal@vsitr.edu",
      description: "Dr. Kelkar has been leading VSITR for over a decade with her visionary leadership and commitment to academic excellence."
    },
    {
      name: "Dr. Arun Sharma",
      position: "Vice Principal",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
      qualification: "Ph.D. in Electronics Engineering",
      experience: "20+ years in academia and research",
      email: "vice.principal@vsitr.edu",
      description: "Dr. Sharma oversees academic affairs and has been instrumental in developing curriculum that meets industry standards."
    },
    {
      name: "Dr. Priya Mehta",
      position: "Dean of Student Affairs",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1634&auto=format&fit=crop",
      qualification: "Ph.D. in Education Management",
      experience: "15+ years in student development",
      email: "student.affairs@vsitr.edu",
      description: "Dr. Mehta is responsible for student welfare, extracurricular activities, and career development programs."
    }
  ];
  
  const trustees = [
    {
      name: "Mr. Rajesh Patel",
      position: "Chairman, Board of Trustees",
      image: "",
      qualification: "MBA from Harvard Business School",
      experience: "30+ years in industry and education management",
      email: "chairman@vsitr.edu",
      description: "Mr. Patel provides strategic direction to VSITR and has been associated with the institution since its inception."
    },
    {
      name: "Mrs. Anita Desai",
      position: "Secretary, Board of Trustees",
      image: "",
      qualification: "M.Ed. in Educational Leadership",
      experience: "25+ years in educational policy",
      email: "secretary@vsitr.edu",
      description: "Mrs. Desai oversees governance policies and ensures compliance with regulatory requirements."
    },
    {
      name: "Mr. Vikram Joshi",
      position: "Treasurer",
      image: "",
      qualification: "Chartered Accountant",
      experience: "20+ years in financial management",
      email: "treasurer@vsitr.edu",
      description: "Mr. Joshi manages the financial affairs of the institution and ensures optimal resource allocation."
    }
  ];
  
  const deans = [
    {
      name: "Dr. Amit Verma",
      position: "Dean of Academics",
      image: "",
      qualification: "Ph.D. in Computer Engineering",
      experience: "18+ years in academic administration",
      email: "dean.academics@vsitr.edu",
      description: "Dr. Verma leads curriculum development and academic quality assurance initiatives."
    },
    {
      name: "Dr. Neha Singh",
      position: "Dean of Research",
      image: "",
      qualification: "Ph.D. in Data Science",
      experience: "15+ years in research and development",
      email: "dean.research@vsitr.edu",
      description: "Dr. Singh promotes research culture and innovation among faculty and students."
    },
    {
      name: "Prof. Sanjay Kumar",
      position: "Dean of Industry Relations",
      image: "",
      qualification: "M.Tech with Industry Experience",
      experience: "20+ years in industry and academia",
      email: "dean.industry@vsitr.edu",
      description: "Prof. Kumar fosters partnerships with industry for internships, placements, and collaborative projects."
    }
  ];

  return (
    <PageLayout 
      title="Administration" 
      description="Meet VSITR's leadership team, board of trustees, and administrative staff."
    >
      <PageHeader 
        title="Administration"
        subtitle="The team behind VSITR's success and governance"
        backgroundImage="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="leadership" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="leadership">Leadership</TabsTrigger>
                <TabsTrigger value="trustees">Trustees</TabsTrigger>
                <TabsTrigger value="deans">Deans</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="leadership">
              <SectionHeading
                title="Leadership Team"
                description="Meet the core leadership team driving VSITR's mission and vision"
                className="mb-12"
              />
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leadership.map((leader, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={leader.image || "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop"}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{leader.name}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {leader.position}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">{leader.description}</p>
                      <div className="text-sm">
                        <p><span className="font-medium">Qualification:</span> {leader.qualification}</p>
                        <p><span className="font-medium">Experience:</span> {leader.experience}</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm text-muted-foreground">{leader.email}</p>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="trustees">
              <SectionHeading
                title="Board of Trustees"
                description="The governance body responsible for VSITR's strategic direction"
                className="mb-12"
              />
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trustees.map((trustee, index) => (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={trustee.image} alt={trustee.name} />
                        <AvatarFallback className="text-xl">{trustee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-xl">{trustee.name}</CardTitle>
                        <CardDescription className="text-primary font-medium">
                          {trustee.position}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">{trustee.description}</p>
                      <div className="text-sm">
                        <p><span className="font-medium">Qualification:</span> {trustee.qualification}</p>
                        <p><span className="font-medium">Experience:</span> {trustee.experience}</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm text-muted-foreground">{trustee.email}</p>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="deans">
              <SectionHeading
                title="Academic Deans"
                description="Heads of various academic domains ensuring educational excellence"
                className="mb-12"
              />
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {deans.map((dean, index) => (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={dean.image} alt={dean.name} />
                        <AvatarFallback className="text-xl">{dean.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-xl">{dean.name}</CardTitle>
                        <CardDescription className="text-primary font-medium">
                          {dean.position}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">{dean.description}</p>
                      <div className="text-sm">
                        <p><span className="font-medium">Qualification:</span> {dean.qualification}</p>
                        <p><span className="font-medium">Experience:</span> {dean.experience}</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm text-muted-foreground">{dean.email}</p>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Organizational Structure"
            description="How our institution is organized for effective governance"
            className="mb-12"
          />
          
          <div className="max-w-4xl mx-auto bg-background p-8 rounded-lg shadow-md">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Governing Body</h3>
                <p className="text-muted-foreground">
                  The Board of Trustees forms the apex governing body of VSITR, responsible for strategic decisions, 
                  policy formulation, and ensuring the institution's adherence to its vision and mission.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Academic Council</h3>
                <p className="text-muted-foreground">
                  The Academic Council, led by the Principal, oversees all academic affairs, curriculum development, 
                  evaluation methods, and quality assurance of educational programs.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Administrative Units</h3>
                <p className="text-muted-foreground">
                  Various administrative departments including Admissions, Examinations, Student Affairs, Finance, 
                  and Human Resources ensure smooth operational functioning of the institution.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Academic Departments</h3>
                <p className="text-muted-foreground">
                  Each academic department is headed by a Department Head who coordinates faculty, curriculum implementation, 
                  research activities, and student mentoring within their respective disciplines.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Student Representatives</h3>
                <p className="text-muted-foreground">
                  VSITR believes in student participation in governance. Student representatives are included in various 
                  committees to ensure that student perspectives are considered in decision-making processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Administration;
