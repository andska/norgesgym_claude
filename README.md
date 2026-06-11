# Norgesgym

Norgesgym landing page — Next.js 15, App Router, Tailwind CSS v4.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## GitHub Pages deployment

### One-time setup

1. Push this repository to GitHub as `norgesgym_claude`.
2. Go to **Settings → Pages → Build and deployment**.
3. Set **Source** to **GitHub Actions**.
4. Save.

### Deploy

Push to `main`. The workflow in `.github/workflows/deploy.yml` will:

- Install dependencies
- Build with `GITHUB_PAGES=true` (sets `basePath` and `assetPrefix` to `/norgesgym_claude/`)
- Upload the `out/` directory
- Deploy to GitHub Pages

The site will be live at `https://<your-username>.github.io/norgesgym_claude/`.

### Local production build

```bash
npm run build   # builds to out/ without the /norgesgym_claude prefix
```

To test with the GitHub Pages prefix locally:

```bash
GITHUB_PAGES=true npm run build
npx serve out
```
