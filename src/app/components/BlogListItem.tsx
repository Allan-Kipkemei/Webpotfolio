import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";
import { formatDate } from "../utils/helpers";
import { TPost } from "../utils/types";

export default function BlogListItem({
    blog,
    isHome,
}: {
    blog: TPost;
    isHome?: boolean;
}) {
    const blogDate = formatDate(blog.date);

    return (
        <Link
            href={`/blogs/${blog.slug}`}
            className={`w-full ${
                isHome ? "pl-0 lg:pl-3" : "bg-[rgb(255,255,255,0.02)] lg:border"
            } p-3 flex justify-between rounded-md lg:hover:bg-[rgb(255,255,255,0.06)] transition-colors duration-300 group border-[rgb(255,255,255,0.02)]`}
        >
            <div className="lg:flex flex-wrap justify-between items-center">
                <div className="flex items-center group-hover:text-orange-500 transition-colors duration-300 lg:mb-1 text-slate-300 w-full">
                    <div className="lg:max-w-[90%]">
                        <h3 className="text-[13px] font-bold">
                            {blog.title.rendered}
                            <MdOutlineArrowOutward className="text-xs transition-transform duration-300 group-hover:scale-125 inline ml-1 align-middle" />
                        </h3>
                    </div>
                </div>
                <div className="lg:hidden">
                    <p className="text-[11px] text-slate-350 pb-1">
                        {blogDate}
                    </p>
                </div>
                <div
                    className="text-xs text-slate-350 line-clamp-2 w-full lg:max-w-[95%]"
                    dangerouslySetInnerHTML={{
                        __html: blog.excerpt.rendered,
                    }}
                />
            </div>
            <div className="hidden lg:flex justify-end flex-none">
                <p className="text-[11px] text-slate-350">{blogDate}</p>
            </div>
        </Link>
    );
}
