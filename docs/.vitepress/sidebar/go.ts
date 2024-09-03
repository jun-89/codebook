export default function sidebarGo() {
  return [
    {
      items: [
        { text: '导读', link: '/go/guide/' },
      ],
    },
    {
      text: 'go基础',
      collapsed: false,
      items: [
        { text: '介绍', link: '/go/goBasic/' }
      ],
    },
    {
      text: 'go实战',
      collapsed: false,
      items: [
        { text: '介绍', link: '/go/goPractice/' }
      ],
    },
    {
      text: 'go踩坑',
      collapsed: false,
      items: [
        { text: '介绍', link: '/go/goPit/' }
      ],
    },
  ]
}
