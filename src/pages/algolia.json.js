import { getCollection } from 'astro:content';

export async function GET({ params, request }) {
  const posts = await getCollection('blog');

  return Response.json(
    posts.map((post) => ({
      ...post.data,
      content: post.body,
      link: `/posts/${post.slug}/`,
    })),
  );
}
