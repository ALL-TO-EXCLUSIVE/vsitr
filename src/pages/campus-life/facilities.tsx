
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";

const Facilities = () => {
  return (
    <PageLayout 
      title="Campus Facilities" 
      description="Explore the modern facilities and amenities available at VSITR campus."
    >
      <PageHeader 
        title="Campus Facilities"
        subtitle="State-of-the-art amenities for a comfortable student life"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Facilities"
            description="Modern infrastructure supporting student needs"
          />
          
          <div className="mt-12 space-y-6 text-center">
            <p className="text-lg text-muted-foreground">
              Facilities details coming soon. This page is under construction.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Facilities;
