---
title: 移动Vue组件挂载点到body上
categories: Javascript
toc: true
date: 2021-08-11 19:18:36
permalink: /pages/a85ffe/
tags: 
  - 
---

非常有用的一个指令，可以移动组件到 body上，解决定位和全局遮罩等问题

```
export const moveElementToBody = {
  inserted(el) {
    if (el) {
      document.body.appendChild(el)
    }
  },
  unbind(el) {
    if (el.parentNode) {
      el.parentNode.removeChild(el)
    }
  }
}

```