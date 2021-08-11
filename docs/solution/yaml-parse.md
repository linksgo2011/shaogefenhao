---
title: Yaml 解析
categories: 技术方案
toc: true
---

## 使用 spring 自带功能

```java
 YamlMapFactoryBean yamlMapFactoryBean = new YamlMapFactoryBean();
        yamlMapFactoryBean.setResources(new ClassPathResource("application.yml"));
        yamlMapFactoryBean.afterPropertiesSet();
        Map<String, Object> object = yamlMapFactoryBean.getObject();
        Object nameUrl = object.get("pnameUrl");
```
