(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{1003:function(e,a,s){"use strict";s.r(a);var n=s(15),r=Object(n.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Docker 官方容器编排工具。")]),e._v(" "),s("p",[e._v("Docker 编排的几种模式")]),e._v(" "),s("ul",[s("li",[e._v("Docker for desktop")]),e._v(" "),s("li",[e._v("Swarm 官方的编排工具")]),e._v(" "),s("li",[e._v("K8s 社区最火的编排工具")])]),e._v(" "),s("h2",{attrs:{id:"swarm-相关概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swarm-相关概念"}},[e._v("#")]),e._v(" Swarm 相关概念")]),e._v(" "),s("h3",{attrs:{id:"节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节点"}},[e._v("#")]),e._v(" 节点")]),e._v(" "),s("p",[e._v("安装了 Docker 的一个物理机或者虚拟机，节点分为管理节点和工作节点。")]),e._v(" "),s("p",[e._v("管理节点分为 Leader 和 follower，管理节点最好是奇数。他们之间会自动选举，leader，生产上不建议将管理节点和工作节点放到一台服务器上。")]),e._v(" "),s("h3",{attrs:{id:"stack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stack"}},[e._v("#")]),e._v(" Stack")]),e._v(" "),s("p",[e._v("Stack 指一个应用需要的一整套容器，例如前端、后端API、BFF等，由多个 service 构成。")]),e._v(" "),s("h3",{attrs:{id:"service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service"}},[e._v("#")]),e._v(" Service")]),e._v(" "),s("p",[e._v("一个 Service 指一个 docker compose运行后的一个服务，可以存在多个容器的副本")]),e._v(" "),s("h3",{attrs:{id:"image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#image"}},[e._v("#")]),e._v(" Image")]),e._v(" "),s("p",[e._v("一个Docker镜像")]),e._v(" "),s("h3",{attrs:{id:"network"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#network"}},[e._v("#")]),e._v(" network")]),e._v(" "),s("p",[e._v("容器的网络和虚拟机的网络概念上类似，桥接模式、host模式，但是非常重要的一个网络模式是overlay。类似于网络中的 VLAN，可以在不同容器之间建立一个虚拟网络。")]),e._v(" "),s("h3",{attrs:{id:"volumes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volumes"}},[e._v("#")]),e._v(" Volumes")]),e._v(" "),s("p",[e._v("容器运行需要的存储空间。")]),e._v(" "),s("h2",{attrs:{id:"docker-swarm-常见命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-swarm-常见命令"}},[e._v("#")]),e._v(" docker swarm 常见命令")]),e._v(" "),s("h3",{attrs:{id:"查看运行的-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看运行的-service"}},[e._v("#")]),e._v(" 查看运行的 service")]),e._v(" "),s("blockquote",[s("p",[e._v("docker service list")])]),e._v(" "),s("h3",{attrs:{id:"查看某个日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看某个日志"}},[e._v("#")]),e._v(" 查看某个日志")]),e._v(" "),s("blockquote",[s("p",[e._v("docker service logs [servicename]")])]),e._v(" "),s("h2",{attrs:{id:"搭建-swarm-集群实战"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭建-swarm-集群实战"}},[e._v("#")]),e._v(" 搭建 swarm 集群实战")]),e._v(" "),s("p",[e._v("在本机练习可以使用 docker-machine 来创建数台虚拟机练习网络。")]),e._v(" "),s("p",[e._v("使用 docker-machine 创建一个虚拟机，最好使用 virtualbox 作为虚拟机管理工具。当然也可以使用 vagrant 作为虚拟机管理工具。")]),e._v(" "),s("blockquote",[s("p",[e._v("docker-machine create --driver virtualbox manager1")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('Running pre-create checks...\n(manager1) No default Boot2Docker ISO found locally, downloading the latest release...\n(manager1) Latest release for github.com/boot2docker/boot2docker is v19.03.5\n(manager1) Downloading /Users/nlin/.docker/machine/cache/boot2docker.iso from https://github.com/boot2docker/boot2docker/releases/download/v19.03.5/boot2docker.iso...\n\n\n(manager1) 0%....10%....20%....30%....40%....50%....60%....70%....80%....90%....100%\nCreating machine...\n(manager1) Copying /Users/nlin/.docker/machine/cache/boot2docker.iso to /Users/nlin/.docker/machine/machines/manager1/boot2docker.iso...\n(manager1) Creating VirtualBox VM...\n(manager1) Creating SSH key...\n(manager1) Starting the VM...\n(manager1) Check network to re-create if needed...\n(manager1) Found a new host-only adapter: "vboxnet0"\n(manager1) Waiting for an IP...\nWaiting for machine to be running, this may take a few minutes...\nDetecting operating system of created instance...\nWaiting for SSH to be available...\nDetecting the provisioner...\nProvisioning with boot2docker...\nCopying certs to the local machine directory...\nCopying certs to the remote machine...\nSetting Docker configuration on the remote daemon...\nChecking connection to Docker...\nDocker is up and running!\nTo see how to connect your Docker Client to the Docker Engine running on this virtual machine, run: docker-machine env manager1\n\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br")])]),s("p",[e._v("这个阶段耗时比较长，创建成功之后可以使用 docker-machine env 命令查看虚拟机信息，这个过程可能需要翻墙才能成功拉取镜像。")]),e._v(" "),s("blockquote",[s("p",[e._v("docker-machine env manager1")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('export DOCKER_TLS_VERIFY="1"\nexport DOCKER_HOST="tcp://192.168.99.100:2376"\nexport DOCKER_CERT_PATH="/Users/nlin/.docker/machine/machines/manager1"\nexport DOCKER_MACHINE_NAME="manager1"\n# Run this command to configure your shell: \n# eval $(docker-machine env manager1)\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("使用  docker-machine ls 可以查看运行的虚拟机")]),e._v(" "),s("blockquote",[s("p",[e._v("docker-machine ls")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("NAME       ACTIVE   DRIVER       STATE     URL                         SWARM   DOCKER     ERRORS\nmanager1   -        virtualbox   Running   tcp://192.168.99.100:2376           v19.03.5   \n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("再创建一个虚拟机，作为 swarm 的 worker")]),e._v(" "),s("blockquote",[s("p",[e._v("docker-machine create --driver virtualbox manager1")])]),e._v(" "),s("p",[e._v("现在有两台机器了，在 manager 中初始化集群。")]),e._v(" "),s("blockquote",[s("p",[e._v("docker-machine ssh manager1 docker swarm init --listen-addr 192.168.99.100:2337 --advertise-addr 192.168.99.100")])]),e._v(" "),s("p",[e._v("会得到一个集群的 token ，使用这个 token 可以进行后续的操作。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Swarm initialized: current node (ifzgulv2nsw5r84dw55f8vut0) is now a manager.\n\nTo add a worker to this swarm, run the following command:\n\n    docker swarm join --token SWMTKN-1-57k8uubh350ppnb68p4jjqmyp6nu4x2ziu8mf2ocmpqsojvc6s-5j94cvq03w9phk6vid7mgsyq4 192.168.99.100:2337\n\nTo add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("p",[e._v("在真实的机器上，不会使用 docker-machine ssh 命令，初始化集群的命令直接就是：")]),e._v(" "),s("blockquote",[s("p",[e._v("docker swarm init --listen-addr 192.168.99.100:2337 --advertise-addr 192.168.99.100")])]),e._v(" "),s("p",[e._v("接下来把 worker1 加入集群:")]),e._v(" "),s("blockquote",[s("p",[e._v("docker-machine ssh worker1 docker swarm join --token SWMTKN-1-57k8uubh350ppnb68p4jjqmyp6nu4x2ziu8mf2ocmpqsojvc6s-5j94cvq03w9phk6vid7mgsyq4 192.168.99.100:2337")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("This node joined a swarm as a worker.\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("然后两台机器就被添加到集群了。进入其中一个管理节点，可以使用 docker node 命令查看节点信息。")]),e._v(" "),s("blockquote",[s("p",[e._v("docker-machine ssh manager1 docker node ls")])]),e._v(" "),s("p",[e._v("能看到两台机器已经在集群里面作为 node 存在")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ID                            HOSTNAME            STATUS              AVAILABILITY        MANAGER STATUS      ENGINE VERSION\nifzgulv2nsw5r84dw55f8vut0 *   manager1            Ready               Active              Leader              19.03.5\niwtggbei2por21t4z9q3x9usx     worker1             Ready               Active                                  19.03.5\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("接下来创建更多的虚拟器 manager2、worker1、worker2、worker3")]),e._v(" "),s("blockquote",[s("p",[e._v("docker-machine create --driver virtualbox manager2\ndocker-machine create --driver virtualbox worker2\ndocker-machine create --driver virtualbox worker3")])]),e._v(" "),s("p",[e._v("也将他们加入集群，然后就可以部署应用了。")]),e._v(" "),s("blockquote",[s("p",[e._v("docker-machine ssh worker2 docker swarm join --token SWMTKN-1-57k8uubh350ppnb68p4jjqmyp6nu4x2ziu8mf2ocmpqsojvc6s-5j94cvq03w9phk6vid7mgsyq4 192.168.99.100:2337\ndocker-machine ssh worker3 docker swarm join --token SWMTKN-1-57k8uubh350ppnb68p4jjqmyp6nu4x2ziu8mf2ocmpqsojvc6s-5j94cvq03w9phk6vid7mgsyq4 192.168.99.100:2337")])]),e._v(" "),s("p",[e._v("加入 manager 需要先获取 manager 的token，到 leader 的机器上获取 token")]),e._v(" "),s("blockquote",[s("p",[e._v("docker-machine ssh manager1 docker swarm jon-token manager")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("To add a manager to this swarm, run the following command:\n\n    docker swarm join --token SWMTKN-1-57k8uubh350ppnb68p4jjqmyp6nu4x2ziu8mf2ocmpqsojvc6s-4tbwy1t6rnlfjn1lnw84v13bq 192.168.99.100:2337\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("将 manager2 加入集群")]),e._v(" "),s("blockquote",[s("p",[e._v("docker-machine ssh manager2 docker swarm join --token SWMTKN-1-57k8uubh350ppnb68p4jjqmyp6nu4x2ziu8mf2ocmpqsojvc6s-4tbwy1t6rnlfjn1lnw84v13bq 192.168.99.100:2337")])]),e._v(" "),s("p",[e._v("这样我们共有 5 台机器。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ID                            HOSTNAME            STATUS              AVAILABILITY        MANAGER STATUS      ENGINE VERSION\nifzgulv2nsw5r84dw55f8vut0     manager1            Ready               Active              Leader              19.03.5\nypzwukwsof5ec7r4itkvkzxa3 *   manager2            Ready               Active              Reachable           19.03.5\niwtggbei2por21t4z9q3x9usx     worker1             Ready               Active                                  19.03.5\nsdtzfghzoafij246b272ob4wl     worker2             Ready               Active                                  19.03.5\nuc27drfjn1anv01yy24y9d5g5     worker3             Ready               Active                                  19.03.5\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("这样一个 swarm 集群就建立好了，然后可以对它进行一些管理。")]),e._v(" "),s("p",[e._v("查看网络：")]),e._v(" "),s("blockquote",[s("p",[e._v("docker-machine ssh manager1 docker network ls")])]),e._v(" "),s("h2",{attrs:{id:"部署应用到集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署应用到集群"}},[e._v("#")]),e._v(" 部署应用到集群")]),e._v(" "),s("p",[e._v("使用 nginx 打一镜像用于部署前端项目，编写如下 docker-compose.yml 文件")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('version: "3.5"\nservices:\n  frontend:\n    image: linksgo2011/frontend:latest\n    networks:\n      - sample-network\n    ports:\n      - 8000:80\n    deploy:\n      replicas: 1\n      labels:\n        app: sample-app\n        environment: local\n\nnetworks:\n  sample-network:\n    driver: overlay\n\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br")])]),s("p",[e._v("使用 docker-machine 的 scp命令拷贝 compose 文件到一台 manager 中")]),e._v(" "),s("blockquote",[s("p",[e._v("docker-machine scp  docker-compose.yml docker@manager1:~/docker-compose.yml")])]),e._v(" "),s("p",[e._v("然后在这台 manager 中执行 stack 部署命令")]),e._v(" "),s("blockquote",[s("p",[e._v("docker-machine ssh manager1 docker stack deploy -c docker-compose.yml sample-stack")])]),e._v(" "),s("p",[e._v("Docker 会自动帮助创建网络，然后部署 sample-stack 到 worker 中。")]),e._v(" "),s("p",[e._v("可以查看部署的服务")]),e._v(" "),s("blockquote",[s("p",[e._v("docker-machine ssh manager1 docker service ls")])]),e._v(" "),s("p",[e._v("ID                  NAME                    MODE                REPLICAS            IMAGE                         PORTS\novifr1oldnc7        sample-stack_frontend   replicated          1/1                 linksgo2011/frontend:latest   *:8000->80/tcp")]),e._v(" "),s("p",[e._v("可以查看某个服务的日志，对调试和排错非常有用")]),e._v(" "),s("blockquote",[s("p",[e._v("docker-machine ssh manager1 docker service logs  sample-stack_frontend")])]),e._v(" "),s("h2",{attrs:{id:"docker-swarm-一些调试方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-swarm-一些调试方法"}},[e._v("#")]),e._v(" docker swarm 一些调试方法")]),e._v(" "),s("p",[e._v("查看 service 无法启动的错误信息")]),e._v(" "),s("blockquote",[s("p",[e._v("docker service ps --no-trunc {serviceName}")])]),e._v(" "),s("p",[e._v("查看服务的 task")]),e._v(" "),s("blockquote",[s("p",[e._v("docker service ps "),s("service-name")],1)]),e._v(" "),s("p",[e._v("查看 task 的启动情况，可以看到容器、节点情况")]),e._v(" "),s("blockquote",[s("p",[e._v("docker inspect "),s("task-id")],1)]),e._v(" "),s("p",[e._v("找到了容器可以查看日志")]),e._v(" "),s("blockquote",[s("p",[e._v("docker logs "),s("container-id")],1)]),e._v(" "),s("p",[e._v("daemon.json 可以开启 debug 模式。")]),e._v(" "),s("h2",{attrs:{id:"todo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[e._v("#")]),e._v(" TODO")]),e._v(" "),s("ul",[s("li",[e._v("使用 docker-compose 部署应用")]),e._v(" "),s("li",[e._v("容器内部的通信")]),e._v(" "),s("li",[e._v("使用 Jenkins 自动化搭建 swarm 集群")]),e._v(" "),s("li",[e._v("安装 portainer")])]),e._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),s("ul",[s("li",[e._v("https://blog.xiodi.cn/?s=swarm")]),e._v(" "),s("li",[e._v("https://docs.docker.com/v17.09/engine/swarm/")])])])}),[],!1,null,null,null);a.default=r.exports}}]);