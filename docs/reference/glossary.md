---
title: Glossary
description: "Definitions of the terms used in the Coaching Portal and in this documentation."
sidebar_position: 1
type: reference
pagination_prev: null
pagination_next: null
---

Definitions of the terms used in the Coaching Portal and in this documentation. Terms that belong to the main Vela platform rather than to coaching are defined in the [Vela Glossary](https://docs-vela.botlhale.ai/docs/reference/glossary).

---

## Access Level

How much of the organisation you can see and act on. Set on your user record in the main Vela platform, not in coaching, and it decides which agents appear on the Coaching Dashboard and how far a course or award can reach.

| Level | Covers |
| :--- | :--- |
| **Organisational** | The whole organisation |
| **Departmental** | Your department |
| **Team** | Your team |

Access level and role are two separate things, and coaching needs both in one place. Changing **Coaching → Preferences** requires organisational access **and** the admin role. With one but not the other the form opens read-only.

For the platform-wide detail, see [Access Level](https://docs-vela.botlhale.ai/docs/reference/glossary#access-level) in the Vela Glossary.

## Agent

A person whose interactions Vela analyses. An agent needs no login to be scored. Where your organisation uses the [Agent Portal](#agent-portal), an agent also signs in there to see their own scores, work through courses, and read feedback.

## Agent Portal

The separate application agents sign in to, at its own address. The main Vela sign-in page offers **Go to Agent Portal Login**, which is the control that takes an agent to it.

Every query in it is scoped to the signed-in agent, so an agent sees their own work only, never a colleague's.

The Agent Portal is one half of the [Coaching Portal](#coaching-portal) add-on. The other half is the **Coaching** section inside the main Vela platform, which is where team leads work.

## Agent View Permissions

The setting that decides how much of their own work agents can see, either **All Interactions** or **Reviewed Interactions Only**. Set under **Coaching → Preferences**, it applies to every agent in the organisation.

Reviewed-only means an unreviewed backlog is invisible to the agent. See [Set Coaching Preferences](../team-leads/coaching-preferences.md).

## Auto Fail

A question your organisation marks as critical. Failing it takes the whole interaction to zero whatever else went well.

The **Auto Fails** panel on the Dashboard shows the proportion of calls affected, for an agent and for their team.

The main Vela platform writes this as **Auto-Fail**, with a hyphen. It is the same measure, spelled as each screen spells it.

## Award

Recognition presented automatically when an agent's score in the award's **Category** falls inside its **Score Threshold (Range)**, the same mechanism as a [Course](#course) pointed at a high band instead of a low one. Awards carry a certificate the agent can download.

Nobody presents an award manually. See [Recognise Good Work](../team-leads/recognise-good-work.md).

{/* VERIFIED 2026-09-21 against origin/dev, not origin/main. Nothing on origin/main creates a PresentedAward or a CourseAssigned record: lib/coachingCycle.js (#842, merged to dev 2026-08-30) says so in its header, citing #693, "settings with no effect". On dev that file presents awards and assigns courses in one pass, triggered by coaching.nextEvaluationDate from Preferences and run by an hourly cron through /api/coaching/cycle. Score Threshold (Range) and Training Initiation Score Range are inclusive bands, floor <= score <= ceiling. An award is presented once per agent per award per evaluation window, so again on a later cycle if the agent qualifies again. A course is not re-assigned while one is outstanding. Until #842 reaches main the released product has no code that does any of this, so the behaviour on these pages is dev's. Recheck when it ships. See the marker under Category for the one place dev contradicts the pages. */}

## Category

One list, shared across coaching and the main Vela platform. It is the same set of categories your organisation's Agent Scorecard questions are grouped into, such as Customer Care or Compliance, and it grows automatically the first time a scorecard question uses a new one.

On the **Dashboard**, a category groups scorecard questions, and **Category Scores** breaks performance down by them.

On a course or an award, **Category** is the one whose score the **Training Initiation Score Range** or **Score Threshold (Range)** is measured against, not the agent's overall score. A course scoped to Compliance with a range of 40 to 65 reaches agents whose Compliance score, specifically, falls in that band, whatever their other categories look like.

{/* UNVERIFIED: that the range is measured against the agent's score in the chosen Category. origin/main has no implementation to check. The only one, lib/coachingCycle.js on origin/dev (#842), scores each agent on their overall weighted score across every category and never reads the award's or course's category field. Either the form's Category is meant to scope the score and #842 is wrong, or Category is a label and this paragraph is. Three things point at the former. Neither create form carries help text on Category or the range, so the product itself does not say. lib/warningAutoDetect.js, which #842's header says it deliberately mirrors, does score per category: it loops the category scores and matches template.category. And the certificate (lib/generateAward.js) prints "achievement in <category> with a score of <n>%", which misleads if n is the overall score. Needs the product owner to decide, and #842 should be checked before it reaches main. Stated the same way on course-and-award-fields.md, how-the-pieces-fit.md, create-and-assign-courses.md, getting-started.md (team lead), recognise-good-work.md, and faq.md. */}

## Coaching Portal

The coaching add-on as a whole, and the name of this documentation. It has two halves. The **Coaching** section inside the main Vela platform is where team leads build courses and awards, and the [Agent Portal](#agent-portal) is where agents receive them.

"Coaching Portal" names the add-on rather than a screen. The agent sign-in page is headed **Coaching Portal**, but no sidebar entry or menu in either application carries the name, so an agent looking for somewhere to sign in wants the Agent Portal.

## Course

Training assigned automatically when an agent's score in the course's **Category** falls inside its **Training Initiation Score Range**. A course holds material, an optional quiz, and a deadline.

Courses reach people by score in a category rather than by name. See [Create and Assign Courses](../team-leads/create-and-assign-courses.md).

## Deadline

How long an agent has from the date a course is assigned to them, set on the course itself as a count and a unit of **Days**, **Weeks**, or **Months**. Each agent's **Due Date** is worked out from the day they receive it, so two agents assigned the same course on different days have different due dates.

## Evaluation Cycle

How often Vela reviews scores and assigns the courses and awards agents have qualified for. The Preferences page describes both in one breath, with no distinction between them. A course catches agents scoring low in a category, and an award catches those scoring high. Set under **Coaching → Preferences** as an interval, a unit of **Day(s)**, **Week(s)**, or **Month(s)**, and a time.

Nothing is assigned between runs. A course created today reaches agents at the next run rather than immediately. See [How Coaching Works](../explanation/how-coaching-works.md#everything-happens-on-the-cycle-and-only-on-the-cycle) for why.

## Evaluation Scope

Which interactions count towards evaluation, either **All Interactions** or **Reviewed Interactions Only**. Separate from [Agent View Permissions](#agent-view-permissions), which controls what agents see rather than what evaluations use.

Marking an interaction as reviewed happens in the main Vela platform, not in coaching. See [Review Status](https://docs-vela.botlhale.ai/docs/reference/glossary#review-status) in the Vela Glossary. On **Reviewed Interactions Only**, coaching moves only as fast as reviewing does.

## Final Score

An agent's result on a course quiz. [Initiation Score](#initiation-score) sits beside it, showing where they stood before the course rather than a previous quiz result.

## Initiation Score

An agent's score at the moment a course was assigned to them, the same score that put them inside the course's [Training Initiation Score Range](#training-initiation-score-range). It is set at assignment rather than kept from a first quiz attempt. A Progress row for a course still in progress, with no quiz submitted yet, already shows a real Initiation Score.

## Interaction

A single customer conversation, either a **call** (voice) or a **chat** (text). Vela uses "interaction" as the collective term for both.

## Pass Percentage

The share of the total quiz score an agent reaches to pass a course. Set once under **Coaching → Preferences** and applied to every course, rather than set per course.

## Progress

The page pairing each agent with each course assigned to them, with a status of **Not Started**, **In Progress**, or **Complete**. See [Track Learning Progress](../team-leads/track-learning-progress.md).

## Quiz Retakes

How many extra attempts an agent gets at a course quiz after their first try. Set on each course, so it varies between courses, unlike the [Pass Percentage](#pass-percentage), which is set once for the organisation. See [Quiz Retakes](../reference/course-and-award-fields.md#quiz-retakes) for the range and how it decides **Complete**.

## Scorecard

The set of questions each interaction is scored against, configured in the main Vela platform rather than in the Coaching Portal. Its results are what coaching acts on. The platform calls it the **Agent Scorecard**, and building one is covered in the [Vela documentation](https://docs-vela.botlhale.ai/docs/agent-scorecard-guide).

This is the ceiling on what coaching can do. A gap your scorecard does not ask about produces no score, so no course range can find the agents who have it.

An agent sees the outcome per question on the **Scorecard** tab of an interaction. See [Review Your Interactions](../agents/your-interactions.md).

## Training Initiation Score Range

The score range on a course that decides who receives it, measured against the agent's score in the course's own **Category** rather than their overall score. An agent whose score in that category falls inside the range is assigned the course on the next evaluation cycle.

A narrow range reaches the people with the gap. A wide one reaches everyone and measures nothing.

---

## Related

- [Getting Started with Coaching](../team-leads/getting-started.md): how these pieces fit together for a team lead
- [Getting Started for Agents](../agents/getting-started.md): the same, for an agent
- [Set Coaching Preferences](../team-leads/coaching-preferences.md): where the cycle, pass percentage, and view settings live

## Need Help?

**Contact Support:** support@botlhale.ai
