(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{986:function(t,s,n){"use strict";n.r(s);var a=n(15),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("使用管理员进入 Manage Jenkins > Script Console")]),t._v(" "),n("div",{staticClass:"language-groovy line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[t._v("Jenkins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findAll "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("it"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("task"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("contains")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"Extenda"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("each "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  println "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"Cancel '),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("it"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("task"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v('"')]),t._v("\n  Jenkins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cancel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("it"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("task"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nJenkins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("each "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopJobs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("it"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopJobs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("job"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("job "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" jenkins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("branch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OrganizationFolder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Git behaves well so no need to traverse it.")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("job "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloudbees"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hudson"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("folder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Folder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    job"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("each "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopJobs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("it"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("job "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jenkinsci"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("workflow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("multibranch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WorkflowMultiBranchProject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    job"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("each "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopJobs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("it"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("job "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jenkinsci"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("workflow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("job"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WorkflowJob"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     println job"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    job"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("builds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findAll "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" it"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inProgress "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" it"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("building "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("each "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" build "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("\n      println "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"Kill '),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),t._v("build")]),t._v('"')]),t._v("\n      build"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("finish")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hudson"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ABORTED"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IOException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"Aborted from Script Console"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);