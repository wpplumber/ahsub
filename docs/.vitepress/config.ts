export default {
  title: 'AHSUB',
  description: 'Browser Extension Calculator',
  themeConfig: {
    logo: 'logox128.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/articles/' },
      {
        text: 'Services',
        items: [
          { text: 'Pricing', link: '/pricing' },
          { text: 'Team', link: '/pricing' },
          { text: 'Support', link: '/pricing' },
        ],
      },
      { text: 'External', link: 'https://google.com' },
      { text: 'External', link: 'https://google.com' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
};
