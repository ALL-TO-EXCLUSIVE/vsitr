
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";

const Events = () => {
  return (
    <PageLayout 
      title="Events" 
      description="Stay updated with the latest events, workshops and activities at VSITR."
    >
      <PageHeader 
        title="Events & Activities"
        subtitle="Stay engaged with a variety of events throughout the year"
        backgroundImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Campus Events"
            description="Discover the exciting events that shape campus life"
          />
          
          <div className="mt-12 space-y-6 text-center">
            <p className="text-lg text-muted-foreground">
              Events details coming soon. This page is under construction.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Events;
