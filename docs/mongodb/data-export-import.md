---
title: mongodb 的数据导入\导出
categories: mongodb
---

mongodb数据备份和恢复主要分为二种：一种是针对库的mongodump和mongorestore，一种是针对库中表的mongoexport和mongoimport


mongorestore 比较常用。

## 导出

> mongodump -d SERVERLOG -o /data/mongobak/SERVERLOG.bak/

## 导入指定文件夹下的数据

> mongorestore -d <db_name> <bson_folder>

windows 下找到 C 盘中 mongdodb/server/bin, mongdo提供了一些工具软件

> mongorestore.exe -d <db_name> <bson_folder>


## 参考文档

- https://docs.mongodb.com/manual/reference/program/mongorestore/