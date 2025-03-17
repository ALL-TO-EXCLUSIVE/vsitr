
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";

const Fees = () => {
  return (
    <PageLayout 
      title="Fees Structure" 
      description="Information about tuition fees and payment options at VSITR."
    >
      <PageHeader 
        title="Fees Structure"
        subtitle="Tuition fees and payment information"
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2036&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Fee Details"
            description="Transparent information about program fees"
          />
          
          <div className="mt-12 space-y-6 text-center">
            <p className="text-lg text-muted-foreground">
              Fee structure details coming soon. This page is under construction.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Fees;
