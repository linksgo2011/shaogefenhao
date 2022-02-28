const nav = require('./config/nav.js');
const base = require('../../base.js');

module.exports = {
    title: "少个分号",
    description: '少个分号的知识库',
    base,
    head: [
        ['link', {rel: 'icon', href: '/img/favicon.ico'}],
        ['meta', {name: 'keywords', content: '少个分号,高认知软件工程,DDD,领域驱动设计,敏捷,研发自测,敏捷团队'}],
        ['meta', {name: 'theme-color', content: '#11a8cd'}],
    ],
    markdown: {
        lineNumbers: true
    },
    theme: require.resolve('../../theme-vdoing'),
    themeConfig: {
        nav,
        sidebarDepth: 2,
        logo: null,
        repo: 'linksgo2011/shaogefenhao',
        searchMaxSuggestions: 10,
        lastUpdated: '上次更新',
        sidebar: {
            mode: 'structuring',
            collapsable: false
        },
        updateBar: {
            showToArticle: false,
        },
        categoryText: '目录',
        category: true,
        tag: false,
        archive: true,
        author: {
            name: '少个分号', // 必需
            href: 'http://shaogefenhao.com/' // 可选的
        },
        social: {
            icons: [
                {
                    iconClass: 'icon-youjian',
                    title: '发邮件',
                    link: 'mailto:120377843@qq.com'
                },
                {
                    iconClass: 'icon-github',
                    title: 'GitHub',
                    link: 'https://github.com/linksgo2011'
                },
            ]
        },
        footer: {
            createYear: 2016,
            copyrightInfo: '少个分号 | MIT License',
        },
    },
    plugins: [
        ['thirdparty-search', {
            thirdparty: [
                {
                    title: '在百度中搜索',
                    frontUrl: 'https://www.baidu.com/s?wd='
                }
            ]
        }],

        ['one-click-copy', {
            copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
            copyMessage: '复制成功',
            duration: 1000,
            showInMobile: false
        }],
        ['demo-block', {
            settings: {
                jsfiddle: false,
                codepen: true,
                horizontal: false
            }
        }],
        [
            'vuepress-plugin-zooming',
            {
                selector: '.theme-vdoing-content img:not(.no-zoom)',
                options: {
                    bgColor: 'rgba(0,0,0,0.6)'
                },
            },
        ],
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    const dayjs = require('dayjs')
                    return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
                },
            }
        ], [
            '@maginapp/katex', {
                delimiters: 'dollars'
            }
        ]
    ],
}
