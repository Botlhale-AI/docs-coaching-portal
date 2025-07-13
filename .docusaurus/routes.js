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
    path: '/search',
    component: ComponentCreator('/search', '075'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '64c'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'a35'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '837'),
            routes: [
              {
                path: '/docs/Awards',
                component: ComponentCreator('/docs/Awards', '6c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Courses',
                component: ComponentCreator('/docs/Courses', 'c40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Dashboard',
                component: ComponentCreator('/docs/Dashboard', '379'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Options',
                component: ComponentCreator('/docs/Options', '545'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Progress',
                component: ComponentCreator('/docs/Progress', 'c67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/release-notes',
                component: ComponentCreator('/docs/release-notes', '7c0'),
                exact: true
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
