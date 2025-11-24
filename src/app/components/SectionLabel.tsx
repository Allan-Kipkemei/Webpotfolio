type TProps = {
    label: string;
    className?: string;
};

export default function SectionLabel({ label, className }: TProps) {
    return (
        <div className={`w-full text-center lg:text-start mb-4 group ${className}`}>
            <h2 className="text-slate-100 text-xs font-bold tracking-[0.3em] pb-2 group-hover:text-pink-400 transition-all duration-300">
                {label}
            </h2>
            <div className="flex justify-center lg:justify-start">
                <hr className="w-36 lg:w-20 lg:group-hover:w-28 transition-all duration-300 h-[1px] text-slate-700 border-slate-700" />
            </div>
        </div>
    );
}
