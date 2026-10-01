---
title: Frequently Asked Questions
description: "Short answers to the questions asked most about coaching."
sidebar_position: 2
type: reference
pagination_prev: null
pagination_next: null
---

Short answers to the most common questions about the Coaching Portal, for team leads and agents. For step-by-step help with a problem, see [Troubleshooting](./troubleshooting-guide.md).

## General

**Q: What is the Coaching Portal?**
A: The coaching add-on as a whole, in two halves. Team leads run coaching from the **Coaching** section of the main Vela platform. Agents sign in to the **Agent Portal**, a separate site, to see their own scores, work through training assigned to them, and read their team lead's feedback.

**Q: Is it part of Vela?**
A: Coaching is an add-on. Where it is enabled, **Coaching** appears in the left sidebar of the main platform and agents can sign in to their portal. Where it is not, neither appears.

**Q: Who sees what?**
A: An agent sees their own interactions, scores, courses, and awards, never a colleague's. A team lead sees the agents their access level covers.

---

## Courses and Awards

**Q: How does an agent get a course?**
A: By score. You set a **Category** on the course and a **Training Initiation Score Range** within it, and on each evaluation cycle every agent in scope whose score in that category falls in the range receives it. Nobody assigns courses manually.

{/* UNVERIFIED: the per-Category measurement. The only implementation, lib/coachingCycle.js on origin/dev and origin/dev-hold (#842, rechecked 2026-10-01), uses the agent's overall score and never reads Category. Full note under Category in glossary.md. Needs the product owner to decide which is intended. */}

**Q: How long does an agent have to finish a course?**
A: The **Deadline** on the course, set as a count and a unit of **Days**, **Weeks**, or **Months**. Each agent's **Due Date** is worked out from the day they receive it, so two agents assigned on different days have different due dates.

**Q: What is the pass percentage?**
A: The **Pass Percentage** under **Coaching → Preferences**. It applies to every course rather than being set per course.

**Q: Can an agent retake a course?**
A: Yes. **Quiz Retakes**, set per course by the team lead, is the total number of attempts, from 1 to 5, including the first. The **Initiation Score**, the agent's score when the course was assigned, stays visible alongside the new **Final Score**, so improvement stays visible.

**Q: How are awards presented?**
A: Automatically, on the evaluation cycle, to every agent whose score in the award's **Award Category** falls inside its **Score Threshold (Range)**. Agents download their own certificate from their portal.

{/* UNVERIFIED: per-Category measurement. See the note under Category in glossary.md. */}

{/* VERIFIED 2026-09-21 against origin/dev (lib/coachingCycle.js, #842), rechecked 2026-10-01 on origin/dev-hold. Not yet on origin/main or origin/vela-fly, which have no code that presents awards or assigns courses. Documented ahead of release by decision, 2026-10-01: main is expected to carry it before these pages go live. Full note under Award in glossary.md. */}

---

## Timing

**Q: I created a course. Why does nobody have it?**
A: Assignment happens on the evaluation cycle, not when you save. Work out when the cycle next runs from the interval, day, and time under **Coaching → Preferences**, which shows the schedule rather than the date of the next run, then look at **Progress** after it has.

**Q: How often should the cycle run?**
A: Monthly suits most teams. Weekly responds faster but assigns training on less evidence, so an agent can be given a course for one bad week rather than a real gap.

---

## What Agents See

**Q: Why is an agent's interactions list shorter than their work?**
A: Your organisation may show agents **Reviewed Interactions Only**. Until someone marks an interaction as reviewed, the agent does not see it.

**Q: Can I change that later?**
A: Yes, under **Coaching → Preferences**. A change applies at once to which interactions agents can open, including ones they could open before, so agree it before agents are invited.

**Q: Do agents see each other's scores?**
A: No. An agent sees their own figures, and their team's figures as an aggregate for comparison. Individual colleagues are never named.

---

## Accounts

**Q: How does an agent get an account?**
A: An administrator creates it in the main platform, and the portal emails an invitation. Before the first sign-in, the agent selects **Forgot your password?** on the Agent Portal sign-in page and sets their own password.

**Q: An agent cannot sign in. What first?**
A: Setting a password. The temporary password in the invitation does not work, so a new agent selects **Forgot your password?** and follows the emailed link before their first sign-in. See [Troubleshooting](./troubleshooting-guide.md).

**Q: Can an agent change their name or email?**
A: No. Those fields are read-only in the portal. A team lead changes them from the main platform.

---

## Related

- [Troubleshooting](./troubleshooting-guide.md): steps for a problem rather than a short answer
- [Glossary](../reference/glossary.md): what a term means
- [Best Practices](../explanation/best-practices.md): recommendations for running coaching well

## Need Help?

**Contact Support:** support@botlhale.ai
