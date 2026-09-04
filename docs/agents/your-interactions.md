---
title: Review Your Interactions
description: "Open a call or chat, read its transcript and scorecard, and see your team lead's comments."
sidebar_position: 2
type: how-to
pagination_prev: agents/personal-performance
pagination_next: agents/your-courses
---

**Interactions** in the left sidebar holds every call and chat of yours that Vela has processed. This is where you read what was said, see how the conversation scored, and find the coaching comments your team lead has left. It has two sub-items, **Calls** and **Chats**. The list works the same way for both, though the detailed view differs, since a chat has nothing to play.

---

## Before You Begin

You need:

- **Processed interactions.** A call or chat appears here once Vela has finished transcribing and analysing it, so a new account has an empty list rather than an error.
- **To know what your team lead has shared.** Your organisation's **Agent View Permissions** setting decides whether you see all your interactions or only the ones a reviewer has marked as reviewed. If your list looks shorter than you expect, that setting is the usual reason.

---

## 1. Find an Interaction

Select **Interactions** in the left sidebar, then **Calls** or **Chats**. The list shows your own interactions only.

Three controls sit above the list:

| Control | What it does |
| :--- | :--- |
| **Search** | Narrows the list by wording |
| **Sort** | Orders the list on a column you choose |
| **Filter** | Opens a panel where you narrow the list, then select **Apply** |

![The Calls list in the Agent Portal, showing the agent's own processed calls with the search, sort, and filter controls above it](../../img/screenshots/agent_view/interactions/interactions-calls-overview.png)

![The sort control open on the interactions list, with the columns you can order by](../../img/screenshots/agent_view/interactions/interactions-sort.png)

![The filter panel open on the interactions list, with the Apply button that puts the filter into effect](../../img/screenshots/agent_view/interactions/interactions-filter.png)

![The Chats list, laid out the same way as Calls](../../img/screenshots/agent_view/interactions/interactions-chats-overview.png)

Select an interaction to open it.

---

## 2. Read the Detailed View

A call's detailed view has three cards: **Audio** and **Smart Detector** on the left, **Call Details** and **Transcript** on the right. A chat has two: **Smart Detector** alone on the left, and **Chat Details** and **Chat** on the right, since there is nothing to play. The trail at the top reads **Interactions › Calls › Call Details** on a call, and **Interactions › Chats › Chat Details** on a chat.

### A. Audio and Smart Detector

**Audio** holds the player, on a call only. Where a recording is unavailable it reads **Audio not available**. A control in this card's corner reads **Expand Section** or **Collapse Section**, giving it the whole width while you read.

**Smart Detector** holds two tabs:

| Tab | What it shows |
| :--- | :--- |
| **Summary** | What the AI found in the conversation |
| **Scorecard** | Each question your organisation scores on, with its **Weight**, **Outcome**, and **Score** |

On **Scorecard**, switch **View** between **Automatic** and **Manual** to see the AI's answers or a reviewer's. **Filter Scorecard** narrows a long list of questions.

A question that did not apply to the conversation reads **N/A** rather than counting against you.

![A call open in the detailed view, with the audio player and Smart Detector analysis on the left and Call Details and the Transcript on the right](../../img/screenshots/agent_view/interactions/interactions-calls-detailed-view.png)

### B. Call Details (or Chat Details) and the Transcript (or Chat)

**Call Details**, or **Chat Details** on a chat, lists:

- The agent, **Call ID** (**Chat ID** on a chat), **File Name**, **Date**, and **Uploaded**
- **Handle Time**, and **Silent Time** on a call
- **Agent Score** and **Initial Score**
- **Alerts**
- **Department**

{/* DEV: an earlier pass changed this list to drop Alerts and add Team/Topic/Direction, based on infoCard.jsx's agentMode gating. Reverted: the live screenshots below clearly show Alerts (reading "-") and no Team/Topic/Direction fields on the agent's own Call Details or Chat Details. Either infoCard.jsx isn't what renders this Coaching Portal page, or it's since changed. Worth checking which component actually renders this panel before touching this list again. */}

Below it, a call's **Transcript** switches between **Original** and **English** when the conversation was not in English, and uses **Search** to find a word in it. Selecting a line's timestamp jumps the audio to that moment, and **Play from here** does the same thing. A chat's own panel is titled **Chat** rather than Transcript, with the same **Original**/**English** and **Search** controls, but nothing to jump the audio to.

Where a transcript is unavailable the panel reads **Transcript not available**.

![A chat open in the detailed view, with Smart Detector alone on the left and Chat Details and the Chat on the right](../../img/screenshots/agent_view/interactions/interactions-chats-detailed-view.png)

---

## 3. Read Your Coaching Comments

Select **View Comments** to open the comments panel. This is where your team lead leaves feedback on the conversation, and where you reply to it.

A comment that tags you with **@** also raises a notification, so check **Notifications** under **ADMIN** if you want to find recent feedback without opening each interaction. See [Manage Your Account](./your-account.md).

---

## Check Your Work

Open one of your interactions and confirm three things: the transcript loads, the **Scorecard** tab shows an outcome on each question, and **Call Details** (or **Chat Details**) names you as the agent.

An interaction you expected and cannot find is usually one of two things. It may still be processing, in which case it appears once analysis finishes. Or your organisation shows agents reviewed interactions only, and nobody has reviewed it yet.

---

## Related

- [Monitor Your Performance](./personal-performance.md): how these interactions add up to your scores
- [Track Your Courses](./your-courses.md): the training your scores can lead to
- [Manage Your Account](./your-account.md): where comment notifications arrive

## Need Help?

**Contact Support:** support@botlhale.ai
