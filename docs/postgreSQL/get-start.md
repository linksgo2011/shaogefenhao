---
title: PostgreSQL 入门使用
categories: postgreSQL
toc: true
---

Tutorial

http://www.postgresqltutorial.com/


## install postgreSQL via homebrew in mac

> brew install postgresql

## connect to postgreSQL via psql 

psql 是一个命令行工具操作postgreSQL

> psql -h localhost -U freewheelers --password -d freewheelers

and type your password.


## 常用psql命令

在psql中使用\l \dt 等命令用于管理数据库，一旦打开数据，所有功能都可以使用SQL的DML、DDL语言来操作。

列出所有的数据库
> \l 

列出当前数据库所有的表
> \dt 

列出所有的functions
> \df

列出所有的user and roles
> \du

获取version
> SELECT version

重复最后一次命令
> \g

命令历史
> \s

获取帮助
> \?

在编辑器中编辑命令然后执行
> \e
