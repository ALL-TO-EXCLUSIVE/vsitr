
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
  className,
}: PageHeaderProps) {
  return (
    <div 
      className={cn(
        "relative py-16 md:py-24 mb-8 bg-cover bg-center bg-no-repeat",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in delay-100">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
