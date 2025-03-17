
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";

const Programs = () => {
  return (
    <PageLayout 
      title="Academic Programs" 
      description="Explore the various undergraduate and postgraduate programs offered at VSITR."
    >
      <PageHeader 
        title="Academic Programs"
        subtitle="Comprehensive programs designed for future innovators"
        backgroundImage="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Educational Offerings"
            description="Diverse programs to prepare you for a successful career"
          />
          
          <div className="mt-12 space-y-6 text-center">
            <p className="text-lg text-muted-foreground">
              Programs details coming soon. This page is under construction.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Programs;
