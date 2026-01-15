import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
const vitePressOptions = {
  title: "NetherScript",
  description: "MCFunction Compiler",
  base: "/netherscript-docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/guide/about' },
      /*{
        text: 'References',
        items: [
          { text: 'v0.1-mc1.21.11', link: '/reference/v0.1-mc1.21.11' }
        ]
      }*/
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MapVerse-net/netherscript' },
      { icon: 'discord', link: 'https://discord.gg/xFgTJtebgp'}
    ],

    search: {
      provider: 'local'
    }
  },
  markdown: {
    container: {
      tipLabel: 'Tip',
      warningLabel: 'Warning',
      dangerLabel: 'Danger',
      infoLabel: 'Info',
      detailsLabel: 'Details'
    }
  }
}

// https://vitepress-sidebar.cdget.com/guide/options
const vitePressSidebarOptions = {
  // VitePress Sidebar's options here...
  documentRootPath: '/docs',
  collapsed: true,
  capitalizeFirst: true,
  useTitleFromFileHeading: true
}

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions))