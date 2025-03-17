
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";

const Placements = () => {
  return (
    <PageLayout 
      title="Placements" 
      description="Explore career opportunities and placement services at VSITR."
    >
      <PageHeader 
        title="Placements & Career Services"
        subtitle="Preparing students for successful careers"
        backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Placement Cell"
            description="Your gateway to career opportunities"
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
