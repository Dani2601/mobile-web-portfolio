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
      className="inline-block px-2 pb-[2px] pt-[1px] rounded-full"
      style={{ backgroundColor: background }}
    >
      <span
        className={`text-xs font-semibold ${className}`}
        style={{ color: textColor }}
      >
        {label}
      </span>
    </div>
  );
}
