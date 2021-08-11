---
title: $_POST $_GET $_COOKIE的递归转义
categories: php

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

