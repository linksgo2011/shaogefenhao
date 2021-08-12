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
            {text: '代码评审', link: '/pages/testing/code-review/'},
            {text: '代码扫描', link: '/pages/testing/code-scan/'},
            {text: '单元测试', link: '/pages/testing/unit-testing/'},
        ]
    },
    {
        text: '团队', link: '/pages/team/0-agile-overview', items: [
            {text:'敏捷方法基线', link: '/pages/team/0-agile-overview/'},
            {text:'敏捷中的测试策略', link: '/pages/team/QA-in-agile/'},
            {text:'敏捷开发的基本流程', link: '/pages/team/agile-basic-work-flow/'},
            {text:'敏捷迭代日历', link: '/pages/team/agile-calendar/'},
            {text:'敏捷实践评估模型', link: '/pages/team/agile-diagnose-model/'},
            {text:'访谈团队，了解敏捷现状', link: '/pages/team/agile-interview/'},
            {text:'提高工时估计准确性，减少开发成本', link: '/pages/team/better-estimation/'},
            {text:'如何做好敏捷 Bug 大扫除（Bug Bash？', link: '/pages/team/bugbush/'},
            {text:'敏捷团队的代码评审和分支策略', link: '/pages/team/code-review/'},
            {text:'项目交接', link: '/pages/team/handover/'},
            {text:'面试官指南', link: '/pages/team/interviewer-guide/'},
// {text:'那些我在 BeeArt 学到的', link: '/pages/team/leaned-from-bees/'},
            {text:'软件项目规范化指南', link: '/pages/team/normalize/'},
            {text:'新成员培训', link: '/pages/team/on-boarding/'},
            {text:'团队琐事：release、hotfix 和 oncall', link: '/pages/team/release-hotfix-oncall/'},
            {text:'版本规则、代码冻结和上线事项', link: '/pages/team/release/'},
            {text:'怎样做好需求评审?', link: '/pages/team/requirement-review/'},
            {text:'用归零的心态，做好团队回顾', link: '/pages/team/retro/'},
            {text:'团队安全规范', link: '/pages/team/security/'},
            {text:'如何做好敏捷技术预研（Spike）？', link: '/pages/team/spike/'},
            {text:'站会', link: '/pages/team/standup/'},
            {text:'敏捷团队的关键角色', link: '/pages/team/team-role/'},
            {text:'如何进行技术例会？', link: '/pages/team/tech-huddle/'},
            {text:'为什么使用敏捷？', link: '/pages/team/why-need-agile/'},
        ]
    },
    {text: '关于', link: '/pages/about/'},
]
