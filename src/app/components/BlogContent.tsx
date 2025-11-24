import { formatDate } from "../utils/helpers";
import ArticleContent from "./ArticleContent";

export default function BlogContent({ blog, content }: { blog: any, content: string }) {
    return (
        <>
            <div className="p-2">
                <h2 className="text-base font-bold">{blog.title.rendered}</h2>
                <p className="text-xs text-slate-350 mb-0">
                    {formatDate(blog.date)}
                </p>
            </div>
            <ArticleContent content={content} />
        </>
    );
}
