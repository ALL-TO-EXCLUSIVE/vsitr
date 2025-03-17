
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Admissions = () => {
  const faqs = [
    {
      question: "What are the admission requirements for undergraduate programs?",
      answer: "For undergraduate programs, candidates must have completed 10+2 or equivalent examination with Physics, Chemistry, and Mathematics with a minimum aggregate of 60%. Admission is based on the entrance examination score, followed by a counseling process."
    },
    {
      question: "How do I apply for admission to VSITR?",
      answer: "You can apply online through our admissions portal. Visit the 'Apply Now' section on our website and follow the application process. Make sure to keep all required documents ready before starting the application."
    },
    {
      question: "What documents are required for the application?",
      answer: "Required documents include mark sheets of qualifying examinations, transfer certificate, migration certificate, character certificate, entrance exam score card, passport-sized photographs, ID proof, and any additional certificates for reserved category candidates."
    },
    {
      question: "Is there a hostel facility available for students?",
      answer: "Yes, VSITR provides separate hostel facilities for boys and girls. The hostels are equipped with modern amenities, 24/7 security, dining facilities, and Wi-Fi connectivity. Early application is recommended as seats are limited."
    },
    {
      question: "What scholarships are available at VSITR?",
      answer: "VSITR offers various scholarships including merit-based scholarships, need-based financial aid, scholarships for women in technology, sports scholarships, and special scholarships for students from underprivileged backgrounds. Visit our scholarships page for detailed information."
    },
    {
      question: "What is the academic calendar for the upcoming session?",
      answer: "The academic calendar for the upcoming session will be published on our website by May. Generally, the fall semester begins in August and the spring semester in January. The calendar includes details about holidays, examination periods, and other important academic events."
    }
  ];

  return (
    <PageLayout 
      title="Admissions" 
      description="Information about admissions process, eligibility criteria, fees and scholarships at VSITR."
    >
      <PageHeader 
        title="Admissions"
        subtitle="Join our community of future innovators and leaders"
        backgroundImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Begin Your Journey at VSITR"
              description="Take the first step toward a transformative educational experience"
            />
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <CardTitle className="text-xl">Apply</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Complete our online application form and submit required documents
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <CardTitle className="text-xl">Get Selected</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Qualify through entrance exams and attend the admission interview
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                  </div>
                  <CardTitle className="text-xl">Enroll</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Complete registration, pay fees, and begin your academic journey
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-10">
              <Button asChild size="lg" className="mr-4">
                <Link to="/admissions/apply">Apply Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Admissions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Admission Resources"
            description="Everything you need to know about joining VSITR"
            className="mb-12"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/admissions/process" className="group block overflow-hidden rounded-lg bg-background shadow-md hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden bg-primary/5 p-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary group-hover:scale-110 transition-transform duration-300"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Admission Process</h3>
                <p className="text-muted-foreground mb-4">
                  Detailed step-by-step guide to the application and selection process
                </p>
                <span className="text-primary font-medium inline-flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </div>
            </Link>
            
            <Link to="/admissions/eligibility" className="group block overflow-hidden rounded-lg bg-background shadow-md hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden bg-primary/5 p-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary group-hover:scale-110 transition-transform duration-300"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Eligibility Criteria</h3>
                <p className="text-muted-foreground mb-4">
                  Academic and other requirements for different programs
                </p>
                <span className="text-primary font-medium inline-flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </div>
            </Link>
            
            <Link to="/admissions/fees" className="group block overflow-hidden rounded-lg bg-background shadow-md hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden bg-primary/5 p-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary group-hover:scale-110 transition-transform duration-300"><circle cx="12" cy="12" r="8"/><path d="M9.5 9.5C9.5 8.8 10 8 12 8s2.5 1.2 2.5 2-1 1.5-2.5 1.5c-1.5 0-2.5.7-2.5 1.5s1 2 2.5 2 2-.5 2-1.5"/><path d="M12 7v1"/><path d="M12 16v1"/></svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Fees Structure</h3>
                <p className="text-muted-foreground mb-4">
                  Tuition fees, payment methods, and other financial information
                </p>
                <span className="text-primary font-medium inline-flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </div>
            </Link>
            
            <Link to="/admissions/scholarships" className="group block overflow-hidden rounded-lg bg-background shadow-md hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden bg-primary/5 p-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary group-hover:scale-110 transition-transform duration-300"><path d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"/><circle cx="12" cy="12" r="9"/><path d="M15.3 15.3 18 18"/><path d="M8.7 8.7 6 6"/><path d="M8.7 15.3 6 18"/><path d="M15.3 8.7 18 6"/></svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Scholarships</h3>
                <p className="text-muted-foreground mb-4">
                  Merit and need-based scholarships to support academic excellence
                </p>
                <span className="text-primary font-medium inline-flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Frequently Asked Questions"
            description="Find answers to common questions about admissions at VSITR"
            className="mb-12"
          />
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Couldn't find what you're looking for? We're here to help.
              </p>
              <Button asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Admissions;
