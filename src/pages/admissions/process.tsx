
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";

const AdmissionProcess = () => {
  return (
    <PageLayout 
      title="Admission Process" 
      description="Learn about the step-by-step admission process at VSITR."
    >
      <PageHeader 
        title="Admission Process"
        subtitle="Your journey to becoming a VSITR student"
        backgroundImage="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Application Steps"
            description="Follow these steps to apply for admission at VSITR"
          />
          
          <div className="mt-12 space-y-6 text-center">
            <p className="text-lg text-muted-foreground">
              Process details coming soon. This page is under construction.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AdmissionProcess;
