
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";

const Scholarships = () => {
  return (
    <PageLayout 
      title="Scholarships" 
      description="Explore scholarship opportunities available at VSITR."
    >
      <PageHeader 
        title="Scholarships & Financial Aid"
        subtitle="Making quality education accessible"
        backgroundImage="https://images.unsplash.com/photo-1569059681841-61d756150b5f?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Available Scholarships"
            description="Merit and need-based financial assistance"
          />
          
          <div className="mt-12 space-y-6 text-center">
            <p className="text-lg text-muted-foreground">
              Scholarship details coming soon. This page is under construction.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Scholarships;
