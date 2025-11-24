import { siteConfig } from "@/app/config";
import SectionLabel from "./SectionLabel";
import ExperienceCard from "./ExperienceCard";
import MotionTag from "./MotionTag";
import { slideInFromRight } from "../utils/motion";

export default function Experiences() {
    return (
        <MotionTag
            tag="div"   
            variants={slideInFromRight(1.2)}
            initial="hidden"
            animate="visible"
            className="lg:pl-6"
        >
            <section
                id="experiences"
                className="w-full flex flex-wrap justify-center lg:justify-start mb-8 lg:mb-12"
            >
                <SectionLabel label="EXPERIENCES" />
                <div className="w-full flex flex-wrap">
                    {siteConfig.sections.experiences.map(
                        (experience, index) => (
                            <ExperienceCard key={index} {...experience} />
                        )
                    )}
                </div>
            </section>
        </MotionTag>
    );
}
