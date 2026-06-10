# Repository Guidelines

## Project Structure & Module Organization

This is a Vite + React portfolio site. Application code lives in `src/`: `main.jsx` mounts the app, `App.jsx` defines routes, `components/` contains shared UI, and `pages/` contains route views. Styles are in `src/index.css` and `src/App.css`.

Static assets live in `public/`. Portfolio folders are under `public/portfolio/`; each should include `thumb.jpg`. `scripts/generatePortfolioList.js` scans these folders and writes `public/portfolio/portfolio_data.json`. `dist/` is Vite build output, and `docs/` appears to be published/static output; avoid manual edits there unless updating deployment artifacts.

## Build, Test, and Development Commands

- `npm install`: install dependencies from `package-lock.json`.
- `npm run dev`: start the local Vite development server.
- `npm run build`: create a production build in `dist/`.
- `npm run preview`: serve the production build locally for verification.
- `npm run lint`: run ESLint across the repository.
- `npm run generate:portfolio`: regenerate portfolio JSON after adding, removing, or renaming image folders.
- `npm run deploy`: build and publish `dist/` to the configured GitHub Pages branch.

## Coding Style & Naming Conventions

Use JavaScript ES modules and React function components. Name React components in `PascalCase` (`PortfolioDetail.jsx`) and hooks/state variables in `camelCase`. Keep route pages in `src/pages` and reusable components in `src/components`.

Follow the existing JSX style: double quotes in imports and JSX strings, Material UI `sx` props for styling, and concise inline callbacks for simple UI behavior. Run `npm run lint` before submitting changes. ESLint enforces recommended JavaScript rules, React Hooks rules, React Refresh guidance, and unused-variable checks.

## Testing Guidelines

No test framework or `npm test` script is currently configured. Validate changes with `npm run lint`, `npm run build`, and a manual pass through `npm run dev` or `npm run preview`. When adding tests, prefer `*.test.jsx` files or `src/__tests__/`, and add the script to `package.json`.

## Commit & Pull Request Guidelines

Git history was not available in this environment, so use clear, imperative commit messages such as `Add portfolio metadata guard` or `Fix mobile header spacing`. Keep each commit focused.

Pull requests should include a summary, verification steps, linked issue if applicable, and screenshots for visual changes. For portfolio updates, mention whether `npm run generate:portfolio` was run.

## Security & Configuration Tips

Do not commit private credentials or customer-only assets outside the intended public portfolio folders. Check `vite.config.js`, `package.json` `homepage`, and the hardcoded base URL in `scripts/generatePortfolioList.js` before changing deployment paths.
