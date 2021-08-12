---
title: PHP 虚拟字段
categories: php
date: 2021-08-11 19:18:35
permalink: /pages/402140/
tags: 
  - 
---

原理就是使用数据库的方法处理出来一个查询结果，然后使用一个别名、

```
//比如
select contanct(a,b) as c
```

a , b 就是一个普通的属性，c可以理解为

```
public $virtualFields = array(
    'name' => 'CONCAT(User.first_name, " ", User.last_name)'
);
```

配置的方法很简单，如上就是