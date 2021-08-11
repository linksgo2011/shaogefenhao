---
title: 对象转换
categories: 技术方案
toc: true
---

## 使用 ModelMapper

```java
ModelMapper modelMapper = new ModelMapper();
modelMapper.addMappings(new PropertyMap<User, CustomUserDetails>() {
    @Override
    protected void configure() {
        map().setRoles(source.getRolesAsString());
    }
});
return modelMapper.map(user, CustomUserDetails.class);
```

http://modelmapper.org/



## 使用 orika



```java
MapperFactory mapperFactory = new DefaultMapperFactory.Builder().build();
MapperFacade mapperFacade = mapperFactory.getMapperFacade();
Teacher teacher = mapperFacade.map(stu,Teacher.class);
```

