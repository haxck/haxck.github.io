---
title: 自动部署 hexo 博客
date: 2018-03-06 15:10:16
tags: 
---

去年将博客搬到了 Github ，用的是 hexo 生成好的静态网页。此外还开了新分支来备份 hexo 源文件。每次写完文章后，hexo generate，hexo deploy 等一系列操作。

懒啊！！！

![hexo-flowchart](http://oerfykrpf.bkt.clouddn.com/hexo-github-flowchart.png)

不过，懒，可能是进步的唯一动力。查资料。

CI（持续集成）可以自动地处理测试、编译、部署。😜原来这种事大家都想的一样。

我用的 CI 是 CircleCI。每月有 1500 的免费构建时间，对于一个博客，够用了。使用 GitHub 账号登录，选择需要自动化的项目，根据提示创建相应的文件，一气呵成。

配置也相对简单，只需把平时的操作列举即可。唯一需要注意的是要有仓库的写权限。

![ci-flowchart](http://oerfykrpf.bkt.clouddn.com/hexo-ci-flowchart.png)

至此，只需要将源码推到 GitHub ，CI 会自动地生成静态网页。



