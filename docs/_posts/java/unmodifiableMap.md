---
title: Java unmodifiableMap
categories: java
date: 2021-08-11 19:18:36
permalink: /pages/85a670/
tags: 
  - null
sidebar: auto
---


集合中提供了一个防止修改的方法

```
public final Map<Foo, Bar> getMap(){
    ...
    return Collections.unmodifiableMap(map);
}

```
