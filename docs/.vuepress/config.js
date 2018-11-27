module.exports = {
  title: 'generator-node-next',
  description: 'Cool Node.js kickstart with Backpack, Babel, CI, Eslint, Snyk and more',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    sidebar: [
      '/',
      {
        title: 'Guides & examples',
        collapsable: true,
        children: [
          '/guides/backpack',
          '/guides/docker'
        ]
      }
    ]
  },
  head: [
    ['link', { rel: 'shortcut icon', type: "image/png", href: `/icon.png` }]
  ],
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    }
  }
}
