import BlogListItem from "./BlogListItem";
import { TPost } from "../utils/types";

export default function BlogList({ blogs, isHome }: { blogs: TPost[], isHome?: boolean }) {
    return (
        <div className={`flex flex-col blog-list w-full ${!isHome && "gap-2"}`}>
            {blogs.map((blog) => (
                <BlogListItem key={blog.id} blog={blog} isHome={isHome}/>
            ))}
        </div>
    );
}