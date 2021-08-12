---
title: PHP 从另外一个页面读取数据
categories: php
date: 2021-08-11 19:18:35
permalink: /pages/1c92ba/
tags: 
  - null
sidebar: auto
---

```php
$comments = $this->requestAction('/comments/latest');
foreach ($comments as $comment) {
    echo $comment['Comment']['title'];
}

echo $this->requestAction(
    array('controller' => 'articles', 'action' => 'featured'),
    array('return')
);
```

