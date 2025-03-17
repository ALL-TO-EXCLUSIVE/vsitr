
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";

const Faculty = () => {
  return (
    <PageLayout 
      title="Faculty" 
      description="Meet VSITR's distinguished faculty members and their expertise."
    >
      <PageHeader 
        title="Our Faculty"
        subtitle="Distinguished educators and researchers"
        backgroundImage="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Faculty Members"
            description="Get to know our experienced faculty"
          />
          
          <div className="mt-12 space-y-6 text-center">
            <p className="text-lg text-muted-foreground">
              Faculty profiles coming soon. This page is under construction.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Faculty;
