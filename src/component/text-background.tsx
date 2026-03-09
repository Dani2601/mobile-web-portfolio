interface TextBackgroundProps {
  label: string;
  textColor?: string;
  background?: string;
  className?: string;
}

export default function TextBackground({
  label,
  textColor = "#000",
  background = "transparent",
  className,
}: TextBackgroundProps) {
  return (
    <div
      className={`inline-block px-2 py-[3px] rounded-full`}
      style={{ backgroundColor: background }}
    >
      <p
        className={`text-xs font-semibold ${className}`}
        style={{ color: textColor }}
      >
        {label}
      </p>
    </div>
  );
}
