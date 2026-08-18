// @ts-check

/**
 * One sidebar, two categories, split by audience.
 *
 * A reader of this site is either a team lead running coaching or an agent
 * receiving it, never both. The split is by audience rather than by feature,
 * and pages sit directly inside their section.
 *
 * Do not wrap a single page in its own category. See DOCUMENTATION_FRAMEWORK.md
 * section 4: a category holding one document adds a chevron and a click that
 * lead nowhere, and makes a six-page section look like six sections.
 */
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'For Team Leads',
      collapsible: true,
      collapsed: false,
      items: [
        { type: 'doc', id: 'GettingStartedTeamLeads', label: 'Getting Started' },
        { type: 'doc', id: 'Dashboard', label: 'Dashboard' },
        { type: 'doc', id: 'Courses', label: 'Courses' },
        { type: 'doc', id: 'Awards', label: 'Awards' },
        { type: 'doc', id: 'Progress', label: 'Progress' },
        { type: 'doc', id: 'Preferences', label: 'Preferences' },
      ],
    },
    {
      type: 'category',
      label: 'For Agents',
      collapsible: true,
      collapsed: false,
      items: [
        { type: 'doc', id: 'GettingStartedAgents', label: 'Getting Started' },
        { type: 'doc', id: 'AgentDashboard', label: 'My Dashboard' },
        { type: 'doc', id: 'AgentCourses', label: 'My Courses' },
        { type: 'doc', id: 'AgentAwards', label: 'My Awards' },
        { type: 'doc', id: 'Interactions', label: 'Interactions' },
        { type: 'doc', id: 'AgentAdmin', label: 'Admin' },
      ],
    },
    {
      type: 'category',
      label: 'Reference and Help',
      collapsible: true,
      collapsed: false,
      items: [
        { type: 'doc', id: 'Glossary', label: 'Glossary' },
        { type: 'doc', id: 'BestPractices', label: 'Best Practices' },
        { type: 'doc', id: 'Troubleshooting', label: 'Troubleshooting' },
        { type: 'doc', id: 'FAQ', label: 'FAQ' },
      ],
    },
  ],
};

module.exports = sidebars;
