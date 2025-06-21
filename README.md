# my_finance

Welcome to **my_finance** – your next step toward smarter personal finance management! This project is designed to empower users with simple, intuitive tools for tracking expenses, visualizing budgets, and making better financial decisions.

## 🚀 Features

- **Expense Tracking:** Easily log and categorize your daily expenses.
- **Budget Visualization:** Interactive charts to help you see where your money goes.
- **Custom Categories:** Organize your finances your way.
- **Modern UI:** Clean, responsive design for seamless user experience.
- **Data Security:** Your financial data stays local and private.

## 🖥️ Demo

> _Coming soon!_  
> Want to see a live demo? Stay tuned for updates, or clone the repo and try it locally!

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** (React‑framework for SSR, Turbopack dev)  
- **React 19 RC** (UI library)  
- **Tailwind CSS** (+ `tailwindcss-animate`, `tailwind-merge`)  
- **Radix UI** primitives (`@radix-ui/react-*`)  
- **Lucide‑React** (iconography)  
- **Recharts** (charts & data visualization)  
- **React Day Picker** (date pickers)  
- **React‑Hook‑Form** + **Zod** (form management & validation)  
- **Date‑Fns 4** (date utilities)  

### Backend & API
- **Next.js API Routes** (serverless endpoints)  
- **Prisma 6** + `@prisma/client` (Type‑safe ORM & DB migrations)  
- **Inngest** (event-driven functions & webhooks)  
- **Resend** (transactional email API)  
- **@google/generative-ai** (Gemini‑powered NLP integration)  

### Authentication & State
- **@clerk/nextjs** (user auth & session management)  
- **Next‑Themes** (light/dark theme toggling)  
- **Zustand** or **React Context** (for global state—project choice)  

### Utilities
- **clsx** & **class-variance-authority** (conditional class merging)  
- **Sonner** (toast notifications)  
- **Vaul** (secure client‑side storage)  

### Dev & Build
- **Node.js** & **npm**  
- **ESLint** + **eslint-config-next** (linting)  
- **PostCSS** (CSS transformations)  
- **Turbopack** (Next’s default fast dev bundler)  

### Email & Templating
- **react-email** + **@react-email/components** (email templates)  
- **Resend** (sending & scheduling emails)  

---

## 📁 Project Structure

```
finance-platform/
├── .env
├── .eslintrc.json
├── .gitignore
├── components.json
├── jsconfig.json
├── middleware.js
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
│
├── actions/
│   ├── account.js
│   ├── budget.js
│   ├── dashboard.js
│   ├── seed.js
│   ├── send-email.js
│   └── transaction.js
│
├── app/
│   ├── auth/
│   │   ├── sign-in/[[...sign-in]]/page.jsx
│   │   └── sign-up/[[...sign-up]]/page.jsx
│   ├── layout.js
│   ├── page.jsx
│   │
│   ├── main/
│   │   └── account/
│   │       └── _components/
│   │           ├── account-chart.jsx
│   │           ├── no-pagination-table.jsx
│   │           └── transaction-table.jsx
│   ├── [id]/
│   │   └── page.jsx
│   │
│   ├── dashboard/
│   │   ├── _components/
│   │   │   ├── account-card.jsx
│   │   │   ├── budget-progress.jsx
│   │   │   └── transaction-overview.jsx
│   │   ├── layout.js
│   │   └── page.jsx
│   │
│   └── transaction/
│       ├── _components/
│       │   ├── receipt-scanner.js
│       │   └── transaction-form.jsx
│       ├── create/
│       │   └── page.jsx
│       ├── layout.js
│       └── page.jsx
│
├── api/
│   ├── ingest/
│   │   └── route.js
│   └── seed/
│       └── route.js
│
├── hooks/
│   └── use-fetch.js
│
├── data/
│   ├── categories.js
│   └── landing.js
│
├── emails/
│   └── template.jsx
│
├── lib/
│   ├── ingest/
│   │   ├── client.js
│   │   ├── function.js
│   │   ├── arcjet.js
│   │   ├── checkUser.js
│   │   ├── prisma.js
│   │   └── utils.js
│   └── prisma.js
│
├── prisma/
│   ├── migrations/
│   │   ├── 20250621043824_.../
│   │   └── migration_lock.toml
│   └── schema.prisma
│
└── public/
    ├── aifinance.png
    └── aifinance2.png

