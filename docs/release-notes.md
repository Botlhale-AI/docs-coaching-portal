---
title: Release Notes
description: "What has changed in each release of the Coaching Portal, newest first."
sidebar_position: 1
type: reference
pagination_prev: null
pagination_next: null
---

What has changed in each release of the Coaching Portal, newest first.

The Coaching Portal is an add-on to Vela. Changes to the wider platform, such as Smart Detector, reporting, and data upload, are recorded in the [Vela release notes](https://docs-vela.botlhale.ai/docs/release-notes) rather than here.

---

## Current Release

### Coaching for Team Leads

The **Coaching** section in the main Vela sidebar, available where coaching is enabled for the organisation.

- **Coaching Dashboard.** Auto-fail rates and category scores for the team and for each agent, over a date range you choose. See [Read the Coaching Dashboard](./team-leads/coaching-dashboard.md).
- **Courses.** Build a course from a PDF or an external link, add a quiz, and set the **Training Initiation Score Range** that decides who receives it. See [Create and Assign Courses](./team-leads/create-and-assign-courses.md).
- **Quiz retakes.** Each course sets how many attempts an agent gets, between 1 and 5.
- **Progress.** Every agent and course pairing, with status, dates, and score, narrowed by team, department, status, or a score range, and by a separate date range control. See [Track Learning Progress](./team-leads/track-learning-progress.md).
- **Awards.** Define an award with a score range and a message, for the evaluation cycle to present with a certificate. See [Recognise Good Work](./team-leads/recognise-good-work.md).

{/* UNVERIFIED: the Awards bullet above assumes the evaluation cycle presents awards automatically, the same way it assigns courses. No code path that presents either was found in vela or vela-data; the Preferences page's own copy groups "awards and training courses" under one Evaluation Cycle description, which is why they're treated the same here. */}
- **Preferences.** The evaluation cycle, pass percentage, evaluation scope, and agent view permissions, set once for the organisation. See [Set Coaching Preferences](./team-leads/coaching-preferences.md).

### The Coaching Portal for Agents

A separate portal agents sign in to, covering their own performance and training.

- **Dashboard.** Personal auto-fail and category scores, each shown against the team's, with performance charts over the period. See [Monitor Your Performance](./agents/personal-performance.md).
- **Interactions.** Calls and chats with transcripts, audio, and the scorecard behind each score. What is visible depends on the organisation's **Agent View Permissions**. See [Review Your Interactions](./agents/your-interactions.md).
- **Courses.** Assigned, in progress, and completed courses, with material to download and quizzes to take. See [Track Your Courses](./agents/your-courses.md).
- **Awards.** Awards received, with certificates to download. See [View Your Awards](./agents/your-awards.md).
- **Notifications and settings.** Notifications for courses, awards, and comments, account details, and password changes. See [Manage Your Account](./agents/your-account.md).

### Scoring of written quiz answers

Vela scores quiz questions answered as **Short Paragraph** or **Long Paragraph** against a team lead's typed answer, judging by meaning rather than requiring exact wording. Each answer carries a short reason recorded against it, for the team lead's own review.

{/* UNVERIFIED: the reason is stored (submit-quiz/route.js) but was not found rendered anywhere in this checkout, including the agent-facing result screen and the team-lead course views. Was reader-facing display planned but not shipped, or is there a display path not found here? */}

---

## Related

- [How Coaching Works](./explanation/how-coaching-works.md): what the evaluation cycle does
- [Getting Started with Coaching](./team-leads/getting-started.md): first-time setup for a team lead
- [Getting Started for Agents](./agents/getting-started.md): first-time sign-in for an agent

## Need Help?

**Contact Support:** support@botlhale.ai
