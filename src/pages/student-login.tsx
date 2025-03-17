
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";

const StudentLogin = () => {
  return (
    <PageLayout 
      title="Student Login" 
      description="Access your student account and resources at VSITR."
    >
      <PageHeader 
        title="Student Login"
        subtitle="Access your student portal"
        backgroundImage="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Student Portal"
            description="Access your academic resources and information"
          />
          
          <div className="mt-12 space-y-6 text-center">
            <p className="text-lg text-muted-foreground">
              Student login page coming soon. This page is under construction.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default StudentLogin;
