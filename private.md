# Akashdeep Guruswamy — Portfolio (Vite + React + Tailwind)

This scaffold is a multi-page React + Tailwind portfolio modeled visually after a clean minimal design.

## Quick start

1. Install:
```bash
npm install
```

2. Run dev server:
```bash
npm run dev
```

3. Build:
```bash
npm run build
```

## Deploy to GitHub Pages

1. Install `gh-pages` (already in devDependencies).  
2. Set the `homepage` field in package.json to either:
   - `https://<your-github-username>.github.io` for user site, or
   - `https://<your-github-username>.github.io/<repo-name>/` for project site.

3. Run:
```bash
npm run build
npm run deploy
```

Alternatively, you can use GitHub Actions or Vercel. For a username.github.io site, push the `dist` contents to the `gh-pages` branch or follow GitHub Pages docs.

## Notes

- The `Resume.pdf` file is included in the project root and referenced at `/Resume.pdf`.
- This scaffold includes basic pages (Home, About, Projects, Resume, Contact). Replace copy and add screenshots/demos in `src/pages/Projects.jsx`.
- To embed live demos, implement small components (in `src/components`) and import them into the Projects page.
