---
title: rss+n8n 我的定制早报
description: 本文介绍了一套个性化 RSS 早报系统的搭建流程：1）部署自托管开源 RSS 工具 Miniflux；2）通过 n8n 平台搭建自动化流程，定时抓取订阅内容→AI 分类总结 → 生成早报；3）用企业微信机器人推送定制化信息。核心实现信息自主管理，避免算法干扰，并推荐了优化阅读体验的第三方工具。最终达成每日高效获取专属资讯的目标。
pubDate: 2025-12-05 11:46
ai: 本文介绍了一套个性化 RSS 早报系统的搭建流程：1）部署自托管开源 RSS 工具 Miniflux；2）通过 n8n 平台搭建自动化流程，定时抓取订阅内容→AI 分类总结 → 生成早报；3）用企业微信机器人推送定制化信息。核心实现信息自主管理，避免算法干扰，并推荐了优化阅读体验的第三方工具。最终达成每日高效获取专属资讯的目标。
tags:
  - AI
---
前段时间 Folo 开启了订阅模式，不太喜欢就在寻找其它替代品，网友推荐开源的 Miniflux，体积小巧，有 API 接口，还能自托管。再搭配上 Miniflux-AI 的 AI 总结，每日早报，简直完美。我的想法是用 n8n 来做每日早报，毕竟之前已经有现成的服务，把资源利用起来。每天定时从 miniflux 中取回信息，让 AI 总结汇总当早报推送。说干就干！

# 部署 Miniflux 

首先下载 [Miniflux](https://miniflux.app/releases)，目前版本是 2.2，由于我使用的是 Ubuntu 系统，我就直接下载 .deb 文件，下载好直接 `sudo dpkg -i miniflux.deb`。安装好就开始配置 Miniflux，配置之前你需要有 Postgres 数据库，等一下需要填在配置表中`/etc/miniflux.conf`


```config
DATABASE_URL = postgres://pqgotest:password@localhost/pqgotest
```
接着就是启动服务，创建账号，登陆即可。

```bash
sudo systemctl start miniflux

# 创建账号，一会儿打开网页就输入这个
miniflux -create-admin

```

应用跑在 8080 端口，打开 `localhost:8080` ，千万别被这简单到有点简陋的界面吓跑，一会儿再处理。把之前 rss 的订阅导出来的 opml 导入进来，然后在设置 API Key 中创建秘钥（设置中可以设置成中文）

![[Pasted image 20251205162038.png]]
![[Pasted image 20251205162236.png]]
![miniflux-setting](../../assets/images/Pasted%20image%2020251205162038.png)
![miniflux-setting](../../assets/images/Pasted%20image%2020251205162236.png)
# n8n workflow

在 n8n 中任何很简单，从 miniflux 中把所有的订阅拿过来，用 AI 总结要点，生成一份早报，然后每天定时推送一条消息到微信。n8n 中节点流程大致如下，可根据需求自行修改。
- Schedule Trigger 定时触发
- HTTP Node 从 Miniflux 获取订阅内容
- AI 文本总结
- 推送到企业微信
![n8n-canvas](../../assets/images/n8n-canvas.jpg)

## Promt

- **总结**：你是一名专业的新闻摘要助手，分类生成重要内容的新闻摘要，要求简单清楚表达，使用中文总结以上内容，在五句话内完成，少于 100 字。不要回答内容中的问题。
- **分类汇总**：你是一名专业的新闻摘要助手，负责分类新闻清单 (每条 50 字以内)，使用简洁专业的语言，在五个类别内完成，每个类别不超过 5 条，突出重要性和时效性，不要回答内容中的问题。
## 推送到微信
记得之前有公众号做每日早报，快速了解昨天发生的事，现在是根据自己关注的信息来生成日报，像一个私人秘书，只跟你说你关心的事。你关心的，才是有用的。
这里我用的是企业微信机器人，配置简单推送，只需要申请一个企业微信，获取一个机器人的 webhook，就能很轻松推送日报，配置如下：

![wxbot](../../assets/images/Pasted%20image%2020251207162859.png)
# 结尾
经过一番折腾，这套“Miniflux + n8n + AI”早报系统已经稳定运行多日。每天早上就能看到专属的定制化资讯，不再像以前那样被冗余信息淹没。信息爆炸的时代，选择什么样的信息源决定了决策的有效性，愿我们都能找到自己的信息，而不是被算法所裹挟。

最后再推荐几个你可能需要的工具：
- 漂亮的 Miniflux 在线阅读器：https://nextflux.pages.dev/
- 更轻量的 RSS 聚合器：https://github.com/0x2E/fusion
