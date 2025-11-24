import SectionLabel from "./SectionLabel";
import MotionTag from "./MotionTag";
import { slideInFromRight } from "../utils/motion";
import { siteConfig } from "../config";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <MotionTag
            tag="div"
            variants={slideInFromRight(1.4)}
            initial="hidden"
            animate="visible"
        >
            <section
                id="projects"
                className="w-full flex flex-wrap justify-center lg:justify-start mb-8 lg:mb-12"
            >
                <SectionLabel label="PROJECTS" className="lg:pl-6" />
                <div className="w-full flex flex-wrap gap-4">
                    {siteConfig.sections.projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </section>
        </MotionTag>
    );
}
