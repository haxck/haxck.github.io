---
title: 代码编辑利器 VScode
description: none
pubDate: 2018-01-28 18:02:09
update: 2018-04-23 11:46:00
---



## 前言

前几年在被问到“该用那款编辑器？”时还会有大量的候选，如今，如果还有人问，我想只能是 VScode 了。

即使你是喜欢“开箱即用”的人，不用配置不用折腾，也会发现其中的乐趣。

本文旨在说明一些 VScode 常用功能，帮助你了解这款编辑器以及提高你的编辑效率。

## 编辑

### 基本编辑（Basic Editing)

* `Ctrl + Enter` : 在下面新增一行并跳至该行
* `Ctrl + Shift + Enter` : 在上面增加一行并跳至该行
* `Ctrl + ←/→` : 逐词移动
* `Ctrl + Shift + ←/→` 逐词选择
* `Ctrl + ↑/↓` 移动显示区域
* `Alt + ↑/↓`  移动该行
* `Shift + Alt + ↑/↓`  在上面或下面复制该行
* `Ctrl + Alt + ↑/↓` 多行编辑 

### 查找 & 替换（Finding & Replacing）

查找 `Ctrl + f` 和替换 `Ctrl + h` 想必都很熟悉。在必要的时候，还可以 `Alt + c` 切换大小写敏感（Case-sensitive）或者使用正则表达式 `Alt + r`

### 跳转（Jumping）

* 跳转到文件

    `Ctrl + P` 会列出当前打开的文件和最近打开过的文件，输入文件名可搜索当前目录文件，Enter跳转至该文件。→可连续打开文件

* 跳转到某行 

    `Ctrl + g` 能在当前文件中跳到指定行中，也可以在 `Ctrl + p` 匹配到文件后，继续输入 `:Num` 以跳转到更精确的位置

* 跳转到符号（Symbol）

    VSC 还支持符号间跳转，`Ctrl + Shift + o` 会显示出当前文件中的符号（函数名、变量名）。也可以在 `Ctrl + p` 中直接输入 `@`。 


### 窗口 & 并排编辑（Window & Side by side editing）


使用 `Ctrl + Shift + n` 创建一个新窗口，当窗口内没有标签时，使用Ctrl + W关闭该窗口。

使用 `Ctrl + N` 在当前窗口创建一个新标签，Ctrl + W关闭当前标签，Ctrl + Shift + T恢复刚刚关闭的标签。Ctrl + tab 标签间切换

编辑代码时我们会需要参照另外一个文件，比如写 MarkDown 时在一侧显示预览，这时使用 `Ctrl + \` 可将一个窗口分为多个编辑区域， `Ctrl + Num` 在窗口间切换。在编辑 MarkDown 时使用 `Ctrl + Shift + m` 显示实时预览。

### 代码片段（Snippets）
代码片段可以将一大段代码起一个名字。使用时，直接输入代码片段的名字，即可替换成预先设置的内容。

在 VSC 中我们可以自己创建自己的代码片段，具体可参考 [创建自己的代码片段](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

## 插件
我个人比较喜欢 VScode 的插件功能。除了众多的插件外，还有一个很贴心的功能。它在你需要的时候提示你可能需要某个插件。比如说你打开了 vue 文件，它会提示你安装一些代码高亮的插件，十分省心。

我安装的插件有：

- One Dark Pro （主题）
- Vetur （Vue代码高亮、格式化工具）
- indent-rainbow （缩进）
- Live Server (快速启动一个本地服务器)

## 结尾

好了，VScode 的功能远不只如此，如果你感兴趣可以去官网了解。最后，了解完别忘了实践！