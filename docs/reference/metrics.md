---
title: Metrics
description: "Every figure shown on the coaching dashboards, what it measures, and what to look for."
sidebar_position: 2
type: reference
pagination_prev: null
pagination_next: null
---

Every figure coaching shows, on the team lead side and in the Agent Portal, with what it measures and what a reader should take from it.

Interpretation is included on purpose. Knowing that Auto Fails is a percentage is accurate and not much use on its own. Knowing that a rising one points at a single requirement is the part a team lead came for.

---

## Dashboard

Shown on **Coaching → Dashboard** for a team lead, and on **Dashboard** in the portal for an agent.

| Metric | Where | What it measures |
| :--- | :--- | :--- |
| **Auto Fails** | Both | The proportion of interactions that failed a question the organisation marks as critical. A team lead sees it for the team and per agent. An agent sees their own beside their team's |
| **Category Scores** | Both | Scores broken down by the categories the organisation groups its scorecard questions into |
| **Your Score** | Agent | The agent's own score in a category, over the selected period |
| **Your Team** | Agent | The same category across the agent's whole team, shown beside **Your Score** |
| **Average Agent Performance** | Agent | The trend of scores across the selected period |
| **Individual Agent Performance** | Agent | The agent's own figure plotted alone, without the team comparison |

The main Vela platform writes Auto Fails as **Auto-Fail**. It is the same measure, spelled as each screen spells it.

**What to look for:** an auto-fail takes the whole interaction to zero, so a rising figure here outweighs a few points off an average, and it points at one requirement being missed rather than a broad decline. Category Scores is the panel to plan coaching from: an agent below the team in one category has a nameable gap a course can address, while an agent below in every category is a different problem. On the agent side the gap between **Your Score** and **Your Team** carries the meaning, not either figure alone. A score of 72 against a team on 85 is a conversation. Against a team on 70 it is not.

---

## Course Progress

Shown on **Coaching → Progress** for a team lead, and on **Courses** in the portal for an agent.

| Metric | Where | What it measures |
| :--- | :--- | :--- |
| **Score** | Both | The agent's result on a course quiz, as a percentage. Shown in red on **Progress** below the organisation's **Pass Percentage** |
| **Initiation Score** | Both | The agent's score at the moment the course was assigned, kept separately from their quiz result |
| **Final Score** | Agent | The agent's latest result, shown against the completed course |
| **Status** | Team lead | **Not Started**, **In Progress**, or **Complete** |
| **Date Assigned** | Both | The date the evaluation cycle assigned the course to that agent |
| **Due Date** | Both | Worked out from **Date Assigned** plus the deadline set on the course. An agent with no deadline reads **No due date** |

Because **Due Date** is calculated per agent, two agents assigned the same course on different cycles carry different due dates.

**What to look for:** **Complete** means finished, not passed. A course closes as complete when an agent uses their last retake, or selects **Complete Course** before that, whatever they scored, so read it together with **Score**. The distance between **Initiation Score** and **Score** is what the course taught: a wide gap means the material worked, and two close figures mean it did not move the needle, which points at the material rather than the agent. **Date Assigned** is the field that confirms a cycle ran, so a course with no rows carrying one has reached nobody yet. Sorting on **Due Date** brings the overdue to the top, which is a shorter list to work from than the whole page.

---

## Awards

Shown on **Coaching → Awards** for a team lead, and on **Awards** in the portal for an agent.

| Metric | Where | What it measures |
| :--- | :--- | :--- |
| **Date Awarded** | Both | The date the evaluation cycle presented an award to an agent |

**What to look for:** awards are intended to be presented by the cycle, so an empty list is expected to be a date range that predates the last run more often than a fault.

{/* UNVERIFIED: no code path was found that presents awards automatically; this assumes the same mechanism as course assignment, which has not been separately confirmed for awards. */}

---

## Related

- [Glossary](./glossary.md): the terms these figures use
- [Course and Award Fields](./course-and-award-fields.md): the settings that produce them
- [Read the Coaching Dashboard](../team-leads/coaching-dashboard.md): where a team lead reads these
- [Monitor Your Performance](../agents/personal-performance.md): where an agent reads these

## Need Help?

**Contact Support:** support@botlhale.ai
