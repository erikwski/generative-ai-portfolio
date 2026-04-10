# Components to Build

Planned widgets not yet implemented. Listed by priority with specs and open questions.

---

## 1. `cv-download` — Priority: HIGH

**Purpose:** Let visitors download Erik's CV as PDF. Simple, high-intent action.

**Labels needed:**
- `headline` — widget title
- `cta` — button label
- `note` — subtext (e.g. "Last updated March 2026")

**Role behavior:**
- Developer: "Download PDF résumé" — clean, no frills
- Recruiter: prominent, top-of-fold, "Download CV" with last-updated date
- Client: optional — could surface as "Download portfolio overview" or hidden

**Open questions:**
- **Q1:** Is the PDF ready to upload to `/public/`? What's the filename?
- **Q2:** Should clicking open the PDF in a new tab or trigger a direct download?
- **Q3:** One universal PDF or separate developer/recruiter versions?

---

## 2. `hire-me` — Priority: HIGH

**Purpose:** Direct CTA for job or freelance enquiries. The conversion widget.

**Labels needed:**
- `headline`
- `body` — 1-2 lines of context ("open to new opportunities", availability)
- `cta_email` — email button label
- `cta_linkedin` — LinkedIn button label
- `availability` — short status string (e.g. "Available from June 2026")

**Role behavior:**
- Recruiter: leads with availability + preferred role type
- Client: leads with "Let's work together" + project scope framing
- Developer: peers don't need this — could show GitHub link instead

**Open questions:**
- **Q4:** Contact form inside the widget, or just mailto + LinkedIn links?
- **Q5:** Should current availability be visible? If yes, what is the current status?

---

## 3. `philosophy` — Priority: HIGH

**Purpose:** Signature quote + 3 core beliefs about software. Shows what Erik stands for.

**Labels needed:**
- `headline`
- `quote` — the signature line
- `belief_1_title`, `belief_1_body`
- `belief_2_title`, `belief_2_body`
- `belief_3_title`, `belief_3_body`

**Proposed beliefs (to confirm):**
1. Architecture first — "Build the thing right, not just build the right thing"
2. Domain-Driven Design — separation and detachability over monolithic coupling
3. Quality over speed — never miss a deadline, never ship broken trust

**Open questions:**
- **Q6:** Are these 3 beliefs accurate? Would you phrase them differently?
- **Q7:** Should the signature quote be attributed to Erik explicitly, or left unattributed?

---

## 4. `music-taste` — Priority: MEDIUM-HIGH

**Purpose:** Personal dimension. Shows the vinyl/hi-fi obsession and taste. Humanises the portfolio.

**Labels needed:**
- `headline`
- `intro` — 1 sentence framing (e.g. "Music is where the architecture disappears.")
- `artist_1` through `artist_5` — artist names
- `note_1` through `note_5` — one personal note per artist
- `setup_note` — brief mention of the vinyl + hi-fi setup

**Artists:**
1. Salmo
2. Franco Battiato
3. Lucio Dalla
4. Nayt
5. Venerus

**Role behavior:**
- Developer/Recruiter: lighter treatment — only shown in creative + deep-dive contexts
- Client: likely hidden or minimal — not relevant to business trust

**Open questions:**
- **Q8:** Do you have a personal note for each artist (why they matter to you)?
- **Q9:** Should the Salmo/Lebonski/brand-origin story appear inside this widget, or stay separate (creative deep-dive only as agreed)?
- **Q10:** Want album cover images, or keep it text-only?

---

## 5. `reading-list` — Priority: MEDIUM-HIGH

**Purpose:** Books that shaped how Erik thinks. Shows intellectual depth and self-direction.

**Labels needed:**
- `headline`
- `intro`
- Per book: `title`, `author`, `note` (personal takeaway)
- `anchor_quote` — the Clean Code quote as closing line

**Books (confirmed):**
1. *Clean Code* — Robert C. Martin
2. *Clean Architecture* — Robert C. Martin
3. *Residues: Time, Uncertainty and Change in Software Architecture* — (author TBC)
4. *AI Engineering* — (author TBC)
5. *Building Evolutionary Architectures* — Ford, Parsons, Kua
6. *JavaScript & jQuery: Sviluppare interfacce web interattive* — (Italian edition, starter book)

**Open questions:**
- **Q11:** Do you have a short personal note for each book (what it changed or taught you)?
- **Q12:** Are you currently reading anything? Should there be a "currently reading" slot?

---

## 6. `origin-story` — Priority: MEDIUM

**Purpose:** Narrative arc: waiter → self-taught dev → Angular → Datacolor. The human story behind the CV.

**Labels needed:**
- `headline`
- `act_1_title`, `act_1_body` — waiter years, overlap period, physical + social cost
- `act_2_title`, `act_2_body` — first internships, misterWeb, infoErre
- `act_3_title`, `act_3_body` — Smarthy/ACSoftware, Angular discovery via MFE research
- `act_4_title`, `act_4_body` — ng-rome 2022, Gabriele Campi, domain architecture
- `act_5_title`, `act_5_body` — Datacolor, DDD in production, now

**Role behavior:**
- Developer: architecture evolution arc; ng-rome as turning point
- Recruiter: career progression, seniority, growth trajectory
- Client: simplified — from "started building things" to "now I build serious software"

**Open questions:**
- **Q13:** Are you comfortable with the waiter-overlap struggle being public? (physical exhaustion, social isolation)
- **Q14:** Should ng-rome 2022 be named as a turning point explicitly?

---

## 7. `meta-explainer` — Priority: MEDIUM

**Purpose:** Explains to the visitor what this portfolio *is* — a generative UI powered by Claude. The portfolio explains itself.

**Labels needed:**
- `headline`
- `body` — how it works
- `tech_note` — brief stack callout (Hashbrown, Angular, Claude)
- `invitation` — closing line inviting exploration

**Role behavior:**
- Developer: technical detail — Hashbrown, Angular SSR, Claude API, NgRx signal store
- Recruiter: high-level concept — "Claude composes the UI in real time based on who you are"
- Client: plain language — "This page changes depending on who's reading it"

**Open questions:**
- **Q15:** How technical do you want this for the developer audience? Full Hashbrown implementation detail, or conceptual?

---

## 8. `conference-activity` — Priority: LOW-MEDIUM

**Purpose:** Shows Erik as part of the community. Conferences attended, aspiration to speak.

**Labels needed:**
- `headline`
- `intro`
- Per conference: `name`, `year`, `note`
- `speaking_note` — "Working toward my first talk: architecture in the AI era"

**Conferences (confirmed):**
- AWS Summit
- ng-rome 2022 (Angular discovery turning point)
- ng-rome 2024 (Manfred Steyer workshop)
- DevFest
- WebDay

**Open questions:**
- **Q16:** Was there a specific conference moment that changed something for you, beyond ng-rome 2022 and ng-rome 2024?

---

## 9. `open-source` — Priority: LOW

**Purpose:** HyperIoT + openapi-ts contributions. Evidence of public technical work.

**Labels needed:**
- `headline`
- `intro`
- Per project: `name`, `role`, `description`, `link`

**Projects:**
1. **HyperIoT** — main contributor, IoT/BigData Angular platform
2. **openapi-ts** — community contributor

**Open questions:**
- **Q17:** Should this be a standalone widget, or fold into `project-showcase` as a section?

---

## 10. `mentors` — Priority: LOW

**Purpose:** The people who shaped Erik's approach. Rare in a portfolio — shows humility and relationship depth.

**Labels needed:**
- `headline`
- `intro`
- Per mentor: `name`, `role_context`, `what_they_gave`

**Mentors (confirmed, 6 people):**
1. **Paolo Nobile** — taught him Angular, still at Smarthy
2. **Gabriele Campi** — architect, made him love architecture (ng-rome 2022 + 2024)
3. **Giovanni Colacitti** — Angular design patterns
4. **Fabio Biondi** — represents Angular in Italy, "pure gold"
5. **Soumaya Erradi** — different actionable items every speech
6. **Best friend (name?)** — Angular dev at Datacolor, brought via referral

**Open questions:**
- **Q18:** Are you comfortable naming current/former managers publicly? (Paolo Nobile was at Smarthy)
- **Q19:** How do you want to frame Fabio Biondi and Soumaya Erradi — as mentors you've met in person, or community figures who influenced you remotely?

---

## Summary

| Widget | Priority | Labels | Status |
|---|---|---|---|
| `cv-download` | HIGH | 3 | Not built |
| `hire-me` | HIGH | 5 | Not built |
| `philosophy` | HIGH | 8 | Not built |
| `music-taste` | MED-HIGH | 12 | Not built |
| `reading-list` | MED-HIGH | ~14 | Not built |
| `origin-story` | MEDIUM | 10 | Not built |
| `meta-explainer` | MEDIUM | 4 | Not built |
| `conference-activity` | LOW-MED | ~8 | Not built |
| `open-source` | LOW | ~6 | Not built |
| `mentors` | LOW | ~14 | Not built |

**Total open questions: 19 (Q1–Q19)**

Once Q1–Q19 are answered, run `/fill-widget <name>` on each with ERIKWSKI.MD as the content brief.
