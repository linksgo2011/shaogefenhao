---
title: docker 部署机器上镜像清理
categories: docker
toc: true
date: 2021-08-11 19:18:35
permalink: /pages/f88218/
tags: 
  - null
sidebar: auto
---

> docker rmi $(docker images --filter "dangling=true" -q) &

添加到脚本


> vim /root/crontab/images_clean.sh

写入 crontab

```
0 0 * * * /root/crontab/images_clean.sh 1>/dev/null 2>&1 &
```