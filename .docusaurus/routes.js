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
    path: '/',
    component: ComponentCreator('/', '409'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '491'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '382'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '652'),
            routes: [
              {
                path: '/Awards',
                component: ComponentCreator('/Awards', '69a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Courses',
                component: ComponentCreator('/Courses', '48c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Dashboard',
                component: ComponentCreator('/Dashboard', 'c03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Options',
                component: ComponentCreator('/Options', '723'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Progress',
                component: ComponentCreator('/Progress', 'ff3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/release-notes',
                component: ComponentCreator('/release-notes', '022'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
