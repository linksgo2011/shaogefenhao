---
title: Javascript 对URL中path参数绑定
categories: Javascript
toc: true
---

拼接URL在前端不是很好，例如 '/cate/'+ cateID +'/post/'+ postID

可以写成 `/cate/:cateID/post/:postID`

```
export function getParamlisedPath(pathString, ...params) {
  let result = pathString
  params.forEach((value) => {
    result = result.replace(/\:\w+/, value)
  })
  return result
}

```

