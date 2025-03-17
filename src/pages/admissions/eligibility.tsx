
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";

const Eligibility = () => {
  return (
    <PageLayout 
      title="Eligibility Criteria" 
      description="Check the eligibility requirements for admission to VSITR programs."
    >
      <PageHeader 
        title="Eligibility Criteria"
        subtitle="Requirements for admission to our programs"
        backgroundImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Admission Requirements"
            description="Check if you meet our eligibility criteria"
          />
          
          <div className="mt-12 space-y-6 text-center">
            <p className="text-lg text-muted-foreground">
              Eligibility details coming soon. This page is under construction.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Eligibility;
