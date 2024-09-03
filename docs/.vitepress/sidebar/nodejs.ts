export default function sidebarNodejs() {
  return [
    {
      items: [
        { text: '导读', link: '/nodejs/guide/' },
      ],
    },
    {
      text: 'nodejs基础',
      collapsed: false,
      items: [
        { text: '介绍', link: '/nodejs/nodejsBasic/' }
      ],
    },
    {
      text: 'nodejs实战',
      collapsed: false,
      items: [
        { text: '介绍', link: '/nodejs/nodejsPractice/' }
      ],
    },
    {
      text: 'nodejs踩坑',
      collapsed: false,
      items: [
        { text: '介绍', link: '/nodejs/nodejsPit/' }
      ],
    },
  ]
}
