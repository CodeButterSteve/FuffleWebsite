# Fuffle Website

Marketing and support site for Fuffle. Real-world challenges for meaningful connection.

## Stack

- Vite
- React
- TypeScript
- Client-side routing with React Router

## Pages

- `/` Home
- `/privacy` Privacy Policy placeholder
- `/terms` Terms of Service placeholder
- `/support` Support and account deletion instructions

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is written to `dist`.

## Lint

```bash
npm run lint
```

## Deploy to Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`

The `public/_redirects` file sends all routes to `index.html` so client-side
routing works on Cloudflare Pages.

## Contact

- support@fuffle.app
- privacy@fuffle.app

Fuffle Inc.
