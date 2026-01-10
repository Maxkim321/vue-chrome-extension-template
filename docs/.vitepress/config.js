import { defineConfig } from 'vitepress'

export default defineConfig({
  // 如果你的 GitHub Pages 部署在 https://<USERNAME>.github.io/<REPO>/ 上，
  // 请将 base 设置为 '/<REPO>/'。例如 '/vue-chrome-extension-template/'
  base: '/vue-chrome-extension-template/',
  title: 'vue-chrome-extension-template',
  description: 'use Vue and Javascript to build a chrome extension',
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '中文文档', link: '/zh-CN/起步.md' },
      { text: 'English Documentation', link: '/en-US/gettingStart.md' },
    ],
    sidebar: [
      {
        text: '文档',
        items: [
          { text: '起步', link: '/zh-CN/起步.md' },
          { text: '模板使用', link: '/zh-CN/模板使用.md' },
          { text: '提示词', link: '/zh-CN/提示词.md' },
          { text: '侧边栏开发注意事项', link: '/zh-CN/侧边栏开发注意事项.md' },
        ],
      },
      {
        text: 'English Documentation',
        items: [{ text: 'Getting Started', link: '/en-US/gettingStart.md' }],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Simonmie/vue-chrome-extension-template' },
    ],
  },
})
