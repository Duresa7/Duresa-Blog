import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../lib/site-data';
import { listPublishedPosts, getPostExcerpt } from '../lib/posts';

export async function GET(context: APIContext) {
  const posts = listPublishedPosts();

  return rss({
    title: `${SITE.name} — Field Notes`,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.title,
      link: `/${post.slug}/`,
      pubDate: post.published_at ? new Date(post.published_at) : undefined,
      description: post.standfirst ?? getPostExcerpt(post.body_html),
      content: post.body_html,
      categories: post.tags ?? [],
      author: `${SITE.email} (${SITE.name})`,
    })),
    customData: `<language>en-us</language>`,
    stylesheet: false,
  });
}
