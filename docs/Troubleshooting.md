---
sidebar_position: 7
title: Troubleshooting
description: "Work from a symptom to its cause, for the problems reported most."
type: troubleshooting
pagination_prev: null
pagination_next: null
---

Common problems in the Coaching Portal, and what to check. Each entry starts from what you can see rather than from the feature it belongs to. For short answers to general questions, see [Frequently Asked Questions](./FAQ.md).

---

## Signing In

**Problem:** Sign-in is refused, even with the password from the invitation email.

**Cause:** The email address has not been confirmed yet. Vela refuses the sign-in until it is.

**Solution:**
1. Open the invitation email and select **Confirm Account** before signing in.
2. Trying to sign in unconfirmed sends a fresh confirmation email, so check your inbox again rather than asking for a new invitation.
3. If the button does not work, the email also carries the link to paste into your browser.

---

**Problem:** The **security** tab is missing from Settings, so there is nowhere to change a password.

**Cause:** The account signs in through Google or Microsoft, so the identity provider holds the password rather than Vela.

**Solution:** Change the password with your provider. The tab is absent by design rather than missing.

---

## Empty Pages

**Problem:** An agent's Dashboard reads **No Data Found**.

**Cause:** No processed interactions fall inside the selected dates.

**Solution:**
1. Widen the date range. A new account often has nothing in the current week.
2. Confirm interactions have finished processing. They appear once analysis completes.
3. If the organisation shows agents **Reviewed Interactions Only**, nothing appears until a reviewer marks an interaction as reviewed. See [Set Coaching Preferences](./Preferences.md).

---

**Problem:** An agent's interactions list is shorter than the work they have done.

**Cause:** The organisation is set to show agents reviewed interactions only.

**Solution:** Check the setting under **Coaching → Preferences**. Where reviewed-only is chosen, an unreviewed backlog is invisible to the agent, so the fix is reviewing rather than a settings change.

---

## Courses

**Problem:** A course was created but nobody has it.

**Cause:** Assignment happens on the evaluation cycle, not on save.

**Solution:**
1. Check when the cycle next runs, under **Coaching → Preferences**.
2. After it has run, open **Progress** and look for agents against the course.
3. Still nobody? No agent's scores fell inside the trigger range. Widen the range, or check the scores on the Dashboard.

---

**Problem:** An agent completed a course but it still shows **In Progress**.

**Cause:** The quiz was worked through but not submitted.

**Solution:** Ask the agent to reopen the course and submit the quiz. A result is recorded on submission rather than on reading the material.

---

**Problem:** A course file is rejected on upload.

**Cause:** Files are limited to 10MB.

**Solution:** Compress the file or split it, or host it elsewhere and use **Course Link** with an **External Link** instead.

---

## Awards

**Problem:** An award exists but has never been presented.

**Cause:** The **Agent Score** on the award is set higher than anyone reaches.

**Solution:**
1. Compare the award's score against the range on the Dashboard.
2. Lower it to a mark that is demanding but reachable, or leave it if it is deliberately rare.
3. Changes take effect from the next evaluation cycle. Awards already presented stay presented.

---

## Progress

**Problem:** A date filter is refused with **Invalid date range**.

**Cause:** The end date falls before the start date.

**Solution:** Check the order of the two dates, then select **Apply** again.

---

**Problem:** Agents appear under **No Department**.

**Cause:** The agent record has no department assigned in the main Vela platform.

**Solution:** Ask an administrator to assign it. Sorting on that column brings the gaps together so they can be fixed in one pass.

---

## Notifications

**Problem:** A tab under **Notifications** reads **No results found**.

**Cause:** Nothing of that type is waiting. The page lists unread notifications only.

**Solution:** This is a result rather than a fault. Awards, courses, and comments each have their own tab, so check the others.

---

## Related

- [Frequently Asked Questions](./FAQ.md): short answers rather than steps
- [Glossary](./Glossary.md): what a term means
- [Set Coaching Preferences](./Preferences.md): the settings behind several of these

## Need Help?

**Contact Support:** support@botlhale.ai
