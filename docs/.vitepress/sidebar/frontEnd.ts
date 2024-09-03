export default function sidebarFrontEnd() {
  return [
    {
      items: [
        { text: '导读', link: '/frontEnd/guide/' },
      ],
    },
    {
      text: 'vue',
      collapsed: false,
      items: [
        { text: '介绍', link: '/frontEnd/vue/' }
      ],
    },
    {
      text: 'typescript',
      collapsed: false,
      items: [
        { text: '介绍', link: '/frontEnd/typescript' }
      ],
    }
  ]
}
