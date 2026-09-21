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

{/* The sign-in messages in this section are from app/api/login/route.js on origin/main, shown on the sign-in page as the message Vela shows. Confirmed on screen: the unconfirmed-address message, the Security tab entry, "You are not registered as an agent. Please log in on the main Vela login page." (2026-09-21), and "Your account has been blocked. Please contact support for assistance" (2026-09-21). Not yet seen live: the agent-at-main-login message, the deactivated message, and the tenth-attempt "Too many login attempts" wording that precedes the blocked one. No capture of the wrong-portal message is in the repository yet: the one taken shows a real address, so mask it with a solid bar before saving it as img/screenshots/agent_view/auth/wrong-portal.png. */}

**Problem:** Sign-in is refused with **We have sent you an email. Please verify your email address.**, even with the password from the invitation email.

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

**Problem:** The password has been forgotten, so there is no way past the sign-in page.

**Cause:** A forgotten password is reset from the sign-in page, not by a new invitation.

**Solution:** Select **Forgot your password?** beneath the password field and follow the emailed link. See [Manage Your Account](../agents/your-account.md#reset-a-forgotten-password).

---

**Problem:** Sign-in is refused with **You are not registered as an agent. Please log in on the main Vela login page.**

**Cause:** The address belongs to a team lead or administrator account. Those sign in to the main Vela platform, and the Agent Portal accepts agents only.

**Solution:** Select **Go to Vela Login** below the sign-in form.

---

**Problem:** The main Vela sign-in page refuses an agent with **You are registered as an agent. Please log in on the agent coaching portal.**

**Cause:** The address belongs to an agent account, and agents sign in to the Agent Portal rather than the main platform.

**Solution:** Select **Go to Agent Portal Login** on the main sign-in page, and sign in there.

---

**Problem:** Sign-in is refused with **Your account has been deactivated. Please contact your organisation admin.**

**Cause:** The agent record has been made inactive in the main Vela platform. The password is not the problem.

**Solution:** Ask your team lead to reactivate the record. Retrying the password does not help.

---

**Problem:** Sign-in is refused with **Too many login attempts. Your account has been blocked. Please contact support for assistance**, or afterwards with **Your account has been blocked. Please contact support for assistance**.

**Cause:** Ten wrong passwords in a row block the account. A successful sign-in resets the count, so the block only comes from consecutive failures.

**Solution:** Contact support@botlhale.ai to lift the block. Where the password is uncertain, use **Forgot your password?** before the count runs out rather than guessing.

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

**Cause:** **Agent View Permissions** is set to **Reviewed Interactions Only**. This is a different setting from the one behind an empty Dashboard above. It governs what an agent can open under **Interactions**, not what feeds their scores.

**Solution:** Check the setting under **Coaching → Preferences**. Where reviewed-only is chosen, an unreviewed backlog is invisible to the agent, so the fix is reviewing rather than a settings change.

---

## Courses

**Problem:** A course was created but nobody has it.

**Cause:** Assignment happens on the evaluation cycle, not on save.

**Solution:**
1. Work out when the cycle next runs from the interval, day, and time under **Coaching → Preferences**. The page shows the schedule rather than the date of the next run.
2. After it has run, open **Progress** and look for agents against the course.
3. Still nobody? No agent's scores fell inside the **Training Initiation Score Range**. Widen the range, or check the scores on the Dashboard.

---

**Problem:** An agent completed a course but it still shows **In Progress**.

**Cause:** Submitting the quiz alone does not complete a course. Unless retakes have run out, the agent also has to select **Complete Course** on the results screen.

**Solution:** Ask the agent to reopen the course and select **Complete Course**, or use a remaining retake if they want another attempt first.

---

**Problem:** A course file is rejected on upload, with **Please upload a PDF file** or **File size exceeds 10MB limit**.

**Cause:** The upload accepts PDF only, and a PDF over 10MB.

**Solution:** Export the material to PDF where it is another format. Where the PDF is over 10MB, compress it or split it. Either way, hosting it elsewhere and using **External Link** instead also works.

---

## Awards

**Problem:** An award exists but has never been presented.

**Cause:** The **Score Threshold (Range)** on the award is set higher than anyone reaches.

**Solution:**
1. Compare the award's range against the scores on the Dashboard.
2. Lower it to a band that is demanding but reachable, or leave it if it is deliberately rare.
3. Changes take effect from the next evaluation cycle. Awards already presented stay presented.

{/* UNVERIFIED: this entry assumes awards are presented automatically by the evaluation cycle, the same way courses are assigned. No code path that presents either was found in vela or vela-data; the Preferences page's own copy groups "awards and training courses" under one Evaluation Cycle description, which is why they're treated the same here. */}

---

## Progress

**Problem:** A date range control reads **Invalid date range**.

**Cause:** The picker keeps the earlier of the two dates you select as the start automatically, so an out-of-order range cannot actually be set. **Invalid date range** instead means one of the two dates has not been set yet.

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
