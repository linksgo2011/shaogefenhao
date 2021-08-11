---
title: Lambda 入门
categories: 运维开发
toc: true
---

## 相关资源

Official website:
http://docs.aws.amazon.com/zh_cn/lambda/latest/dg/lambda-app.html

A video tutorial:
https://www.lynda.com/Amazon-Web-Services-tutorials/Serverless-architectures-AWS-Lambda/569195/617984-4.html?srchtrk=index%3a3%0alinktypeid%3a2%0aq%3alambda+aws%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2

## 什么是Lambda？
AWS Lambda 是一项计算服务，可使您无需预配置或管理服务器即可运行代码。AWS Lambda 只在需要时执行您的代码并自动缩放，从每天几个请求到每秒数千个请求。您只需按消耗的计算时间付费 – 代码未运行时不产生费用。借助 AWS Lambda，您几乎可以为任何类型的应用程序或后端服务运行代码，而且无需执行任何管理。AWS Lambda 在可用性高的计算基础设施上运行您的代码，执行计算资源的所有管理工作，其中包括服务器和操作系统维护、容量预置和自动扩展、代码监控和记录。您只需要以 AWS Lambda 支持的一种语言 (目前为 Node.js、Java、C# 和 Python) 提供您的代码。

## 为什么需要学习它？

Lambda 提供了一种与环境无关的代码执行平台，更加灵活去使用

## 这项技术定位

新技术可以用在私人或者试用项目中，产品环境暂时不推荐使用，类似于BAE等平台

## Scope

实际上Lambda 包含了函数和事件系统。在AWS中可以设定各种不同的事件源来trigger我们的Lambda函数

## 构建 Lambda 函数

Lambda函数可以在本地开发环境中开发，然后上传到AWS平台上运行。目前AWS支持四种编程语言：

- Nodejs
- Java
- Python
- C#

编写相关的程序需要遵守一些基本程序结构，因此AWS能解析并执行。

## 



