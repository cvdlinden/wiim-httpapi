import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "WiiM HTTP API Docs",
  description: "Exploring the HTTP API for WiiM products",

  ignoreDeadLinks: true,

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API Reference', link: '/api-reference' }
    ],
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
          { text: 'Track Metadata', link: '/tags/Track Metadata' },
          { text: 'Playback control', link: '/tags/Playback control' },
          { text: 'Network', link: '/tags/Network' },
          { text: 'Equalizer', link: '/tags/Equalizer' },
          { text: 'Device control', link: '/tags/Device control' },
          { text: 'Alarm clock', link: '/tags/Alarm clock' },
          { text: 'Source Input Switch', link: '/tags/Source Input Switch' },
          { text: 'Presets', link: '/tags/Presets' },
          { text: 'Audio Output Control', link: '/tags/Audio Output Control' },
          { text: 'Bluetooth', link: '/tags/Bluetooth' },
          { text: 'Other', link: '/tags/Other' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cvdlinden/wiim-httpapi' }
    ]
  }
})
