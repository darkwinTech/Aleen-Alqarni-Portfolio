# Aleen AlQarni — Portfolio

A React (Vite) portfolio site: bold typographic style, teal/emerald accent, light/dark theme toggle,
one scrolling homepage with dedicated case-study pages to come for top projects.

## Running it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. Edit files under `src/` and it hot-reloads.

To build the production version:

```bash
npm run build   # outputs to dist/
npm run preview # serves the built version locally, to sanity-check before deploying
```

## Where everything lives

- **All the copy (bio, skills, experience, project descriptions) — `src/data/content.js`.**
  This is the one file to edit for wording changes; no need to touch components for text edits.
- **Sections/components** — `src/components/` (Hero, About, Skills, Projects, Experience, Contact, Header, Footer).
- **Theme (colors, fonts)** — `src/styles/theme.css`. Light theme is `:root`, dark theme is `[data-theme='dark']`.
  Change `--accent` in both places to swap the accent color.
- **Light/dark toggle logic** — `src/context/ThemeContext.jsx`. Persists the choice in the browser's
  localStorage so it's remembered on return visits; defaults to the visitor's OS preference on first visit.

## Things still to do before this goes live

1. **Send over your real project list** (screenshots, live demo links, GitHub repo links, and which 2-3
   deserve a full case-study page) — I'll build those out and replace the placeholder cards in
   `src/data/content.js`.
2. **Create a Formspree form** at formspree.io (free), then replace `YOUR_FORM_ID` in
   `src/data/content.js` (`contact.formspreeEndpoint`) with your real form ID so the contact form
   actually delivers to your inbox.
3. **Swap the placeholder resume PDF** — `public/Aleen_AlQarni_Resume.pdf` currently holds the edited
   resume from earlier in this conversation. Replace it with whatever's current whenever you update it
   (same filename, so the header's "Resume" button keeps working).
4. **Pick and buy a custom domain** — I'll suggest available options once you're ready; point it at
   wherever you deploy (see below).
5. **Review every paragraph in `content.js`.** I drafted the About/Hero copy from your resume — it should
   sound like you, so edit freely.

## Deploying

Easiest path is Vercel (free tier, matches the React/Vite stack, auto-deploys on every push):

1. Push this project to a GitHub repo.
2. Go to vercel.com → New Project → import the repo. Vercel auto-detects Vite; no config needed.
3. Once it's live on a `.vercel.app` URL, add your custom domain under Project Settings → Domains.

## Tech stack

- React 19 + Vite
- Plain CSS (CSS variables for theming, no framework) — kept dependency-free on purpose so it stays
  fast and easy to maintain solo
- Formspree for the contact form (no backend to host)
