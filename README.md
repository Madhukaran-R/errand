# Errand

This repository is configured as a **Next.js static site**.

## Prerequisites

- Node.js 18.18+ (or newer LTS)
- npm

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build static output

```bash
npm run build
```

This generates a static site in the `out/` directory (via `output: "export"` in `next.config.mjs`).

## Deploy

Upload the contents of `out/` to any static hosting provider.
