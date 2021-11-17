---
title: PHP CURL example
date: 2021-08-11 19:18:36
permalink: /pages/498a7a/
categories:
  - PHP 基础
sidebar: auto
---



```
$host = APP_DEV ? 'ecode.com' : 'ecode.yinuoinfo.com';
                $uri  = 'http://' . $host . '/ApiJsonTicket/sendticket';
                $ch   = curl_init();
                curl_setopt($ch, CURLOPT_URL, $uri);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
                curl_setopt($ch, CURLOPT_TIMEOUT, 30);
                curl_setopt($ch, CURLOPT_POST, true);
                curl_setopt($ch, CURLOPT_POSTFIELDS, array(
                    'json' => json_encode($apiPost)
                ));
                $HttpResponse = curl_exec($ch);
                curl_close($ch);
```

