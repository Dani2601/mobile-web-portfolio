type ButtonProps = {
    label: string;
    bgColor: string;
    icon?: React.ReactNode;
};
//shadow-[#2563EB]
export default function Button({label, bgColor, icon}: ButtonProps) {
    return (
        <button style={{ backgroundColor: bgColor }}
            className="inline-flex items-center justify-center min-h-10 px-8 h-14
            gap-2 whitespace-nowrap font-medium rounded-full text-lg text-white shadow-md"
        >
            {label}
            {icon}
        </button>
    );
}