import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Checkly challenge",
  description: "Frontend Coding Challenge Jun '24",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/roadmap' }
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Roadmap', link: '/roadmap' },
          { text: 'Features', link: '/features' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mpossas/checkly-challenge' }
    ]
  }
})
