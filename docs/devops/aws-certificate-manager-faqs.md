---
title: AWS Certificate Manager 常见问题
categories: 运维开发
toc: true
---

### 一般性问题 ###

问：什么是 AWS Certificate Manager (ACM)？

AWS Certificate Manager 是一项服务，可帮助您轻松地预置、管理和部署用于 AWS 服务的安全套接字层/传输层安全性 (SSL/TLS) 证书。SSL/TLS 证书用于保护网络通信的安全并确立网站在 Internet 上的身份。使用 AWS Certificate Manager，您无需再为购买、上传和更新 SSL/TLS 证书而经历耗时的手动流程。利用 AWS Certificate Manager，您可以快速请求证书，在 AWS 资源 (如 Amazon API Gateway 上的 Elastic Load Balancer、Amazon CloudFront 分配或 API) 上部署该证书，并让 AWS Certificate Manager 处理证书更新事宜。通过 AWS Certificate Manager 预置的 SSL/TLS 证书可免费使用。您只需为您创建的用于运行应用程序的 AWS 资源付费。

问：什么是 SSL/TLS 证书？

SSL/TLS 证书使 Web 浏览器能够标识使用安全套接字层/传输层安全性 (SSL/TLS) 协议的网站并与之建立加密的网络连接。证书在名为公有密钥基础设施 (PKI) 的加密系统中使用。通过 PKI，在双方都信任同一个第三方 (称为证书颁发机构) 的情况下，一方可以为使用证书的另一方确立身份。ACM 用户指南、概念和术语提供了其他背景信息和定义。

问：AWS Certificate Manager 有什么作用？

您可以请求并预置 SSL/TLS 证书，然后为使用 Elastic Load Balancing、Amazon CloudFront 或 Amazon API Gateway 的站点和应用程序部署这些证书。验证请求域的所有权并获得颁发的证书之后，您可以从 AWS 管理控制台的下拉列表中选择 SSL/TLS 证书并部署该证书。或者，您也可以使用 AWS 命令行界面 (CLI) 命令或 API 调用将 ACM 提供的证书部署到 AWS 资源。ACM 会为您管理证书更新和证书部署事宜。

问：使用 AWS Certificate Manager 有哪些优势？

借助 ACM，您可以更加轻松地为 AWS 平台上的网站或应用程序启用 SSL/TLS。ACM 免除了过去与使用 SSL/TLS 和管理 SSL/TLS 证书相关的大量手动流程。ACM 还可管理证书更新，从而帮助您避免因证书配置错误、撤销或过期而导致的停机。您可获得 SSL/TLS 保护并轻松管理证书。启用 SSL/TLS 有助于提高站点的搜索排名，并可帮助您满足传输数据加密的法规合规性要求。

当您使用 ACM 时，它会应用强加密和密钥管理最佳实践来确保证书私有密钥的安全。借助 ACM，您可以使用 AWS 管理控制台、AWS CLI 或 AWS Certificate Manager API 集中管理 AWS Certificate Manager 在 AWS 区域内提供的所有 SSL/TLS 证书。AWS Certificate Manager 集成了其他 AWS 服务，因此您可以请求 SSL/TLS 证书，然后通过 AWS 管理控制台、AWS CLI 命令或 API 调用为 Elastic Load Balancing 负载均衡器或 Amazon CloudFront 分配预置证书。

问：如何开始使用 ACM？

要开始使用 AWS Certificate Manager，请导航到 AWS 管理控制台中的“Certificate Manager”，然后使用向导输入站点的名称以请求 SSL/TLS 证书。您也可以使用 AWS CLI 或 API 请求证书。在 ACM 获得域所有者的批准并且系统颁发 SSL/TLS 证书后，您就可以将其用于与 ACM 集成的其他 AWS 资源了。您只需从 AWS 管理控制台的下拉列表中选择您要部署的 SSL/TLS 证书即可。或者，您也可以执行一个 AWS CLI 命令或调用一个 AWS API，将该证书与您的资源关联起来。AWS Certificate Manager 随后会将该证书部署到您选择的资源。有关请求和使用 AWS Certificate Manager 所提供证书的更多信息，请参阅《AWS Certificate Manager 用户指南》中的入门。

问：ACM 提供哪种类型的证书？

ACM 提供域验证 (DV) 证书，供终止 SSL/TLS 的网站和应用程序使用。有关 ACM 提供的证书的更多详细信息，请参阅证书特点。

问：我可以将 ACM 提供的证书用于哪些 AWS 服务？

您可以将 ACM 用于以下 AWS 服务：
• Elastic Load Balancing – 请参阅 Elastic Load Balancing 文档
• Amazon CloudFront – 请参阅 CloudFront 文档
• Amazon API Gateway – 请参阅 API Gateway 文档
• AWS Elastic Beanstalk – 请参阅 AWS Elastic Beanstalk 文档
问：ACM 提供的证书是否适合政府部门？

ACM 证书可能适合部分政府部门，而并非对所有政府部门均适合。请查看当地法律、规则和法规，以确定某个 ACM 证书是否适合。如有任何疑问，请访问 AWS Support 中心并创建案例。

问：ACM 在哪些区域提供？

请访问 AWS 全球基础设施页面，了解目前提供 AWS 服务的区域。要将 ACM 证书与 Amazon CloudFront 配合使用，您必须在美国东部 (弗吉尼亚北部) 区域申请或导入该证书。该区域内与 CloudFront 分配关联的 ACM 证书将被分发到为该分配配置的所有地理位置。

问：我是否可以在多个 AWS 区域使用同一证书？

这要取决于您目前使用的是 Elastic Load Balancing 还是 Amazon CloudFront。要在不同区域内针对同一站点 (具有相同的完全限定域名 (FQDN) 或 FQDN 集) 将某个证书与 Elastic Load Balancing 配合使用，您需要为计划使用证书的每个区域申请新证书。请注意，还需要针对新区域重新验证证书中的每个名称。要将 ACM 证书与 Amazon CloudFront 配合使用，您必须在美国东部 (弗吉尼亚北部) 区域申请该证书。该区域内与 CloudFront 分配关联的 ACM 证书将被分发到为该分配配置的所有地理位置。

问：是否可以在区域之间复制证书？

目前不可以。

问：如果同一域名我已拥有来自其他提供商的证书，我是否还能够使用 ACM 配置证书？

是。
问：我是否可以在 Amazon EC2 实例或自己的服务器上使用证书？

不可以。目前，ACM 提供的证书只能用于特定 AWS 服务。请参阅我可以将 ACM 提供的证书用于哪些 AWS 服务？

问：我能够通过 ACM 预置的证书数量是否有限制？

默认情况下，您可以在每个区域中为每个账户预置多达 100 个证书。通过 ACM 预置的每个证书最多可以拥有 10 个完全限定域名。您可以访问 AWS Support 中心请求增加上限。有关更多详细信息，请参阅 AWS 文档。


### 预置证书 ###

问：如何预置 ACM 提供的证书？

您可以使用 AWS 管理控制台、AWS CLI 或 ACM API/SDK 进行预置。要使用 AWS 管理控制台，请导航到控制台的 ACM 部分，选择“Request a Certificate”，输入站点的域名，然后按照屏幕上的说明完成请求。如果用户可以通过其他名称访问您的站点，则可以在请求中添加其他域名。域的所有者会收到一封关于请求批准颁发证书的电子邮件。在请求中的所有域名获得域所有者的批准后，系统将颁发证书并准备好预置证书以用于其他 AWS 服务，如 Elastic Load Balancing 或 Amazon CloudFront。有关详细信息，请参阅 ACM 文档。
问：颁发证书需要多长时间？

获得域的所有者或域所有者授权代表的批准后，系统通常会在几分钟内颁发证书，但也可能需要更长时间。有关更多详细信息，请参阅如何预置 ACM 提供的证书？
问：请求证书时会发生什么情况？

为了验证您对请求的证书中包括的域名或名称的控制权，系统会针对证书请求中的每个域名向注册域的所有者发送电子邮件。在域的所有者或授权代表批准证书请求之前，证书请求将处于待验证状态。域的所有者或授权代表 (审批者) 可以按照电子邮件中的说明批准证书请求。说明将指引审批者导航到审批网站，单击电子邮件中的链接或将电子邮件中的链接粘贴到浏览器中，以导航到审批网站。审批者确认与证书请求相关的信息，如域名、证书 ID (ARN) 以及发出请求的 AWS 账户 ID，如果信息准确无误，则批准请求。在证书请求中的所有域名获得批准后，系统通常会在几分钟内颁发证书，届时证书请求的状态将变为已颁发。获得颁发的证书后，您便可以开始将其用于其他 AWS 服务。
问：审批请求要发送到哪个电子邮件地址？
当您请求证书时，系统会针对证书请求中的每个域名使用 WHOIS 查找来检索该域的联系人信息。电子邮件会发送至针对该域列出的域注册人、管理联系人和技术联系人。电子邮件还会同时发送至域的五个特定电子邮件地址，即在您请求的域名前加上 admin@、administrator@、hostmaster@、webmaster@ 和 postmaster@ 生成的五个地址。例如，如果您为 server.example.com 请求证书，系统将使用针对 example.com 域，外加 admin@server.example.com、administrator@server.example.com、hostmaster@server.example.com、postmaster@server.example.com 和 webmaster@server.example.com 的 WHOIS 查询返回的联系人信息将电子邮件发送至域注册人、技术联系人和管理联系人。

针对以“www”开头的域名或以星号 (*) 开头的通配符名称，这五个特定电子邮件地址采用不同的构造方式。ACM 会删除前导的“www”或星号，而电子邮件则被发送到通过在域名其余部分之前加上 admin@、administrator@、hostmaster@、postmaster@ 和 webmaster@ 来构造的管理员地址。例如，如果您为 www.example.com 请求证书，则电子邮件被发送到 WHOIS 联系人 (如前所述) 以及 admin@example.com，而不是 admin@www.example.com。其余四个特定电子邮件地址也采用类似的方式构造。

请求证书之后，您可以使用 ACM 控制台、AWS CLI 或 API 查看针对各个域发送的电子邮件的收件方电子邮件地址列表。
问：我是否可以配置接收证书审批请求的电子邮件地址？

不可以，不过您可以配置用于接收验证电子邮件的基础域名。基础域名必须是证书请求中域名的超级域。例如，如果您想为 server.domain.example.com 请求证书，但希望将审批电子邮件发送至 admin@domain.example.com，则可以使用 AWS API 或 API 实现这一目的。有关更多详细信息，请参阅 ACM CLI 参考和 ACM API 参考。
问：我是否可以使用具有代理联系人信息 (例如 Privacy Guard 或 WhoisGuard) 的域？

可以；不过，电子邮件的发送可能会因为代理而延迟。通过代理发送的电子邮件可能会进入您的垃圾邮件文件夹。有关故障排除建议，请参阅 ACM 用户指南。

问：ACM 是否可以通过我的 AWS 账户的技术联系人验证我的身份？

不可以。验证域所有者身份的流程和策略非常严格，并且由为公开可信的证书颁发机构设置策略标准的 CA/Browser Forum 决定。要了解详情，请参阅 Amazon Trust Services 存储库中最新的“Amazon Trust Services 认证规范声明”。
问：我的证书请求状态为什么是“待验证”？

已发出请求但未经过批准的证书的状态为待验证。域的所有者或授权代表必须批准证书请求，然后系统才能颁发证书。

问：如果我没有收到验证和批准电子邮件，该怎么做？

有关故障排除建议，请参阅 ACM 用户指南。

问：我的证书请求状态为什么显示为“失败”？

有多种原因会导致域的验证控制流程失败，包括但不限于：网络资源的网址列表中包括的域被认定为包含恶意软件或欺诈性内容。要确定申请失败的原因，请访问 ACM 故障排除指南。

问：我的证书请求状态为什么显示为“验证超时”？

如果 ACM 证书请求在 72 小时内没有接受验证，则被视为超时。有关故障排除建议，请参阅 ACM 用户指南。

问：是否有其他方法来验证域或审批支持的证书？

目前没有。

                                                                 
### 证书 ###

问：浏览器、操作系统和移动设备是否信任 ACM 提供的证书？

目前的绝大部分浏览器、操作系统和移动设备都信任 ACM 提供的证书。ACM 提供的证书在浏览器和操作系统中的普及率高达 99%，包括 Windows XP SP3 和 Java 6 及更高版本。

问：如何确认我的浏览器是否信任 ACM 提供的证书？

信任 ACM 提供的证书的浏览器会显示一个锁形图标，并且在连接到使用 ACM 基于 SSL/TLS 提供的证书 (例如使用 HTTPS) 的站点时会显示不要颁发证书的警告。

ACM 提供的证书由亚马逊的证书颁发机构 (CA) 进行验证。任何包含 Amazon Root CA 1、Starfield Services Root Certificate Authority – G2 或 Starfield Class 2 Certification Authority 的浏览器、应用程序和操作系统均会信任由 ACM 提供的证书。

问：ACM 是否可以提供包括多个域名的证书？

可以。每个证书必须包括至少一个域名，并且您可以根据需要在证书中添加更多域名。例如，您可以将域名“www.example.net”添加到用于“www.example.com”的证书，前提是用户通过这两个域名都可以访问您的站点。对于证书请求中包括的所有名称，您必须具有所有权和控制权。

问：什么是通配符域名？

通配符域名匹配域中的所有第一级子域或主机名。第一级子域是一个不包含句号 (圆点) 的域名标签。例如，您可以使用名称“*.example.com”保护 www.example.com、images.example.com 以及以 .example.com 结尾的任何其他主机名或第一级子域。有关更多详细信息，请参阅 ACM 用户指南。

问：ACM 是否可以提供带有通配符域名的证书？

可以。

问：ACM 是否提供组织验证 (OV) 或扩展验证 (EV) 证书？

目前不提供。

问：ACM 是否为网站提供除 SSL/TLS 以外的其他类型的证书？

目前不提供。

问：我是否可以使用 ACM 提供的证书进行代码签名或电子邮件加密？

不可以。

问：ACM 是否提供用于签名和加密电子邮件的证书 (S/MIME 证书) ？

目前不提供。

问：ACM 提供的证书使用哪些算法？

ACM 证书使用的是采用 2048 位模数和 SHA-256 的 RSA 密钥。

问：ACM 是否支持椭圆曲线 (ECDSA) 证书？

目前不支持。
问：亚马逊在哪里介绍其关于颁发证书的策略和规范？

“Amazon Trust Services 证书策略”和“Amazon Trust Services 证书规范声明”文档中提供了相关信息。有关最新版本，请参阅 Amazon Trust Services 存储库。

问：如何撤销证书？

您可以访问 AWS Support 中心并创建案例，以请求 ACM 撤销证书。 

问：如果证书中的信息发生更改，我该如何通知 AWS？

您可以发送电子邮件至 validation-questions[at]amazon.com，通知 AWS。

 

### 私有密钥保护 ###

问：ACM 提供的证书的私有密钥是如何管理的？

系统会为 ACM 提供的每个证书创建一个键前缀。AWS Certificate Manager 可保护并管理用于 SSL/TLS 证书的私有密钥。ACM 会运用强加密和密钥管理最佳实践来保护并存储私有密钥。

问：ACM 是否可以跨 AWS 区域复制证书？

不可以。每个 ACM 证书私有密钥均存储在您请求该证书的区域。例如，当您在弗吉尼亚北部区域获得新的证书后，ACM 会将私有密钥存储在弗吉尼亚北部区域。仅当 ACM 证书与 CloudFront 分配关联时，该证书才能跨区域复制。在这种情况下，CloudFront 会将 ACM 证书分配到为您的分配配置的地理位置。

问：我是否可以对证书私有密钥的使用进行审核？

可以。您可以使用 AWS CloudTrail 查看日志，从而了解证书私有密钥的使用时间。


### 记账功能 ###

问：ACM 证书的使用如何收费和计费？

通过 AWS Certificate Manager 预置、管理和部署的 SSL/TLS 证书可免费使用。您只需针对为运行应用程序而创建的 AWS 资源付费，例如 Elastic Load Balancing 负载均衡器或 Amazon CloudFront 分配。



### 详细信息 ###

问：我是否可以将同一证书用于多个 Elastic Load Balancing 负载均衡器和多个 CloudFront 分配？

可以。

问：我是否可以将证书用于没有公共 Internet 访问权限的内部 Elastic Load Balancing 负载均衡器？

可以。请参阅托管更新与部署，详细了解 ACM 如何处理无法通过公共 Internet 访问的证书的更新问题。

问：用于 www.example.com 的证书是否也能用于 example.com？

不可以。如果您希望自己的站点能够被两个域名 (www.example.com 和 example.com) 引用，则必须请求包含这两个名称的证书。

问：我是否可以导入第三方证书并将其用于 AWS 服务？

可以。如果想要将第三方证书与 Amazon CloudFront 或 Elastic Load Balancing 配合使用，您可以使用 AWS 管理控制台、AWS CLI 或 AWS Certificate Manager API 将该证书导入 ACM。ACM 不会处理已导入证书的更新流程。您可以使用 AWS 管理控制台监控已导入证书的到期日期，并导入新的第三方证书以便替换即将过期的证书。

问：ACM 提供的证书的有效期是多久？

目前，ACM 提供的证书的有效期为 13 个月。

问：ACM 如何帮助我的企业或组织满足合规性要求？

使用 ACM 可以轻松确保连接的安全性 (这也是 PCI、 FedRAMP 以及 HIPAA 等众多合规性计划的共同要求)，从而帮助您遵守法规要求。有关合规性的具体信息，请参阅 http://aws.amazon.com/compliance。

问：ACM 是否有服务等级协议 (SLA)？

目前没有。

问：ACM 是否允许域名 (也称为国际化域名 (IDN)) 中包含本地语言字符？

ACM 不支持采用 Unicode 编码的本地语言字符；不过，ACM 支持域名使用 ASCII 编码的本地语言字符。

问：ACM 支持哪些域名标签格式？

ACM 仅支持采用 UTF-8 编码的 ASCII 字符，包括包含“xn-”的标签 (通常称为域名的 Punycode)。ACM 不支持域名中使用 Unicode 输入 (Unicode 标签)。

问：ACM 是否会提供一个可以在我的网站上显示的安全站点签章或信任徽标？

不会。如果您想使用站点签章，您可以从第三方供应商处获得。我们建议选择可评估和维护您站点和/或业务实践的安全性的供应商。

问：亚马逊是否允许将其商标或徽标用作证书徽章、站点签章或信任徽标？

不允许。此类签章和徽章可复制到不使用 ACM 服务的站点，但不能假借亚马逊名号建立信任。为保护我们的客户和亚马逊的声誉，我们不允许以这种方式使用我们的徽标。


### 日志记录 ###

问：AWS CloudTrail 提供哪些日志记录信息？

您可以确定哪些用户和账户为支持 AWS CloudTrail 的服务调用了 AWS API、发出调用的源 IP 地址以及调用发生的时间。例如，您可以确定哪些用户为关联 ACM 提供的证书与 Elastic Load Balancer 调用了 API，以及 Elastic Load Balancing 服务使用 KMS API 调用加密密钥的时间。


### 托管更新与部署 ###

问：什么是 ACM 托管更新与部署？

ACM 托管更新与部署可以管理由 ACM 提供的 SSL/TLS 证书的更新流程并部署更新后的证书。

问：使用 ACM 托管更新与部署有哪些优势？

ACM 可帮助您管理 SSL/TLS 证书的更新和部署。与容易出错的手动流程相比，ACM 能够让安全 Web 服务或应用程序的 SSL/TLS 配置和维护具有更高的操作可靠性。托管更新与部署有助于您避免因证书过期导致的停机。ACM 托管更新与部署不需要您在自己的站点安装或维护软件客户端或代理。ACM 会作为一种服务运行，并且与其他 AWS 服务集成。这意味着，您可以使用 AWS 管理控制台、AWS CLI 或 API 在 AWS 平台上集中管理和部署证书。

问：哪些证书可以自动更新和部署？

ACM 能够更新并部署 ACM 提供的证书，而无需域的所有者进行任何其他审批或介入。如果证书必须经过附加审批才能更新，ACM 会基于证书中的所有域名向相应域的所有者提出审批请求，以此管理更新流程。在证书中的所有域名均获得批准后，ACM 会更新证书并自动将其部署到您的 AWS 资源。如果域的所有者没有批准证书，我们会通知您 (AWS 账户所有者)。为了提高 ACM 自动更新和部署 ACM 提供的证书的能力，请确保证书正在使用，且证书中包括的所有域名均能解析至您的站点，并可通过 Internet 访问。
问：ACM 何时更新证书？

ACM 最早可在证书过期前 60 天开始执行更新流程。目前，ACM 提供的证书的验证期限是 13 个月。请参阅 ACM 用户指南，了解有关托管续订的更多信息。

问：在更新证书和部署新证书之前，我是否会收到通知？

不会。ACM 可能会在不提前通知的情况下更新证书或更新密钥，并更换旧的证书。

问：ACM 是否可以更新包含裸域 (也称为顶级域名，例如“example.com”) 的证书？

为了提高 ACM 自动更新和部署包含裸域的证书的能力，请确保裸域的 DNS 查找能够解析至与该证书关联的 AWS 资源。将裸域解析到 AWS 资源可能非常困难，除非您使用 Route 53 或支持别名资源记录 (或同类记录) 的其他 DNS 提供商，从而将裸域映射到 AWS 资源。有关更多信息，请参阅 Route 53 开发人员指南。

问：在 ACM 部署更新后的证书时，我的站点是否会断开现有连接？

不会。在部署新证书之后建立的连接将使用新证书，而现有连接不会受到影响。