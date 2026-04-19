import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
  "aria-labelledby"?: string;
}

export function SectionWrapper({
  id,
  className,
  innerClassName,
  children,
  "aria-labelledby": ariaLabelledBy,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "relative w-full px-4 py-20 sm:px-6 lg:px-8 lg:py-28",
        className
      )}
    >
      <div className={cn("mx-auto max-w-6xl", innerClassName)}>{children}</div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#00E5FF]">
      {children}
    </p>
  );
}

export function SectionHeading({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={cn(
        "text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SectionSubheading({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 max-w-2xl text-[#A1A1AA] leading-relaxed">
      {children}
    </p>
  );
}
