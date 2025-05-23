
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";

const Clubs = () => {
  return (
    <PageLayout 
      title="Clubs & Societies" 
      description="Explore the diverse student clubs and societies at VSITR."
    >
      <PageHeader 
        title="Clubs & Societies"
        subtitle="Pursue your passions and develop new skills"
        backgroundImage="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2069&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Student Clubs"
            description="Join a community that shares your interests"
          />
          
          <div className="mt-12 space-y-6 text-center">
            <p className="text-lg text-muted-foreground">
              Clubs details coming soon. This page is under construction.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Clubs;
