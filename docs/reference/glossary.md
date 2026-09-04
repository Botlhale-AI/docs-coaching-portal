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

Access level and role are two separate things, and coaching needs both in one place: changing **Coaching → Preferences** requires organisational access **and** the admin role. With one but not the other the form opens read-only.

For the platform-wide detail, see [Access Level](https://docs-vela.botlhale.ai/docs/reference/glossary#access-level) in the Vela Glossary.

## Agent

A person whose interactions Vela analyses. An agent needs no login to be scored. Where your organisation uses the [Agent Portal](#agent-portal), an agent also signs in there to see their own scores, work through courses, and read feedback.

## Agent Portal

The separate application agents sign in to, at its own address. The main Vela sign-in page offers **Go to Agent Portal Login**, which is the control that takes an agent to it.

Every query in it is scoped to the signed-in agent, so an agent sees their own work only, never a colleague's.

The Agent Portal is one half of the [Coaching Portal](#coaching-portal) add-on. The other half is the **Coaching** section inside the main Vela platform, which is where team leads work.

## Agent View Permissions

The setting that decides how much of their own work agents can see: **All Interactions**, or **Reviewed Interactions Only**. Set under **Coaching → Preferences**, it applies to every agent in the organisation.

Reviewed-only means an unreviewed backlog is invisible to the agent. See [Set Coaching Preferences](../team-leads/coaching-preferences.md).

## Auto Fail

A question your organisation marks as critical. Failing it takes the whole interaction to zero whatever else went well.

The **Auto Fails** panel on the Dashboard shows the proportion of calls affected, for an agent and for their team.

The main Vela platform writes this as **Auto-Fail**, with a hyphen. It is the same measure, spelled as each screen spells it.

## Award

Recognition presented automatically when an agent's score in the award's **Category** falls inside its **Score Threshold (Range)**, the same mechanism as a [Course](#course) pointed at a high band instead of a low one. Awards carry a certificate the agent can download.

Nobody presents an award manually. See [Recognise Good Work](../team-leads/recognise-good-work.md).

{/* UNVERIFIED: no code in vela or vela-data creates the record that presents an award, so the literal implementation isn't directly observed, the same gap that exists for course assignment (confirmed only by the product owner's own knowledge of a third service, not by source). The Preferences page's own copy groups "awards and training courses" under one Evaluation Cycle description with no distinction, and Award's schema (category + triggerScore, no course-link field) is structurally identical to Course's, so both point the same way. Confirm with the product owner if a more specific answer is ever needed. */}

## Category

One list, shared across coaching and the main Vela platform. It is the same set of categories your organisation's Agent Scorecard questions are grouped into, such as Customer Care or Compliance, and it grows automatically the first time a scorecard question uses a new one.

On the **Dashboard**, a category groups scorecard questions, and **Category Scores** breaks performance down by them.

On a course or an award, **Category** is the one whose score the **Training Initiation Score Range** or **Score Threshold (Range)** is measured against, not the agent's overall score. A course scoped to Compliance with a range of 40 to 65 reaches agents whose Compliance score, specifically, falls in that band, whatever their other categories look like.

## Coaching Portal

The coaching add-on as a whole, and the name of this documentation. It has two halves: the **Coaching** section inside the main Vela platform, where team leads build courses and awards, and the [Agent Portal](#agent-portal), where agents receive them.

"Coaching Portal" names the add-on rather than a screen. No control in Vela carries the words, so an agent looking for somewhere to sign in wants the Agent Portal.

## Course

Training assigned automatically when an agent's score in the course's **Category** falls inside its **Training Initiation Score Range**. A course holds material, an optional quiz, and a deadline.

Courses reach people by score in a category rather than by name. See [Create and Assign Courses](../team-leads/create-and-assign-courses.md).

## Deadline

How long an agent has from the date a course is assigned to them, set on the course itself as a count and a unit of **Days**, **Weeks**, or **Months**. Each agent's **Due Date** is worked out from the day they receive it, so two agents assigned the same course on different days have different due dates.

## Evaluation Cycle

How often Vela reviews scores and assigns the courses and awards agents have qualified for. The Preferences page describes the two in one breath, as how often "awards and training courses are reviewed," with no distinction between them. On each run, every agent's score in every scorecard **Category** is checked against every course's **Training Initiation Score Range** and every award's **Score Threshold (Range)**: a course catches the agents scoring low in it, an award catches the agents scoring high. Set under **Coaching → Preferences** as an interval, a unit of **Day(s)**, **Week(s)**, or **Month(s)**, and a time.

Nothing is assigned between runs. A course created today reaches agents at the next run rather than immediately.

## Evaluation Scope

Which interactions count towards evaluation: **All Interactions**, or **Reviewed Interactions Only**. Separate from [Agent View Permissions](#agent-view-permissions), which controls what agents see rather than what evaluations use.

Marking an interaction as reviewed happens in the main Vela platform, not in coaching. See [Review Status](https://docs-vela.botlhale.ai/docs/reference/glossary#review-status) in the Vela Glossary. On **Reviewed Interactions Only**, coaching moves only as fast as reviewing does.

## Final Score

An agent's result on a course quiz. [Initiation Score](#initiation-score) sits beside it, showing where they stood before the course rather than a previous quiz result.

## Initiation Score

An agent's score at the moment a course was assigned to them, the same score that put them inside the course's [Training Initiation Score Range](#training-initiation-score-range). It is set at assignment rather than kept from a first quiz attempt: a Progress row for a course still in progress, with no quiz submitted yet, already shows a real Initiation Score.

## Interaction

A single customer conversation, either a **call** (voice) or a **chat** (text). Vela uses "interaction" as the collective term for both.

## Pass Percentage

The share of the total quiz score an agent reaches to pass a course. Set once under **Coaching → Preferences** and applied to every course, rather than set per course.

## Progress

The page pairing each agent with each course assigned to them, and its status: **Not Started**, **In Progress**, or **Complete**. See [Track Learning Progress](../team-leads/track-learning-progress.md).

## Quiz Retakes

How many attempts an agent gets at a course quiz, from 1 to 5. Set on each course, so it varies between courses, unlike the [Pass Percentage](#pass-percentage), which is set once for the organisation.

When the last retake is used the course is marked **Complete** whatever the agent scored, so **Complete** on its own does not mean passed. Read it together with **Score**.

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
