
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";

const Research = () => {
  return (
    <PageLayout 
      title="Research" 
      description="Explore the research initiatives and projects at VSITR."
    >
      <PageHeader 
        title="Research Initiatives"
        subtitle="Innovation and discovery through advanced research"
        backgroundImage="https://images.unsplash.com/photo-1581091212991-8891c7d4bd59?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Research at VSITR"
            description="Pushing boundaries through innovative research"
          />
          
          <div className="mt-12 space-y-6 text-center">
            <p className="text-lg text-muted-foreground">
              Research details coming soon. This page is under construction.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Research;
