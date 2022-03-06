(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{918:function(s,t,a){"use strict";a.r(t);var n=a(15),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("[toc]")]),s._v(" "),a("h2",{attrs:{id:"linux-vm-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-vm-配置"}},[s._v("#")]),s._v(" Linux VM 配置")]),s._v(" "),a("ul",[a("li",[s._v("用户配置\n"),a("ul",[a("li",[s._v("数据库")]),s._v(" "),a("li",[s._v("应用")])])]),s._v(" "),a("li",[s._v("开启防火墙")]),s._v(" "),a("li",[s._v("开启服务器监控")]),s._v(" "),a("li",[s._v("确保开启日志")]),s._v(" "),a("li",[s._v("合理设置安全组，关闭不常用的端口\n"),a("ul",[a("li",[s._v("iptables 设置")]),s._v(" "),a("li",[s._v("firewall 设置")])])]),s._v(" "),a("li",[s._v("设置合理的时区")]),s._v(" "),a("li",[s._v("常见异常的处理")]),s._v(" "),a("li",[s._v("系统监控")]),s._v(" "),a("li",[s._v("密匙管理")])]),s._v(" "),a("h2",{attrs:{id:"docker-file-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-file-配置"}},[s._v("#")]),s._v(" docker file 配置")]),s._v(" "),a("ul",[a("li",[s._v("使用合理的基础镜像，减少大小 （alphine）")])]),s._v(" "),a("h2",{attrs:{id:"mysql-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-配置"}},[s._v("#")]),s._v(" Mysql 配置")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("开启 bin-log 复制")])]),s._v(" "),a("li",[a("p",[s._v("设置合理的时区")])]),s._v(" "),a("li",[a("p",[s._v("设置合理的字符集")])]),s._v(" "),a("li",[a("p",[s._v("设置合理的存储引擎")])]),s._v(" "),a("li",[a("p",[s._v("有合理的唯一健和索引")])]),s._v(" "),a("li",[a("p",[s._v("视情况使用的外键，高并发的场景不建议使用外键")])]),s._v(" "),a("li",[a("p",[s._v("对 UUID 采用合理的索引")])]),s._v(" "),a("li",[a("p",[s._v("考虑数据迁移的便利性")])])]),s._v(" "),a("h2",{attrs:{id:"jvm-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm-配置"}},[s._v("#")]),s._v(" JVM 配置")]),s._v(" "),a("h2",{attrs:{id:"nginx-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置"}},[s._v("#")]),s._v(" Nginx 配置")]),s._v(" "),a("ul",[a("li",[s._v("gzip")]),s._v(" "),a("li",[s._v("js 压缩和混淆")])]),s._v(" "),a("h2",{attrs:{id:"应用配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用配置"}},[s._v("#")]),s._v(" 应用配置")]),s._v(" "),a("h3",{attrs:{id:"java-应用-线程池配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-应用-线程池配置"}},[s._v("#")]),s._v(" Java 应用 线程池配置")]),s._v(" "),a("p",[s._v("Spring boot项目中一般会配置一个全局线程池，我们一般会使用  Executor 类型作为各种多线程的场景。")]),s._v(" "),a("p",[s._v("一个典型的配置如下，如果需要精细的调优，需要结合CPU数量、内存、网络 IO、应用类型等实际情况优化。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Bean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"taskExecutor"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolTaskExecutor")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createTaskExecutor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolTaskExecutor")]),s._v(" threadPoolTaskExecutor "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolTaskExecutor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 核心线程数量为线程常驻数量，一般和 CPU 数量保持一致")]),s._v("\n  threadPoolTaskExecutor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setCorePoolSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 最大的线程数量为弹性值，往往和应用是否为计算密集还是 IO 密集有关系，可以一般设置为 CPU 数量的两倍")]),s._v("\n  threadPoolTaskExecutor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setMaxPoolSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等待队列的大小和业务处理能力有关，根据实际情况调整")]),s._v("\n  threadPoolTaskExecutor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setQueueCapacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 说明该线程池的用途，用于日志中输出")]),s._v("\n  threadPoolTaskExecutor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setThreadNamePrefix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"async-task-executor"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//当线程队列满了时候的拒绝策略，这里设置为直接调用执行，也就是阻塞模式")]),s._v("\nthreadPoolTaskExecutor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setRejectedExecutionHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CallerRunsPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  threadPoolTaskExecutor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("initialize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" threadPoolTaskExecutor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h3",{attrs:{id:"jedis-pool-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jedis-pool-配置"}},[s._v("#")]),s._v(" Jedis Pool 配置")]),s._v(" "),a("p",[s._v("Jedis 是一个 Redis 连接客户端，在主动和哨兵模式下需要使用连接池来提高性能，Jedis 的性能受制于单次 Redis 存取的效率、并发连接数等，下面是一个典型的配置。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JedisPoolConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 最大连接数，一般取决于并发量，大多数网站来说几百的连接数已经够用")]),s._v("\n \t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setMaxTotal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 最大空闲连接数，一定的空闲有利于性能，否则会反复创建和释放连接，如果并发量比较均匀可以设置小一点")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setMaxIdle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认是 0 可以不设置，一般设置为 0，当没有请求时，释放全部连接")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setMinIdle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当资源池用尽后，调用者是否要等待。一般建议开启，否则会抛出错误，有回退策略的情况下可以关闭，防止雪崩效应")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setBlockWhenExhausted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//BlockWhenExhausted 开启后才有效，设置最大的等待时间，超出最大的时间会报错")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setMaxWaitMillis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 向资源池借用连接时是否做连接有效性检测，无效连接会被移除，建议开启。并发量大可以关闭，会增加一次 ping")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTestOnBorrow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 向资源池归还连接时是否做连接有效性检测,无效连接会被移除，建议开启。一个机房内一般不会出现无效连接")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("testOnReturn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 下面几个是空闲资源监测的配置，一般可以不用配置，采用默认配置即可")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否开启空闲资源监测")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTestWhileIdle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 资源池中资源最小空闲时间")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setMinEvictableIdleTimeMillis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 空闲资源的检测周期")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeBetweenEvictionRunsMillis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 空闲资源检测的连接数， -1 是所有连接")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setNumTestsPerEvictionRun")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h3",{attrs:{id:"elastic-search-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elastic-search-配置"}},[s._v("#")]),s._v(" Elastic Search 配置")]),s._v(" "),a("p",[s._v("ES 使用 HTTP Client  通信，因此配置比较简单。")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("elasticsearch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 地址相关略过")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接超时时间")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("connection-timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# socket 连接超时时间")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("socket-timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请求的的链接超时时间")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("connection-request-timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v("\n      \n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最大连接数")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("max-connect-num")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最大连接数对于某个 url 或者端口")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("max-connect-per-route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v("\n      \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h3",{attrs:{id:"日志配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志配置"}},[s._v("#")]),s._v(" 日志配置")]),s._v(" "),a("ul",[a("li",[s._v("数据库日志")]),s._v(" "),a("li",[s._v("错误信息日志")]),s._v(" "),a("li",[s._v("第三方API调用日志")])]),s._v(" "),a("p",[s._v("参考文章 https://www.iteye.com/blog/aub-1101260")]),s._v(" "),a("h3",{attrs:{id:"redistemplate-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redistemplate-配置"}},[s._v("#")]),s._v(" RedisTemplate  配置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    @Bean\n    RedisTemplate<String, Object> redisTemplate() {\n        RedisTemplate<String, Object> template = new RedisTemplate<String, Object>();\n        template.setConnectionFactory(redisConnectionFactory);\n        Jackson2JsonRedisSerializer jackson2JsonRedisSerializer = new Jackson2JsonRedisSerializer(Object.class);\n        ObjectMapper objectMapper = new ObjectMapper();\n        objectMapper.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);\n        objectMapper.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);\n        jackson2JsonRedisSerializer.setObjectMapper(objectMapper);\n        StringRedisSerializer stringRedisSerializer = new StringRedisSerializer();\n        // key采用String的序列化方式\n        template.setKeySerializer(stringRedisSerializer);\n        // hash的key也采用String的序列化方式\n        template.setHashKeySerializer(stringRedisSerializer);\n        // value序列化方式采用jackson\n        template.setValueSerializer(jackson2JsonRedisSerializer);\n        // hash的value序列化方式采用jackson\n        template.setHashValueSerializer(jackson2JsonRedisSerializer);\n        template.afterPropertiesSet();\n        return template;\n    }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);