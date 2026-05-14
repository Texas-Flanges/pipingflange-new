# Deployment Cheat Sheet — pipingflange-new

## What you have
A complete Next.js 14 super pillar site for pipingflange.com, blending content from pvfplanet.com, lightweightflanges.com, and apiflange.com. Copper accent (#B45309). 47 files, 36+ pages.

## Local verify (recommended before deploy)

```powershell
cd "C:\path\to\pipingflange-new"
npm install
npm run build
npm run dev
```

Open http://localhost:3000 and click around. Look for: nav dropdowns readable, all links resolve, calculator pages compute, blog posts render.

## Push to GitHub

```powershell
cd "C:\path\to\pipingflange-new"
git init
git config user.email "Cheyanne@texasflange.com"
git config user.name "TexasFlange-hub"
git add -A
git commit -m "Initial pipingflange-new super pillar build"
```

Create repo via GitHub web UI:
- Org: Texas-Flanges
- Name: pipingflange-new
- Visibility: Private
- Bootstrap with README.md (so main branch exists)

Then push:

```powershell
git remote add origin https://<USERNAME>:<super-pillar-deploy PAT>@github.com/Texas-Flanges/pipingflange-new.git
git branch -M main
git pull origin main --allow-unrelated-histories
git push -u origin main
```

## Deploy to Vercel

Easiest path: Vercel dashboard
1. New Project under Texas Flange team
2. Import github.com/Texas-Flanges/pipingflange-new
3. Framework preset: Next.js (auto-detected)
4. Root directory: leave as-is
5. Build command: leave default (`next build`)
6. Output directory: leave default (`.next`)
7. Deploy

## Post-deploy QA

After Vercel says it's live, run through the Visual QA checklist:

- [ ] Hover every nav dropdown — text is dark, readable on white bg
- [ ] Click every dropdown link — none 404
- [ ] Blog appears as direct nav link (not just under Resources)
- [ ] Click every CTA button — text is white on copper bg, button visible
- [ ] Homepage stats render with numbers
- [ ] Pressure spectrum cards on homepage render with copper accent text
- [ ] /products/flanges loads with full AWWA and API tables
- [ ] /standards/awwa-flanges shows the pressure rating table (Class B/D/E/F)
- [ ] /materials/exotic-alloys lists Hastelloy, Inconel, Monel, duplex, etc.
- [ ] /industries/[any] dynamic page renders (try /industries/oil-gas, /industries/waterworks)
- [ ] /tools/bolt-torque-calculator computes a torque when you fill the fields
- [ ] /tools/flange-dimension-calculator returns OD/BC for B16.5 Class 150 6"
- [ ] /tools/pressure-temperature-rating returns a PSI value for A105 Class 150 at 500F
- [ ] /blog index shows 3 posts
- [ ] Click each blog post — full content renders, related links work
- [ ] Footer has PO Box 2889 Pearland TX 77588 (no street address)
- [ ] No "Texas Flange" appears in heading text (page titles and h1s should say Piping Flange, not Texas Flange)
- [ ] No employee names anywhere
- [ ] Mobile menu works (resize to phone width and toggle hamburger)
- [ ] Tech Resources links all open texasflange.com blog posts (not 404)

If anything breaks, fix locally, commit, push — Vercel auto-redeploys on push to main.

## What needs human review post-launch

**Jeff** (factual accuracy review):
- AWWA C207 pressure table values on /standards/awwa-flanges
- API 6A class ratings on /products/flanges
- Material grade descriptions on /materials/*
- Bolt torque calculator constants (yield strengths, tensile stress areas)
- P-T rating calculator interpolation logic

**Marika** (image work):
- Site currently has zero images (no placeholders). Whenever you want photos, add them to /public and reference from pages. Industries, products/flanges, and blog post hero areas are the natural spots.

## Notes for the next 3 builds

The Technical Resources URLs are the same across all 6 prior pillars and this one. Reuse this exact set:

- Flange Types Guide: https://www.texasflange.com/blog/the-complete-guide-to-flanges/
- Pressure-Temperature Ratings: https://www.texasflange.com/blog/use-of-asme-b16-5-standards-for-flange-pressure-ratings/
- Bolt Torque Reference: https://www.texasflange.com/blog/bolt-dimensions-explained-a-complete-guide-to-measuring-diameter-threads-and-length/
- Material Grade Guide: https://www.texasflange.com/blog/do-you-offer-different-material-grades-for-a-variety-of-industrial-flanges/
- Corrosion Prevention: https://www.texasflange.com/blog/flange-maintenance-101-prevent-rust-corrosion-effectively/
- Flange Dimension Tables: https://www.texasflange.com/flange-drawings-models2/blind/

Colors used so far that we know of:
- apiflange-new: Gold #B5873A
- blindflange-new: Steel Blue #2563EB
- pipingflange-new: Copper #B45309
- (carbonflanges, flangeandfittings, industrialflange, asmeflanges colors: unknown from this session)

Still available from the pool: Teal #0D9488, Emerald #059669, Amber #D97706, Crimson #DC2626, Violet #7C3AED, Slate #475569
