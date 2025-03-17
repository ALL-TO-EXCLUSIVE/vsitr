
import { cn } from "@/lib/utils";

interface Stat {
  value: string;
  label: string;
  description?: string;
}

const stats: Stat[] = [
  {
    value: "94%",
    label: "Placement Rate",
    description: "of eligible students receive job offers",
  },
  {
    value: "25+",
    label: "Industry Partners",
    description: "collaborating for placements and internships",
  },
  {
    value: "15+",
    label: "Research Projects",
    description: "ongoing funded research initiatives",
  },
  {
    value: "2500+",
    label: "Alumni Network",
    description: "successful professionals across the globe",
  },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-white p-6 rounded-lg border border-border shadow-subtle",
                "transform transition-all duration-500 hover:-translate-y-1 hover:shadow-hover",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <h3 className="text-lg font-semibold mb-1">{stat.label}</h3>
              {stat.description && (
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
