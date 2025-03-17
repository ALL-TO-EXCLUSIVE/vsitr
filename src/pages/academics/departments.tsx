
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";

const Departments = () => {
  return (
    <PageLayout 
      title="Academic Departments" 
      description="Learn about the various academic departments at VSITR and their specializations."
    >
      <PageHeader 
        title="Academic Departments"
        subtitle="Specialized departments fostering excellence in different disciplines"
        backgroundImage="https://images.unsplash.com/photo-1517502566056-6b1b84b0a55b?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Departments"
            description="Explore our specialized academic departments"
          />
          
          <div className="mt-12 space-y-6 text-center">
            <p className="text-lg text-muted-foreground">
              Department details coming soon. This page is under construction.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Departments;
