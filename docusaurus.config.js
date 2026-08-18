import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Coaching Portal',
  tagline: "Documentation",
  url: 'https://docs-coaching.botlhale.xyz', 
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],
  favicon: 'img/favicon.ico',
  organizationName: 'Botlhale-AI', 
  projectName: 'docs-coaching-portal', 
  deploymentBranch: 'gh-pages', 
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
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
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

  plugins: [
    [
      // Every docs URL changed when the flat PascalCase pages moved into
      // audience folders. These keep the old links working.
      require.resolve('@docusaurus/plugin-client-redirects'),
      {
        redirects: [
          { from: '/docs/GettingStartedTeamLeads', to: '/docs/team-leads/getting-started' },
          { from: '/docs/Dashboard', to: '/docs/team-leads/coaching-dashboard' },
          { from: '/docs/Courses', to: '/docs/team-leads/create-and-assign-courses' },
          { from: '/docs/Progress', to: '/docs/team-leads/track-learning-progress' },
          { from: '/docs/Awards', to: '/docs/team-leads/recognise-good-work' },
          { from: '/docs/Preferences', to: '/docs/team-leads/coaching-preferences' },
          { from: '/docs/GettingStartedAgents', to: '/docs/agents/getting-started' },
          { from: '/docs/AgentDashboard', to: '/docs/agents/personal-performance' },
          { from: '/docs/Interactions', to: '/docs/agents/your-interactions' },
          { from: '/docs/AgentCourses', to: '/docs/agents/your-courses' },
          { from: '/docs/AgentAwards', to: '/docs/agents/your-awards' },
          { from: '/docs/AgentAdmin', to: '/docs/agents/your-account' },
          { from: '/docs/Glossary', to: '/docs/reference/glossary' },
          { from: '/docs/BestPractices', to: '/docs/explanation/best-practices' },
          { from: '/docs/Troubleshooting', to: '/docs/support/troubleshooting-guide' },
          { from: '/docs/FAQ', to: '/docs/support/faq' },
        ],
      },
    ],
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchBarPosition: 'right',
        docsRouteBasePath: ['docs'],
        ignoreFiles: [],
        indexPages: true,
        docsDir: 'docs',
        indexDocs: true,
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
        // Navigation lives in the sidebar. The role-based top bar was removed.
        {
          type: 'html',
          position: 'right',
          value: '<a href="https://vela.botlhale.ai/login" target="_blank" class="auth-button auth-button-signin">Log In</a>',
        },
        {
          to: '/docs/release-notes',
          label: 'Release Notes',
          position: 'right',
        },
        {
          type: 'search',
          position: 'right',
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
              label: 'Getting Started with Coaching',
              to: '/docs/team-leads/getting-started',
            },
            {
              label: 'Read the Coaching Dashboard',
              to: '/docs/team-leads/coaching-dashboard',
            },
            {
              label: 'Create and Assign Courses',
              to: '/docs/team-leads/create-and-assign-courses',
            },
            {
              label: 'Recognise Good Work',
              to: '/docs/team-leads/recognise-good-work',
            },
            {
              label: 'Track Learning Progress',
              to: '/docs/team-leads/track-learning-progress',
            },
            {
              label: 'Set Coaching Preferences',
              to: '/docs/team-leads/coaching-preferences',
            },
          ],
        },
        {
          title: 'Agents',
          items: [
            {
              label: 'Getting Started for Agents',
              to: '/docs/agents/getting-started',
            },
            {
              label: 'Monitor Your Performance',
              to: '/docs/agents/personal-performance',
            },
            {
              label: 'Track Your Courses',
              to: '/docs/agents/your-courses',
            },
            {
              label: 'View Your Awards',
              to: '/docs/agents/your-awards',
            },
            {
              label: 'Review Your Interactions',
              to: '/docs/agents/your-interactions',
            },
            {
              label: 'Manage Your Account',
              to: '/docs/agents/your-account',
            },
          ],
        },
                 {
           title: 'Resources',
           items: [
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
    
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: true,
      },
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