(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{1014:function(s,n,a){"use strict";a.r(n);var e=a(15),i=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('html申明\n对ie6-8在html中添加no-css3这个class和各个版本的class，对ie7以下添加lte7这个class，然后根据我们目前使用浏览器的比例，把第一的ie6放在判断第一位。\n\n<!DOCTYPE HTML>\n\x3c!--[if IE 6]><html class="ie6 lte9 lte7 no-css3" lang="zh-cn"><![endif]--\x3e\n\x3c!--[if IE 8]><html class="ie8 lte9 no-css3" lang="zh-cn"><![endif]--\x3e\n\x3c!--[if IE 9]><html class="ie9 lte9 no-css3" lang="zh-cn"><![endif]--\x3e\n\x3c!--[if IE 7]><html class="ie7 lte9 lte7 no-css3" lang="zh-cn"><![endif]--\x3e\n\x3c!--[if !(IE 6) | !(IE 7) | !(IE 8) | !(IE 9)  ]>\x3c!--\x3e<html lang="zh-cn">\x3c!--<![endif]--\x3e\n<head>\n<meta charset="UTF-8">\n<title>无标题文档</title>\n</head>\n\n<body>\n\n</body>\n</html>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('判断浏览器，添加所需文件\n//为ie6-8添加一个ie.css文件\n\x3c!--[if lte IE 8]><link href="css/ie.css" type="text/css" rel="stylesheet" media="all"><![endif]--\x3e\n//为ie6添加处理png的js文件\n\x3c!--[if IE 6]>\n      <script type="text/javascript" src="js/DD_belatedPNG_0.0.8a-min.js?_v=<%=JS_VERSION%>"><\/script>\n      <script type="text/javascript">\n          //给所有需要处理的png图片加上dd-pngifx这个class，就可以处理了\n          DD_belatedPNG.fix(".dd-pngfix");\n      <\/script>\n<![endif]--\x3e\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('常规布局\n这个布局的特点是border，margin，padding由里面的inner部分来完成，所以左中右三个加起来就是总的宽度，而不用考虑左中右的margin，border，padding之类的，当然之所有选择这个布局，还有其他的一些变化，详细请参看布局。这里列出左右边栏布局的代码以供参考。\n\n<div class="page asides-two">\n    <div class="wrap-header">\n        <div id="header">\n            <div class="inner clearfix"></div>\n        </div>\n    </div>\x3c!--wrap-header--\x3e\n    <div class="wrap-container">\n        <div id="container" class="clearfix">\n            <div id="aside_left" class="aside">\n                <div class="inner"></div>\n            </div>\x3c!--aside_left--\x3e\n\n            <div id="main">\n                <div class="inner clearfix"></div>\n            </div>\x3c!--main--\x3e\n\n            <div id="aside_right" class="aside">\n                <div class="inner"></div>\n            </div>\x3c!--aside_right--\x3e\n        </div>\n    </div>\x3c!--wrap-container--\x3e\n    <div class="wrap-footer">\n        <div id="footer">\n            <div class="inner clearfix"></div>\n        </div>\n    </div>\x3c!--wrap-footer--\x3e\n</div>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('边栏区块\n边栏一般加有aside-block这个class，然后每个区块有一个属于自己的id，以方便协作查阅及日后修改。内容由block-content这个class包括起来，如果标题右侧有更多等信息，使用head-title结构。当然如果边栏区块足够简单如就一张图片，那就根本就不需要这个结构了。\n\n<div id="" class="aside-block">\n  <h2></h2>\n  <div class="block-content"></div>\n</div>\n\n\x3c!-- 标题右侧有更多等文字信息 --\x3e\n<div id="" class="aside-block">\n  <div class="head-title clearfix">\n    <h2></h2>\n    <a href="#" class="more"></a>\n  </div>\n  <div class="block-content"></div>\n</div>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('关于H1\n在首页的时候，网站的h1标题为站点名字，当网站在内页的时候，内页标题为h1。所以对站点名字输出进行判断，以jsp为例：\n\n<% if(isFront) { %>\n  <h1 class="ele-invisible">天涯游戏</h1>\n<% }else { %>\n  <strong class="ele-invisible">天涯游戏</strong>\n<% } %>\n当然大多数时候其实我们一般是显示logo，而网站名称我们也许是需要隐藏的，那样我们添加了个ele-invisible的class，这个class的样式为：\n\n/*ele-invisible  */\n.ele-invisible{\n    position: absolute;\n    clip:rect(1px 1px 1px 1px);/* ie6,7*/\n    clip: rect(1px, 1px, 1px, 1px);\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])])])}),[],!1,null,null,null);n.default=i.exports}}]);