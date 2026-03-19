type ButtonProps = {
  label: string;
  icon?: React.ReactNode;
  className?: string;
};

export default function Button({
  label,
  icon,
  className = "",
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center min-h-10 px-8 h-14
      gap-2 whitespace-nowrap font-medium rounded-full text-lg text-white shadow-md ${className}`}
    >
      {label}
      {icon}
    </button>
  );
}
