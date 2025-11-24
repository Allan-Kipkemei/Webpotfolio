import { NextResponse } from 'next/server';
import RSS from 'rss';
import { fetchBlogs } from '../utils/fetchWordpress';
import { siteConfig } from '../config';

export async function GET(request: Request) {
  const blogs = await fetchBlogs();
  const { protocol, host } = new URL(request.url);
  const siteUrl = `${protocol}//${host}`;

  const feed = new RSS({
    title: `${siteConfig.name}'s Blog`,
    description: siteConfig.description,
    feed_url: `${siteUrl}/feed.xml`,
    site_url: siteUrl,
    image_url: `${siteUrl}/logox.png`,
    managingEditor: `${siteConfig.email} (${siteConfig.name})`,
    webMaster: `${siteConfig.email} (${siteConfig.name})`,
    copyright: `${new Date().getFullYear()} ${siteConfig.name}`,
    language: 'en',
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });

  blogs.forEach((post) => {
    feed.item({
      title: post.title.rendered,
      description: post.excerpt.rendered,
      url: `${siteUrl}/blogs/${post.slug}`,
      guid: `${siteUrl}/blogs/${post.slug}`,
      categories: post.categories.map(String),
      author: `${siteConfig.email} (${siteConfig.name})`,
      date: new Date(post.date).toUTCString(),
    });
  });

  return new NextResponse(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/rss+xml',
      'Cache-Control': 'max-age=0, s-maxage=3600',
    },
  });
}



