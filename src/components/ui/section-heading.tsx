
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  pretitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeading({
  pretitle,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'space-y-4',
        align === 'center' && 'text-center mx-auto',
        align === 'right' && 'text-right ml-auto',
        align === 'left' && 'text-left mr-auto',
        className
      )}
    >
      {pretitle && (
        <span className="inline-block text-sm font-medium tracking-wide uppercase text-primary animate-fade-in">
          {pretitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight animate-fade-in delay-75">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg max-w-[50ch] mx-auto animate-fade-in delay-150">
          {description}
        </p>
      )}
    </div>
  );
}
