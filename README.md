# ME.Html -> React migration

This repository contains your original static site plus a minimal React/Vite scaffold to start the migration.

What I added:

- `package.json` — scripts for `dev`, `build`, `preview`.
- `public/index.html` — a minimal Vite entry (so the app can be moved into root later).
- `public/legacy-Index.html` — a copy of your original `Index.html` for reference.
- `src/main.jsx`, `src/App.jsx`, and `src/styles.css` — minimal React entry and styles.

Quickstart (PowerShell):

1. Install dependencies:

```powershell
npm install
```

2. Start dev server:

```powershell
npm run dev
```

Notes / next steps:

- I did not overwrite your original `Index.html`. I copied it into `public/legacy-Index.html` so you can always refer back.
- To run the Vite dev server from this folder, you can either:
  - Rename your existing `Index.html` (e.g. `Index.html.bak`) and move the `public/index.html` to the repository root as `index.html`. OR
  - Run Vite with `--strictPort` and a different config; the simplest is to temporarily rename the original.
- Next I can:
  - Break the legacy HTML into React components (Header, Hero, About, Projects, Contact).
  - Port `script.js` piece-by-piece into React hooks/components.
  - Wire up static assets under `public/images`.

Tell me which part you want next (component-by-component port, or automated extraction of sections into components).