---
title: 用 syncthing 同步我的笔记
description: 文章主要讲述了如何使用 Syncthing 在多设备之间同步 Obsidian 笔记，并备份到 Github，以及 Syncthing 的一些使用技巧，如在 Windows 下自动后台运行和端口映射。
pubDate: 2025-07-08 13:56:21
ai: 文章主要讲述了如何使用 Syncthing 在多设备之间同步 Obsidian 笔记，并备份到 Github，以及 Syncthing 的一些使用技巧，如在 Windows 下自动后台运行和端口映射。
tags: ['Obsidian', 'Syncthing']
---
我的笔记是用 Obsidian 记录，好处就是资料都在自己手里，坏处是需要自己保存。之前用 Github 来备份，因为大部分时间都是用电脑写，提交拉取也算是顺手。但设备多了之后，就有些繁琐了。

Syncthing 就是用来处理多设备之间文件同步的工具，可以部署到自己的服务器上，还开源，不用担心数据泄露的问题，前提是你要管好自己的服务器。

在 https://syncthing.net/ 官网下载安装还是挺方便的，安装完后在浏览器中打开 http://localhost:8384 就能进到管理界面。记得在防火墙配置允许 TCP\UDP 22000 端口通过，不然同步会有问题。

## 同步到 IPhone

App Store 中先下载 Synctrain，我们先来把同步服务器添加进来，在 Devices 点添加新设备，用摄像头扫描服务器的标识即可快速添加。刷新网页就能看到提示，允许即可。在 Folder 中添加 Existing Folder，选择 Obsidian 文件夹。

这时需要在服务器上找到从手机上同步过来的文件夹，把 Github 中 Obsidian 文件放进去。回到手机 Synctrain 中，就能看到这个文件夹开始同步文件了。但是这只是看到这些文件，并没有下载下来，所有在手机上的 Obsidian 中并没有文件。在 Synctrain 的这个文件夹设置中，把 Selection 选到 All files 就会全部下载。全部完成后就能在手机中查看所有笔记了。
## 备份到 Github

现在服务器上有所有设备同步过来的文件，备份就不在本地做了，找 AI 写段自动提交 Github 的脚本，设个定时任务，一劳永逸。随着脚本越来越多，如何管理这些脚本成了问题，以后再琢磨这事。

## 其它
### Windows 下自动后台运行
在运行中输入 `shell:startup` 打开启动文件夹，新建一个快捷方式，把 Syncthing 地址后面加上`--no-console --no-browser`即可。在 Win11 中由于默认使用的是终端程序，导致不能正常隐藏，解决办法是用计划任务运行一段 ps 脚本。
```ps
Start-Process -FilePath "D:\syncthing.exe" -ArgumentList "--no-console --no-browser" -WindowStyle Hidden
```
在计划任务中，用 PowerShell 打开这个脚本即可隐藏启动 Syncthing。

### 将服务器中的端口映射到本地
VS Code 中的端口映射太方便开发了，同样的方法我们在不用改防火墙配置就能访问服务器管理网页，搜了一下，原来就是一条命令 `ssh -L (本地端口)8888:localhost:8384(服务器端口) server_user@server`