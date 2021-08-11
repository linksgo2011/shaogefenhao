---
title: codereview 清单
categories: team
toc: true
---

   - 如果没有特别重要的事务，坚持每日Codereview
   - 推荐使用的Jetbrains IDE中提供的版本管理工具，可以筛选提交人和一次性diff当天所有提交，不建议逐commit diff
   - Codereview 讨论实现方法、传递业务，避免逐行讲代码和现场debug
   - 每人Codereview时间不超过10分钟，时间需自行控制，细节可以私下讨论
   - 委托他人记录检查点



### Vue 技术栈

   - 单词拼写错误（Typo）和无意义、不统一的变量名
   - 脏代码，无意义的注释、临时代码、console.log等
   - 混用ES5/6语法特性
   - 在模板中使用复杂的表达式，应该使用方法代替
   - 公共组件和状态关联（Redux、Vuex）
   - 嵌套三元表达式
   - 大量的switch case或者If语句，应该使用Map代替
   - 引入无用的依赖
   - 特性滥用
   - Mixin
   - Ref
   - Vuex
   - 直接的DOM操作
   - 不安全特性
   - v-html
   - Store 引用修改
   - 大量拷贝的代码或其他不合理的设计和实现



### Java 技术栈



TODO 