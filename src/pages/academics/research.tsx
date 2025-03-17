
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";

const Research = () => {
  return (
    <PageLayout 
      title="Research" 
      description="Explore the research initiatives and innovation at VSITR."
    >
      <PageHeader 
        title="Research & Innovation"
        subtitle="Advancing knowledge through cutting-edge research"
        backgroundImage="https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Research Areas"
            description="Discover our focus areas and ongoing research projects"
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
