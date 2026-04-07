# Nihao Niu Academic Homepage

Single-page academic homepage built with Astro and prepared for GitHub Pages deployment.

## Local development

1. Install Node.js 20 or later.
2. Run `npm install`.
3. Run `npm run dev`.

## Content updates

Edit `src/data/site.ts` to update:

- profile information
- external links
- publication entries

Replace the fallback avatar by adding an image path to `profile.avatar`. Keep the file under `public/` for the simplest setup.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` assumes a project site published from a repository such as `https://USERNAME.github.io/REPO/`.

If you publish this as a user or organization site instead, update:

- `BASE_PATH` in `.github/workflows/deploy.yml` to `/`
- `SITE_URL` in the same workflow to your final domain

You can also set `SITE_URL` and `BASE_PATH` locally before `npm run build` if you want the generated metadata and asset paths to match a custom domain.
