(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{1098:function(a,e,s){"use strict";s.r(e);var t=s(15),d=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("pvcreate /dev/vdb\nvgcreate mate /dev/vdb")]),a._v(" "),s("p",[a._v("lvcreate -n gaussdb -L 150G mate\nmkdir /GDEMate\nmkfs.xfx /dev/mate/gaussdb\nmount /dev/mate/gaussdb /GDEMate")]),a._v(" "),s("p",[a._v('echo "mount /dev/mate/gaussdb /GDEMate" >> /etc/rc.lcoal')]),a._v(" "),s("p",[a._v("规划目录")]),a._v(" "),s("p",[a._v("groupadd dbgrp\nuseradd -g dbgrp -d /GDEMate/gaussdba -m -s /bin/bash gaussdba")]),a._v(" "),s("p",[a._v('echo "GDEMate#321" | passwod --stdin gaussdba')]),a._v(" "),s("p",[a._v("mkdir /GdeMate/gaussdba/data\nchown -R gaussdba:dbgrp /GDEMate/gaussdba")]),a._v(" "),s("p",[a._v("chmod -R 0750 /GDEMate/gaussdba\nchmod -R 0700 /GDEMate/gaussdba/data")]),a._v(" "),s("p",[a._v("安装")]),a._v(" "),s("p",[a._v("mkdir -p  /opt/software/guassdb")])])}),[],!1,null,null,null);e.default=d.exports}}]);