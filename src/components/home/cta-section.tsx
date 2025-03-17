
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20 -z-10" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <span className="inline-block text-sm font-medium text-primary-foreground/80 uppercase tracking-wide">
            Join Our Community
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Begin Your Journey to Success with VSITR
          </h2>
          <p className="text-primary-foreground/90 md:text-lg max-w-2xl mx-auto">
            Take the first step towards a rewarding career in engineering. Apply now for admissions or contact us to learn more about our programs and facilities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button asChild size="lg" variant="secondary" className="font-medium">
              <Link to="/admissions/apply">Apply for Admission</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
