(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{1100:function(n,t,e){"use strict";e.r(t);var o=e(15),E=Object(o.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("时间格式为2008-06-16\n查询出当天数据：\nSELECT * FROM "),e("code",[n._v("table")]),n._v(" WHERE date(时间字段) = curdate();\n查询出当月字段：\nSELECT *\nFROM "),e("code",[n._v("table")]),n._v("\nWHERE month( 时间字段) = month( now( ) ) ;\n时间格式为1219876…… UNIX时间，只要应用“FROM_UNIXTIME( )”函数\n例如查询当月：\nSELECT *\nFROM "),e("code",[n._v("table")]),n._v("\nWHERE month( from_unixtime( reg_time ) ) = month( now( ) ) ;\n查询上一个月的呢？变通一下！\nSELECT *\nFROM "),e("code",[n._v("table")]),n._v("\nWHERE month( from_unixtime( reg_time ) ) = month( now( ) ) -1;")])])}),[],!1,null,null,null);t.default=E.exports}}]);