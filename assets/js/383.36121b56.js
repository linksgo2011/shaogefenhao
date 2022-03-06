(window.webpackJsonp=window.webpackJsonp||[]).push([[383],{1216:function(t,n,a){"use strict";a.r(n);var e=a(15),s=Object(e.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"获取-spring-的-applicationcontext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取-spring-的-applicationcontext"}},[t._v("#")]),t._v(" 获取 Spring 的 ApplicationContext")]),t._v(" "),a("h2",{attrs:{id:"通过spring提供的工具类获取applicationcontext对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过spring提供的工具类获取applicationcontext对象"}},[t._v("#")]),t._v(" 通过Spring提供的工具类获取ApplicationContext对象")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('import org.springframework.web.context.support.WebApplicationContextUtils;\nApplicationContext ac1 = WebApplicationContextUtils.getRequiredWebApplicationContext(ServletContext sc);\nApplicationContext ac2 = WebApplicationContextUtils.getWebApplicationContext(ServletContext sc);\nac1.getBean("beanId");\nac2.getBean("beanId");\n\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("说明:这种方式适合于采用Spring框架的B/S系统，通过ServletContext对象获取ApplicationContext对象，然后在通过它获取需要的类实例。")]),t._v(" "),a("p",[t._v("上面两个工具方式的区别是，前者在获取失败时抛出异常，后者返回null。")]),t._v(" "),a("h2",{attrs:{id:"继承自抽象类applicationobjectsupport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承自抽象类applicationobjectsupport"}},[t._v("#")]),t._v(" 继承自抽象类ApplicationObjectSupport")]),t._v(" "),a("p",[t._v("说明：抽象类ApplicationObjectSupport提供getApplicationContext()方法，可以方便的获取到ApplicationContext。\nSpring初始化时，会通过该抽象类的setApplicationContext(ApplicationContext context)方法将ApplicationContext 对象注入。")]),t._v(" "),a("h2",{attrs:{id:"实现接口applicationcontextaware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现接口applicationcontextaware"}},[t._v("#")]),t._v(" 实现接口ApplicationContextAware")]),t._v(" "),a("p",[t._v("说明：实现该接口的setApplicationContext(ApplicationContext context)方法，并保存ApplicationContext 对象。\nSpring初始化时，会通过该方法将ApplicationContext对象注入。")]),t._v(" "),a("p",[t._v("虽 然，spring提供了后三种方法可以实现在普通的类中继承或实现相应的类或接口来获取spring 的ApplicationContext对象，但是在使用是一定要注意实现了这些类或接口的普通java类一定要在Spring 的配置文件application-context.xml文件中进行配置。否则获取的ApplicationContext对象将为null。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("package quartz.util;\n\nimport org.springframework.beans.BeansException;\nimport org.springframework.context.ApplicationContext;\nimport org.springframework.context.ApplicationContextAware;\n\npublic class SpringConfigTool implements ApplicationContextAware{//extends ApplicationObjectSupport{\n\nprivate static ApplicationContext context = null;\nprivate static SpringConfigTool stools = null;\npublic synchronized static SpringConfigTool init(){\n  if(stools == null){\n   stools = new SpringConfigTool();\n  }\n  return stools;\n}\n\npublic void setApplicationContext(ApplicationContext applicationContext)\nthrows BeansException {\n  context = applicationContext;\n}\n\npublic synchronized static Object getBean(String beanName) {\n  return context.getBean(beanName);\n}\n\n}\n\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br")])]),a("h3",{attrs:{id:"通过-class-loader-获取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-class-loader-获取"}},[t._v("#")]),t._v(" 通过 class loader 获取")]),t._v(" "),a("p",[t._v("org.springframework.web.context.ContextLoader")]),t._v(" "),a("p",[t._v("Title1 import org.springframework.web.context.ContextLoader;\nimport org.springframework.web.context.WebApplicationContext;")]),t._v(" "),a("p",[t._v("WebApplicationContext wac = ContextLoader.getCurrentWebApplicationContext();\nwac.getBean(beanID);")])])}),[],!1,null,null,null);n.default=s.exports}}]);