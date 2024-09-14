import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import { generateSitemap as sitemap } from 'sitemap-ts'
import { description, keywords, name, site } from './meta'
import { genFeed } from './plugins/genFeed'
import { pwa } from './plugins/pwa'
import sidebar from './sidebar'
import socialLinks from './link'
import algolia from './algolia'

export default withPwa(defineConfig({
  pwa,
  base: '/codebook/',
  outDir: '../../dist',
  title: name,
  description,
  appearance: 'dark',
  lastUpdated: true,
  useWebFonts: false,
  markdown: {
    lineNumbers: true,
  },
  locales: {
    root: { label: '简体中文', lang: 'zh-CN' },
  },
  themeConfig: {
    logo: './satellite.svg',
    outline: 'deep',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    returnToTopLabel: '返回顶部',
    outlineTitle: '导航栏',
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '归档',
    lastUpdatedText: '最后一次更新于',
    footer: {
      message: `FrontEnd`,
      copyright: `Copyright © 2023-${new Date().getFullYear()} <a target="_blank" href="https://beian.miit.gov.cn">豫ICP备2023021681号</a>`,
    },
    nav: [
      {
        text: 'FrontEnd',
        items: [
          { text: 'vue', link: '/frontEnd/vue/' },
          { text: 'ts', link: '/frontEnd/typescript/' }
        ],
      },
      {
        text: 'nodejs',
        items: [
          { text: 'nodejs基础', link: '/nodejs/nodejsBasic/' },
          { text: 'nodejs实战', link: '/nodejs/nodejsPractice/' },
          { text: 'nodejs踩坑', link: '/nodejs/nodejsPit/' }
        ],
      },
      {
        text: 'go',
        items: [
          { text: 'go基础', link: '/go/goBasic/' },
          { text: 'go实战', link: '/go/goPractice/' },
          { text: 'go踩坑', link: '/go/goPit/' }
        ],
      },
    ],
    // algolia搜索
    search: {
      provider: 'algolia',
      options: algolia,
    },
    sidebar,
    socialLinks,
  },
  head: [
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    ['meta', { name: 'keywords', content: keywords }],
    ['meta', { name: 'author', content: 'Jun' }],
    ['meta', { property: 'og:type', content: 'article' }],
    ['meta', { name: 'application-name', content: name }],
    ['meta', { name: 'apple-mobile-web-app-title', content: name }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],

    ['link', { rel: 'shortcut icon', href: '/satellite.svg' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/satellite.svg' }],
    ['link', { rel: 'mask-icon', href: '/satellite.svg', color: '#06f' }],
    ['meta', { name: 'theme-color', content: '#06f' }],

    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/satellite.svg' }],

    // webfont
    ['link', { rel: 'dns-prefetch', href: '/satellite.svg' }],
    ['link', { rel: 'dns-prefetch', href: '/satellite.svg' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: '/satellite.svg' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: '/satellite.svg' }],
    // og
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:url', content: site }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    // analytics
    ['script', { 'async': '', 'defer': '', 'data-website-id': `${process.env.UMAMI_WEBSITE_ID || ''}`, 'src': `${process.env.UMAMI_ENDPOINT || ''}` }],
  ],
  async buildEnd(siteConfig) {
    await sitemap({ hostname: 'https://ljingjun.cn/' })
    await genFeed(siteConfig)
  },
}))
