---
title: 在 Obsidian 中写博客
description: 再也不用在 VS Code 中写博客啦
pubDate: 2025-07-08 16:29
ai: 文章主要讲述了作者如何使用 Obsidian 替代 VS Code 来撰写和发布 Astro 博客，通过 Obsidian 的模板功能快速生成带有 frontmatter 的 Markdown 文件，并利用 Markdown Blogger 插件将文件发送到 Astro 目录，最后使用脚本推送至 Github。
tags:
  - Obsidian
---
我的博客是用 Astro 搭建的，每篇文章都是一个 Markdown 文件，只是这个 Markdown 文件多了一些配置属性（frontmatter），每次写博客新建一个 Markdown 文件后都需要一些固定的 frontmatter，如标题、写作日期等。由于是固定结构，就在 VS Code 中写了一段 Snippet，每次调用就能快速把整个博客结构补全。

现在经常使用 Obsidian ，就想着能不能不打开 VS Code，直接在 Obsidian 中写博客，然后发布，随即就开始了一些尝试。

发一篇博客的流程是：
1. 新建 md 文件
2. 把文件放到 Astro 目录中
3. 推送到 Github

我们一步一步来，Obsidian 中的每篇笔记都是 Markdown，我们只需要把固定的 frontmatter 放进来即可，这一点跟 VS Code是一样的，在 Obsidian 中套用模板就行。

第二步是把文件放到 Astro 目录中，在 Obsidian 插件中有一款插件就可以把文件发送到制定文件夹中。Markdown Blogger `obsidian://show-plugin?id=markdown-blogger`安装好插件后，设置好 Astro 路径，以后写好文章，`Ctrl + p` ->`markdown blogger: push`即可发送到 Astro 。

接下来是推送到 Github，这个我没有想到好的方式，目前就是使用脚本文件自动提交。先就这样吧，后续再修改。可以愉快地在 Obsidian 中写博客啦。
