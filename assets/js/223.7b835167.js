(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{1031:function(t,e,s){"use strict";s.r(e);var r=s(15),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("如果自己搭建的 gitlab 开启了自签名证书的 ssl，客户端拉取代码时候会报错")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("error: SSL certificate problem, verify that the CA cert is OK. Details:\nerror:14090086:SSL routines:SSL3_GET_SERVER_CERTIFICATE:certificate verify failed while accessing https://github.com/username/ExcelANT.git/info/refs\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("全局关闭 ssl 验证")]),t._v(" "),s("blockquote",[s("p",[t._v("git config --global http.sslVerify false")])]),t._v(" "),s("p",[t._v("当前仓库关闭 ssl 验证")]),t._v(" "),s("blockquote",[s("p",[t._v("git config http.sslVerify false")])]),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[t._v("https://stackoverflow.com/questions/3777075/ssl-certificate-rejected-trying-to-access-github-over-https-behind-firewall")])])])}),[],!1,null,null,null);e.default=i.exports}}]);