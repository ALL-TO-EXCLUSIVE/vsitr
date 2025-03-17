
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
        subtitle="Access your academic portal"
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Login to Student Portal"
            description="Access your courses, assignments, and resources"
          />
          
          <div className="mt-12 space-y-6 text-center">
            <p className="text-lg text-muted-foreground">
              Login form coming soon. This page is under construction.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default StudentLogin;
