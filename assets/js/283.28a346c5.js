(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{1096:function(o,t,e){"use strict";e.r(t);var r=e(15),n=Object(r.a)({},(function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[e("p",[o._v("mongodb数据备份和恢复主要分为二种：一种是针对库的mongodump和mongorestore，一种是针对库中表的mongoexport和mongoimport")]),o._v(" "),e("p",[o._v("mongorestore 比较常用。")]),o._v(" "),e("h2",{attrs:{id:"导出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导出"}},[o._v("#")]),o._v(" 导出")]),o._v(" "),e("blockquote",[e("p",[o._v("mongodump -d SERVERLOG -o /data/mongobak/SERVERLOG.bak/")])]),o._v(" "),e("h2",{attrs:{id:"导入指定文件夹下的数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导入指定文件夹下的数据"}},[o._v("#")]),o._v(" 导入指定文件夹下的数据")]),o._v(" "),e("blockquote",[e("p",[o._v("mongorestore -d <db_name> <bson_folder>")])]),o._v(" "),e("p",[o._v("windows 下找到 C 盘中 mongdodb/server/bin, mongdo提供了一些工具软件")]),o._v(" "),e("blockquote",[e("p",[o._v("mongorestore.exe -d <db_name> <bson_folder>")])]),o._v(" "),e("h2",{attrs:{id:"参考文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[o._v("#")]),o._v(" 参考文档")]),o._v(" "),e("ul",[e("li",[o._v("https://docs.mongodb.com/manual/reference/program/mongorestore/")])])])}),[],!1,null,null,null);t.default=n.exports}}]);