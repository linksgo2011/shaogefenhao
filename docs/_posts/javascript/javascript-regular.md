---
title: Javascript 常用正则和方法
categories: Javascript
toc: true
date: 2021-08-11 19:18:36
permalink: /pages/89cec2/
tags: 
  - 
---

## 数字格式化（每三位加逗号）

```
export const toThousands = num => {
  return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}

```

