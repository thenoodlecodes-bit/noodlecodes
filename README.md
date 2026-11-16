# Noodle Codes

Company website. Next.js 16 (App Router, Turbopack), React 19, TypeScript, CSS Modules. Every page is generated at build time.

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
| `RESEND_API_KEY` | Sends contact form and newsletter submissions through [Resend](https://resend.com) |
| `MAIL_FROM` | Sender on a domain verified in Resend |
| `MAIL_TO` | Where submissions land. Defaults to the hello@ address in `site.ts` |

Without Resend configured, both forms log to the console in development and return 503 in production.

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
| `/about`, `/careers`, `/careers/[slug]`, `/contact`, `/privacy` | Company pages |

Adding an item to a content file creates its page, its sitemap entry and its links in menus and related lists.

## Editing content

All copy lives in `src/content/`. Everything there is placeholder: client names, case studies, people, numbers, addresses and roles. Types are in `types.ts`.

| File | Holds |
| --- | --- |
| `site.ts` | Name, emails, phone, offices, headline facts, socials |
| `services.ts` | The five services, each with the problem clients bring, and budgets for the contact form |
| `solutions.ts` | Relay, Mailroom, Wave, Pulse and Trail |
| `industries.ts` | Six industry pages |
| `cases.ts` | Client stories: the question, our call, options weighed, approach and outcome |
| `insights.ts` | Articles, written as blocks (paragraph, heading, list, quote, callout) |
| `stack.ts` | Stack Report entries and verdicts |
| `people.ts` | Leadership and article authors |
| `careers.ts` | Benefits, hiring process and open roles |
| `about.ts` | Story, values, timeline, giving back |
| `clients.ts` | Client wall wordmarks |

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
- **Forms**: `src/lib/enquiry.ts` holds the zod schemas shared by the client and the API routes in `src/app/api`. Both routes rate limit per instance, filter bots with a honeypot and email the team through `src/lib/mail.ts`.
- **SEO**: per-page metadata, sitemap, robots, Open Graph image and JSON-LD (organisation, breadcrumbs, articles, FAQs, job postings).

## Deploy

Works on Vercel or any Node host. Set the environment variables, then `npm run build && npm run start`.

`legacy-static/` is an earlier prototype. It is not part of the app and can be deleted.
