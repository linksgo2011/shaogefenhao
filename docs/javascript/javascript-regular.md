---
title: Javascript 常用正则和方法
categories: Javascript
toc: true
---

## 数字格式化（每三位加逗号）

```
export const toThousands = num => {
  return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}

```

