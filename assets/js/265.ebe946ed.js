(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{1077:function(e,t,r){"use strict";r.r(t);var _=r(15),v=Object(_.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"背景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[e._v("#")]),e._v(" 背景")]),e._v(" "),r("p",[e._v("rpm 是 RedHat 的包管理工具，因此叫 RedHat Package Manager，但由于目前 rpm 非常流行，基本上已经是事实标准。")]),e._v(" "),r("p",[e._v("rpm 包适用于 Fedora, CentOS, Red Hat Enterprise Linux, OpenSUSE, Mandriva, PCLinuxOS 等操作系。和 rpm 类似的是 deb 包。")]),e._v(" "),r("p",[e._v("尤其是 CentOS 用的比较多, rpm 比较有用。另外在 CentOS 有另外一个工具 yum。")]),e._v(" "),r("ul",[r("li",[e._v("rpm，底层工具用来安装和删除软件包文件")]),e._v(" "),r("li",[e._v("yum，上层工具完成元数据搜索和依赖解析")])]),e._v(" "),r("p",[e._v("两种工具都可以，完成软件的安装。")]),e._v(" "),r("blockquote",[r("p",[e._v("yum install package_name\nrpm -i package_file")])]),e._v(" "),r("p",[e._v("不同之处在于，rpm 需要自己下载软件包并且安装，如果依赖不满足可能报错。yum 会从资源库（repo）中搜索安装，并自动解决依赖问题。")]),e._v(" "),r("h2",{attrs:{id:"推荐的安装方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#推荐的安装方式"}},[e._v("#")]),e._v(" 推荐的安装方式")]),e._v(" "),r("p",[e._v("所以我们一般使用 yum 安装，如果资源库中没有，软件的官网往往提供了 repo，我们可以导入然后使用 yum 安装。")]),e._v(" "),r("p",[e._v("Jenkins 的安装页面，提供如下的安装方式")]),e._v(" "),r("p",[e._v("下载 repo 描述文件")]),e._v(" "),r("blockquote",[r("p",[e._v("sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo")])]),e._v(" "),r("p",[e._v("导入 repo 信息")]),e._v(" "),r("blockquote",[r("p",[e._v("sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key")])]),e._v(" "),r("p",[e._v("使用 yum 安装")]),e._v(" "),r("blockquote",[r("p",[e._v("yum install jenkins")])]),e._v(" "),r("p",[e._v("我们在编写安装脚本的时候，推荐使用这种安装方式，基本上能解决大部分的软件安装，又容易管理。")]),e._v(" "),r("p",[e._v("https://pkg.jenkins.io/redhat-stable/")]),e._v(" "),r("h2",{attrs:{id:"linux-包安装方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#linux-包安装方式"}},[e._v("#")]),e._v(" Linux 包安装方式")]),e._v(" "),r("ul",[r("li",[e._v("yum，默认仓库有安装包时")]),e._v(" "),r("li",[e._v("yum + rpm，软件包提供了自己的 repo 时")]),e._v(" "),r("li",[e._v("rpm，找不到 repo 时")]),e._v(" "),r("li",[e._v("源代码编译或使用通用二进制方式")])])])}),[],!1,null,null,null);t.default=v.exports}}]);