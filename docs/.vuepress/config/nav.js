module.exports = [
    {text: '首页', link: '/'},
    {
        text: '建模', link: '/pages/modeling/', items: [
            {text: '软件建模介绍', link: '/pages/modeling/'},
            {text: '业务建模(用例凭证法)', link: '/pages/modeling/cases-proof/'},
            {text: '领域建模(DDD)', link: '/pages/modeling/ddd/'},
        ]
    },
    {
        text: '架构', link: '/pages/architecture/', items: [
            {text: '软件架构介绍', link: '/pages/architecture/'},
            {text: 'DDD 分层模型', link: '/pages/architecture/ddd-layers/'},
            {text: '微服务', link: '/pages/architecture/micro-service/'},
            {text: '高并发', link: '/pages/architecture/performance/'},
            {text: '高可用', link: '/pages/architecture/high-availability/'},
        ]
    },
    {
        text: '规范', link: '/pages/specification/', items: [
            {text: '软件规范化设计', link: '/pages/specification/'},
            {text: 'Java 规范', link: '/pages/specification/java/'},
            {text: '数据库规范', link: '/pages/specification/database/'},
            {text: '前端规范', link: '/pages/specification/frontend/'},
            {text: '运维规范', link: '/pages/specification/ops/'},
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
            {text: '敏捷基线', link: '/pages/team/'},
            {text: '分布式团队理论', link: '/pages/team/distribution-system/'},
            {text: '敏捷团队角色', link: '/pages/team/roles/'},
            {text: '敏捷日历', link: '/pages/team/agile-calendar'},
        ]
    },
    {text: '关于', link: '/pages/about/'},
]
