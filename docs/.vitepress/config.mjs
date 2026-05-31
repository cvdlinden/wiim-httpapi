import { defineConfig } from 'vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'

export default defineConfig({
  title: "WiiM HTTP API Docs",
  description: "Exploring the HTTP API for WiiM products",

  ignoreDeadLinks: true,
  base: '/wiim-httpapi/',
  lastUpdated: true,

  head: [
    [
      'meta',
      { name: 'google-site-verification', content: 'yPm8E8x36ekuDpChm-70rwUF5w-_-XcmH72Lf_OuXQM' }
    ],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-Q2V26LJJ2D' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Q2V26LJJ2D');`
    ]
  ],

  sitemap: {
    hostname: 'https://cvdlinden.github.io/wiim-httpapi/'
  },

  vite: {
    plugins: [pagefindPlugin()],
  },

  themeConfig: {

    // search: {
    //   provider: 'local'
    // },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'API Reference', link: '/api-reference' }
    ],

    footer: {
      message: 'Released under the <a href="https://github.com/cvdlinden/wiim-httpapi/blob/main/LICENSE">GNU General Public License v3.0</a>.',
      copyright: 'Copyright © 2026-present, <a href="https://github.com/cvdlinden/wiim-httpapi">WiiM HTTP API</a>'
    },

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/' }
        ]
      },
      {
        text: 'API Reference',
        items: [
          { text: 'Introduction', link: '/api-reference' },
          { text: 'Generic', link: '/tags/Generic' },
          { text: 'Device information', link: '/tags/Device information' },
          { text: 'Track metadata', link: '/tags/Track metadata' },
          { text: 'Playback control', link: '/tags/Playback control' },
          { text: 'Multiroom', link: '/tags/Multiroom' },
          { text: 'Network', link: '/tags/Network' },
          { text: 'Equalizer', link: '/tags/Equalizer' },
          { text: 'Device control', link: '/tags/Device control' },
          { text: 'Alarm clock', link: '/tags/Alarm clock' },
          { text: 'Source input switch', link: '/tags/Source input switch' },
          { text: 'Presets', link: '/tags/Presets' },
          { text: 'Audio output control', link: '/tags/Audio output control' },
          { text: 'Bluetooth', link: '/tags/Bluetooth' },
          { text: 'Room correction', link: '/tags/Room correction' },
          { text: 'Alexa', link: '/tags/Alexa' },
          { text: 'Other', link: '/tags/Other' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cvdlinden/wiim-httpapi' }
    ]
  },

  /** Give each dynamic page its own <title> */
  transformPageData(pageData) {
    // params returned from [*].paths.js|ts are available here
    const pageTitle = pageData.params?.pageTitle;

    if (pageTitle) {
      pageData.title = pageTitle;
      pageData.frontmatter ??= {};
      pageData.frontmatter.title = pageTitle;
    }
  },
})
