import { version } from '../../package.json'

// base info
export const name = 'Jun'
export const site = 'https://github.com/jun-89'
export const logo = '/satellite.svg'
export const keywords = '前端专栏、知识体系、前端算法、编程学习、vitepress、随笔、Vue、nodejs、coding、github'
export const description = '前端知识体系、Vue 生态。'

// social link
export const github = 'https://github.com/jun-89'

// docs version
export const docsVersion = version

/* PWA runtime caching urlPattern regular expressions */
/* eslint-disable prefer-regex-literals */
export const githubSourceContentRegex = new RegExp('^https://(((raw|user-images|camo).githubusercontent.com))/.*', 'i')
export const googleFontRegex = new RegExp('^https://fonts.googleapis.com/.*', 'i')
export const googleStaticFontRegex = new RegExp('^https://fonts.gstatic.com/.*', 'i')
export const jsdelivrCDNRegex = new RegExp('^https://cdn.jsdelivr.net/.*', 'i')
