(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{872:function(s,e,n){"use strict";n.r(e);var a=n(15),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("在 MVC 架构下写代码一直有一个问题，业务逻辑应该写 C 呢，还是写 M。")]),s._v(" "),n("p",[s._v("写 C 就变成了事务脚本的代码，虽然比起不用 MVC 的都多入口架构好很多，但是业务逻辑还是会重复和混乱。写 M 很多逻辑又写不下去，业务逻辑往往需要跨模型处理，大量业务逻辑难以落到 M 中。于是大家就引入了一个 S （Service），变成了 MVCS 架构，这个架构有很好的群众基础，逻辑清晰容易使用，被广泛采用。")]),s._v(" "),n("p",[s._v("在 DDD 重新热起来之后，事情有一点微妙的变化。很多 DDD 的支持者，认为将业务逻辑写入 S 不符合 DDD 的充血模型的逻辑，应该将按照 DDD 的书将业务逻辑写到领域模型。")]),s._v(" "),n("p",[s._v("于是我在一个项目中见到一段意思的写法，将业务逻辑大部分写在模型中，其中有一个订单对象，有价格等相关属性，并提供了计算、结账等方法，大概如下：")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Order{\n    private List&lt;Product> products;\n    ...\n\n    public void checkout(){\n    ...\n    }\n    public void calculate(){\n    ...\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("有人觉得别扭，订单居然能自己结账了；有人看过 DDD 相关的书后，觉得很香，这个类有良好的“封装”。这就是由来已久的充血、贫血之争。")]),s._v(" "),n("h2",{attrs:{id:"充血模型、贫血模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#充血模型、贫血模型"}},[s._v("#")]),s._v(" 充血模型、贫血模型")]),s._v(" "),n("p",[s._v("面向对象在处理对象的存储时，有两种风格一直争论不断。将业务逻辑放到领域对象中，对象不仅需要承载数据也需要承载行为，这种编程逻辑被称作"),n("strong",[s._v("充血模型")]),s._v("。")]),s._v(" "),n("p",[s._v("例如，计算订单的价格")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 下单方法\npublic void order(){\n    Order = new Order();\n    order.setId("UUID");\n    order.setPrice(100);\n    ...\n\n    order.calculate();\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("将业务逻辑放到领域对象之外，领域对象只承载数据，以及一些 getter、setter 方法，业务逻辑被另外的类（service）来承载，这种编程模型被称作"),n("strong",[s._v("贫血模型。")])]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 下单方法\npublic void order(){\n    Order = new Order();\n    order.setId("UUID");\n    order.setPrice(100);\n    ...\n    order.setItemCount(countItems());\n}\n\nprivate int countItems(){\n    ...\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("充血模型和贫血模型还有另外一层含义，那就是谁来负责持久化他们。")]),s._v(" "),n("p",[s._v("一个简单的例子，充血模型中 order 对象可以调用 order.save() 来保存它自己。在一些动态的语言 ORM 框架，借助器动态语言特性的优势，往往会这样设计。典型的是 ActiveRecord 模式，数据库的一行记录、XML 的一个 元素被读取到内存中后，可以对应一个活跃对象。代表的框架有 Ruby On Rails、Yii、CakePHP 等。")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// OrderService\n$order = new Order();\n$order->setId("UUID")\n$order->setPrice(100);\n...\n$order->save();\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("贫血模型的持久化依赖另外一个对象。在 Hibernate 中，可以使用 EntityManager 的 persist 方法来持久化，或者使用 JPA 的 Repository，使用 Mybatis 的话就需要使用 Mapper 来完成持久化。")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// OrderService\nOrder = new Order();@PersistenceContext\nprotected EntityManager entityManager = null;\n\npublic void saveOrder(){\n    Order = new Order();\n    order.setId("UUID");\n    order.setPrice(100);\n    ...\n    entityManager.persist(order);\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("总结一下，动态语言更容易实现充血模型，静态语言更容易实现贫血模型，但是并不是说静态语言就不能使用充血模型和 ActiveRecord 只是稍显麻烦。")]),s._v(" "),n("h2",{attrs:{id:"各自的局限性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#各自的局限性"}},[s._v("#")]),s._v(" 各自的局限性")]),s._v(" "),n("p",[s._v("充血模型的好处是可以封装一些业务逻辑，避免面向模型的开发退化为事务脚本化的代码。事务脚本化的代码在前面的文章中已经讨论过，这是一种面向功能的开发方法，而非模型的开发方法，会造成代码中业务逻辑重复，一致性差的问题。")]),s._v(" "),n("p",[s._v("因此在 DDD 的相关书籍以及 《企业应用架构》中被反复提及，编程大师们大多鼓励使用充血模型。面向对象开发的早期就是充血模型，当我们接触面向对象的第一堂课时，老师都是拿现实世界中事物作为例子。")]),s._v(" "),n("p",[s._v("一个汽车由四个轮子构成，并且能跑，我们定义它的类就是：")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Class Car {\n    private List&lt;Wheel> wheels;\n\n    public void run(){\n\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("然后实现这个类就能描述我们的业务逻辑，充血模型可以将业务逻辑封装到领域模型中。")]),s._v(" "),n("p",[s._v("但是充血模型容易陷入一个困境，就是封装的层次难以维系。上面订单的例子，在实际开发过程中很难将很多业务逻辑落到模型层，例如订单计算可能需要商品、用户积分等其他模型。除了单个模型，批量业务逻辑也很难实现。")]),s._v(" "),n("p",[s._v("于是从 EJB2 开始倡导使用贫血模型，将业务逻辑封装到 Service 这类专门承载业务逻辑的对象，Order 这类的模型只需要承载数据结构。贫血模型，让面向对象变得非常轻量， Spring 大规模推广开之后尤为明显。")]),s._v(" "),n("p",[s._v("面向对象跳出 ”车有四个轮子，车能跑“ 的局限认识，换句话来说，”订单有多个订单项和总价，但是订单不能自己结账，应该由收营员结账“。贫血模型的本质是将不合理的行为从模型中抽离出去，订单模型负责承载数据，收银员对象负责承载行为。")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// Cashier.java \nclass Cashier{\n    public final static Cashier INSTANCE = new Cashier();\n    public Bill checkout(Order order){\n       .. 结账逻辑\n    }\n}\n\n// Order.java \nclass Order{\n    private List&lt;OrderItem> items;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("Cashier 可以实现为单例，Order 作为 POJO 存在，这就是 Spring 这套开发模型的基本逻辑。贫血模型很容易将代码写成事务脚本，因此业界尤其是 Mtin Fowler 等人鼓励将更多的业务逻辑实现为充血模型。")]),s._v(" "),n("h2",{attrs:{id:"主体、客体和面向对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#主体、客体和面向对象"}},[s._v("#")]),s._v(" 主体、客体和面向对象")]),s._v(" "),n("p",[s._v("”车有四个轮子，车能跑“ ”订单有多个订单项和总价，但是订单不能自己结账，应该由收营员结账“。这两种面向对象的思维模型都没有错，关键的问题是在何种场景下合理使用。")]),s._v(" "),n("p",[s._v("我们使用餐厅作为例子，开启上帝视角，对事物有仔细的观察。一个典型的餐厅有什么呢？")]),s._v(" "),n("ul",[n("li",[s._v("桌子")]),s._v(" "),n("li",[s._v("菜品")]),s._v(" "),n("li",[s._v("订单")]),s._v(" "),n("li",[s._v("服务员")]),s._v(" "),n("li",[s._v("账单")]),s._v(" "),n("li",[s._v("菜单")]),s._v(" "),n("li",[s._v("厨师")]),s._v(" "),n("li",[s._v("服务员")])]),s._v(" "),n("p",[s._v("假定需要实现下列需求:")]),s._v(" "),n("ol",[n("li",[s._v("对桌位进行预定")]),s._v(" "),n("li",[s._v("点菜下单")]),s._v(" "),n("li",[s._v("结账")]),s._v(" "),n("li",[s._v("开发票")])]),s._v(" "),n("p",[s._v("我们用哲学认识世界的方法，把按照操作的主体、客体进行分类，主体和客体是认识世界很好的方式，也是真正理解面向对象的有效途径。")]),s._v(" "),n("blockquote",[n("p",[s._v("主体-客体问题是一个长期存在、关于人类经验分析的哲学论题，产生于这样一个前提：世界由客体（实体）组成，主体（观察者）知觉或假定客体作为实体存在。-- 维基百科")])]),s._v(" "),n("p",[s._v("假定这个餐厅非常大，在断电的情况下，无法使用收银机和软件操作，需要不同的人各司其职，并用纸和笔完成正常运作:")]),s._v(" "),n("p",[s._v("场景主体客体预定负责预定的服务员桌子点菜下单负责点菜的服务员菜单、订单结账负责结账的收银员订单、账单开发票负责开发票的服务员账单、发票")]),s._v(" "),n("p",[s._v("我们用语言描述一下这个店的工作过程：")]),s._v(" "),n("p",[s._v("顾客打来电话需要预定桌位，负责预定的服务员在预定表格上预定了桌位。顾客到来后，负责点菜的服务员拿出点菜便笺，点了菜撕下复印的菜单给了后厨。顾客吃完饭后让收银员结账，收银员结算后，归档了小票。负责开发票的收银员，开具了发票。")]),s._v(" "),n("p",[s._v("现在我们需要信息化这个系统，如果按照一般的充血模型，桌子有预定方法、订单有结账方法，这样并不符合逻辑，其实也不符合面向对象的思想。"),n("strong",[s._v("正确的面向对象，应该对主体进行 ”拟人化“ ，对客体进行 ”拟物化“。")])]),s._v(" "),n("p",[s._v("现实世界中的服务员、收银员变成了预订服务和订单服务。于是就写出了大家所熟悉的这种编码模式：")]),s._v(" "),n("p",[s._v("UseCase主体客体bookReservationServiceDeskorderOrderServiceProduct、OrdercheckoutOrderServiceOrder、BillapplyVoiceOrderServiceOrder、Voice")]),s._v(" "),n("p",[s._v("主体认识客体的过程，也是主体改造客体的过程。")]),s._v(" "),n("p",[s._v("领域模型是客体，领域服务是主体，应用程序的本质是认识世界（读），和改造世界（写）的过程。主体和客体是可以互相转换的，收银员能操作订单，另一方面如果需要，收银员会被商户管理员作为人员操作。")]),s._v(" "),n("p",[s._v("现实中的收银员反应在计算机系统中时：")]),s._v(" "),n("ul",[n("li",[s._v("作为主体，就是可以管理订单的领域服务")]),s._v(" "),n("li",[s._v("作为客体，就是被商户管理的人员和角色")])]),s._v(" "),n("p",[s._v("面向对象就是计算机软件对现实世界的阐述，当我们能直观的描述业务场景，就能很好的编写代码。")]),s._v(" "),n("p",[s._v("通过这种认识论我们发现，充血模型和贫血模型并不矛盾。如果你在编写一个游戏或者前端的可视化工具，充血模型无疑非常好用；但是如果你是编写一个信息化系统，并将充血模型滥用到客体对象上，则十分痛苦。")]),s._v(" "),n("p",[s._v("充血模型和贫血模型的问题应该从如何选择演变成如何使用的问题，充谁的血，在哪里充血。")]),s._v(" "),n("h2",{attrs:{id:"合适的-充血"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#合适的-充血"}},[s._v("#")]),s._v(" 合适的 ”充血“")]),s._v(" "),n("p",[s._v("回到这个朴素的逻辑命题: 程序 = 数据结构+算法。")]),s._v(" "),n("p",[s._v("这个说法其实一直都不过时，领域服务也是领域的一部分，不应该强行让领域模型充血，充血的过程由领域服务完成。换句话说，领域模型，拟物化，体现了数据结构；领域服务，拟人化，体现了算法。")]),s._v(" "),n("p",[s._v("对象拟人化是一个非常好的实践，我在一个项目中做了一个非常小的功能，需要定时拉取服务器配置并切换应用中的数据库连接。")]),s._v(" "),n("p",[s._v("我设计了 4 个对象：")]),s._v(" "),n("ul",[n("li",[s._v("ConfigTranslator 配置传输者")]),s._v(" "),n("li",[s._v("ContextRefresher 上下文刷新者")]),s._v(" "),n("li",[s._v("ConfigContainer 配置容器，用于承接本地配置")]),s._v(" "),n("li",[s._v("ConfigPackage 配置传输包")])]),s._v(" "),n("p",[s._v("ConfigTranslator、ContextRefresher 是主体进行拟人化命名，ConfigContainer、ConfigPackage 是客体，进行拟物化命名。通过这种设计，避免了滥用的充血模型。")]),s._v(" "),n("p",[s._v("当然你可能说，在 CURD 项目中无法体现这类思想。那是因为一般的管理系统，业务很简单，无需过于进行面向对象设计，于是容易写出 Service 扮演所有的主体。")]),s._v(" "),n("ul",[n("li",[s._v("主体就是一些管理者，ProductManager、UseManager")]),s._v(" "),n("li",[s._v("客体就是一些简单的对象，Product、User")])]),s._v(" "),n("p",[s._v("但是，很难说所有项目都是简单的 CURD 操作，这种情况往往是业务逻辑没有分析清楚，CRUD 项目带来的业务价值非常少，即便如此，也可以有意识的将对象拟物化、拟人化。")]),s._v(" "),n("p",[s._v("例如：操作订单的对象命名为 Cashier、XXXManager。开源项目尤其擅长此道，Spring Security 中TokenExtractor 用来从 HTTP 包中抽取 token； ETL 工具 kettle 用厨房中的事物 Spoon、Fork 代表各种模型，通过生活中的锅碗瓢盆，构建了非常容易理解的对象系统。")]),s._v(" "),n("p",[s._v("在实际使用 DDD 的过程中，领域服务可以和聚合成对出现。在避免了事务脚本的模式的同时，具有良好的封装性，能更好的对现实世界的阐述。")]),s._v(" "),n("p",[s._v("而通过主体和客体对模型进行分解，有很多好处:")]),s._v(" "),n("ul",[n("li",[s._v("容易理解")]),s._v(" "),n("li",[s._v("符合面向对象的直觉")]),s._v(" "),n("li",[s._v("聚合根容易存")]),s._v(" "),n("li",[s._v("批量问题被处理")])]),s._v(" "),n("p",[s._v("通过对面向对象的进一步理解，这些问题也就迎刃而解了，当然学习 DDD 的过程也是重新认识这个世界的过程。顺便不也把起名字这一编程两大难题之一的问题解决了，不是么。")])])}),[],!1,null,null,null);e.default=r.exports}}]);