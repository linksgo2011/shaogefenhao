---
title: PHP 常驻内存运行脚本
categories: php
---



```php
ignore_user_abort();//关掉浏览器，PHP脚本也可以继续执行.
 set_time_limit(0);// 通过set_time_limit(0)可以让程序无限制的执行下去
 $interval=60*30;// 每隔半小时运行
 do{
     //这里是你要执行的代码    
     sleep($interval);// 等待5分钟
 }while(true);
```

