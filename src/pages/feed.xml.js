import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site + '/blog/',

		"follow_challenge": {
			"feed_id": "57618470631123968",
			"user_id": "41669588208292864"
		}
		,
		items: posts.sort((a,b) => b.data.pubDate - a.data.pubDate).map((post) => ({
			...post.data,
			link: `/blog/${post.id}/`,
		})),
	},);
}
