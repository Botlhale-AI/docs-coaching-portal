# Vela Coaching Portal Documentation

The documentation site for the Vela Coaching add-on, built with [Docusaurus](https://docusaurus.io/).

It covers two audiences: team leads working in the **Coaching** section of the main Vela platform, and agents working in the Agent Portal. The main platform is documented separately, in [docs-vela](https://docs-vela.botlhale.ai).

This repository uses **npm**. `package-lock.json` is the lockfile CI installs from, so use npm rather than yarn to keep your tree matching the build.

## Installation

```
npm install
```

## Local development

```
npm start
```

Starts a local development server and opens a browser window. Most changes appear live without restarting the server.

## Checking your work

```
npm run check
```

Runs the documentation linter and then the build, which is exactly what CI runs on every push. Either command can be run on its own:

```
npm run lint:docs
npm run build
```

The linter enforces the rules in [STYLE_GUIDE.md](./STYLE_GUIDE.md) that the build cannot see: frontmatter, house style, images, links, and screenshot age.

```
npm run check:labels
```

Lists bold terms that do not match a label found in the product source. Read the findings rather than acting on them, because the checker cannot match labels rendered as text nodes and so reports real labels as missing. See [CLAUDE.md](./CLAUDE.md).

`npm run build` generates static content into `build`, which any static host can serve.

## Writing

Read [CLAUDE.md](./CLAUDE.md) before making a change, [STYLE_GUIDE.md](./STYLE_GUIDE.md) before editing a page, and [DOCUMENTATION_FRAMEWORK.md](./DOCUMENTATION_FRAMEWORK.md) before adding one.

## Deployment

Using SSH:

```
USE_SSH=true npm run deploy
```

Otherwise:

```
GIT_USER=<GitHub username> npm run deploy
```

This builds the site and pushes it to the `gh-pages` branch.

The site is served from `docs-coaching.botlhale.xyz`, which is what `url:` in `docusaurus.config.js` declares. After deploying, confirm the live site matches this repository rather than assuming the deploy ran:

```
curl -s https://docs-coaching.botlhale.xyz/sitemap.xml
```
