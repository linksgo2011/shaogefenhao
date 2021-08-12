---
title: H5 Cordova打包方案
categories: 前端工程
toc: true
date: 2021-08-11 19:18:35
permalink: /pages/9ecfa3/
tags: 
  - 
---

## 为什么需要H5打包？

通过H5可以开发跨平台的APP，比如安卓、IOS.

## 使用Cordova打包

使用npm安装

> npm install -g cordova

创建一个项目

> cordova create hello com.example.hello HelloWorld

在这个项目下有一个www的目录，该目录就是放置我们的webapp的位置

然后我们可以添加需要编译的平台

> cordova platform add ios
> cordova platform add android

查看添加的平台

> cordova platform ls

构建所有平台

> cordova build

构建指定平台

> cordova build ios

## 参考资源 

- https://cordova.apache.org/docs/en/latest/guide/cli/