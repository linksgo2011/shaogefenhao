---
title: 大数据概览
categories: bigdata
toc: true
---

大数据（big data），指无法在一定时间范围内用常规软件工具进行捕捉、管理和处理的数据集合，是需要新处理模式才能具有更强的决策力、洞察发现力和流程优化能力的海量、高增长率和多样化的信息资产。

5个维度描述大数据，Volume（大量）、Velocity（高速）、Variety（多样）、Value（低价值密度）、Veracity（真实性）

## 程序员掌握的4个维度

- A AI
- B Big data 
- C coding 
- D Devops

## 概念

- 分布式存储 区别于传统的数据存储方式，由单机变成计算机集群来处理数据
- 大数据相关职位
  - 数据分析师
  - 数据科学家
  - 数据工程师
- 数据工程的特征
  - 拓展性
  - 容错性
  - 弹性
  - 可调式性
  - 可维护性
- 数据分区  将数据分散到多台机器上处理
- 数据映射 数据流和结构化数据之间的关系
- 排序
- 真实数据源
- 推与拉
  

## 相关技术

- HDFS: Hadoop分布式文件系统(Distributed File System) － HDFS (Hadoop Distributed File System)
- MapReduce：并行计算框架，0.20前使用 org.apache.hadoop.mapred 旧接口，0.20版本开始引入org.apache.hadoop.mapreduce的新API
- HBase: 类似Google BigTable的分布式NoSQL列数据库。（HBase和Avro已经于2010年5月成为顶级 Apache 项目）
- Hive：数据仓库工具，由Facebook贡献。
- Zookeeper：分布式锁设施，提供类似Google Chubby的功能，由Facebook贡献。
- Avro：新的数据序列化格式与传输工具，将逐步取代Hadoop原有的IPC机制。
- Pig: 大数据分析平台，为用户提供多种接口。
- Ambari：Hadoop管理工具，可以快捷的监控、部署、管理集群。
- Sqoop：于在HADOOP与传统的数据库间进行数据的传递。
- Spark: 用来做数据流处理
- CDH： 企业级的部署工具 Cloud Distribution Hadoop


## 数据工程的4层架构

- Infrastracture
  - AWS
  - GCP
- Data management and storage
  - Hadoop DFS
  - Solr 
  - Redis
  - AeroSpike
  - Asterix DB
- Data integration and process
  - Kafka
  - Spark
  - Druid
  - beam
  - Flink
  - Storm
  - Google cloud DataFlow
  - Kinesis
- Coorination and Workflow management
  - Airflow
  - Ozzie
  - Apache zookeeper
  - Apache Ambari
  - Talend


## 最小工具集

