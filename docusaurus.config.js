import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vela - Docs',
  tagline: "Documentation",
  url: 'https://docs-vela.botlhale.xyz', 
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Botlhale-AI', 
  projectName: 'docs-vela', 
  deploymentBranch: 'gh-pages', 
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/navigation.css'),
          ],
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    navbar: {
      title: 'Vela Coaching Portal',
      logo: {
        alt: 'Vela Logo',
        src: 'img/logo.png',
        srcDark: 'img/logo.png',
      },
      items: [
        // Main nav items removed - now in top navigation bar
        {
          type: 'html',
          position: 'right',
          value: '<a href="https://vela.botlhale.xyz/register" target="_blank" class="auth-button auth-button-signup">Create Account</a>',
        },
        {
          type: 'html',
          position: 'right',
          value: '<a href="https://vela.botlhale.xyz/login" target="_blank" class="auth-button auth-button-signin">Log In</a>',
        },
        {
          href: 'https://github.com/botlhale-ai',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    
    footer: {
      style: 'light',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Dashboard',
              to: '/docs/Dashboard',
            },
            {
              label: 'Calls',
              to: '/docs/Calls',
            },
            {
              label: 'Agents',
              to: '/docs/Agents',
            },
          ],
        },
        {
          title: 'Features',
          items: [
            {
              label: 'Smart Detector',
              to: '/docs/Smart Detector',
            },
            {
              label: 'Reports',
              to: '/docs/Reports',
            },
            {
              label: 'Settings',
              to: '/docs/Settings',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Release Notes',
              to: '/docs/release-notes',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/botlhale-ai',
            },
            {
              label: 'Contact Support',
              href: 'mailto:support@botlhale.ai',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Botlhale AI. All rights reserved.`,
    },
    
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    head: [
      {
        tagName: 'link',
        attributes: {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap',
        },
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
        },
      },
    ],
  },

  scripts: [
    {
      src: '/js/themeToggle.js',
      async: true,
    },
    {
      src: 'https://kit.fontawesome.com/3d32eadabe.js',
      crossorigin: 'anonymous',
    },
  ],
};

export default config;