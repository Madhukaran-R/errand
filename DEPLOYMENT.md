# GitHub Pages Deployment Setup

Your site is now configured to auto-deploy to GitHub Pages on every push to `main`.

## Enabling GitHub Pages

1. Go to your GitHub repository: https://github.com/Madhukaran-R/errand
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
   - Leave other settings as default
4. Click **Save**

The workflow will automatically trigger on your next push. You can monitor it in the **Actions** tab.

## What Happens

- On every push to `main`:
  1. GitHub Actions checks out your code
  2. Installs dependencies via `npm ci`
  3. Runs linting via `npm run lint`
  4. Builds the static export via `npm run build`
  5. Uploads the `out/` directory to GitHub Pages
  6. Your site is live at: `https://errand.ltd/`

## Local Testing

To test the static export locally before pushing:

```bash
npm run build
npm run preview
```

Then visit `http://localhost:3000` in your browser.

## Workflow File

The deployment configuration is in `.github/workflows/deploy.yml`.

You can push your changes now:

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages auto-deployment workflow"
git push origin main
```

Then enable GitHub Pages in your repository settings (step above).
