import { TPost } from "./types";

const baseUrl = process.env.WORDPRESS_API_URL;
const appUsername = process.env.WORDPRESS_API_USERNAME;
const appPassword = process.env.WORDPRESS_API_PASSWORD;

export async function fetchHelper(endpoint: string) {

    if (!baseUrl) {
        console.error("ERROR: WORDPRESS_API_URL is missing.");
        return []; // Prevents 500 error in production
    }

    const url = `${baseUrl}/${endpoint}`;

    try {
        const res = await fetch(url, {
            headers: {
                "Authorization": `Basic ${btoa(`${appUsername}:${appPassword}`)}`
            }
        });

        if (!res.ok) {
            console.error("Fetch failed:", res.status, res.statusText);
            return [];
        }

        return await res.json();
    } catch (err) {
        console.error("Fetch error:", err);
        return [];
    }
}

export async function fetchBlogs(): Promise<TPost[]> {
    return fetchHelper("wp/v2/posts");
}

export async function fetchBlog(slug: string) {
    const blog = await fetchHelper(`wp/v2/posts?slug=${slug}&_embed`);
    return blog?.[0] || null;
}
    