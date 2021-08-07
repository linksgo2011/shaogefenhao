module.exports = [
    {text: '首页', link: '/'},
    {
        text: '建模', link: '/pages/modeling/', items: [
            {text: '软件建模介绍', link: '/pages/modeling/'},
            {text: '领域驱动设计(DDD)', link: '/pages/modeling/ddd/'},
        ]
    },
    {
        text: '架构', link: '/pages/architecture/', items: [
            {text: '软件架构介绍', link: '/pages/architecture/'},
            {text: '微服务', link: '/pages/architecture/micro-service/'},
            {text: '高并发', link: '/pages/architecture/performance/'},
        ]
    },
    {
        text: '规范', link: '/pages/specification/', items: [
            {text: '软件规范化设计', link: '/pages/specification/'},
            {text: 'Java 规范', link: '/pages/specification/java/'},
            {text: '前端 规范', link: '/pages/specification/frontend/'},
        ]
    },
    {
        text: '自测', link: '/pages/testing/', items: [
            {text: '开发自测', link: '/pages/testing/self/'},
            {text: '需求评审', link: '/pages/testing/requirement-review/'},
            {text: '代码扫描', link: '/pages/testing/code-scan/'},
            {text: '单元测试', link: '/pages/testing/unit-testing/'},
        ]
    },
    {
        text: '团队', link: '/pages/team/', items: [
            {text: '为什么需要敏捷？', link: '/pages/team/'},
            {text: '从分布式系统看团队管理', link: '/pages/team/distribution-system/'},
        ]
    },
    {text: '关于', link: '/pages/about/'},
]
