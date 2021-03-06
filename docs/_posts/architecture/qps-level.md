---
title: Web网站的几个并发量级
date: 2021-08-11 19:18:35
categories: 
  - 架构
sidebar: auto
permalink: /architecture/qps-level/
---

50QPS以下——小网站

没什么好说的，简单的小网站而已，就如同本站这样，你可以用最简单的方法快速搭建，短期没有太多的技术瓶颈，只要服务器不要太烂就好。

50～100QPS——DB极限型

大部分的关系型数据库的每次请求大多都能控制在0.01秒左右，即便你的网站每页面只有一次DB请求，那么页面请求无法保证在1秒钟内完成100个请求，这个阶段要考虑做Cache或者多DB负载。无论那种方案，网站重构是不可避免的。

300～800QPS——带宽极限型

目前服务器大多用了IDC提供的“百兆带宽”，这意味着网站出口的实际带宽是8M Byte左右。假定每个页面只有10K Byte，在这个并发条件下，百兆带宽已经吃完。首要考虑是CDN加速／异地缓存，多机负载等技术。

500～1000QPS——内网带宽极限＋Memcache极限型

由于Key/value的特性，每个页面对memcache的请求远大于直接对DB的请求，Memcache的悲观并发数在2w左右，看似很高，但事实上大多数情况下，首先是有可能在次之前内网的带宽就已经吃光，接着是在8K QPS左右的情况下，Memcache已经表现出了不稳定，如果代码上没有足够的优化，可能直接将压力转嫁到了DB层上，这就最终导致整个系统在达到某个阀值之上，性能迅速下滑。

1000～2000QPS——FORK/SELECT，锁模式极限型

好吧，一句话：线程模型决定吞吐量。不管你系统中最常见的锁是什么锁，这个级别下，文件系统访问锁都成为了灾难。这就要求系统中不能存在中央节点，所有的数据都必须分布存储，数据需要分布处理。总之，关键词：分布

2000QPS以上——C10K极限

尽管现在很多应用已经实现了C25K，但短板理论告诉我们，决定网站整体并发的永远是最低效的那个环节。我承认我生涯中从未遇到过2000QPS以上，甚至1.5K以上的网站，希望有此经验的哥们可以一起交流下

## 参考资料

- Web网站的几个并发量级 https://www.cnblogs.com/yiwd/p/3711677.html
