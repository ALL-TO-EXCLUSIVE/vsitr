
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";

const Contact = () => {
  return (
    <PageLayout 
      title="Contact Us" 
      description="Get in touch with VSITR for inquiries, admissions, and more."
    >
      <PageHeader 
        title="Contact Us"
        subtitle="We're here to assist you"
        backgroundImage="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Get in Touch"
            description="Reach out to us with your queries"
          />
          
          <div className="mt-12 space-y-6 text-center">
            <p className="text-lg text-muted-foreground">
              Contact information coming soon. This page is under construction.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
