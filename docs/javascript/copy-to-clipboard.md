---
title: Javascript 复制到剪贴板
categories: Javascript
toc: true
---


```
/**
 * 复制到剪贴板
 * @param object
 * @param compareBy
 */
function copyToClipboard(value, document = window.document) {
  const element = document.createElement('input')
  element.style.opacity = 0
  element.value = value
  document.body.appendChild(element)
  element.select()

  setTimeout(function () {
    element.remove()
  }, 0)

  return document.execCommand('copy')
}

```