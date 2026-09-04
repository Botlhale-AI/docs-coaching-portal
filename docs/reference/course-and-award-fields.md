---
title: Course and Award Fields
description: "Every field on the course, award, and preferences forms, with its accepted values."
sidebar_position: 3
type: reference
pagination_prev: null
pagination_next: null
---

Every field a team lead fills in when setting up coaching, with what it accepts and what it does. Use it to check a limit without reading a whole procedure.

For the steps in order, see [Create and Assign Courses](../team-leads/create-and-assign-courses.md), [Recognise Good Work](../team-leads/recognise-good-work.md), and [Set Coaching Preferences](../team-leads/coaching-preferences.md).

---

## Course Fields

### Title

The name of the course. Appears to agents as **Course Title** in their list.

Required. A course is refused without one.

### Description

What the course covers and why it was assigned. Free text.

### Category

The scorecard category the **Training Initiation Score Range** below is measured against, not only a label for browsing. It is the same list your organisation's Agent Scorecard questions are grouped into, and it grows automatically the first time a scorecard question uses a new category. Chosen from that list. There is no way to add a new one from this form (see [Create and Assign Courses](../team-leads/create-and-assign-courses.md)).

### Upload PDF

The course material file.

| Property | Value |
| :--- | :--- |
| Accepted format | PDF only |
| Maximum size | 10MB |
| Message on an oversized file | **File size exceeds 10MB limit** |

No other format is accepted. Material in another format must be exported to PDF or hosted elsewhere and linked with **External Link**.

### External Link

A URL to material hosted outside Vela. Opens in a new tab for the agent.

A course may carry both an uploaded PDF and an external link.

### Cover Image

An image shown on the course card. Either one of the supplied theme images or an uploaded file.

Uploads accept `.jpg`, `.jpeg`, and `.png`.

### Quiz Questions

Added one at a time with **Add Question**. Each question has its text and an answer type.

| Answer type | What you set | Validation |
| :--- | :--- | :--- |
| **Multiple Choice** | Options, built with **Add option**, and the **Correct Answer** | At least two options, and one marked correct |
| **Short Paragraph** | The question only | The question cannot be empty |
| **Long Paragraph** | The question only | The question cannot be empty |

Paragraph answers are still compared against a stored answer, judged by Vela for meaning rather than exact wording, and each answer carries a short reason recorded against it.

Existing questions are changed with the **pencil** icon, which opens a panel headed **Edit Question N**, and removed with **Remove**.

### Quiz Retakes

How many attempts an agent gets at the quiz.

| Property | Value |
| :--- | :--- |
| Range | 1 to 5 |
| Default on a new course | 3 |

The course is marked **Complete** when an agent uses their last retake, or selects **Complete Course** before that, whatever they scored.

### Training Initiation Score Range

The band of scores that assigns the course, measured against the agent's score in the course's own **Category** rather than their overall score. A slider with two handles, showing the floor and ceiling as percentages.

| Property | Value |
| :--- | :--- |
| Range | 0 to 100 |
| Behaviour | Agents whose score in the course's Category falls between the floor and ceiling are assigned the course on the next cycle |

A range of 0 to 100 assigns the course to everyone in scope.

### Deadline

How long an agent has from their own **Date Assigned**, rather than a fixed calendar date.

| Property | Value |
| :--- | :--- |
| Count | A number, minimum 1 |
| Unit | **Days**, **Weeks**, or **Months** |

Each agent's **Due Date** is calculated from the day they receive the course.

### Scope

Who the course can reach. The options offered depend on your own access level, not a fixed list:

| Your access level | Options offered |
| :--- | :--- |
| Organisational | **Entire Organisation**, **Specific Departments**, **Specific Teams** |
| Departmental | **Entire Department**, **Specific Teams** |
| Team | No selector. A fixed line reads "Applying course to: `<your team>`" |

Choosing **Specific Departments** or **Specific Teams** reveals a selector for which ones, and at least one must be picked.

---

## Award Fields

### Award Name

What the award is called, in the agent's list. It is not printed on the certificate itself, which prints the award's category and score instead. Required.

### Award Category

The scorecard category the **Score Threshold (Range)** below is measured against, the same list a course's **Category** is drawn from. Required.

### Award Description

What the award recognises. Free text.

### Scope

Who is eligible for the award, on the same access-level-dependent basis as a course's [Scope](#scope) above.

### Score Threshold (Range)

The band of scores that earns the award, set as **Min** and **Max**, measured against the agent's score in **Award Category** rather than their overall score. The same mechanism as a course's Training Initiation Score Range, typically aimed at a high band instead of a low one.

An agent earns the award when their score in that category falls between the two. It is a band rather than a floor, so an award set to 70 to 79 deliberately excludes agents scoring 80.

### Award Message

What the agent reads when the award is presented to them. Free text.

---

## Preferences Fields

These are organisation-wide. Editing them requires organisational access **and** the admin role. Without both, the form is read-only.

### Evaluation Scope

Which interactions the evaluations are built from.

| Option | What it means |
| :--- | :--- |
| **All Interactions** | Every processed interaction counts |
| **Reviewed Interactions Only** | Only interactions a person has marked reviewed count |

### Evaluation Cycle

How often courses and awards are assessed and assigned.

| Field | Accepted values |
| :--- | :--- |
| **Repeat every** | 1 to 100 |
| **Unit** | **Day(s)**, **Week(s)**, **Month(s)** |
| **Time** | 24-hour, on the hour |
| **Day of Week** | Sunday to Saturday. Shown when the unit is week |
| **Day of Month** | 1 to 28, or **Last**. Shown when the unit is month |

The page confirms the setting back as **Evaluate every 1 month(s)** or similar.

**Day of Month** offers no dates after the 28th, because they do not occur in every month. Use **Last** for the end of the month.

### Pass Percentage

The share of the total quiz score needed to pass a course. Applies to every course in the organisation.

Default 50.

### Agent View Permissions

Which of their own interactions an agent can open in the portal.

| Option | What it means |
| :--- | :--- |
| **All Interactions** | Agents can view all their uploaded interactions |
| **Reviewed Interactions Only** | Agents can view only their reviewed interactions |

This setting applies immediately rather than from the next cycle, so changing it removes access to work an agent could already see.

---

## Related

- [Glossary](./glossary.md): what these terms mean
- [Metrics](./metrics.md): the figures these settings produce
- [Create and Assign Courses](../team-leads/create-and-assign-courses.md): these fields in order
- [Set Coaching Preferences](../team-leads/coaching-preferences.md): the organisation-wide settings

## Need Help?

**Contact Support:** support@botlhale.ai
