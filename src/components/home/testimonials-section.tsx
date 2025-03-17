
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Computer Engineering, Batch of 2021",
    quote: "The four years at VSITR were transformative. The faculty's guidance and industry-relevant curriculum helped me secure a position at a leading tech company. The emphasis on practical learning set a strong foundation for my career.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Information Technology, Batch of 2020",
    quote: "VSITR provided me with numerous opportunities to develop technical and soft skills. The project-based learning approach and access to modern labs prepared me well for the industry challenges I face today as a software developer.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Arjun Desai",
    role: "Electronics Engineering, Batch of 2019",
    quote: "The research-focused environment at VSITR inspired me to pursue my passion for innovation. The mentorship from professors and exposure to industry collaborations significantly shaped my approach to problem-solving in my current role.",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container px-4 md:px-6">
        <SectionHeading
          pretitle="Success Stories"
          title="What Our Alumni Say"
          description="Hear from our graduates about how VSITR has contributed to their personal and professional growth."
          className="max-w-3xl mx-auto mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className={cn(
                "bg-white border border-border shadow-subtle overflow-hidden hover-lift",
                index === 1 ? "md:transform md:-translate-y-6" : ""
              )}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-6">
                  <Quote size={32} className="text-primary/20" />
                </div>
                <p className="text-muted-foreground italic mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center mt-auto pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
