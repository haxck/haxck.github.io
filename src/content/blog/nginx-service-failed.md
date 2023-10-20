---
title: nginx.service 不能重启也不能停止服务
description: none
pubDate: 2023-10-20 09:08:00 
tags: Nginx 
---

一直以来我都没有介绍自己的习惯，就连展示自己的主页也没有太多介绍自己的内容，就想着把主页更新一下，把之前做过的项目放上来。等到更新完重启 Nginx 服务时却发生了意外。由于再重启服务前，还修改了 Nginx 配置，以为是 Nginx 配置错了，就用 `nginx -t` 检查了下配置文件，没想到居然没有问题。看来问题不止这么简单。
```sh
 See for nginx.service failed because the control process exited with error code.
 "systemctl status nginx.service" and "journalctl -xe" for details.
```
报错信息提示使用 `systemctl status nginx.service` 这条命令来了解更详细内容，提示如下：
```sh
 nginx.service - The nginx HTTP and reverse proxy server
   Loaded: loaded (/usr/lib/systemd/system/nginx.service; disabled; vendor preset: disabled)
   Active: failed (Result: exit-code) since Sun 2023-10-19 16:45:23 CST; 36s ago
  Process: 1020603 ExecStart=/usr/sbin/nginx (code=exited, status=0/SUCCESS)
  Process: 1020602 ExecStartPre=/usr/sbin/nginx -t (code=exited, status=0/SUCCESS)
  Process: 1020600 ExecStartPre=/usr/bin/rm -f /run/nginx.pid (code=exited, status=0/SUCCESS)
  ...
```
被这条错误彻底干蒙了，就尝试着先把 Nginx 停了。命令倒没报错，可服务一直还在运行。奇了怪了。随后我有尝试 kill 掉 Nginx，杀了就会自动开启新进程。此刻我彻底绝望了。

一番搜索后，在这篇[问答](https://stackoverflow.com/questions/35868976/nginx-service-failed-because-the-control-process-exited)中找到了解决办法。

```sh
sudo fuser -k 80/tcp

sudo fuser -k 443/tcp

sudo service nginx restart
```
唯一不同的是 Nginx 自身占用着端口，而不是因为 Apache 服务。

`fuser` 这条命令是 **用于查找哪个进程正在使用给定的文件、目录或套接字**，刚刚执行的就是查找谁在用 80、443 然后结束进程。问题在此之前就使用 `kill` 命令结束过 Nginx，怎么就用 `fuser`管用，而 `kill`没用呢。不解。


