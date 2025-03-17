
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";

const Placements = () => {
  return (
    <PageLayout 
      title="Placements" 
      description="Learn about career opportunities and placement services at VSITR."
    >
      <PageHeader 
        title="Placements"
        subtitle="Building successful careers for our students"
        backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Career Opportunities"
            description="Launching students into successful professional careers"
          />
          
          <div className="mt-12 space-y-6 text-center">
            <p className="text-lg text-muted-foreground">
              Placement details coming soon. This page is under construction.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Placements;
