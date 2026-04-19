interface GridBackgroundProps {
  size?: number;
  opacity?: number;
  color?: string;
  className?: string;
}

export function GridBackground({
  size = 60,
  opacity = 0.04,
  color = "#00E5FF",
  className = "",
}: GridBackgroundProps) {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const rgba = `rgba(${r}, ${g}, ${b}, ${opacity})`;

  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(${rgba} 1px, transparent 1px),
          linear-gradient(90deg, ${rgba} 1px, transparent 1px)
        `,
        backgroundSize: `${size}px ${size}px`,
        WebkitMaskImage:
          "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        maskImage:
          "radial-gradient(ellipse at center, black 20%, transparent 70%)",
      }}
    />
  );
}
