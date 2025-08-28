import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Coaching Portal',
  tagline: "Documentation",
  url: 'https://docs-vela.botlhale.xyz', 
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Botlhale-AI', 
  projectName: 'docs-coaching-portal', 
  deploymentBranch: 'docs/update', 
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // Change from '/' to '/docs' to fix the routing
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          // Add sidebar configuration for role-based access
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            // Determine which sidebar to use based on the current page
            const currentDoc = args.docs?.find(doc => doc.id === args.item?.id);
            const isAgentPage = currentDoc?.id?.includes('Agent');
            
            // Set the appropriate sidebar
            if (isAgentPage) {
              args.item = { ...args.item, sidebar: 'agentSidebar' };
            } else {
              args.item = { ...args.item, sidebar: 'teamLeadSidebar' };
            }
            
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return sidebarItems;
          },
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
        // Only keep essential items - role-based navigation handled by TopNavigationBar
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
          title: 'Team Leads & QAs',
          items: [
            {
              label: 'Getting Started (Team Leads)',
              to: '/docs/GettingStartedTeamLeads',
            },
            {
              label: 'Dashboard',
              to: '/docs/Dashboard',
            },
            {
              label: 'Courses',
              to: '/docs/Courses',
            },
            {
              label: 'Awards',
              to: '/docs/Awards',
            },
            {
              label: 'Progress',
              to: '/docs/Progress',
            },
            {
              label: 'Preferences',
              to: '/docs/Preferences',
            },
          ],
        },
        {
          title: 'Agents',
          items: [
            {
              label: 'Getting Started (Agents)',
              to: '/docs/GettingStartedAgents',
            },
            {
              label: 'My Dashboard',
              to: '/docs/AgentDashboard',
            },
            {
              label: 'My Courses',
              to: '/docs/AgentCourses',
            },
            {
              label: 'My Awards',
              to: '/docs/AgentAwards',
            },
            {
              label: 'Interactions',
              to: '/docs/Interactions',
            },
            {
              label: 'Admin',
              to: '/docs/AgentAdmin',
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
              label: 'How to Get Started',
              href: 'https://youtu.be/xmDezghws3w',
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

    // Properly configured Algolia DocSearch
    algolia: {
      appId: 'SDFKBMBHOD',
      apiKey: 'cf13a1927236f97767c0dfe5913f3a15',
      indexName: 'Developer at Botlhale AI',
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: 'search', // Explicitly set search page path
    },
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