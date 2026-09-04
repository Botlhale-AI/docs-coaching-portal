---
title: Troubleshooting
description: "Work from a symptom to its cause, for the problems reported most."
sidebar_position: 1
type: troubleshooting
pagination_prev: null
pagination_next: null
---

Common problems in the Coaching Portal, and what to check. Each entry starts from what you can see rather than from the feature it belongs to. For short answers to general questions, see [Frequently Asked Questions](./faq.md).

---

## Signing In

**Problem:** Sign-in is refused, even with the password from the invitation email.

**Cause:** The email address has not been confirmed yet. Vela refuses the sign-in until it is.

**Solution:**
1. Open the invitation email and select **Confirm Account** before signing in.
2. Trying to sign in unconfirmed sends a fresh confirmation email, so check your inbox again rather than asking for a new invitation.
3. If the button does not work, the email also carries the link to paste into your browser.

---

**Problem:** The **Security** tab is missing from Settings, so there is nowhere to change a password.

**Cause:** The account signs in through Google or Microsoft, so the identity provider holds the password rather than Vela.

**Solution:** Change the password with your provider. The tab is absent by design rather than missing.

---

## Empty Pages

**Problem:** An agent's Dashboard reads **No data available for the selected date range**.

**Cause:** No processed interactions fall inside the selected dates.

**Solution:**
1. Widen the date range. A new account often has nothing in the current week.
2. Confirm interactions have finished processing. They appear once analysis completes.
3. If **Evaluation Scope** is set to **Reviewed Interactions Only**, nothing appears until a reviewer marks an interaction as reviewed. See [Set Coaching Preferences](../team-leads/coaching-preferences.md).

---

**Problem:** An agent's interactions list is shorter than the work they have done.

**Cause:** **Agent View Permissions** is set to **Reviewed Interactions Only**. This is a different setting from the one behind an empty Dashboard above: it governs what an agent can open under **Interactions**, not what feeds their scores.

**Solution:** Check the setting under **Coaching → Preferences**. Where reviewed-only is chosen, an unreviewed backlog is invisible to the agent, so the fix is reviewing rather than a settings change.

---

## Courses

**Problem:** A course was created but nobody has it.

**Cause:** Assignment happens on the evaluation cycle, not on save.

**Solution:**
1. Check when the cycle next runs, under **Coaching → Preferences**.
2. After it has run, open **Progress** and look for agents against the course.
3. Still nobody? No agent's scores fell inside the **Training Initiation Score Range**. Widen the range, or check the scores on the Dashboard.

---

**Problem:** An agent completed a course but it still shows **In Progress**.

**Cause:** Submitting the quiz alone does not complete a course. Unless retakes have run out, the agent also has to select **Complete Course** on the results screen.

**Solution:** Ask the agent to reopen the course and select **Complete Course**, or use a remaining retake if they want another attempt first.

---

**Problem:** A course file is rejected on upload.

**Cause:** Files are limited to 10MB.

**Solution:** Compress the file or split it, or host it elsewhere and use **Course Link** with an **External Link** instead.

---

## Awards

**Problem:** An award exists but has never been presented.

**Cause:** The **Score Threshold (Range)** on the award is set higher than anyone reaches.

**Solution:**
1. Compare the award's range against the scores on the Dashboard.
2. Lower it to a band that is demanding but reachable, or leave it if it is deliberately rare.
3. Changes take effect from the next evaluation cycle. Awards already presented stay presented.

{/* UNVERIFIED: this entry assumes awards are presented automatically by the evaluation cycle, the same way courses are assigned. No code path that presents an award was found in vela or vela-data, and this has not been separately confirmed for awards the way course assignment was. If awards are not actually automatic yet, this whole entry needs rewriting. */}

---

## Progress

**Problem:** A date range control reads **Invalid date range**.

**Cause:** The picker keeps the earlier of the two dates you click as the start automatically, so an out-of-order range cannot actually be set. **Invalid date range** instead means one of the two dates has not been set yet.

**Solution:** Set both a start and an end date, then select **Apply** again.

---

**Problem:** **No Department** appears as an option in the Progress filter's department list.

**Cause:** A team's department is not assigned in the main Vela platform. This does not affect the Progress table itself, which has no department column.

**Solution:** Ask an administrator to assign the team's department.

---

## Notifications

**Problem:** A tab under **Notifications** reads **No results found**.

**Cause:** Nothing of that type is waiting. The page lists unread notifications only.

**Solution:** This is a result rather than a fault. Awards, courses, and comments each have their own tab, so check the others.

---

## Related

- [Frequently Asked Questions](./faq.md): short answers rather than steps
- [Glossary](../reference/glossary.md): what a term means
- [Set Coaching Preferences](../team-leads/coaching-preferences.md): the settings behind several of these

## Need Help?

**Contact Support:** support@botlhale.ai
