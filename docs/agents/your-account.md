---
title: Manage Your Account
description: "Read your notifications, check your account details, and change your password."
sidebar_position: 5
type: how-to
pagination_prev: agents/your-awards
pagination_next: null
---

The **ADMIN** section at the foot of the left sidebar holds two pages. **Notifications** tells you about new awards, courses, and comments. **Settings** is where you check your account details and change your password.

---

## Before You Begin

You need:

- **An Agent Portal sign-in.** Your team lead creates your account and the portal emails you an invitation.
- **To know how you sign in.** Where you sign in through Google or Microsoft, your identity provider holds your password, so the **Security** tab does not appear.

---

## Read Your Notifications

Select **Notifications** under **ADMIN** in the left sidebar. Three tabs sort what has arrived:

| Tab | What it holds |
| :--- | :--- |
| **Awards** | An award someone has presented to you |
| **Courses** | A course that has been assigned to you |
| **Comments** | A comment your team lead left on one of your interactions |

The page lists unread notifications only, so a tab with nothing in it reads **No results found**. That is a result rather than a fault. It means nothing of that type is waiting for you.

![The Notifications page in the Agent Portal, with the Awards, Courses, and Comments tabs above the list of unread notifications](../../img/screenshots/agent_view/admin/notifications.png)

{/* RESHOOT: the live notification text originally read "You have been assigned undefined, your dealine to complete this course is 24-07-2025", a broken template (course title missing) plus a typo, both visible on screen. That message line is painted over as a temporary fix so the bug isn't the thing being documented. Reshoot once the underlying "Course Assigned" notification text is fixed; until then this hides the defect rather than resolving it. */}

:::note Notifications is its own page
It sits under **ADMIN** in the sidebar, beside **Settings**. It is not a tab inside Settings, so look for it in the sidebar rather than on the Settings page.
:::

---

![The ADMIN section of the sidebar, with Notifications above Settings](../../img/screenshots/agent_view/admin/admin.png)

---

## Check Your Account Details

Select **Settings** under **ADMIN**, then the **Account** tab. It shows the details your organisation holds for you:

| Field | What it shows |
| :--- | :--- |
| **Name** | Your name as your team lead entered it |
| **Email** | The address you sign in with, and where the portal emails you |
| **Current Organisation** | The organisation you belong to |
| **Current Department** | The department your interactions are counted under. Shown on some accounts and not others |
| **Current Team** | The team your interactions are counted under |

![The account tab in Settings, showing the Name, Email, Current Organisation, Current Department, and Current Team fields](../../img/screenshots/agent_view/admin/admin-account-info-department.png)

{/* RESHOOT HISTORY: admin-account-info.jpeg (Agent Jane, DepartmentOrg) showed this same tab with no Current Department row, and was replaced here by admin-account-info-department.png (John Zulu, FeatureTesting), which has one. Deleted rather than kept alongside it, per STYLE_GUIDE.md section 8: an unreferenced screenshot is dead weight, and this page only needs one to show the fields it documents. The old capture is not stale, it is a second real state, which is why it is recorded here rather than just discarded. */}

{/* UNVERIFIED: what decides whether Current Department appears. The condition in vela's shared AccountSettings component, app/(pages)/settings/page.jsx, is `!profile.access === "organisational"`, which JS operator precedence parses as `(!profile.access) === "organisational"`. That compares a boolean to a string, so it is always false and the row should never render for anyone, which contradicts both captures described above. Source is wrong about the screen here, the same class of defect as the Sort By control. Needs engineering to confirm the intended rule, most likely the `!==` version seen elsewhere in this file's history. */}

These fields are read-only. To correct any of them, ask your team lead, who changes them from the main Vela platform.

---

## Change Your Password

Select the **Security** tab, then enter your current password and the new one twice.

Your new password must meet all of these:

- At least **8 characters**.
- At least **one letter** (a-z, A-Z).
- At least **one number** (0-9).
- At least **one special character** (for example `@`, `#`, or `!`).

Select **Save** to apply it. The next time you sign in, use the new password.

:::note The Security tab depends on how you sign in
Signing in with Google or Microsoft means your identity provider holds your password, so the **Security** tab does not appear. Change it with your provider instead.
:::

---

## Reset a Forgotten Password

Where you cannot sign in because you have forgotten your password, reset it from the sign-in page rather than asking for a new invitation.

1. On the sign-in page, select **Forgot your password?** beneath the password field. It opens **Vela Password Reset**.
2. Enter your email address and select **Reset**. The page confirms that a reset link has been sent to your address, and an email headed **Reset Your Password** arrives.

   ![The Vela Password Reset page, with the Email field and the Reset button](../../img/screenshots/agent_view/auth/forgot-password.png)

3. In the email, select **Reset Password**. If the button does not work, the email also carries the link to paste into your browser.

   ![The Reset Your Password email, with the Reset Password button and the link to paste beneath it](../../img/screenshots/agent_view/auth/reset-email.png)

4. The link opens a second **Vela Password Reset** page. Enter your new password under **Password** and again under **Confirm Password**. The rules above apply, and the **information** icon beside **Password** lists them.

   ![The second Vela Password Reset page, with Password and Confirm Password above the Reset button](../../img/screenshots/agent_view/auth/reset-password.png)

5. Select **Reset**. The page reads **You have successfully reset your password. You may now sign in.**, and **Return to login** takes you back to the sign-in page.

A link that reads **Your password reset link has expired** has been left too long. Start again from **Forgot your password?**.

{/* The success message and Return to login in step 5, and the expired-link message, are from resetPasswordForm.jsx and app/api/reset/route.js on origin/main. Every screen in the flow is captured above; those two states are not, since they need a live token. */}

This applies to password sign-in only. Where you sign in with Google or Microsoft, reset it with your provider.

---

## Check Your Work

Open **Notifications** and confirm the tab you expect has entries in it. An empty tab reading **No results found** means nothing of that type is waiting for you.

For a password change or a reset, sign out and sign back in with the new password. That is the only thing that confirms it took.

---

## Related

- [Monitor Your Performance](./personal-performance.md): track your scores over time
- [Track Your Courses](./your-courses.md): work through the training assigned to you
- [View Your Awards](./your-awards.md): the recognition your notifications tell you about
- [Review Your Interactions](./your-interactions.md): read the comments your team lead leaves

## Need Help?

**Contact Support:** support@botlhale.ai
