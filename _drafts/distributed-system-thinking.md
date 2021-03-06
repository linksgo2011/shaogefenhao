---
title: 分布式系统思维随想
toc: true
sidebar: auto
permalink: /thinking/distributed-system-thinking
---



我很喜欢观察生活和技术中的模式，尤其是寻找完全不相关的两个事物之间的相似性。这种思维非常有趣，而今天想和大家分享的一个模式就是分布式系统思维。

那么它能串联那些有意思的事情呢？让我们从一个一个故事说起，将这些看似无关的东西结合到一起。

## 堵车和 TCP 拥塞控制

到了冬天，早上开车去公司的路上越来越堵车，我不得不尝试提前从家里出发，避免拥堵。

如果我提前 10 分钟出发，可以节省 30 分钟在路上的时间。如果把所有的汽车作为分布式系统的节点看待，部分人提前出发，可以缓解系统整体的通过效率（避免互相等待）。

这种场景和 TCP 网络协议的发包过程很像。TCP 中每一个数据包可以看做汽车，数据包在网络中传递的时候是通过路由器的路由表寻路。TCP 网络协议也会遇到拥塞，不过它的解决思路是利用拥塞窗口。拥塞窗口可以想象为等待出车库的队列（在某些景区可能会看到），当拥堵严重时控制流量，当拥堵减轻时增大流量，从而动态的让拥塞控制在一定范围。

这和每天早上从家里出发的打工人一样，打工人是通过当前拥堵的直观感受作为输入判断每天应该多早起床。

在 TCP 中这种策略叫做 Vegas 算法，当网卡发现拥塞严重时会自觉晚一点再发送数据包。

但是这并不公平，

然后就发现，即使我提前走了 10 分钟，但是随着天气变冷，路上的车变多，还是会堵车。

## 股票和内分泌系统



## 国家和癌症

## 服务器集群和公司结构



