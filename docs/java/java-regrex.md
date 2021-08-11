---
title: Java 正则
categories: java
---

## 提取字符串中的字符

提取字符串中的数字

```
public static void main(String[]args) {
    Pattern p = Pattern.compile("\\d+");
    Matcher m = p.matcher("string1234more567string890");
    while(m.find()) {
        System.out.println(m.group());
    }
}
```


## 参考资料

- https://www.testingexcellence.com/extract-numbers-string-java-regular-expressions/