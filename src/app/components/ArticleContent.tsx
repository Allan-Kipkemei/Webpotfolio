export default function ArticleContent({ content }: { content: string }) {
    return (
        <article
            className="article-content text-sm text-slate-350 p-2 leading-6"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}
