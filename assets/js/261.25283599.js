(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{1072:function(s,t,_){"use strict";_.r(t);var a=_(15),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,_=s._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[_("h2",{attrs:{id:"基本原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本原理"}},[s._v("#")]),s._v(" 基本原理")]),s._v(" "),_("p",[s._v("基本原理为服务器持有公钥，客户端持有私钥。服务器 authorized_keys 中允许添加多个公钥，则允许多个持有私钥的客户端登陆上来。客户端生成密匙对，然后讲公钥文件注册到 authorized_keys 即可登录。")]),s._v(" "),_("h2",{attrs:{id:"操作方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#操作方法"}},[s._v("#")]),s._v(" 操作方法")]),s._v(" "),_("p",[s._v("在客户端打开控制台，输入命令")]),s._v(" "),_("blockquote",[_("p",[s._v("ssh-keygen -t rsa")])]),s._v(" "),_("p",[s._v("Enter file in which to save the key (/home/hp/.ssh/id_rsa):")]),s._v(" "),_("p",[s._v("输入生成 key 的位置")]),s._v(" "),_("p",[s._v("选择默认选项的话，可以在指定的位置得到 id_rsa  id_rsa.pub 两个文件。\n，id_rsa 私钥，id_rsa.pub 为公钥，公钥为服务器持有，私钥为客户端登录上来的凭证。")]),s._v(" "),_("p",[s._v("需要把公钥添加到系统的密匙文件中，才能启用公钥。")]),s._v(" "),_("blockquote",[_("p",[s._v("cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys")])]),s._v(" "),_("p",[s._v("完成上面的步骤后，即可使用下面的命令登录：")]),s._v(" "),_("blockquote",[_("p",[s._v("ssh -i id_rsa username@host")])]),s._v(" "),_("p",[s._v("注意")]),s._v(" "),_("ul",[_("li",[s._v("如果密匙对是在服务器上生成的，可以吧 id_rsa 文件拷贝到本机 ./ssh/ 下即可登录。")]),s._v(" "),_("li",[s._v("如果本机已经存在 id_rsa 文件，为了不影响登录其他服务，可以直接把存在的 id_rsa.pub 拷贝到 authorized_keys 即可登录。")])]),s._v(" "),_("h2",{attrs:{id:"参考资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")])])}),[],!1,null,null,null);t.default=e.exports}}]);