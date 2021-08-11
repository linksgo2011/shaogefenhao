---
title: Ansible 入门和使用
categories: 运维开发
toc: true
---

## 常用命令

直接执行 ad-hoc 命令

> ansible [hosts] comamnd -a "echo xxx";

## 相关资料

- 官网: https://www.ansible.com/get-started
- 工作原理:https://www.ansible.com/how-ansible-works
- 下载和安装:http://docs.ansible.com/ansible/latest/intro_installation.html
- 编写自己的脚本:http://docs.ansible.com/ansible/latest/playbooks.html
- 一些ansible 例子:https://github.com/ansible/ansible-examples

- 使用ansible playbook部署LAMP
https://github.com/ansible/ansible-examples/tree/master/lamp_simple

- w3school 的一个教程 https://www.w3cschool.cn/automate_with_ansible/automate_with_ansible-db6727oq.html

- 我的常用脚本仓库 https://github.com/linksgo2011/deployment-automation

- ansible role 市场 https://galaxy.ansible.com/  

### 检查模式(“Dry Run”)

ansible version 1.1 后提供了一种dryrun环境，使得我们可以测试我们的脚本而不造成任何changes

http://docs.ansible.com/ansible/latest/playbooks_checkmode.html#id1

Example:

```

ansible-playbook foo.yml --check

```

### Ansible test 

http://docs.ansible.com/ansible/latest/dev_guide/testing.html