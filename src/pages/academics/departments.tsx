
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";

const Departments = () => {
  return (
    <PageLayout 
      title="Academic Departments" 
      description="Learn about VSITR's academic departments and their specializations."
    >
      <PageHeader 
        title="Academic Departments"
        subtitle="Specialized departments focusing on various disciplines"
        backgroundImage="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=2064&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Departments"
            description="Explore our academic departments and their areas of expertise"
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
