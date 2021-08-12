---
title: Git 提交文件属性
categories: 运维开发
toc: true
date: 2021-08-11 19:18:35
permalink: /pages/93cba5/
tags: 
  - null
sidebar: auto
---

默认git提交的文件没有属性，例如执行权限

可以使用下面的命令

> git update-index --chmod=+x script.sh