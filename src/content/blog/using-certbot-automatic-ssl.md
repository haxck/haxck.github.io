---
title: 使用 Certbot 自动更新 SSL 证书
description: none
tags: ["技术","Nginx","SSL"]
pubDate: 2024-06-06 16:25:00
---
网站 SSL 证书快过期了，就想着这次换成自动更新，省的心里惦记。这不换不知道，一换都是事儿，就整理成博客，记录一下。

自动更新 SSL 证书原理很简单，就是自动向证书颁发机构申请免费证书，然后替换。Certbot 就是干这事儿的工具，它能自动帮我们申请证书，替换，而且定时检查证书。简单来说一旦配置好就不需要再关心证书了。


在安装第一步就遇到了问题，Cartbot 需要使用 snapd 工具才能安装。在安装 snapd 时，提示  selinux 版本不对，一顿折腾，遂放弃。就这么了嘛？前段时间看到 CentOS 即将停止维护，干脆把系统换了？琢磨了下，把该备份的文件备份，说干就干。


## 换系统

对于操作系统，没有太多研究，也就是停留在使用层面。选什么系统还真难到我了，最后选了最流行得 Ubuntu。腾讯云安装系统超级简单，直接选择就行。不知道为何 Ubuntu 版本是 22，现在都 24 了，为了安全，更新到最新版本。
	
搜了一下，没想到现在一条命令就可以更新了。只要安装了装了 `sudo apt install update-manager-core` `sudo do-release-upgrade -d` 需要注意得是：在更新之前，需要先把当前软件包更新到最新，更新完软件包再开始使用这条命令。

至此，系统就算安装完了。不知道大家安装完会安装什么？对于我来说就是安装一下运行环境，把网站跑起来就够了。

## Nginx
照着[官网](https://nginx.org/en/linux_packages.html#Ubuntu) 把 nginx 的源添加进来，直接 `apt install nginx`，没想到居然报错，err。一番排查居然是系统太新了，导致刚刚生成的 nginx 源路径对不上。手动修改成上一个版本`noble`，安装成功。

简单配置一下，测试 Certbot。

## Certbot

snapd 安装上 Certbot，直接 `sudo certbot --nginx`，输入域名基本上就没别的了。重启 Nginx，搞定。
