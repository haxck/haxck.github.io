---
title: 给 Astro 博客添加 Algolia 搜索服务
description: none
pubDate: 2024-11-27 15:44:42
tags: ["随笔"]
---

  翻看文档，其中大部分搜索都由 Algolia 提供，就想着使用它来为我的博客提供搜索。折腾了一番，才发现有更简单的方式。
## 手工搓代码
### 整理思路
  根据 Algolia 文档的指引，安装依赖，发送索引数据，试用 API，看起来很简单。
		- 第一步把博客的文章生成一份 JSON 索引数据
		- Astro 每次构建完成后，将数据发送给 Algolia 重新索引
		- 创建搜索框及搜索结果页面
将博客文章生成一份 JSON，在 Astro 的 page 目录中创建 data.json.js。跟生成 RSS 差不多，我直接用 RSS 的文件改了一下。具体可参考[文档](https://docs.astro.build/zh-cn/guides/endpoints/)
	
```javascript
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
```
  
最后就会在 build 时，在根目录下生成一个 `data.json` 文件，有了这个文件，我们就可以生成搜索索引了。直接复制 Algolia 提示安装依赖即可。

以后写了新文章，自动往 Algolia 上传一下，不就更省事了，那怎么自动化呢？翻看 Astro 文档，在集成 API 中有生命周期的方法。按照集成的写法就能在 build 之后，把 JSON 上传到 Algolia 一份。


``` javascript
import { searchClient } from '@algolia/client-search';
import { readFile } from "node:fs/promises"

const client = searchClient(ALGOLIA_APPID, ALGOLIA_ADMIN_KEY);

const processRecords = async (data) => {
  return await client.saveObjects({ indexName: 'blog', objects: data });
};

export default function algolia(): AstroIntegration {
  return {
    name: 'algolia',
    hooks: {
      'astro:build:done': async ({ logger, dir }) => {
        try {
          const path = new URL('./algolia.json', dir);
          const data = await readFile(path);
          if (!data) {
            throw new Error('No data found in algolia.json');
          }

          const res = JSON.parse(data.toString());
          if (!Array.isArray(res)) {
            throw new Error('Invalid data format: expected an array');
          }

          await processRecords(res)
            .then(() => {
              logger.info('Records successfully processed')
            })
            .catch((err) => logger.error('Error processing records:${err}'));
        } catch (error) {
          logger.error('An error occurred: ${error}');
        }
      }
    }
  };
}
```

另外还需要在 `astro.config.mjs` 中引入这个集成文件


``` javascript
import algolia from "./src/utils/algolia.ts"

export default defineConfig({
  integrations: [..., algolia()],
});
  ```

至此，准备工作就算完成了。下一步就是在网页中怎么调用搜索，返回正确结果。

按说应该很简单，因为其它网站都是统一的界面，所以调用就行了，翻了很多遍文档，都是在从零构建界面。得，就先这么来吧。

``` javascript
import { useState } from 'react';
import { searchClient } from '@algolia/client-search';
import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch';
// Include only the reset
import 'instantsearch.css/themes/reset.css';
// or include the full Satellite theme
import 'instantsearch.css/themes/satellite.css';
const Client = searchClient(APPID, APPKEY);

// 结果列表
function Hit({ hit }) {
  return (
    <div className='truncate'>
      <a className='text-black text-wrap' href={hit.link}>
        <h1 className='text-wrap'>{hit.title}</h1>
        <Highlight attribute="content" hit={hit} className=' truncate' />
      </a>
    </div>
  );
}


export default function() {
  const [query, setQuery] = useState(false);
  const handleSearchChange = (query, search) => {
    if (query !== "") {
      setQuery(true);
      search(query)
    } else {
      setQuery(false)
    }

  };
  return (
    <InstantSearch searchClient={Client} indexName="blog">
      // 搜索框
      <SearchBox queryHook={handleSearchChange} />
      {query && (
        <Hits
          hitComponent={Hit} />
      )}
    </InstantSearch>
  );
}

```

至此，博客就有了搜索。Algolia 的功能远不止如此，我只是用到了最基本的搜索。如果你对结果有更精细的要求，它也能满足。就当我还在琢磨如何设计界面的时候，突然找到了 [DocSearch](https://docsearch.algolia.com/)，这个让静态博客、文档网站都能集成搜索的服务。

  ## DocSearch

使用 DocSearch 不像 Algolia 那样直接注册就能用，而是先申请再使用，提交[申请](https://docsearch.algolia.com/apply/)后会收到邮件。按照邮件提示，添加相应的代码即可。

绕了一圈，终于找见了我想要的，简单，快捷。看到网上关于 Astro 接入 Algolia 的内容很少，希望这篇踩坑文章能对你有些帮助。


