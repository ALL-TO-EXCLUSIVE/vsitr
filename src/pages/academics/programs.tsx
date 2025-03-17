
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";

const Programs = () => {
  return (
    <PageLayout 
      title="Academic Programs" 
      description="Explore VSITR's undergraduate and postgraduate programs in technology and management."
    >
      <PageHeader 
        title="Academic Programs"
        subtitle="Comprehensive educational programs designed for future leaders"
        backgroundImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Programs"
            description="Explore our diverse range of academic programs"
          />
          
          <div className="mt-12 space-y-6 text-center">
            <p className="text-lg text-muted-foreground">
              Program details coming soon. This page is under construction.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Programs;
