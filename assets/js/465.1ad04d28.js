(window.webpackJsonp=window.webpackJsonp||[]).push([[465],{1316:function(e,r,s){"use strict";s.r(r);var n=s(15),t=Object(n.a)({},(function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("SQL，一些有意思的TIPS，希望大家有收获。")]),e._v(" "),s("h2",{attrs:{id:"一些常见的sql实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一些常见的sql实践"}},[e._v("#")]),e._v(" 一些常见的SQL实践")]),e._v(" "),s("p",[e._v("（1）负向条件查询不能使用索引。\nselect * from order where status!=0 and stauts!=1\nnot in/not exists都不是好习惯。")]),e._v(" "),s("p",[e._v("可以优化为in查询：\nselect * from order where status in(2,3)")]),e._v(" "),s("p",[e._v("（2）前导模糊查询不能使用索引。\nselect * from order where desc like '%XX'\n而非前导模糊查询则可以：\nselect * from order where desc like 'XX%'")]),e._v(" "),s("p",[e._v("（3）数据区分度不大的字段不宜使用索引。\nselect * from user where sex=1\n原因：性别只有男，女，每次过滤掉的数据很少，不宜使用索引。")]),e._v(" "),s("p",[e._v("经验上，能过滤80%数据时就可以使用索引。对于订单状态，如果状态值很少，不宜使用索引，如果状态值很多，能够过滤大量数据，则应该建立索引。")]),e._v(" "),s("p",[e._v("（4）在属性上进行计算不能命中索引。\nselect * from order where YEAR(date) < = '2020'\n即使date上建立了索引，也会全表扫描，可优化为值计算：\nselect * from order where date < = CURDATE()\n或者：\nselect * from order where date < = '2020-01-01'")]),e._v(" "),s("h2",{attrs:{id:"并非周知的sql实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并非周知的sql实践"}},[e._v("#")]),e._v(" 并非周知的SQL实践")]),e._v(" "),s("p",[e._v("（5）如果业务大部分是单条查询，使用Hash索引性能更好，例如用户中心。\nselect * from user where uid=?\nselect * from user where login_name=?\n原因：\nB-Tree索引的时间复杂度是O(log(n))；\nHash索引的时间复杂度是O(1)。")]),e._v(" "),s("h2",{attrs:{id:"允许为null的列-查询有潜在大坑。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#允许为null的列-查询有潜在大坑。"}},[e._v("#")]),e._v(" 允许为null的列，查询有潜在大坑。")]),e._v(" "),s("p",[e._v("单列索引不存null值，复合索引不存全为null的值，如果列允许为null，可能会得到“不符合预期”的结果集。\nselect * from user where name != 'shenjian'\n如果name允许为null，索引不存储null值，结果集中不会包含这些记录。")]),e._v(" "),s("p",[e._v("所以，请使用not null约束以及默认值。")]),e._v(" "),s("h2",{attrs:{id:"复合索引最左前缀-并不是指sql语句的where顺序要和复合索引一致。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复合索引最左前缀-并不是指sql语句的where顺序要和复合索引一致。"}},[e._v("#")]),e._v(" 复合索引最左前缀，并不是指SQL语句的where顺序要和复合索引一致。")]),e._v(" "),s("p",[e._v("用户中心建立了(login_name, passwd)的复合索引\nselect * from user where login_name=? and passwd=?\nselect * from user where passwd=? and login_name=?\n都能够命中索引。")]),e._v(" "),s("p",[e._v("select * from user where login_name=?\n也能命中索引，满足复合索引最左前缀。")]),e._v(" "),s("p",[e._v("select * from user where passwd=?\n不能命中索引，不满足复合索引最左前缀。")]),e._v(" "),s("p",[e._v("（8）使用ENUM而不是字符串。\nENUM保存的是TINYINT，别在枚举中搞一些“中国”“北京”“技术部”这样的字符串，字符串空间又大，效率又低。")]),e._v(" "),s("h2",{attrs:{id:"小众但有用的sql实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小众但有用的sql实践"}},[e._v("#")]),e._v(" 小众但有用的SQL实践")]),e._v(" "),s("p",[e._v("（9）如果明确知道只有一条结果返回，limit 1能够提高效率。\nselect * from user where login_name=?\n可以优化为：\nselect * from user where login_name=? limit 1\n原因：\n你知道只有一条结果，但数据库并不知道，明确告诉它，让它主动停止游标移动。")]),e._v(" "),s("p",[e._v("（10）把计算放到业务层而不是数据库层，除了节省数据的CPU，还有意想不到的查询缓存优化效果。\nselect * from order where date < = CURDATE()\n这不是一个好的SQL实践，应该优化为：\n$curDate = date('Y-m-d');\n$res = mysql_query(\n'select * from order where date < = $curDate'\n);\n画外音：不要问我这是什么语言。\n原因：释放了数据库的CPU。多次调用，传入的SQL相同，才可以利用查询缓存。")]),e._v(" "),s("p",[e._v("（11）强制类型转换会全表扫描\nselect * from user where phone=13800001234\n你以为会命中phone索引么？大错特错了！！！")]),e._v(" "),s("p",[e._v("末了，再加一条，不要使用select *（潜台词，文章的SQL都不合格 =_=），只返回需要的列，能够大大的节省数据传输量，与数据库的内存使用量哟。")]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("分析：")]),e._v(" "),s("ul",[s("li",[e._v("用于技术总结的写作范式：清单式")]),e._v(" "),s("li",[e._v("文章字数短")]),e._v(" "),s("li",[e._v("实用")]),e._v(" "),s("li",[e._v("没有废话")]),e._v(" "),s("li",[e._v("解决问题")])])])}),[],!1,null,null,null);r.default=t.exports}}]);