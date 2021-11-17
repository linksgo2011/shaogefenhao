---
title: $_POST $_GET $_COOKIE的递归转义
date: 2021-08-11 19:18:36
permalink: /pages/2c380a/
categories:
  - PHP 基础
sidebar: auto
---



```
$_GET=array("'ni,''';aho'");
         if(get_magic_quotes_gpc()){

         }else{
             function _addslash(&$v,$k){
                 $v = addslashes($v);
             }
             array_walk_recursive(&$_GET,'_addslash');
             print_r($_GET);
         }
```

