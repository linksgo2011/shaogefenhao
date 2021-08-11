---
title: Ubuntu 下安装 nodejs
categories: nodejs
toc: true
---



```
sudo apt-get install nodejs
sudo apt-get install npm
sudo apt-get install nodejs-legacy
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install python-software-properties python g++ make nodejs
```

 需要特别注意就是 install nodejs-legacy，这个包，因为如果不装这个包没有node 命令，所以需要安装legacy

```
sudo apt-get install nodejs-legacy
```