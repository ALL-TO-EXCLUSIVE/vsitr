
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";

const ApplyNow = () => {
  return (
    <PageLayout 
      title="Apply Now" 
      description="Start your application to join VSITR."
    >
      <PageHeader 
        title="Apply for Admission"
        subtitle="Take the first step toward your future at VSITR"
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Application Form"
            description="Complete your application to VSITR"
          />
          
          <div className="mt-12 space-y-6 text-center">
            <p className="text-lg text-muted-foreground">
              Application form coming soon. This page is under construction.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ApplyNow;
