
---
title: Scoop 笔记
description: Windows 上使用 Scoop 软件包管理器的安装、配置和使用笔记
pubDate: 2025-06-06
ai: 这篇文章记录了在 Windows 上使用 Scoop 软件包管理器的全过程，包括安装方法、配置国内镜像加速、常用命令、备份与恢复，以及作者已安装的软件列表。
tags: ["工具", "Windows"]
---

随着软件越安越多，管理更新就开始变得繁琐，之前听闻过一些 Windows 上的软件包管理器，因种种原因没有使用。这次更新 Nodejs ，Bun 等软件终于忍无可忍，故开始尝试 [Scoop](https://scoop.sh/) 。以下为 Scoop 笔记。
# 安装
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```
默认软件安装目录为`C:\Users\yourname\Scoop\`，如果需要修改，请参考 https://github.com/ScoopInstaller/Install#advanced-installation
# 配置镜像加速
```powershell
scoop bucket rm main

# 添加国内镜像源
scoop bucket add main https://mirror.nju.edu.cn/git/scoop-main.git
scppp bucket add extras https://mirror.nju.edu.cn/git/scoop-extras.git

# 更新
scoop update 

# 安装 Aria2
scoop install aria2

# 配置 scoop 使用 aria 下载
scoop config aria2-enabled true
scoop config aria2-split 16
scoop config aria2-max-connection-per-server 16
scoop config aria2-min-split-size 1M
```

# 常用命令
```powershell
scoop search xxx      # 搜索软件
scoop install xxx     # 安装软件
scoop cat xxx         # 查看软件信息
scoop list            # 列出已安装
scoop Status          # 查看可更新
scoop update          # 全部更新
scoop uninstall xxx   # 卸载
scoop cleanup         # 清理旧版本缓存
```
# 备份与恢复

```powershell
scoop export > app.json # 导出软件与bucket列表

# 恢复
scoop import app.json
```
# 目前我安装的一些软件
```powershell

PS D:\> scoop list
Installed apps:

Name  Version  Source Updated             Info
----  -------  ------ -------             ----
7zip  26.02    main   2026-08-24 16:51:27
aria2 1.37.0-1 main   2026-08-24 14:22:36
bun   1.4.0    main   2026-08-24 16:45:58
yaak  2026.6.0 extras 2026-08-24 16:51:44

```
