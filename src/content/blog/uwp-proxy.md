---
title: 修复 UWP 应用不能联网
description: none
pubDate: 2023-09-01
tags: ["Windows"]
---

原因是 uwp 应用不能访问 localhost，使用 CheckNetIsolation.exe 命运工具可解除这个应用限制。

CheckNetIsolation.exe loopbackexempt -a -p=SID
SID 查询比较复杂，需要在 regedit 中HKEY_CURRENT_USER\Software\Classes\Local Settings\Software\Microsoft\Windows\CurrentVersion\AppContainer\Mappings\ 查询SID
还有一种方法是用应用名

CheckNetIsolation.exe loopbackexempt -a -n=app_name

获取应用名的方式：

Get-AppxPackage 获取全部APP

Get-AppxPackage | Select-String -Pattern "Microsoft" 查询包含 Microsoft 的 APP。

## UWP-Loopback-Exemption-Manager
使用软件管理
[UWP-Loopback-Exemption-Manager github](https://github.com/themerror/UWP-Loopback-Exemption-Manager)

# 参考资料
[Windows 10 UWP apps can't connect to local IP (loopback restriction)](https://www.mysysadmintips.com/windows/clients/912-windows-10-uwp-apps-can-t-connect-to-local-ip-loopback-restriction)

