
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";

const CampusLife = () => {
  return (
    <PageLayout 
      title="Campus Life" 
      description="Experience the vibrant campus life at VSITR with events, clubs, and facilities."
    >
      <PageHeader 
        title="Campus Life"
        subtitle="A thriving environment for learning and growth"
        backgroundImage="https://images.unsplash.com/photo-1533854775446-95c4609da544?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Life at VSITR"
            description="Discover what makes our campus special"
          />
          
          <div className="mt-12 space-y-6 text-center">
            <p className="text-lg text-muted-foreground">
              Campus life details coming soon. This page is under construction.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CampusLife;
