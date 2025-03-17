
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";

const VisionMission = () => {
  return (
    <PageLayout 
      title="Vision & Mission" 
      description="VSITR's vision, mission, values and our commitment to educational excellence."
    >
      <PageHeader 
        title="Vision & Mission"
        subtitle="Our guiding principles and aspirations"
        backgroundImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center">
              <SectionHeading
                pretitle="Our Vision"
                title="To Be a Global Leader in Education"
                description="Striving for excellence and innovation in everything we do"
              />
              
              <div className="mt-8 bg-primary/5 p-8 rounded-lg border border-primary/10 text-center">
                <p className="text-xl italic font-medium">
                  "To be a leading institution that nurtures creative thinking, research culture and innovative skills 
                  through education, generating globally competitive graduates."
                </p>
              </div>
            </div>
            
            <div className="mb-16 text-center">
              <SectionHeading
                pretitle="Our Mission"
                title="Empowering Through Quality Education"
                description="Our approach to creating future leaders"
              />
              
              <div className="mt-8 space-y-6">
                <div className="bg-background p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">Holistic Development</h3>
                  <p className="text-muted-foreground">
                    To provide comprehensive education that develops intellectual, practical, and ethical dimensions of the student's personality.
                  </p>
                </div>
                
                <div className="bg-background p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">Industry-Ready Professionals</h3>
                  <p className="text-muted-foreground">
                    To create industry-ready professionals equipped with cutting-edge technological skills and adaptability to meet evolving market demands.
                  </p>
                </div>
                
                <div className="bg-background p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">Research and Innovation</h3>
                  <p className="text-muted-foreground">
                    To foster a culture of research and innovation that contributes to technological advancement and societal progress.
                  </p>
                </div>
                
                <div className="bg-background p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">Global Perspective</h3>
                  <p className="text-muted-foreground">
                    To instill a global perspective and cross-cultural sensitivity that enables students to succeed in diverse environments.
                  </p>
                </div>
                
                <div className="bg-background p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">Social Responsibility</h3>
                  <p className="text-muted-foreground">
                    To nurture a sense of social responsibility and ethical leadership that contributes positively to community development.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <SectionHeading
                pretitle="Our Values"
                title="Core Principles That Guide Us"
                description="The foundation of our educational philosophy"
              />
              
              <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-background p-6 rounded-lg shadow-md flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M9 13v-2"/><path d="M12 13V8"/><path d="M15 13v-3"/></svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Excellence</h3>
                  <p className="text-muted-foreground text-center">
                    Striving for the highest standards in everything we do.
                  </p>
                </div>
                
                <div className="bg-background p-6 rounded-lg shadow-md flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 22a8 8 0 0 0 8-8"/><path d="M2 10s3.5 4 10 4 10-4 10-4"/><path d="M12 6V2"/></svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Integrity</h3>
                  <p className="text-muted-foreground text-center">
                    Acting with honesty, transparency, and ethical conduct.
                  </p>
                </div>
                
                <div className="bg-background p-6 rounded-lg shadow-md flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M15 14c.2-1 .7-1.7 1.5-2"/><path d="M9 14c-.2-1-.7-1.7-1.5-2"/><path d="M5 9h14"/><path d="M20.5 16.5c0 .58-.26 1.1-.7 1.45-.43.35-1.04.38-1.55.1-1.35-.7-3.17-.7-4.5 0-.52.27-1.12.24-1.56-.1-.43-.36-.69-.87-.69-1.45"/><path d="M7.5 16.5c0 .58.26 1.1.7 1.45.43.35 1.04.38 1.55.1 1.35-.7 3.17-.7 4.5 0 .52.27 1.12.24 1.56-.1.43-.36.69-.87.69-1.45"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Innovation</h3>
                  <p className="text-muted-foreground text-center">
                    Encouraging creative thinking and novel approaches.
                  </p>
                </div>
                
                <div className="bg-background p-6 rounded-lg shadow-md flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M17 7.53v2a2.5 2.5 0 0 1-5 0v-2a2.5 2.5 0 0 1 5 0Z"/><path d="M12 18c-2.4-3-4-6-4-8.5a4.5 4.5 0 0 1 9 0c0 2.5-1.6 5.5-4 8.5Z"/></svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Inclusivity</h3>
                  <p className="text-muted-foreground text-center">
                    Embracing diversity and providing equal opportunities.
                  </p>
                </div>
                
                <div className="bg-background p-6 rounded-lg shadow-md flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"/><path d="M12 6v12"/><path d="M6 12h12"/></svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Collaboration</h3>
                  <p className="text-muted-foreground text-center">
                    Working together to achieve collective goals.
                  </p>
                </div>
                
                <div className="bg-background p-6 rounded-lg shadow-md flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm0 0v3"/><path d="M14 13h-4"/><circle cx="12" cy="12" r="10"/></svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Accountability</h3>
                  <p className="text-muted-foreground text-center">
                    Taking responsibility for our actions and outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default VisionMission;
