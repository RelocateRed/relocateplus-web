# Route guides — how they work

Guides live at `/guides/<slug>`. Each guide is a data file in `content/guides/`,
rendered by `components/guides/guide-article.tsx`.

## Add a guide
1. Copy an existing file in `content/guides/` (e.g. `us-to-spain.ts`) to a new name.
2. Rewrite it for the new route. Every fact needs `sourceIds` pointing to an entry in `sources`
   (prefer consulates, government sites and official gazettes; mark them `official: true`).
3. Keep `status: "draft"` and register it in `content/guides/index.ts`.
4. Run `npm run build`. The build fails if a fact has no source, the guide is too thin,
   or it shares >15% of its sentences with another guide (see `lib/guides/validate.ts`).
5. Push a branch → review on the Vercel preview URL (drafts show only there, noindex).

## Publish a guide
Set `status: "published"` and `datePublished: "YYYY-MM-DD"`, then merge to `main`.
It's added to `/sitemap.xml`, `/llms.txt` and the `/guides` hub automatically.

## Keep it current
- Re-check sources at least every 3 months and update `lastVerified` (the build warns after 120 days).
- Each January, thresholds tied to minimum wage / IPREM / UMA / FEIE change — update PT, ES, MX guides.

## Optional Vercel environment variables
- `NEXT_PUBLIC_APP_STORE_PROVIDER_TOKEN` — App Store Connect campaign provider token (per-guide install tracking)
- `NEXT_PUBLIC_PLAY_STORE_URL` — Google Play link; shows a Play button on guides once set
