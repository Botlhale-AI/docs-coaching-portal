import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '4fd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '71e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'e48'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '090'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '86c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'fde'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '3aa'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'be2'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '8a6'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '8f8'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '092'),
            routes: [
              {
                path: '/docs/Agents',
                component: ComponentCreator('/docs/Agents', '4df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Calls',
                component: ComponentCreator('/docs/Calls', 'a01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Chats',
                component: ComponentCreator('/docs/Chats', '4bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/courses',
                component: ComponentCreator('/docs/courses', '705'),
                exact: true
              },
              {
                path: '/docs/Dashboard',
                component: ComponentCreator('/docs/Dashboard', '379'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Data Upload',
                component: ComponentCreator('/docs/Data Upload', '61b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Notifications',
                component: ComponentCreator('/docs/Notifications', 'b23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/release-notes',
                component: ComponentCreator('/docs/release-notes', '7c0'),
                exact: true
              },
              {
                path: '/docs/Reports',
                component: ComponentCreator('/docs/Reports', 'd6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Settings',
                component: ComponentCreator('/docs/Settings', '16f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Smart Detector',
                component: ComponentCreator('/docs/Smart Detector', '57a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '409'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
