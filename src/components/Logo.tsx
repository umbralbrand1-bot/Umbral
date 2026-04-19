import { cn } from "@/lib/utils";

interface LogoProps {
  size?: number;
  variant?: "full" | "mark";
  className?: string;
  glow?: boolean;
}

export function Logo({
  size = 40,
  variant = "full",
  className,
  glow = false,
}: LogoProps) {
  const glowStyle = glow
    ? {
        filter:
          "drop-shadow(0 0 16px rgba(0, 229, 255, 0.35)) drop-shadow(0 0 40px rgba(59, 130, 246, 0.2))",
      }
    : undefined;

  const Mark = () => (
    <svg
      width={size}
      height={(size * 180) / 200}
      viewBox="0 0 200 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={glowStyle}
    >
      <defs>
        <linearGradient id={`umbral-light-${size}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id={`umbral-dark-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <linearGradient id={`umbral-beam-${size}`} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`umbral-arc-${size}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
          <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M 40 150 L 40 60 L 92 40 L 92 150 Z"
        fill={`url(#umbral-dark-${size})`}
        stroke="#334155"
        strokeWidth="1"
      />
      <rect x="95.5" y="35" width="3" height="118" fill={`url(#umbral-beam-${size})`} />
      <path
        d="M 102 150 L 102 35 Q 156 18 160 80 L 160 150 Z"
        fill={`url(#umbral-light-${size})`}
      />
      <path
        d="M 102 150 L 102 35 Q 156 18 160 80"
        stroke="#FFFFFF"
        strokeWidth="1"
        strokeOpacity="0.4"
        fill="none"
      />
      <path
        d="M 20 158 Q 100 168 180 158"
        stroke={`url(#umbral-arc-${size})`}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );

  if (variant === "mark") {
    return (
      <div className={cn("inline-flex", className)}>
        <Mark />
      </div>
    );
  }

  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <Mark />
      <span
        className="font-display font-semibold uppercase text-slate-50"
        style={{
          letterSpacing: "0.32em",
          fontSize: size * 0.42,
          paddingLeft: "0.32em",
        }}
      >
        UMBRAL
      </span>
    </div>
  );
}
