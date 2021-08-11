---
title: 代码审查的注意事项 （英文版）
categories: 敏捷开发
toc: true
---

## 通用 TIPS

- Naming should be correct and abide by the convention
	- file convention 
	- class convention 
	- variable convention 
- Hard code string and number should be refactored as constant 
- Keep all environment consistent 
- Should not expose password and private key
	- Store sensitive data to environment 
	- Store crendential to CI tool
- Remove useless comment and useless console statement 
- Remove any sensitive information in PROD
- Remove useless file and method 
- Remove useless import 
- Import submodule as far as possible 

## Review Java 

- Should not use snapshot version 
- Null should be check when try to access attribute of it
- Comparision should be use 'equal' instead of '=='
- Util methods  should be static
- Checkstyle should be turned on 

## Review frontend

- Eslint should be turned on 
- Component should be reused and context unrelated
- Html should be sematic
- Interface of component should be easy to use 




