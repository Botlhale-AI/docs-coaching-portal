# Working in docs-coaching-portal

Read this before changing anything. For writing rules see [STYLE_GUIDE.md](./STYLE_GUIDE.md). For where a page belongs see [DOCUMENTATION_FRAMEWORK.md](./DOCUMENTATION_FRAMEWORK.md).

## What this repository is

The customer documentation for the **Vela Coaching add-on**: courses, progress, awards, preferences, and the agent-facing Agent Portal.

The main platform has its own repository, [docs-vela](https://docs-vela.botlhale.ai). Platform detail belongs there. Where a coaching page depends on something in the platform, such as scoring or interactions, link out rather than explaining it here.

**Two audiences share this site**, and a reader is only ever one of them:

- **Team leads**, working in the **Coaching** section of the main Vela platform.
- **Agents**, working in the Agent Portal, who see only their own work.

Say which audience a page is for in its opening line. This is why the sidebar splits by audience where docs-vela splits by task. It is the one structural departure, and it is deliberate.

## Before you commit

```
npm run check
```

Linter then build, the same as CI. Both must pass.

This repository uses **npm**, not yarn. CI installs from `package-lock.json`.

## Verifying a claim

Every factual statement needs a source. In order of authority:

1. **The live screen.** A screenshot, or the product running. This beats everything.
2. **Source** in `vela` and `vela-data`. Coaching lives under `app/(pages)/coaching` for the team-lead side and `app/(agents)/coaching_portal` for the agent side.
3. **Support email and recollection.** Context only. These describe one moment and go stale.

Where two disagree, keep the higher authority, and say in the page that they differ and which won.

**Source has been wrong about the screen here.** A **Sort By** control on the Coaching Dashboard is rendered and does nothing: its handler is `// Sort logic would go here`. The awards page used the team lead's field names for what an agent actually sees. Both were found by opening a screenshot, not by reading source.

**Existing in source does not mean reachable.** Check for commented-out JSX, imports with no render, routes with no navigation entry, and handlers with empty bodies.

Where a claim cannot be verified, mark it rather than guessing:

```
{/* UNVERIFIED: <claim>. Not in vela or vela-data source. Needs <who> to confirm. */}
```

Never invent a label, a limit, or a definition.

## The two sides use different labels

The same thing is often named differently for a team lead and for an agent. Use the label the reader of that page sees.

| Team lead sees | Agent sees |
| :--- | :--- |
| **Award Message** | **Message from your team lead** |
| **Download Award** | **Download** |

The same applies across the two repositories. The coaching dashboard panel is **Auto Fails**; the docs-vela scorecard field is **Auto-Fail**. Both are correct on their own screen. Making them match would introduce an error.

## Defect classes worth hunting

**Labels taken from the wrong side.** The commonest defect here. Check which audience the page serves before trusting a label.

**Invented terminology.** A name we made up for something the product already names, such as writing "trigger score range" for **Training Initiation Score Range**.

**Controls that exist and do nothing.** See the Sort By example above.

**Database-sourced values.** Category names and metric names live in the database. Only a screen confirms them.

**Silent failure.** A caution that arrives but is never counted. Metadata dropped without an error.

## Tooling caveats

`npm run check:labels` reports bold terms it cannot find in the product source. It has two false-positive classes: bold used for emphasis, and real labels it cannot match because they render as text nodes. Treat the output as a list to read, never as a defect list.

## Constraints that override style

- **POPIA.** Mask personal information in screenshots with solid bars, never blur. Never reshoot to expose what was masked.
- **Internal-only controls** are painted out of captures and never documented.
- **Unreleased features** are not documented from a working branch. Cautions is written and held at `draft: true` because it is absent from `origin/main`. Check the branch before writing a page.
- Accuracy beats positive phrasing.

## Screenshots

Most captures here predate the current release cycle, and the linter warns on any over a year old. A warning is not proof of staleness: this product changed little on `main` for a long stretch. Open the screenshot against the product before replacing it.

There is a large queue of coaching changes on `dev`. Where a reshoot is due anyway, wait for that release rather than capturing twice.

## Git

- Give a commit message rather than committing, unless asked to commit.
- Confirm before committing, and again before pushing.
- Never push to `main` or `dev`.
- No `Co-Authored-By` trailer.

## Deploying

`url:` in `docusaurus.config.js` must name the host that serves the site. It is `docs-coaching.botlhale.xyz`.

Redirects live in the same file, and this repository already carries a set from the move to audience folders. **Adding, renaming, or removing a page changes its URL.** Before shipping a structural change, diff the live sitemap against the build and add a redirect for anything that would stop resolving.

After deploying, confirm the live site matches this repository rather than assuming the deploy ran.

## What not to do

- Do not rewrite a page because you prefer different wording.
- Do not restructure a page that passes both gates. Count its tables and lists first.
- Do not unify wording with docs-vela where the two products genuinely differ.
- Do not add content to make a page longer.
