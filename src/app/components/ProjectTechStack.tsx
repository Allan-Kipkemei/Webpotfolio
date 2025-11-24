type TProps = {
    technologies: {
        icon: React.ReactNode;
        name: string;
    }[];
}

export default function ProjectTechStack({ technologies }: TProps) {
    return (
        <div className="flex flex-wrap gap-2 lg:px-2">
            {technologies.map((technology, index) => (
                <div key={index} className="flex items-center gap-1 p-1 px-2 bg-[rgba(56,48,76,0.3)]  rounded-sm">
                    {technology.icon}
                    <span className="text-xs text-slate-100">{technology.name}</span>
                </div>
            ))}
        </div>
    )
}
