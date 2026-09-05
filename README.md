# Success Edge Academy

A **high-converting, advertisement/portfolio website** for **Success Edge Academy**, a premier coaching centre preparing students for School Boards (Classes 6–12), IIT-JEE (Main & Advanced), and NEET Medical examinations.

The website is engineered specifically to convert visitors (students and parents) into active enquiries, phone inquiries, WhatsApp chats, and Free Demo Class reservations through an authoritative, results-driven, and trustworthy academic aesthetic.

---

## 🌟 Key Highlights & Features

1. **High-Converting Hero Section:**
   - Outcomes-driven headline with urgency badge ("Admissions Open for 2026–2027 Batches").
   - Dual CTAs: "Book Free 2-Day Demo Class" and "Explore Courses & Syllabi".
   - Real-time seat availability indicator and topper preview spotlight cards.
2. **Animated Numerical Stat Counters:**
   - 12,000+ Students Mentored, 98.4% Pass Rate, 54+ Top 100 AIRs, and 15+ Years of Academic Excellence.
3. **The "Success Edge" Pedagogy (About Section):**
   - Director's commitment on why small batches (capped at 25) prevent student burnout.
   - Traditional Mass Coaching vs. Success Edge Academy feature-by-feature comparison matrix.
4. **Interactive Academic Programs Hub:**
   - Filterable category tabs: All Programs, IIT-JEE, NEET Medical, Board Champions (9–12), Junior Foundation (6–8).
   - Seat countdown tickers and batch start dates.
5. **Interactive Course Detail & Syllabus Modal:**
   - Subject-by-subject curriculum breakdown (Physics, Chemistry, Math, Biology).
   - Instant PDF brochure download simulation.
6. **Hall of Fame (Results & Toppers Showcase):**
   - Filterable results by exam category with verified student badges, AIR ranks, scores, college allotments, and authentic student quotes.
7. **Expert Faculty Grid:**
   - Senior IITian and Medical mentor profiles highlighting 10+ years of experience, author credits, and specialization areas.
8. **Gamified Scholarship & Demo Calculator:**
   - 3-step micro-funnel estimating tuition fee concessions (up to 90% via SETSE) with 1-click slot locking.
9. **Verified Parent & Student Testimonials:**
   - 5-star verified review cards addressing personal attention, stress reduction, and step-by-step score improvements.
10. **Campus Life & Infrastructure Gallery:**
    - Visual media showcase with interactive high-resolution lightbox modal for classrooms, STEM labs, and library.
11. **Animated FAQ Accordion:**
    - Clear, transparent answers for the top 8 questions regarding demo classes, batch sizes, backup recordings, and fees.
12. **Admissions Enquiry Form & Direct Contact:**
    - Validated client-side form with phone number validation, grade selectors, spam honeypot trap, and instant confirmation.
    - Embedded Google Maps directions and direct click-to-call hotlines.
13. **Minimal Node.js Express Backend & Offline Resiliency:**
    - Express endpoint `POST /api/enquire` with JSON logging.
    - Automatic offline fallback saving submissions to `localStorage` and opening pre-populated WhatsApp messages.
14. **Persistent Floating WhatsApp & Mobile Action Bar:**
    - Floating pulsating WhatsApp chat bubble.
    - Mobile sticky bottom bar with instant "Call Helpline" and "Book Free Demo" actions.
15. **SEO & Structured Data:**
    - Open Graph and Twitter Card tags.
    - Google Schema.org `EducationalOrganization` JSON-LD for rich snippets.

---

## 🛠️ Technology Stack

- **Frontend:** React 19, Vite 8, Tailwind CSS v4, Lucide React
- **Backend:** Node.js, Express, CORS
- **Typography:** Google Fonts (`Plus Jakarta Sans` for body & UI, `Outfit` for display headlines)
- **Design Tokens:**
  - Primary Brand: Royal Academy Navy (`#0A192F`, `#0F2442`, `#163259`)
  - Accent / Conversion: Imperial Amber (`#F59E0B`, `#FBBF24`, `#D97706`)
  - Trust / Success: Deep Emerald (`#059669`, `#10B981`)
  - Background Base: Dark Obsidian Navy (`#050C18`)

---

## 📂 Project Architecture

```
Success edge academy/
├── index.html                  # HTML entry point with SEO metadata & JSON-LD schema
├── package.json                # Dependencies and build scripts
├── vite.config.js              # Vite configuration with Tailwind CSS v4 & /api proxy
├── server/
│   └── index.js                # Minimal Express enquiry endpoint with file logging
├── public/
│   ├── favicon.svg             # Custom gold graduation crest favicon
│   ├── robots.txt              # Crawler instructions
│   └── sitemap.xml             # Search engine sitemap
└── src/
    ├── main.jsx                # React root mount
    ├── App.jsx                 # Main layout assembling all sections & modals
    ├── index.css               # Tailwind v4 theme variables, glassmorphism & utilities
    ├── components/
    │   ├── Navbar.jsx          # Sticky navigation & mobile drawer
    │   ├── Hero.jsx            # Conversion-focused split hero
    │   ├── StatsStrip.jsx      # Animated numerical counters & trust strip
    │   ├── AboutSection.jsx    # Pedagogy pillars & comparison matrix
    │   ├── CoursesSection.jsx  # Filterable course cards
    │   ├── CourseDetailModal.jsx # Syllabus breakdown & brochure download
    │   ├── ResultsSection.jsx  # Toppers Hall of Fame with exam filters
    │   ├── FacultySection.jsx  # IITian & Medical mentor profiles
    │   ├── ScholarshipCalculator.jsx # 3-step interactive fee calculator
    │   ├── TestimonialsSection.jsx   # Parent & student reviews
    │   ├── GallerySection.jsx  # Campus photo grid & lightbox modal
    │   ├── FaqSection.jsx      # Animated accessible accordion
    │   ├── ContactSection.jsx  # Validated admission enquiry form & map
    │   ├── BookDemoModal.jsx   # Universal demo reservation modal
    │   ├── FloatingCta.jsx     # Floating WhatsApp & mobile sticky action bar
    │   ├── Footer.jsx          # Academic footer with links & legal info
    │   └── ui/
    │       ├── Button.jsx      # Reusable button with variants & loading state
    │       ├── Badge.jsx       # Reusable pill badge with color variants
    │       ├── Card.jsx        # Glassmorphic elevated container
    │       ├── Modal.jsx       # Accessible modal dialog with backdrop blur
    │       └── SectionHeading.jsx # Standardized section title component
    ├── data/
    │   ├── academyInfo.js      # Contact numbers, address, timings, stats
    │   ├── coursesData.js      # Course listings, syllabus topics, schedules
    │   ├── facultyData.js      # Mentor biographies & credentials
    │   ├── faqsData.js         # Frequently asked questions & answers
    │   ├── galleryData.js      # Campus infrastructure photos & captions
    │   ├── testimonialsData.js # Parent and student feedback
    │   └── toppersData.js      # Exam rankers, scores, and colleges
    └── utils/
        └── api.js              # API client with offline storage & WhatsApp fallback
```

---

## 🚀 Running Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Vite Frontend Development Server
```bash
npm run dev
```
The site will be live at `http://localhost:5173/`.

### 3. (Optional) Run the Minimal Express Backend
```bash
npm run server
```
The enquiry API will listen on `http://localhost:5000/`. Vite will automatically proxy `/api` requests to port 5000.

### 4. Build for Production
```bash
npm run build
```
Generates an optimized static production bundle in `dist/`.

### 5. Preview Production Build Locally
```bash
npm run preview
```

### 6. Lint Codebase
```bash
npm run lint
```

---

## ⚙️ Customizing Content

All website copy, faculty details, course offerings, and contact information are decoupled from components and stored cleanly in `src/data/`:
- **Change Phone / Address / WhatsApp:** Edit `src/data/academyInfo.js`
- **Add / Modify Courses or Syllabi:** Edit `src/data/coursesData.js`
- **Update Topper Ranks & Scores:** Edit `src/data/toppersData.js`
- **Update Teachers & Qualifications:** Edit `src/data/facultyData.js`
- **Add FAQs:** Edit `src/data/faqsData.js`

---

## 🌐 Deployment Instructions

### Frontend (Static SPA)
- **Vercel / Netlify / GitHub Pages:**
  - Build Command: `npm run build`
  - Output Directory: `dist`
  - Note: The site is fully static-ready. Even without the Node backend, all enquiry submissions automatically log to `localStorage` and provide immediate WhatsApp continuation.

### Backend (If hosting the Node Express API)
- **Render / Railway / Fly.io:**
  - Build Command: `npm install`
  - Start Command: `node server/index.js`
  - Set Environment Variables: `PORT=5000`

---

## 📜 23-Phase Implementation Commit Log

1. `feat(setup): initialize Vite React application and directory structure`
2. `feat(design): configure Tailwind CSS v4, custom color tokens and typography`
3. `feat(ui): implement reusable UI primitives and icon system`
4. `feat(data): establish structured content stores for courses, faculty, results, and FAQs`
5. `feat(navbar): build responsive sticky navbar with mobile slide-out drawer`
6. `feat(hero): build high-impact conversion-focused hero section`
7. `feat(stats): add animated numerical stat counters and trust indicator strip`
8. `feat(about): create founder story and 4-pillar pedagogical advantage cards`
9. `feat(courses): implement filterable course cards with batch highlights`
10. `feat(modal): build interactive syllabus preview and brochure download modal`
11. `feat(results): build Toppers Hall of Fame with exam filters and score badges`
12. `feat(faculty): introduce mentor showcase grid with credentials and subjects`
13. `feat(calculator): build interactive scholarship calculator and demo booking step widget`
14. `feat(testimonials): implement parent and student reviews with star ratings`
15. `feat(gallery): add campus life, laboratory, and awards ceremony image gallery`
16. `feat(faq): implement accessible animated FAQ accordion`
17. `feat(contact): build admissions enquiry form with validation and location details`
18. `feat(backend): add Express enquiry endpoint with client fallback handling`
19. `feat(cta): implement persistent WhatsApp chat widget and mobile quick-action bar`
20. `feat(footer): create footer with quick links, contact info, and legal notes`
21. `feat(seo): configure meta tags, OpenGraph preview, and EducationalOrganization schema`
22. `perf(polish): enhance accessibility, responsive layout spacing, and asset loading`
23. `docs(release): finalize documentation, build verification, and deployment guide`
