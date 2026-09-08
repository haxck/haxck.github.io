// src/pages/llms.txt.ts
import { getCollection } from 'astro:content';

export const GET = async () => {
  const posts = await getCollection('blog');

  // 2. 按日期降序排序
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );

  // 3. 静态的个人简介及核心入口部分
  const siteHeader = `# haxck.com
> Zhiqiang Du（haxck）的个人网站，一个喜欢折腾技术的开发者，记录学习与思考。

## 关于作者
杜志强，开发者。主要关注 AI 工具、Web 开发、效率工具和技术折腾。

## 关键入口
- [主页](https://www.haxck.com/): 个人介绍、项目入口、社交媒体
- [博客](https://www.haxck.com/blog/): 博客
- [收集](https://www.haxck.com/blog/quote): 语录与收集
- [清单](https://www.haxck.com/blog/list): 工具与资源清单
- [我如何用 AI](https://www.haxck.com/blog/how-i-use-ai): AI 使用方式与实践
- [RSS 订阅](https://www.haxck.com/blog/feed.xml): 全文 RSS Feed
- [Echo](http://echo.haxck.com/): 在线写信服务
- [NightMate](https://www.haxck.com/blog/lite-program/): 助眠微信小程序

## 社交与作品
- GitHub: https://github.com/haxck
- 微博：https://weibo.com/haxck
- Resume: https://read.cv/haxck
- Bilibili: https://space.bilibili.com/14586647 (老三制造)
- 微信公众号：X工厂
- 小红书：进击的强宝

## 博客文章
`;

  // 4. 动态生成文章列表
  const postsList = sortedPosts
    .map((post) => {
      const url = `https://www.haxck.com/blog/${post.id}/`;
      const dateStr = post.data.pubDate
        ? ` (${new Date(post.data.pubDate).toISOString().split('T')[0]})`
        : '';
      const description = post.data.description ? `: ${post.data.description}` : '';

      return `- [${post.data.title}](${url})${dateStr}${description}`;
    })
    .join('\n');

  // 5. 拼接完整内容
  const content = `${siteHeader}\n${postsList}`;

  // 6. 返回 Response 对象，声明 Content-Type
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      // 如果启用了 SSR，可以加上缓存控制 header
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
};