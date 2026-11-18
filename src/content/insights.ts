import type { Insight } from "./types";

// Placeholder articles. Replace with real writing from the team.
export const insights: Insight[] = [
  {
    slug: "ad-platforms-grade-their-own-homework",
    title: "Your ad platforms are grading their own homework",
    dek: "Meta, Google and every other ad platform report the conversions they take credit for. How to build a measurement setup you own, with numbers your finance team will believe.",
    category: "Measurement",
    date: "2026-11-04",
    minutes: 5,
    featured: true,
    services: ["ads-tracking", "digital-marketing"],
    industries: ["retail", "hospitality"],
    body: [
      {
        type: "p",
        text: "Open Meta Ads Manager, Google Ads and GA4 for the same week and you will usually get three different numbers for the same sales. Add them up and the platforms often claim more revenue than the business actually banked. Nobody is lying. Each platform counts the conversions it can see, using its own attribution window, and gives itself the credit.",
      },
      {
        type: "p",
        text: "That was a manageable annoyance when browser pixels saw most of what happened. It is a real problem now. Safari and Firefox limit cookies, ad blockers strip pixels, consent banners switch tracking off for a share of visitors, and many Indian buyers move between Instagram, WhatsApp and a browser before they pay. If your measurement depends on a pixel in the browser, you are setting budgets from a partial picture.",
      },
      { type: "h2", text: "Where the numbers go missing" },
      {
        type: "p",
        text: "On most of the D2C and services accounts we audit, the gaps come from the same handful of places.",
      },
      {
        type: "list",
        items: [
          "Pixels that fire on page load instead of on the confirmed order, so a refresh counts as a second purchase.",
          "Purchases completed on a payment gateway or UPI app that never return the buyer to the thank you page.",
          "No deduplication between browser and server events, so the same order is counted twice.",
          "Consent banners that block everything, including the signals consent mode would still allow.",
          "UTM tags stripped by redirects, link shorteners or WhatsApp previews.",
        ],
      },
      {
        type: "p",
        text: "None of these show up as an error. The dashboard still fills with numbers. They are just the wrong numbers.",
      },
      { type: "h2", text: "Send conversions from your server" },
      {
        type: "p",
        text: "The fix that matters most is moving key conversions to the server. When an order is confirmed in your backend, your server sends the event to Meta through the Conversions API, to Google through enhanced conversions, and to GA4 through a server-side tagging container. The browser pixel stays in place for page views and early funnel events, and each purchase carries a shared event ID so the platforms can drop the duplicate.",
      },
      {
        type: "p",
        text: "Server events survive ad blockers and closed tabs because they never depend on the browser. They also carry what a pixel cannot know: the real order value after discounts, whether a cash on delivery order was actually paid, and whether the customer is new or returning.",
      },
      {
        type: "callout",
        title: "What to send with every purchase",
        text: "The order ID as the event ID, the final value and currency, hashed email and phone where the user has agreed, and the click IDs you stored when they landed. Match quality goes up, and so does the platform's ability to optimise.",
      },
      { type: "h2", text: "Treat consent as part of the setup" },
      {
        type: "p",
        text: "Google requires consent mode v2 for advertisers who want to keep its audience and measurement features for visitors from the European Economic Area, and India's DPDP Act points the same way for Indian users. Done properly, consent mode sends cookieless pings when a visitor declines, and Google models the conversions it cannot observe. Done badly, the banner blocks tags entirely and the account loses a large share of its signal.",
      },
      {
        type: "p",
        text: "We set up consent once, in the tag manager, and make every tag read from it. The banner, the tags and the server events then agree on what each visitor allowed. It is also the record you will want if anyone asks how you handled consent.",
      },
      { type: "h2", text: "Keep one number you control" },
      {
        type: "p",
        text: "Even with a clean setup, each platform will keep reporting its own view. That is fine for steering campaigns inside the platform. For deciding where the next ₹10 lakh goes, you need a number the platforms do not produce.",
      },
      {
        type: "p",
        text: "For most of our clients that number is blended: new customer revenue from the backend, divided by total ad spend across channels, tracked weekly. Next to it we keep a simple table in BigQuery that joins each order to its first and last known touch. It will never be perfect. It will be consistent, and it will be yours.",
      },
      {
        type: "quote",
        text: "Once finance and the ad team looked at the same order table, the argument about which channel worked took ten minutes instead of a month.",
      },
      {
        type: "p",
        text: "Aurelian, a watchmaker we work with, cut cost per sale by 31% within two quarters of moving to this setup. Most of that came from switching off campaigns the platforms had been overcrediting.",
      },
      { type: "h2", text: "A starting checklist" },
      {
        type: "list",
        items: [
          "List every conversion you report on and where it fires today.",
          "Move purchase and lead events to the server, with event IDs for deduplication.",
          "Store click IDs and UTMs on the user or order record when they land.",
          "Set up consent mode and make every tag respect it.",
          "Agree on one blended number with finance, and review it every week.",
        ],
      },
      {
        type: "p",
        text: "For a mid-sized store or lead generation site this is usually two to four weeks of work. It is the cheapest marketing improvement most businesses can make, because it stops money going to the wrong places before you spend any more.",
      },
    ],
  },
  {
    slug: "language-model-features-that-survive-real-users",
    title: "Language model features that survive real users",
    dek: "A demo takes a week. A feature that stays accurate, affordable and polite in Hindi, Tamil and Hinglish takes a different kind of work. What we build around the model.",
    category: "AI",
    date: "2026-10-14",
    minutes: 5,
    services: ["development"],
    industries: ["financial-services", "saas"],
    body: [
      {
        type: "p",
        text: "Almost every client conversation about AI now starts with a demo someone has already built. It answers questions about the product, summarises documents or drafts replies to customers, and it looks good. Then it meets real users, who type in Hinglish, paste screenshots, ask about things that are not in the documents and occasionally try to make it say something embarrassing.",
      },
      {
        type: "p",
        text: "The model is rarely the hard part. The work is everything around it: knowing whether it is right, stopping it when it is wrong, and keeping the cost of each answer below what the answer is worth.",
      },
      { type: "h2", text: "Write the test set before the prompt" },
      {
        type: "p",
        text: "We do not start with prompt writing. We start by collecting 150 to 300 real questions, with the answer a careful person would give and the answers that would be unacceptable. For a lending app that meant questions about EMIs, foreclosure charges and missed payments, pulled from six months of support tickets.",
      },
      {
        type: "p",
        text: "That set becomes the eval harness. Every change to the prompt, the retrieval, the model or its settings runs against it, and we track three scores: correct, acceptable but weak, and wrong or unsafe. A change ships only if the third number does not go up.",
      },
      {
        type: "list",
        items: [
          "Include questions the feature should refuse, and score a refusal as correct.",
          "Include the messy inputs: typos, voice to text output, mixed scripts.",
          "Grade with a written rubric. Model graded evals are useful for speed, but sample them by hand every week.",
          "Re-run the full set whenever the provider updates a model version.",
        ],
      },
      { type: "h2", text: "Guardrails are product decisions" },
      {
        type: "p",
        text: "Guardrails get described as a safety layer, as if they were a plugin. In practice each one is a product decision someone has to own. What should happen when a user asks Juniper Wealth's assistant which fund to buy? The assistant explains the options and hands over to a licensed advisor, because giving that advice is regulated. That rule lives in code, it is tested in the eval set, and the handover is a designed screen with a clear next step.",
      },
      {
        type: "p",
        text: "We put guardrails in three places: on the input, to catch personal data and off-topic requests; in retrieval, so the model only sees documents the user is allowed to see; and on the output, to check claims against the sources and block anything that fails.",
      },
      {
        type: "callout",
        title: "Show your sources",
        text: "Answers that cite the document and paragraph they came from are easier for users to trust and much easier for your team to debug. If the model cannot point to a source, it should say so.",
      },
      { type: "h2", text: "Know your cost per answer" },
      {
        type: "p",
        text: "A feature that costs ₹4 an answer can be fine for a wealth app and ruinous for a free consumer product. We measure cost per resolved question from the first week, including retries, retrieval and the occasional very long conversation.",
      },
      {
        type: "p",
        text: "The biggest savings usually come from routing. Simple, high-volume questions go to a small fast model or a cached answer, and only the hard ones reach the larger model. On one support assistant this took the average cost per conversation from ₹3.10 to ₹0.70 with no drop in eval scores. Caching common answers and trimming retrieved context did most of the rest.",
      },
      { type: "h2", text: "Test every Indic language on its own" },
      {
        type: "p",
        text: "Most of the users we build for do not write in clean English. They write Hindi in the Latin alphabet, switch languages mid-sentence or send voice notes. Current models handle this far better than they did two years ago, but quality still varies a lot by language and by task.",
      },
      {
        type: "p",
        text: "So we test each language as its own product. The eval set gets separate sections for Hindi, Hinglish, Tamil and whatever else the user base needs, and we report scores per language. Where a language scores poorly, we would rather answer in simple English with a clear note than give a confident wrong answer in the user's language. For speech and translation we have had good results pairing a general model with India-specific services such as Bhashini.",
      },
      {
        type: "quote",
        text: "The day we started reporting scores per language, the team stopped arguing about whether the assistant was good. It was good in English and Hindi, and not yet good in Marathi.",
      },
      { type: "h2", text: "Ship small, then watch" },
      {
        type: "p",
        text: "Our first release of a language model feature usually goes to 5% of users, with every conversation logged and a sample reviewed by a person each day for the first two weeks. We look for questions the eval set missed and add them. Then the rollout widens. It is slower than launching to everyone after a good demo. It is also why the feature is still running a year later.",
      },
    ],
  },
  {
    slug: "before-you-approve-the-rewrite",
    title: "Before you approve the rewrite",
    dek: "Most rewrites run long and arrive with fewer features than the system they replace. Six questions we ask before recommending one, and what we usually do instead.",
    category: "Leadership",
    date: "2026-09-22",
    minutes: 5,
    services: ["consultancy", "development"],
    industries: ["saas", "financial-services"],
    body: [
      {
        type: "p",
        text: "We get asked to estimate a rewrite about once a month. A product has slowed down, the code is hard to change, the original developers have left, and someone has concluded that starting again is the only way out. Sometimes they are right. More often, a rewrite would cost six to twelve months of feature work and leave the team with a newer system that has the same problems in different places.",
      },
      {
        type: "p",
        text: "Before we recommend one, we work through six questions with the client's team. The answers usually point somewhere more useful.",
      },
      { type: "h2", text: "Six questions first" },
      {
        type: "list",
        items: [
          "What specific change is slow today, and how slow? 'Adding a payment method takes eight weeks' is a problem we can work with. 'The code is bad' is not.",
          "Is the slowness in the code, or in testing, deployment and approvals? Many slow teams have a reasonable codebase and a release process that takes a week.",
          "Which parts of the system change often? Most products have a busy core and a large, quiet edge that nobody needs to touch.",
          "What does the current system do that nobody has written down? Old systems carry years of edge cases, and a rewrite has to rediscover every one.",
          "Can the business stop shipping features for the length of the rewrite? If not, you will be building two systems at once.",
          "Who will own the new system in two years, and do they want it?",
        ],
      },
      { type: "h2", text: "What we usually find" },
      {
        type: "p",
        text: "When Onyx Ridge Capital asked us to scope a rewrite of their investor portal, the team was sure the backend was the problem. Reports took minutes to generate and every change broke something. Two weeks of audit showed a different picture. About 80% of the slowness came from four database queries and a nightly job that recalculated every portfolio from scratch. The breakages came from having no automated tests around the money calculations.",
      },
      {
        type: "p",
        text: "We fixed the queries, moved the reports to incremental updates and wrote tests around the calculations before touching anything else. Reports got four times faster. The rewrite they had budgeted six months for never happened, and the team spent that time on a new investor dashboard instead.",
      },
      { type: "quote", text: "The audit cost us two weeks. The rewrite would have cost us the year." },
      { type: "h2", text: "Replace in slices" },
      {
        type: "p",
        text: "When parts of a system genuinely need replacing, we replace them one slice at a time. The new code runs next to the old, a routing layer sends a share of traffic to it, and the old path is deleted once the new one has carried real load for a while. This is often called the strangler fig pattern. It is slow in the way that saves projects.",
      },
      {
        type: "p",
        text: "Each slice has to be small enough to ship in a few weeks and valuable enough that the business would want it even if the next slice never happened. That second rule matters. A change of priorities halfway through then leaves you with a better system and nothing half built.",
      },
      {
        type: "callout",
        title: "A useful test",
        text: "If you cannot describe the first slice of the replacement and the date it will carry production traffic, the plan is not ready.",
      },
      { type: "h2", text: "When a rewrite is the right call" },
      {
        type: "p",
        text: "There are good reasons to start again. The platform may be out of support with no upgrade path, such as an old framework with known security holes. The product may have changed so much that the original data model fights every new feature. Or the system may be small enough to rewrite in a few weeks.",
      },
      {
        type: "p",
        text: "Even then, we keep the old system running, move users across in groups and compare the outputs of both systems before switching anything off. Calder Labs moved their core service off a monolith this way over five months, with no downtime and a 41% drop in cloud costs at the end.",
      },
      { type: "h2", text: "What to ask your team this week" },
      {
        type: "p",
        text: "Pick the change your business most wants and that engineering says is hardest. Ask the team to break down exactly where the time goes, from ticket to production. If most of it is in the code, look at which modules. If most of it is outside the code, you have found a cheaper problem to solve first.",
      },
      {
        type: "p",
        text: "Either way, you will be making the decision from a measurement. That alone makes most rewrite conversations shorter and calmer.",
      },
    ],
  },
  {
    slug: "dpdp-act-for-product-teams",
    title: "The DPDP Act for product teams",
    dek: "India's data protection law changes how apps ask for consent, store personal data and delete it. A practical list of what to change in your product, from the people who build it.",
    category: "Engineering",
    date: "2026-08-27",
    minutes: 5,
    services: ["consultancy", "development"],
    industries: ["financial-services", "healthcare", "retail"],
    body: [
      {
        type: "p",
        text: "The Digital Personal Data Protection Act, 2023 and its rules set out how businesses in India collect and use personal data. Much of the discussion so far has been for legal teams. In our experience the bigger share of the work sits with product and engineering, because the law describes behaviour your app has to show: how it asks, what it keeps and how quickly it can forget.",
      },
      {
        type: "p",
        text: "This is a practical guide from builders and it is not legal advice. Work with your lawyers on how the law applies to your business, then use this list to plan the product changes.",
      },
      { type: "h2", text: "Consent has to be specific and on record" },
      {
        type: "p",
        text: "Under the Act, consent has to be free, specific, informed and unambiguous, given through a clear action, and as easy to withdraw as it was to give. For most apps that rules out the pre-ticked box and the single 'I agree to everything' screen.",
      },
      {
        type: "list",
        items: [
          "Show a notice that lists what data you collect, why, and how the user can withdraw consent or raise a complaint.",
          "Ask separately for purposes that are separate. Delivering an order and sending marketing messages are two different requests.",
          "Let users read the notice in English or in any of the 22 languages listed in the Constitution, as the Act provides.",
          "Put the withdraw option where people will find it, usually in account settings, and make it work in one step.",
        ],
      },
      {
        type: "p",
        text: "Behind the screen, store a consent record for every user: what they agreed to, which version of the notice they saw, when, and through which screen. When someone asks what you had permission to do, you want to answer from a record.",
      },
      { type: "h2", text: "Collect less, and say why" },
      {
        type: "p",
        text: "The Act ties data use to the purpose the user agreed to, which makes data minimisation a design question. Every field on a signup form should have a reason someone can say out loud. Date of birth for an age check is fine. Date of birth because marketing might want it someday is not.",
      },
      {
        type: "p",
        text: "We run a short data mapping exercise at the start of any engagement that touches personal data. It lists every personal field, where it is stored, which systems copy it, who can read it and which purpose it serves. Teams are usually surprised by the copies: analytics tools, support systems, spreadsheets exported two years ago.",
      },
      {
        type: "callout",
        title: "Where personal data hides",
        text: "Logs, error trackers, analytics events, backups, CRM exports and the staging database someone restored from production. All of them count.",
      },
      { type: "h2", text: "Build deletion before you need it" },
      {
        type: "p",
        text: "Users can ask to access, correct and erase their data, and personal data should not be kept once its purpose is served unless another law requires it. Deletion is hard to add late, because personal data spreads across services and third-party tools.",
      },
      {
        type: "p",
        text: "We design a deletion job that knows every place a user's data lives, removes or anonymises it, and records that it ran. Retention rules are written as code, for example closing inactive accounts after a set period with a warning email first. Where other rules require you to keep records, such as financial transactions, the job keeps exactly those and nothing else.",
      },
      { type: "h2", text: "Plan for a breach before it happens" },
      {
        type: "p",
        text: "The Act requires businesses to inform the Data Protection Board and each affected user when a personal data breach happens, and the rules set tight timelines. The time to work out who calls whom is well before you need to.",
      },
      {
        type: "list",
        items: [
          "Keep an incident runbook with named owners, contact details and message templates.",
          "Make sure your logs can show what was accessed and by whom.",
          "Encrypt personal data at rest and limit production access to the people who need it.",
          "Rehearse once a year. A tabletop exercise takes an afternoon.",
        ],
      },
      {
        type: "quote",
        text: "The teams that handle an incident well are the ones who wrote down, in advance, who makes which decision.",
      },
      { type: "h2", text: "Where to start" },
      {
        type: "p",
        text: "For most products the order of work is the same: map the data, fix the consent screens and records, build deletion, then tighten access and logging. A focused team can usually do the first two in four to six weeks.",
      },
      {
        type: "p",
        text: "If you want a second pair of eyes on your current flows, we are happy to walk through them with you and tell you where you stand.",
      },
    ],
  },
  {
    slug: "whatsapp-is-indias-real-inbox",
    title: "WhatsApp is India's real inbox",
    dek: "Most promotional email goes unread. WhatsApp messages get opened, which is exactly why so many brands get their numbers restricted. How to run WhatsApp marketing that keeps working.",
    category: "Growth",
    date: "2026-07-30",
    minutes: 5,
    services: ["plug-and-play", "digital-marketing"],
    industries: ["retail", "hospitality"],
    body: [
      {
        type: "p",
        text: "For most of the consumer brands we work with in India, WhatsApp outperforms every other owned channel. Messages get read within minutes, customers reply, and a well timed message with a button can drive more orders in an evening than a week of email. It is also the channel where brands most often hurt themselves, by sending too much, to the wrong people, and then wondering why the number has been restricted.",
      },
      {
        type: "p",
        text: "Your customers use WhatsApp to talk to their families. A place in that list is a privilege, and it can be taken away.",
      },
      { type: "h2", text: "How the platform works" },
      {
        type: "p",
        text: "Business messaging at scale runs through the WhatsApp Business Platform, either directly through Meta's Cloud API or through a business solution provider. A few rules shape everything.",
      },
      {
        type: "list",
        items: [
          "Messages that start a conversation must use pre-approved templates, grouped into marketing, utility and authentication.",
          "When a customer messages you, a customer service window opens and you can reply freely inside it.",
          "Each number has a quality rating based on how recipients respond. Blocks and reports pull it down.",
          "Each number has a limit on how many customers it can message in a day, which rises as you send good quality messages.",
        ],
      },
      {
        type: "p",
        text: "Meta has changed pricing several times, and rates depend on the message category and the country. Check the current rates before you plan a campaign, because marketing messages cost noticeably more than utility ones.",
      },
      { type: "h2", text: "Earn the opt-in" },
      {
        type: "p",
        text: "The fastest route to a low quality rating is messaging people who did not expect to hear from you. Every number on your list should come with a clear opt-in that mentions WhatsApp by name. Good places to ask are the checkout page, the order confirmation and the delivery update, where the customer can see why the messages will be useful.",
      },
      {
        type: "p",
        text: "Store each opt-in with a timestamp and its source. If a customer later asks why they are getting messages, or the platform reviews your account, you will want that record.",
      },
      {
        type: "p",
        text: "If you are moving an existing SMS or email list onto WhatsApp, do not import it wholesale. Send one message through the channel the customer already agreed to, asking whether they would like updates on WhatsApp, and add only the people who say yes.",
      },
      { type: "h2", text: "Send fewer, better messages" },
      {
        type: "p",
        text: "Ember & Oak, a restaurant group in Gurugram, came to us with full weekends and quiet weeknights. Their first idea was a daily offer to everyone on the list. We built something narrower: one message on Tuesday afternoon, only to guests who had dined in the last 90 days, with the evening's specials and a button to book a table. Replies went straight into the booking system.",
      },
      {
        type: "p",
        text: "Weeknight covers went up 46% over the next quarter and the quality rating stayed high, because the people receiving the message were the people most likely to want it.",
      },
      {
        type: "callout",
        title: "Our rule of thumb",
        text: "No more than one marketing message a week to any customer, and none to anyone who has not engaged in 90 days. Order updates and other utility messages sit outside that limit, and they should never carry a sales pitch.",
      },
      { type: "h2", text: "Make every message do one thing" },
      {
        type: "p",
        text: "WhatsApp messages work when they read like a message from a person and lead to one obvious action. Across our campaigns, the templates that perform best share a few traits.",
      },
      {
        type: "list",
        items: [
          "Under 300 characters, with the reason for the message in the first line.",
          "One button, deep linked to the exact product, cart or booking slot.",
          "Personal details that matter, such as the customer's last order or nearest outlet.",
          "A plain way to stop, such as 'Reply STOP to opt out'.",
        ],
      },
      {
        type: "quote",
        text: "The best performing message we sent this year was 140 characters long and had one button.",
      },
      { type: "h2", text: "Measure replies and blocks" },
      {
        type: "p",
        text: "Track delivery, reads, button clicks and orders, and also replies, blocks and opt-outs for every campaign. A campaign that drives orders and doubles your block rate is borrowing from next month. We report the block rate next to revenue for every send, and retire any template that pushes it up.",
      },
      {
        type: "p",
        text: "Run well, WhatsApp becomes the channel your customers expect to hear from you on. That is worth more than any single campaign.",
      },
    ],
  },
  {
    slug: "push-notifications-people-dont-mute",
    title: "Push notifications people don't mute",
    dek: "Every push you send spends a little of the user's patience. How we design notification systems on FCM that people keep switched on.",
    category: "Growth",
    date: "2026-06-18",
    minutes: 4,
    services: ["plug-and-play", "development"],
    industries: ["mobility", "retail"],
    body: [
      {
        type: "p",
        text: "Push notifications are the cheapest way to bring a user back to your app, and the easiest way to get your app deleted. Each send costs close to nothing, which is the problem. Teams add a notification for every feature launch, every sale and every abandoned cart, until users switch them all off.",
      },
      {
        type: "p",
        text: "When Kestrel Mobility asked us to improve rider retention, their app was sending an average of eleven pushes a week and opt-outs were climbing. We cut the volume by more than half and doubled the open rate. This is how we approach it.",
      },
      { type: "h2", text: "Ask at the right moment" },
      {
        type: "p",
        text: "On Android 13 and later, as on iOS, apps have to ask before they send notifications. Most apps ask on first launch, before the user has any reason to say yes. We ask when the user does something that makes the value obvious, such as booking a ride, placing an order or saving a search. The prompt says exactly what they will get: 'We'll tell you when your driver arrives'.",
      },
      {
        type: "p",
        text: "If they decline, we do not ask again on every launch. We wait for the next moment where it clearly helps, and keep a way to turn it on from settings.",
      },
      { type: "h2", text: "Sort notifications by who asked for them" },
      {
        type: "p",
        text: "Every notification an app can send goes into one of three groups, and each group follows different rules.",
      },
      {
        type: "list",
        items: [
          "Requested: the user is waiting for it. Ride arriving, order shipped, payment received. Send immediately, always.",
          "Expected: the user would probably want it. A price drop on a saved item, a reminder about tomorrow's booking. Send, with a daily cap.",
          "Promotional: the business wants it. Sales, new features, win-back offers. Send rarely, with a weekly cap, and only to engaged users.",
        ],
      },
      {
        type: "p",
        text: "On Android each group maps to its own notification channel, so users can switch off promotions and keep ride updates. That one change does a lot to stop people disabling everything.",
      },
      { type: "h2", text: "Pick the send time per user" },
      {
        type: "p",
        text: "A push that arrives during someone's commute gets opened. The same push at 11 at night gets swiped away or muted. We store when each user usually opens the app and schedule promotional sends for that window, with quiet hours that nothing promotional can break.",
      },
      {
        type: "p",
        text: "For users who rarely open the app, we do not guess. They get the usual window for their city and segment until there is enough data to choose a better one.",
      },
      {
        type: "p",
        text: "Firebase Cloud Messaging handles delivery to Android, iOS and the web. Scheduling, caps and quiet hours live in our own service in front of it, so the rules apply whichever team or tool triggers the send.",
      },
      {
        type: "callout",
        title: "Caps we start with",
        text: "No more than one promotional push a day and three a week, and nothing promotional between 9 pm and 9 am local time. We then tune these for each app using its opt-out data.",
      },
      { type: "h2", text: "Open the right screen" },
      {
        type: "p",
        text: "A notification that opens the app's home screen wastes the tap. Every push we send carries a deep link to the exact ride, product or offer it mentions, with a fallback for users on old app versions. Every link is tagged, so the analytics show which notifications lead to the action they promised.",
      },
      {
        type: "p",
        text: "We also check that the screen still makes sense when the push is opened hours later. A ride that has already ended should open the receipt, not a map still looking for a driver.",
      },
      {
        type: "quote",
        text: "Kestrel's open rate doubled in the month we stopped sending pushes that opened the home screen.",
      },
      { type: "h2", text: "Watch the opt-outs" },
      {
        type: "p",
        text: "Open rate is the number everyone reports. The number that tells you whether a notification strategy is working is the opt-out rate, by notification type, each week. If a new promotional push lifts sessions and also lifts opt-outs, it is spending next quarter's audience to hit this week's target.",
      },
      {
        type: "p",
        text: "We review that number with clients every Friday and pause any notification that moves it the wrong way. The apps that do this end up with fewer notifications, more of them opened, and users who still allow them a year later.",
      },
    ],
  },
  {
    slug: "dashboards-nobody-opens",
    title: "Dashboards nobody opens",
    dek: "Most internal dashboards are built around the data that exists. The useful ones are built around a decision someone makes every week. How we design them.",
    category: "Engineering",
    date: "2026-05-12",
    minutes: 4,
    services: ["development"],
    industries: ["saas", "healthcare"],
    body: [
      {
        type: "p",
        text: "Every company we work with has a folder of dashboards nobody opens. They were built with care, they refresh on time, and they show forty charts about everything the database knows. People look at them in the first week, then go back to asking an analyst for the one number they need.",
      },
      {
        type: "p",
        text: "The tool is rarely at fault. Dashboards fail when they are designed around the data that happens to be available instead of around a decision.",
      },
      { type: "h2", text: "Start from the decision" },
      {
        type: "p",
        text: "Before we design a single chart, we sit with the people who will use the dashboard and ask what they decide each week, and what they would need to know to decide it better. The answers are specific. A clinic manager decides how many physios to roster next week. A growth lead decides which campaigns get more budget on Monday. A finance head decides whether to chase an overdue invoice.",
      },
      {
        type: "p",
        text: "Most companies have between five and ten decisions like this that matter every week. That is the real scope of a dashboard project, and it is usually much smaller than the list of charts people first ask for.",
      },
      {
        type: "p",
        text: "Each decision becomes one view. The view shows the few numbers that decision needs, the trend that gives them context and the action someone can take from the screen. We ask four questions of every view.",
      },
      {
        type: "list",
        items: [
          "Who opens this, and how often?",
          "What will they decide after looking at it?",
          "Which number would change that decision?",
          "What do they do next, and can they do it from here?",
        ],
      },
      { type: "h2", text: "Fewer charts, more context" },
      {
        type: "p",
        text: "A number on its own is hard to act on. Whether ₹18 lakh of revenue this week is good depends on last week, the same week last year, the target and whether there was a sale. We show every headline number with a comparison, and add a plain sentence where the change is large, such as 'Down 12% on last week, mostly from Pune'.",
      },
      {
        type: "p",
        text: "We also cut hard. When Halcyon Health's operations team reviewed their first version with us, we removed eleven of its fifteen charts. Usage went up, because the four that stayed answered the questions people actually brought to the Monday meeting. Clinic managers now open one view, set the week's roster in under twenty minutes and move on.",
      },
      {
        type: "callout",
        title: "One screen, one job",
        text: "If a dashboard needs a scroll and a row of tabs to answer its main question, it is trying to serve too many people. Split it.",
      },
      { type: "h2", text: "Make the numbers trustworthy" },
      {
        type: "p",
        text: "People stop opening a dashboard the first time it disagrees with a number they trust, usually the finance system or a figure the CEO quoted last week. Most of the work in a good dashboard happens before the chart, in the data model.",
      },
      {
        type: "p",
        text: "We define every metric once, in code, with a written definition and an owner. Revenue then means the same thing in the board pack, the marketing report and the operations view. Tools like dbt make this practical: the definition lives in version control, changes get reviewed, and tests catch broken data before anyone sees it.",
      },
      {
        type: "quote",
        text: "The day the dashboard matched the finance report to the rupee, the team stopped keeping their own spreadsheet.",
      },
      { type: "h2", text: "Put the action next to the number" },
      {
        type: "p",
        text: "The best internal tools we have built show the number and let you act on it. The overdue invoices view has a button that sends a reminder. The rostering view lets the manager move a shift. The campaign view links straight to the ad set it describes.",
      },
      {
        type: "p",
        text: "This is where a custom internal tool earns its cost over an off-the-shelf BI tool. When the next step is one click away, people use the screen every day, and the data improves because people are looking at it.",
      },
      {
        type: "p",
        text: "We measure our own work the same way. Six weeks after launch we check how often each view is opened and by whom. Views nobody uses get removed or merged, and the ones people rely on get the next round of attention.",
      },
    ],
  },
  {
    slug: "the-maths-of-small-senior-teams",
    title: "The maths of small senior teams",
    dek: "Adding people to a software project adds conversations faster than it adds output. Why we staff most projects with four to six senior people, and what that does to cost and speed.",
    category: "Leadership",
    date: "2026-04-08",
    minutes: 5,
    services: ["consultancy", "development"],
    body: [
      {
        type: "p",
        text: "Clients sometimes ask why our proposals show four or five people when another firm has offered twelve for a similar price. It is a fair question, and a bigger team sounds safer. In our experience it is usually slower, and the reasons come down to arithmetic.",
      },
      { type: "h2", text: "Conversations grow faster than headcount" },
      {
        type: "p",
        text: "Every pair of people on a team is a line of communication that has to stay in sync. Each new person adds more coordination than the one before, and that cost shows up as meetings, handovers, review queues and misunderstandings.",
      },
      {
        type: "list",
        items: [
          "4 people: 6 lines of communication",
          "6 people: 15",
          "8 people: 28",
          "12 people: 66",
        ],
      },
      {
        type: "p",
        text: "None of those lines are free. Each one needs shared context about decisions, priorities and the code itself. On a small team that context lives in a few heads and a short written log. On a large team it lives in meetings.",
      },
      {
        type: "p",
        text: "The software industry has known this since the 1970s: adding people to a late project tends to make it later. New people need context, and the people giving it stop building while they do.",
      },
      { type: "h2", text: "Seniority changes the shape of the work" },
      {
        type: "p",
        text: "Most of what a senior engineer adds shows up as things that never happen: the wrong abstraction that never gets written, the database design that never needs a painful migration, the question asked in week one that saves a month in week ten. Much of that value is avoided rework, and rework is the largest hidden cost in most projects.",
      },
      {
        type: "p",
        text: "Senior people also need less coordination. They can take a loosely defined problem, make reasonable decisions, write them down and keep going. That lets a small team run on short daily check-ins and a weekly demo, without a layer of project management on top.",
      },
      {
        type: "p",
        text: "They also know when to stop. A senior engineer will ship the simple version of a feature, watch how people use it and improve it, instead of building every option on the first pass.",
      },
      { type: "quote", text: "The cheapest line of code is the one a senior engineer talked you out of writing." },
      { type: "h2", text: "How the cost compares" },
      {
        type: "p",
        text: "Here is a simplified version of a comparison we shared with a client last year. Both teams cost about the same per month.",
      },
      {
        type: "list",
        items: [
          "Team A: 12 people, mostly junior and mid level, with two leads and a project manager.",
          "Team B: 5 senior people, including a tech lead who also writes code.",
        ],
      },
      {
        type: "p",
        text: "Team A had more hours on paper. Team B shipped the first usable release in seven weeks against Team A's estimate of twelve, mainly because fewer decisions needed a meeting and less work had to be redone. We have seen the same pattern on almost every project where we could compare.",
      },
      {
        type: "p",
        text: "Senior hourly rates are higher. Fewer hours get spent, and far fewer of them get spent twice. With the monthly cost equal, the earlier release is where the money is. Five extra weeks of a live product means five extra weeks of learning from real users, and a budget that runs out later.",
      },
      {
        type: "callout",
        title: "Where big teams make sense",
        text: "Large programmes with many independent workstreams, round the clock support, or a lot of well defined, repeatable work. Even then, we split them into small teams with clear boundaries rather than running one large group.",
      },
      { type: "h2", text: "What small teams ask of clients" },
      {
        type: "p",
        text: "A small senior team moves fast only if decisions on the client side move fast too. We ask every client for one person who can make product calls within a day, access to real users or real data from the first week, and someone at the Friday demo who can say yes or no. When those are in place, five people can do what most organisations expect from fifteen.",
      },
      {
        type: "p",
        text: "We also hire for it. Everyone on a Noodle Codes project has shipped production software for years, and most have led teams before. That is a large part of why our rates look the way they do.",
      },
      {
        type: "p",
        text: "It also means you know everyone working on your product by name. That matters more than any number in a proposal.",
      },
    ],
  },
];
