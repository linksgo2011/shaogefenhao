---
title: 程序员的美德：克制、简单和笨拙
toc: true
recommend: true
date: 2021-08-11 19:18:36
categories: 
  - 思维和方法论
sidebar: auto
permalink: /thinking/the-three-great-girtues-of-a-programmer/
---



Perl 语言的发明人 Larry Wall 一个经典叙述：优秀程序员应该有三大美德：懒惰、急躁和傲慢。

在他的世界观里，懒惰可以驱使你善于利用工具，减少重复劳动；急躁可以驱动你写出高效运行的程序；而傲慢可以让你写出让别人挑不出毛病的程序。

这几项是我进入编程行业一直信奉的真理，这些 “美德” 对于新手来说是很好的提醒。工作很久之后，见识过各种项目以及所谓的最佳实践，对编程有了不同的认识。



我想加上程序员需要坚持的另外一面：克制、简单和笨拙。



## 克制

技术发展的如此之快，JSP 已经几乎被淘汰了，取而代之的是前后端分离、微服务系统等时髦技术。面对这些新技术时，克制是让你远离很多麻烦的第一步。

曾经有一个客户需要一个简单的信息录入系统，用于管理一些基础的业务需求。我们准备构建一个后端服务来提供 API，团队中一名同事提出想要使用微服务，并坚信所有的新项目都不应该使用 “传统”的单体系统。

后来我们花了半个月的时间构建了后台服务，又花了一周的时间构建了 BFF 为浏览器提供 API 调用，同时以为这两个服务分离开来，又不得不做出一些额外的工作完成鉴权能力。

那位同事显然没有意识到 “微服务” 的本质是一种分布式系统，满足同样的业务需求需要付出巨大的成本。



## 简单

IT 行业有一个有趣的现象。

每一次技术潮流的到来，并不是这项技术有多大的创新。而是产生了某一个框架让原本高深晦涩的技术变得简单，从而让我们这种低端的程序员也能掌握。

Spring 对于 Java EE开发的简化，让复杂的企业级开发变得足够简单。

深度学习框架对于数学模型的简化，让人人都能参与 AI 开发，即使只是调参侠。

区块链框架对于分布式合约的简化，避免应用开发者需要下场处理分布式问题。

ElasticSearch 对于搜索引擎的简化，让搜索引擎应用得以普及。



这些技术能普及，最基本的原因就是简单。

相反的例子就是传统 Java EE 中的各种设计模式，以及 DDD 中的各种概念，工厂、facade、Event Sourcing，这些模式和概念必然难以在实际项目中推动。



当我在现实中听到某个程序员说在项目中使用了多少种设计模式并引以自豪时，最好的方法就是远离他。



## 笨拙

笨拙是最难的一个美德。

有太多的程序员，包括我，脑袋里装满了各种高大上的想法，见到一个高级技巧或者技术便如获至宝。

JavaScript 的语言中充满了各种精巧的设计和技术，闭包、原型链等高阶知识是面试必问的。

《代码整洁之道》和《重构》中各种高级的编码技巧。

Scala 中各种不同的编程范式，C++ 中的模板、运算符重载等高科技。

我以为我永远到不了编程大师的水平。直到后来阅读了一些源码， Backbone.js 和 Redis 让我印象深刻。朴实无华的设计，有很多逻辑判断写的非常普通，没有过多的设计模式。

当我知道 Intellij IDE 是用 Swing 开发而成的时候，惊叹不已，用最简单的食材做出最美味的食物，这才是真正的编程大师吧。









