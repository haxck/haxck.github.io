---
title: 上手 Vuepress
date: 2018-04-19 19:50:41
tags:
---

## 什么是 Vuepress

Vuepress 是一个基于 vue 的静态网页生成器，与 GATSBY 类似。比 Hexo 这类生成器要相对简单，稍加配置就可以做出带有 SEO 现代 web 应用。

具体可以去[官网](https://vuepress.vuejs.org/)了解

由于vuepress是为了vue的文档而创建，使得它很默认的主题就是为了文档而设定的。你也可以自己写其它的主题。

接下来我们来快速地基于默认主题做一个静态站点。

## 安装 vuepress 

```sh
yarn global add vuepress
npm install  vuepress -g
```

## 配置

在没有任何配置的情况下，只有最基本的 Markdown 解析。所有的配置信息都放在`.vuepress/config.js`中

### 基础配置：
```javascript
module.exports={
    title: "网站标题",
    description: "网站描述"
    base: "/" //网站地址
}
```

### 添加侧边栏:

```javascript
themeCofig: {
    Sidebar:[
        {
            Title: "Name",
            Collapsable: false,
            Children:[
                "/",…
            ]
        }
    ]
}
```

## 打包与部署


### 打包

```sh
vuepress build .
```

默认打包后的内容在 `.vuepress/dist/` 目录下。也可以在配置中修改打包地址。

```javascript
dest: "dist"
```

### 部署
```javascript

# 导航到构建输出目录
cd dist

git init
git add -A
git commit -m 'deploy'

# 推到你仓库的的 gh-page 分支
# 将 <USERNAME>/<REPO> 替换为你的信息
git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
```