
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";

const Clubs = () => {
  return (
    <PageLayout 
      title="Student Clubs" 
      description="Explore the diverse student clubs and organizations at VSITR."
    >
      <PageHeader 
        title="Student Clubs & Organizations"
        subtitle="Pursuing passions beyond academics"
        backgroundImage="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2072&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Clubs"
            description="Student-led organizations for every interest"
          />
          
          <div className="mt-12 space-y-6 text-center">
            <p className="text-lg text-muted-foreground">
              Club information coming soon. This page is under construction.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Clubs;
