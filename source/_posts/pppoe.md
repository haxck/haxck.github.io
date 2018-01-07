---
title: 在 Cisco 路由上使用 PPPoE 拨号
date: 2017-07-13 16:17:09
tags: 笔记
---

int dialer 1
ip address negoriated
encapsulation ppp
ppp authentication pap callin
ppp pap sent-username password
ppp ipcp route default


dialer pool 1 
no shut

int g0/1
no ip address
pppoe enable
pppoe-client dialer-pool-number 1
no shut
