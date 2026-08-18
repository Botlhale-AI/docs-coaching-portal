---
title: Metrics
description: "Every figure shown on the coaching dashboards, what it measures, and what to look for."
sidebar_position: 2
type: reference
pagination_prev: null
pagination_next: null
---

The figures on the coaching dashboards, on both the team lead side and the agent portal. Each entry gives what the figure measures and, where it helps, what a reader should take from it.

Interpretation is included on purpose. Knowing that Auto Fails is a percentage is accurate and not much use on its own. Knowing that a rising one usually points at a single requirement is the part a team lead came for.

---

## Auto Fails

**Where:** Coaching Dashboard (team lead), Dashboard (agent portal)

The proportion of interactions that failed a question the organisation marks as critical.

On the team lead Dashboard it is shown for the team and for each agent. On the agent portal it is shown for the agent beside the same figure for their team.

**What to look for:** an auto-fail zeroes the whole interaction regardless of everything else, so a rising figure here outweighs a few points off an average. It usually indicates one specific requirement being missed rather than a broad decline, which makes it faster to fix by naming the requirement than by assigning training.

---

## Category Scores

**Where:** Coaching Dashboard (team lead), Dashboard (agent portal)

Scores broken down by the categories the organisation groups its scorecard questions into.

On the team lead Dashboard the panel scrolls horizontally where there are more categories than fit, and a category can be expanded to show the agents inside it. On the agent portal each category shows two figures, **Your Score** and **Your Team**.

**What to look for:** this is the panel to plan coaching from. An agent below the team in one category has a specific, nameable gap that a course can address. An agent below the team in every category is a different problem, and one a course does not solve.

---

## Your Score

**Where:** Dashboard (agent portal)

The agent's own score in a category, over the selected period.

---

## Your Team

**Where:** Dashboard (agent portal)

The same category's score across the agent's whole team, shown beside **Your Score** for comparison.

**What to look for:** the gap between the two is the useful figure, not either number alone. A score of 72 means little. Against a team on 85 it is a conversation, and against a team on 70 it is not.

---

## Average Agent Performance

**Where:** Dashboard (agent portal)

The trend of scores across the selected period.

**What to look for:** read the shape rather than any single point. One low interaction in a good week is normal variation. Three consecutive low points in the same category is a pattern worth acting on.

---

## Individual Agent Performance

**Where:** Dashboard (agent portal)

The agent's own figure plotted on its own, without the team comparison.

---

## Score

**Where:** Progress (team lead), Courses (agent portal)

An agent's result on a course quiz, as a percentage.

On the **Progress** table the figure is shown in red where it falls below the organisation's **Pass Percentage**.

**What to look for:** a completed course with a low score means the training ran but did not land. Check the material before assigning more of it.

---

## Initiation Score

**Where:** Progress (team lead), Courses (agent portal)

The result of the agent's first attempt at a course quiz, kept separately from their latest result.

**What to look for:** the distance between **Initiation Score** and **Score** is what the course actually taught. A large gap means the material worked on a second reading. Two identical figures mean the retake changed nothing, which usually points at the material rather than the agent.

---

## Final Score

**Where:** Courses (agent portal)

The agent's latest result on a course quiz, shown against the completed course.

---

## Status

**Where:** Progress (team lead)

Where an agent is with an assigned course. One of three values:

| Value | Meaning |
| :--- | :--- |
| **Not Started** | Assigned, not yet opened |
| **In Progress** | Opened, not yet finished |
| **Complete** | Finished, or the agent's retakes ran out |

**What to look for:** **Complete** does not mean passed. A course closes as complete when an agent uses their last retake, whatever they scored, so read **Complete** together with **Score**.

---

## Date Assigned

**Where:** Progress (team lead), Courses (agent portal)

The date the evaluation cycle assigned the course to that agent.

**What to look for:** this is the field that confirms a cycle ran. A course with no rows carrying a **Date Assigned** has not reached anyone yet.

---

## Due Date

**Where:** Progress (team lead), Courses (agent portal)

The date the course is due, worked out from the agent's **Date Assigned** plus the deadline set on the course.

Because it is calculated per agent, two agents assigned the same course on different cycles have different due dates. An agent with no deadline set on their course reads **No due date**.

**What to look for:** sorting on this column brings the overdue to the top, which is a shorter list to work from than the whole page.

---

## Date Awarded

**Where:** Awards (team lead), Awards (agent portal)

The date an award was presented to an agent by the evaluation cycle.

---

## Related

- [Glossary](./glossary.md): the terms these figures use
- [Course and Award Fields](./course-and-award-fields.md): the settings that produce them
- [Read the Coaching Dashboard](../team-leads/coaching-dashboard.md): where a team lead reads these
- [Monitor Your Performance](../agents/personal-performance.md): where an agent reads these

## Need Help?

**Contact Support:** support@botlhale.ai
