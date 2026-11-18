# Noodle Codes

Company website. Next.js 16 (App Router, Turbopack), React 19, TypeScript, CSS Modules. Pages are generated at build time; only prices and the contact form's budget ranges are filled in per visitor.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run check      # typecheck + lint + production build
npm run start      # serve the production build
```

Node 20.9 or newer.

## Environment

Copy `.env.example` to `.env.local`.

| Variable | What it does |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, sitemap and social cards |
| `NEXT_PUBLIC_GTM_ID` | Optional Google Tag Manager container. Page views, clicks, scroll depth, filters and leads are already pushed to `dataLayer` |
| `ENQUIRY_SHEET_URL` | The Apps Script web app URL (ends in `/exec`). Every enquiry and newsletter signup is added as a row in the Google Sheet |
| `RESEND_API_KEY` | Optional. Also emails each submission through [Resend](https://resend.com) |
| `MAIL_FROM` | Sender on a domain verified in Resend |
| `MAIL_TO` | Where Resend emails land. Defaults to the email in `site.ts` |

A submission counts as delivered when the sheet or Resend accepts it. With neither set, forms log to the console in development and return 503 in production.

### Enquiries

1. The contact form and footer newsletter post to `/api/enquiry` and `/api/subscribe`.
2. The route saves a row to the Google Sheet (`src/lib/sheet.ts`) and, if Resend is set, emails the team.
3. After sending, the visitor can continue on WhatsApp with their enquiry typed in. WhatsApp and email links use `site.whatsapp` and `site.emails` in `src/content/site.ts`.

`apps-script/enquiry-sheet.gs` is the sheet's script. It also emails `thenoodlecodes@gmail.com` for each row and adds phone and country columns. After pasting it, publish a new version of the existing deployment so the URL stays the same.

### Prices and currency

Starting prices live in `src/content/pricing.ts`, in dollars. Visitors in India see rupees at ₹100 to the dollar (`RUPEES_PER_DOLLAR`); everyone else sees dollars. The country comes from the host's IP country header (Vercel, Cloudflare and CloudFront send one). Without it, an Indian browser language such as `en-IN` counts as India. Visitors can switch currency on the pricing page, and the choice is kept in a cookie.

## Pages

| Route | Template |
| --- | --- |
| `/` | Home |
| `/services`, `/services/[slug]` | The five services |
| `/solutions/[slug]` | The five plug and play modules |
| `/industries`, `/industries/[slug]` | Six sectors |
| `/work`, `/work/[slug]` | Client stories, filterable by industry and service |
| `/insights`, `/insights/[slug]` | Articles, filterable by topic |
| `/insights/stack-report` | The Stack Report: tools and techniques with a verdict on each |
| `/pricing` | Starting prices with an estimate builder, in rupees or dollars |
| `/about`, `/careers`, `/careers/[slug]`, `/contact`, `/privacy` | Company pages |

Adding an item to a content file creates its page, its sitemap entry and its links in menus and related lists.

## Editing content

All copy lives in `src/content/`. Everything there is placeholder: client names, case studies, numbers and roles. The site names no team members and lists no office addresses. Types are in `types.ts`.

| File | Holds |
| --- | --- |
| `site.ts` | Name, email, WhatsApp number, headline facts, socials |
| `services.ts` | The five services, each with the problem clients bring |
| `pricing.ts` | Starting prices, rupee rate, budget ranges and timelines for the contact form |
| `solutions.ts` | Relay, Mailroom, Wave, Pulse and Trail |
| `industries.ts` | Six industry pages |
| `cases.ts` | Client stories: the question, our call, options weighed, approach and outcome |
| `insights.ts` | Articles, written as blocks (paragraph, heading, list, quote, callout) |
| `stack.ts` | Stack Report entries and verdicts |
| `careers.ts` | Benefits, hiring process and open roles |
| `about.ts` | Story, values, timeline, giving back |
| `clients.ts` | Client roster: sector, city, work, services, since and story |

## How it fits together

- **Design tokens** are in `src/app/globals.css`: ink `#111318` and chilli red `#D7332A`, solid grey surfaces with visible borders, and Archivo for everything (its width axis widens headings), with JetBrains Mono for meta. Swapping the brand means editing the tokens at the top of that file.
- **Built to be read by anyone.** Every section is a short heading, one line of context and one clear block. Details live on inner pages.
  - `src/components/Untangle` is the home hero: a before and after diagram of a typical company's systems, labelled in plain English with the technical name underneath. Nodes and both layouts (wide and phone) are data in `diagram.ts`.
  - `src/components/Cards` holds every card: services (with drawings from `src/components/Pictogram`), client results led by the number, articles, simple tiles and the Stack Report cover.
  - `src/components/Process` is the four-step "how we work".
  - `src/components/Brief` ends most pages with a box to start a brief. Its text carries into the contact form through `?brief=`.
  - Client story pages put the question, our answer and the results first, with the full story beside a sticky facts panel.
- **Each kind of page has its own shape**, so visitors can tell where they are:
  - Services (`src/components/Service`) read like hiring a team. The hero pairs the offer with how a first call usually starts, and the index introduces each service by the problem clients bring.
  - Plug and play modules (`src/components/Tool`) read like product pages. Each shows the module working in an HTML picture (`ToolPreview.tsx`), then features and a spec sheet. Module cards reuse the picture as a thumbnail.
  - Industries and insights (`src/components/Read`) read like briefings: a grey title band with plain facts, then a reading column with an "On this page" list.
- **Clients are everywhere.** `src/content/clients.ts` holds the roster (sector, city, what we did, services, since, story). `src/components/Clients` draws the wordmarks and uses them in the home band and quotes, the clients page (`/work`, roster then stories), story cards, "Who hired us for this" on service pages and "Clients in this sector" on industry pages.
- **Shared page parts** are in `src/components/Page`: the general hero (about, work, careers, contact), breadcrumbs (with JSON-LD), the dark stat strip, steps, FAQ (with JSON-LD), call to action band and section layouts.
- **The header** gets only the small menu data from the layout, so article bodies never ship to the browser.
- **Forms**: `src/lib/enquiry.ts` holds the zod schemas shared by the client and the API routes in `src/app/api`. Both routes rate limit per instance, filter bots with a honeypot and deliver through `src/lib/mail.ts` (Google Sheet plus optional email).
- **SEO**: per-page metadata, sitemap, robots, Open Graph image and JSON-LD (organisation, breadcrumbs, articles, FAQs, job postings).

## Deploy

Works on Vercel or any Node host (it needs a server, not a static export, because prices are chosen per visitor). Set the environment variables, including `ENQUIRY_SHEET_URL`, then `npm run build && npm run start`.

`legacy-static/` is an earlier prototype. It is not part of the app and can be deleted.
