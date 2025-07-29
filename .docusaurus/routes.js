import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    component: ComponentCreator('/docs', '798'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '27f'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'b3d'),
            routes: [
              {
                path: '/docs/AgentAdmin',
                component: ComponentCreator('/docs/AgentAdmin', '9e1'),
                exact: true,
                sidebar: "agentSidebar"
              },
              {
                path: '/docs/AgentAwards',
                component: ComponentCreator('/docs/AgentAwards', '193'),
                exact: true,
                sidebar: "agentSidebar"
              },
              {
                path: '/docs/AgentCourses',
                component: ComponentCreator('/docs/AgentCourses', '5f1'),
                exact: true,
                sidebar: "agentSidebar"
              },
              {
                path: '/docs/AgentDashboard',
                component: ComponentCreator('/docs/AgentDashboard', 'a8d'),
                exact: true,
                sidebar: "agentSidebar"
              },
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
                path: '/docs/Interactions',
                component: ComponentCreator('/docs/Interactions', '4be'),
                exact: true,
                sidebar: "agentSidebar"
              },
              {
                path: '/docs/Preferences',
                component: ComponentCreator('/docs/Preferences', 'def'),
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
