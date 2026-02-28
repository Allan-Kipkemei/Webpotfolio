"use client";

import Link from "next/link";
import { siteConfig } from "../config";
import { slideInFromLeft, slideInFromTop } from "../utils/motion";
import MotionTag from "./MotionTag";

type TProps = {
    isSticky?: boolean;
    noAnimate?: boolean
};

export default function SocialIcons({ isSticky, noAnimate }: TProps) {
    const validSocialLinks = siteConfig.socialLinks.filter(
        (link) =>
            link.url.startsWith("http://") ||
            link.url.startsWith("https://") ||
            link.url.startsWith("mailto:")
    );

    let isMobile = false;
    if (typeof window !== "undefined") {
        isMobile = window.matchMedia("(max-width: 1024px)").matches;
    }
    return (
        <MotionTag
            tag="div"
            variants={isMobile ? slideInFromTop(1) : slideInFromLeft(1)}
            initial={noAnimate ? "visible" : "hidden"}
            animate="visible"
            className={`w-full lg:pt-0 lg:pl-1 ${!isSticky ? 'lg:hidden py-4' : 'pt-12'} ${noAnimate && '!flex !lg:flex justify-center p-2'}`}
        >
            <ul className="flex justify-center lg:justify-start gap-4">
                {validSocialLinks.map((link, index) => (
                    <li key={`${link.url}-${index}`}>
                        <Link
                            className="text-lg hover:text-pink-500 hover:scale-110 transition-all duration-300 cursor-pointer"
                            href={link.url}
                            target={link.url.startsWith("mailto:") ? "_self" : "_blank"}
                            rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                        >
                            {link.icon}
                        </Link>
                    </li>
                ))}
            </ul>
        </MotionTag>
    );
}
