// @ts-check

/**
 * The sidebar mirrors docs-vela's shape: emoji-labelled categories, each with a
 * generated-index landing page so a section header is somewhere to arrive
 * rather than a dead chevron, and autoCollapseCategories in the theme config.
 *
 * The one deliberate difference is the top-level split. docs-vela divides by
 * task, because one reader does every task. This site serves two audiences who
 * never overlap: a team lead runs coaching, an agent receives it. An agent
 * cannot create a course; a team lead has no My Awards page. So the first two
 * categories are audiences, and the shared material follows them.
 *
 * Entries use double quotes on purpose. scripts/lint-docs.mjs matches
 * `id: "..."` when it checks sidebar labels against page titles and against
 * section 4 of DOCUMENTATION_FRAMEWORK.md. Single quotes silently skip all
 * three checks, which is how the labels drifted before.
 *
 * Every category is `collapsed: true`. Docusaurus expands whichever one holds
 * the current page, and `autoCollapseCategories` in docusaurus.config.js closes
 * the others, so a reader sees their own section open and the rest as a short
 * list of headings rather than five expanded sections at once.
 *
 * Do not wrap a single page in its own category. See DOCUMENTATION_FRAMEWORK.md
 * section 4.
 */
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: "category",
      label: "🧑‍🏫 For Team Leads",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "For Team Leads",
        description:
          "Run coaching for your team. Set the cycle that drives everything, read where the gaps are, then turn them into courses and awards that reach agents automatically.",
        slug: "/team-leads",
      },
      items: [
        {
          type: "doc",
          id: "team-leads/getting-started",
          label: "🚀 Getting Started with Coaching",
        },
        {
          type: "doc",
          id: "team-leads/coaching-dashboard",
          label: "📊 Read the Coaching Dashboard",
        },
        {
          type: "doc",
          id: "team-leads/create-and-assign-courses",
          label: "📚 Create and Assign Courses",
        },
        {
          type: "doc",
          id: "team-leads/track-learning-progress",
          label: "📈 Track Learning Progress",
        },
        {
          type: "doc",
          id: "team-leads/recognise-good-work",
          label: "🏆 Recognise Good Work",
        },
        {
          type: "doc",
          id: "team-leads/coaching-preferences",
          label: "⚙️ Set Coaching Preferences",
        },
      ],
    },
    {
      type: "category",
      label: "🎧 For Agents",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "For Agents",
        description:
          "Your side of coaching. Read your own figures, review the calls and chats behind them, work through the courses you are assigned, and collect the awards you earn.",
        slug: "/agents",
      },
      items: [
        {
          type: "doc",
          id: "agents/getting-started",
          label: "🚀 Getting Started for Agents",
        },
        {
          type: "doc",
          id: "agents/personal-performance",
          label: "📊 Monitor Your Performance",
        },
        {
          type: "doc",
          id: "agents/your-interactions",
          label: "💬 Review Your Interactions",
        },
        {
          type: "doc",
          id: "agents/your-courses",
          label: "📚 Track Your Courses",
        },
        {
          type: "doc",
          id: "agents/your-awards",
          label: "🏆 View Your Awards",
        },
        {
          type: "doc",
          id: "agents/your-account",
          label: "👤 Manage Your Account",
        },
      ],
    },
    {
      type: "category",
      label: "💡 Understanding Coaching",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Understanding Coaching",
        description:
          "How coaching works beneath the surface: what the evaluation cycle actually does, how the settings depend on one another, and what to do with all of it.",
        slug: "/understanding-coaching",
      },
      items: [
        {
          type: "doc",
          id: "explanation/how-coaching-works",
          label: "🎯 How Coaching Works",
        },
        {
          type: "doc",
          id: "explanation/how-the-pieces-fit",
          label: "🧩 How the Pieces Fit Together",
        },
        {
          type: "doc",
          id: "explanation/best-practices",
          label: "⭐ Best Practices",
        },
      ],
    },
    {
      type: "category",
      label: "📖 Reference",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Reference",
        description:
          "Look up the details: definitions, the figures on the dashboards, and every field on the course and award forms.",
        slug: "/reference",
      },
      items: [
        {
          type: "doc",
          id: "reference/glossary",
          label: "🔤 Glossary",
        },
        {
          type: "doc",
          id: "reference/metrics",
          label: "📐 Metrics",
        },
        {
          type: "doc",
          id: "reference/course-and-award-fields",
          label: "📋 Course and Award Fields",
        },
      ],
    },
    {
      type: "category",
      label: "🆘 Support",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Support",
        description:
          "Get unstuck: work from a symptom to its cause, or find a short answer to a common question.",
        slug: "/support",
      },
      items: [
        {
          type: "doc",
          id: "support/troubleshooting-guide",
          label: "🩺 Troubleshooting",
        },
        {
          type: "doc",
          id: "support/faq",
          label: "💬 Frequently Asked Questions",
        },
      ],
    },
  ],
};

module.exports = sidebars;
