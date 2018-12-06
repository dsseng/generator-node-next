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
          '/guides/docker',
          '/guides/travis',
          '/guides/eslint',
          '/guides/tslint'
        ]
      }
    ],
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'sh7dm/generator-node-next',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',

    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'docs/vuepress',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!'
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
