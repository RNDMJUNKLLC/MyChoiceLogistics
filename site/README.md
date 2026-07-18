# My Choice Logistics — One Page Site

## Local dev
1. Install dependencies:
   ```bash
   npm install
   ```
2. Add your phone number:
   - Replace `REPLACE_WITH_PHONE` in `src/App.jsx` and `public/index.html` with your phone number in E.164 or local format (e.g. +1-555-555-5555).
3. Run dev server:
   ```bash
   npm run dev
   ```

## Build
```bash
npm run build
npm run preview
```

## Deploy (Vercel)
- Connect the repo to Vercel (https://vercel.com/new).
- Set the project root to `/` and deploy.
- For domain via Cloudflare: add the Vercel-provided records in Cloudflare DNS or use Vercel's instructions to configure Cloudflare.

## HIPAA note
This site intentionally collects no PHI. All HIPAA-sensitive scheduling or requests must be completed by phone. If you later require web-based PHI intake, plan for a HIPAA-compliant backend and BAA with your hosting/form provider.

## Replace placeholders
- `REPLACE_WITH_PHONE` — set to your phone number.
- `YOUR_DOMAIN_HERE` in `public/index.html` — set to your domain before production.
