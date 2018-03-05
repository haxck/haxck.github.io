---
title: using-vscode
date: 2018-01-28 18:02:09
tags:
---



## 前言

前几年还会有人问“该用那款编辑器”还会有大量的候选，如今，如果还有人问我该用那款编辑器，我会毫不犹豫地向他推荐VS code。
本文旨在说明 VS code 。

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
代码片段可以

在 VSC 中我们可以自己创建自己的代码片段，具体可参考 [创建自己的代码片段](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

## 插件


## 调试

    Ctrl + Shift + m ：错误面板

        
