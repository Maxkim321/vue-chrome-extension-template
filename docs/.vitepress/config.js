import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'vue-chrome-extension-template',
  description: 'use Vue and Javascript to build a chrome extension',
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '中文文档', link: '/zh-CN/起步' },
          { text: 'English', link: '/en-US/gettingStart' },
          { text: 'Examples', link: '/markdown-examples' },
        ],
        sidebar: [
          {
            text: '文档',
            items: [
              { text: '起步', link: '/zh-CN/起步' },
              { text: '模板使用', link: '/zh-CN/模板使用' },
              { text: '提示词', link: '/zh-CN/提示词' },
              { text: '侧边栏开发注意事项', link: '/zh-CN/侧边栏开发注意事项' },
            ],
          },
          {
            text: '示例',
            items: [
              { text: 'Markdown 示例', link: '/markdown-examples' },
              { text: 'Runtime API 示例', link: '/api-examples' },
            ],
          },
        ],
        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
      },
    },
    '/en-US/': {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Docs', link: '/en-US/gettingStart' },
          { text: 'Examples', link: '/markdown-examples' },
        ],
        sidebar: [
          {
            text: 'Docs',
            items: [{ text: 'Getting Started', link: '/en-US/gettingStart' }],
          },
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' },
            ],
          },
        ],
        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
      },
    },
  },
})
