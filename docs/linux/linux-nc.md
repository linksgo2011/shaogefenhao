---
title: linux nc 工具零时监听端口
categories: linux
toc: true
---

为了测试端口是否开放，需要临时开启端口

可以使用文件描述符:

> lsof -i:6066

以及

> nc -l 0.0.0.0 6066
> netstat -ntlp 就能查看端口了


## 参考地址

- https://www.v2ex.com/amp/t/459497