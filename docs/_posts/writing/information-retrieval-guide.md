---
title: 信息检索指南
toc: true
date: 2021-08-11 19:18:36
categories: 
  - 写作
sidebar: auto
permalink: /writing/information-retrieval-guide/
---

互联网和搜索引擎的出现，让现代人对信息的获取变得极其容易。但是，每个人的信息检索能力差异明显，甚至有人提出了 “搜商” 这个词来评价一个人搜索信息的能力。

在一些文章中，我们经常可以看到作者旁征博引，使用了大量的案例、统计数据、文献等。一方面，是这些作者拥有海量的阅读量，另一方面也是这些作者更善于使用互联网去获取数据。

因此，互联网信息检索是一个非常重要的能力。这里，我整理了一些常用的信息检索材料，希望能帮助到写作和需要在网络中获取数据的人们。

## 搜索引擎

搜索引擎大家都会使用，但是有一些小的技巧可以帮助我们让搜索引擎工作得更准确和高效。

**精确搜索。** 使用双引号可以实现精确搜索，会完全匹配引号内的关键词，搜索引擎不会进行分词处理。例如，搜索 “操作系统”，如果不使用双引号会被智能拆词，返回操作、系统、操作系统等内容。

**站内搜索。** 使用 “site:域名 + 关键词” 可以进行对某个网站内进行搜索。这个功能非常实用，比如，你需要搜索维基百科中关于 java 的词条，只需要使用 “site:wikipedia.org java” 语法就可以只从维基百科中获得内容。

**文件类型匹配。** 使用 “关键词 filetype:文件类型”可以搜索出需要类型的文件。但是需要注意，有些搜索引擎支持的文件类型不多，常用的就是 pdf、doc、ppt 等。

**通配符搜索。** 使用通配符 “*” 可以让搜索引擎更好的获取需要匹配的内容。比如需要搜索，柏拉图的《理想国》，只记得前面 “理想” 两个字，几乎不能搜索出需要的内容，可以使用通配符减少干扰。

**逻辑表达式。** 使用逻辑表达式 “AND”、“OR”、“-”，可以表达并、或、非三种逻辑语句，比如你需要搜索电视台，但是不需要中央电视台的内容，可以使用 ”电视台 - 中央电视台“。不过，不同的搜索引擎支持的情况不一样。

**书名号。** 使用书名号可以过滤书籍、电影和其他类型的作品。使用书名号可以排除大量干扰，比如输入《理想国》可以获得只和出版物相关的内容。

使用搜索引擎的高级方法，不仅可以帮我们快速地找到需要的内容，还可以取得意想不到的效果。比如，使用精确搜索的时候，由于关键词的原因，搜索引擎的广告推广会大大减少。



## 文献检索

除了做科研的人群高度依赖文献之外，软件开发有时候也需要查询一些文献资料，避免自己盲目试错。在写一些文章、材料时候需要强有力的证据，也可以查询一些论文、期刊等材料佐证自己的观点。

对于国内外的文献检索方式不同，也有一些注意事项需要关注。

### 文献检索方式

文献检索可以通过不同的方式。如果知道标题，可以通过标题检索。也可以通过文献中的关键词、摘要来进行搜索。如果知道了 DOI 可以直接通过 DOI 检索， DOI 相当于文献的一个身份证号码。

DOI 全称为DigitalObject Unique Identifier，是指数字对象唯一标识符。目前，大部分文献都有了 DOI。DOI 的格式分为前缀和后缀两部分组成，之间用“/”分开。前缀相对于网络域名，由国际数字对象识别号基金会发放，后缀可以由发布者确定。

中文文献还可以使用”中图分类号“来在特定分类下寻找自己想要的资源，以及”文献标志码“来区别来文献的性质。

例如《计算机科学与技术》期刊论文 《基于面向对象思想的软件系统分析与设计》中。中图分类号为 TB 111.521 说明了它是中国图书馆分类”工业技术“的子类下。 文献标志码为 A 说明是理论与应用研究学术论文。doi:10.3969/j.issn.1672-5468.2020.06.0，可以在相关数据库中精确定位该文章。



### 文献检索的渠道

文献检索的渠道一般有搜索引擎的学术频道，常见的有 Google 学术、百度学术，以及文献库知网、维普数据库。一般来说搜索引擎的检索能力更强，不过也必须跳转到专业数据库访问内容。一般专业的数据都需要收费，免费账户只能看到摘要信息。

下面是几个比较主流和常用的文献检索和下载的渠道。

**Google 学术 https://scholar.google.com。** Google 学术可以检索中英文文献材料，如果 Google学术是直接从开放的电子期刊中检索到的，还可以直接下载。同时，还可以获取相关文章和来源版本，检索能力和准确性都比较高。唯一不足就是无法大部分检索的内容无法直接下载。

**知网 https://www.cnki.net/。** 知网是国内专业的文献数据库，号称是中国知识基础设施工程。知网的文献收入非常全，不仅仅是期刊论文，还包含了专利和标准。由于是专业的文献数据库，因此费用也比较高。如果想获得免费的下载渠道，可以使用大学校园网、图书馆电子期刊获得部分收费资源。

**sci-hub。** 如果获得了文献的 DOI，可以通过 sci-hub 自由的下载 90% 左右的外文文献。sci-hub 的作者 Alexandra Elbakyan 通过特定的技术聚合了这个大学、图书馆的渠道资源，实现了自由下载。sci-hub 也提供了 Chrome 插件的下载模式，让下载更加方便。



## 统计数据

统计数据对于科学的研究的意义不言而喻，也是决策系统的技术，通过引用一些统计数据，可以增加文章和报告的说服力。

统计数据一般来源两个方面。一部分是国家单位或者机构按照年度、季度公布的统计信息，另一方面来源于一些学界对某个行业的研究，这些内容可以在研究报告中获得。

**国家统计局 https://data.stats.gov.cn/。** 国家统计局会公布国内各种社会和经济统计数据，以及趋势分析。可以做为主要的、可靠的统计数据来源。国家数据还可以根据季度、月度检索数据。

**github - awesome-public-datasets**。awesome-public-datasets 是一个开源的开放数据聚合仓库，它可以作为一个非常全面的数据获取渠道，包含各个细分领域的数据库资源，自然科学和社会科学的覆盖都很全面。

**皮书数据库 https://www.pishu.com.cn/。** 皮书数据库可以获得各个行业的研究报告。一般白皮书为政府工作报告，蓝皮书为行业研究机构的研究报告。皮书中，一般不仅仅有统计数据，还有行业趋势和分析。

**指数平台。** 指数也算一种特殊的统计数据，不过它是经过特定的数据处理方法加工而成，往往和特定的行业有关。比如百度指数提供了搜索关键词的热度排名；国家统计局提供了消费物价指数；股市中有中证指数用于指数基金投资。

还有一些比较专业的行业数据机构，比如前瞻数据库、中宏数据库，这些数据提供商一般收费，会提供额外的决策指南。
