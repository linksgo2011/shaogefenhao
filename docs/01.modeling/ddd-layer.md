---
title: 基于 DDD 理论基础的分层架构
categories: 技术架构
toc: true
date: 2021-08-11 19:18:35
permalink: /pages/851c9c/
tags: 
  - 
---

主要参考下层，唯一不认同的是组件划分的方式，每层的分包逻辑肯定不一定样

## 分层参考

- 接口层 
    - 关心视图和对外的服务
    - 如果我们没有多种接入方式，可以和应用层合并
    - 对应到分布式系统中的网关、BFF、前台等概念
- 应用层 
    - 关心处理完一个完整的业务
    - 集成不同的领域模型解决问题
    - 一致性事务放到这层
    - 对应到分布式系统中的中台等概念
    - 基础设施的 interface 放到这层
    - 读模型放到这层
    - 用户权限控制放到这层
- 领域层
    - 不关心业务，关心模型，
    - 强事务放到这层
    - 对应到分布式系统中的 domain service、后台等概念
    - 按照聚合根分包
    - 聚合根之间不互相依赖，依赖由应用层编排
- 基础设施层
    - 关心存储、通知和外部设施
    - 一般由 ORM 提供
    - 按照 adapter 分包
    

## 分布式系统的分层适用性

分层部署的代价和收益，每层的部署关系：

- 单体
    - 所有层部署到一起
    - 收益为部署简单、无分布式事务问题，用户权限简单
    - 代价为无法解耦
    - 适合小型工程，无需适配多端、多类型应用
    - 无需分布式鉴权
- 小型服务化项目
    - 接口层单独部署，例如 admin、mobile、h5
    - 应用层、领域层、基础设施层部署到一起
    - 收益为可以一定程度上解耦
    - 一定程度上无需处理分布式事务
    - 接口层和应用层使用 OAuth 分布式鉴权
- 大型中台项目
    - 接口层单独部署
    - 应用层单独部署
    - 领域层和基础设施层部署到一起
    - 接口层和应用层使用 OAuth 分布式鉴权
    - 应用层和领域层使用 AK/SK 服务间鉴权
- 超大型项目
    - 接口层单独部署
    - 应用层单独部署
    - 领域层单独部署
    - 基础设施层部署
    - 接口层和应用层使用 OAuth 分布式鉴权
    - 应用层和领域层使用 AK/SK 服务间鉴权
    - 领域层和基础设施层 使用 AK/SK 服务间鉴权



## 参考资料

- https://www.jianshu.com/p/d3e8b9ac097b