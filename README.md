# Zet Up Academy Landing Website

## Project Description

Zet Up Academy is a modern responsive landing website for a Moroccan online language academy launching a summer language program for beginners.

The project now includes a Supabase-powered backend flow and protected admin dashboard.

The website includes:

- Premium landing page design
- French and Arabic language switcher
- RTL support for Arabic
- Supabase pre-registration form submission
- Protected admin login
- Admin dashboard with KPIs and lead management
- Responsive desktop, tablet, and mobile layout

## Technologies Used

- React
- Vite
- Tailwind CSS
- Lucide React icons
- React Router
- Supabase JavaScript client

## Install Dependencies

```bash
npm install
```

## Environment Variables

Create `.env.local` for local development:

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Never use or expose a Supabase service role key in this frontend project.

## Supabase Setup

Run the SQL file in the Supabase SQL editor:

```text
supabase-pre-registrations.sql
```

This creates:

- `pre_registrations` table
- Status constraint
- `updated_at` trigger
- RLS policies for public insert and authenticated admin select/update

## Run Locally

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```text
http://127.0.0.1:5173/
```

## Admin Routes

```text
/admin/login
/admin/dashboard
```

Create an admin user manually in Supabase Auth, then log in at `/admin/login`.

## Build For Production

```bash
npm run build
```

## Deploy On Vercel

1. Upload this project to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and choose **Add New Project**.
3. Import the GitHub repository.
4. Use these Vercel settings:

```text
Framework Preset: Vite
Build command: npm run build
Output directory: dist
```

5. Add these environment variables in Vercel:

```text
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

6. Click **Deploy**.

The project includes `vercel.json` with the Vite build command, `dist` output directory, and SPA rewrite for admin routes.

## Folder Structure

```text
.
├── src
│   ├── assets
│   │   └── zet-up-hero.png
│   ├── components
│   │   ├── admin
│   │   │   └── ProtectedAdminRoute.jsx
│   │   ├── About.jsx
│   │   ├── ButtonLink.jsx
│   │   ├── Contact.jsx
│   │   ├── FAQ.jsx
│   │   ├── FinalCTA.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Method.jsx
│   │   ├── PreRegistrationForm.jsx
│   │   ├── Pricing.jsx
│   │   ├── Problem.jsx
│   │   ├── Programs.jsx
│   │   └── SectionHeader.jsx
│   ├── lib
│   │   └── supabaseClient.js
│   ├── pages
│   │   ├── AdminDashboard.jsx
│   │   └── AdminLogin.jsx
│   ├── services
│   │   ├── adminRegistrations.js
│   │   └── preRegistration.js
│   ├── App.jsx
│   ├── data.js
│   ├── main.jsx
│   └── styles.css
├── .env.example
├── BACKEND_INTEGRATION.md
├── index.html
├── package.json
├── supabase-pre-registrations.sql
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── vite.config.js
```

## Testing

Public form:

1. Visit `/`.
2. Submit the pre-registration form.
3. Confirm a new row appears in `pre_registrations`.

Admin dashboard:

1. Create an admin user in Supabase Auth.
2. Visit `/admin/login`.
3. Log in.
4. Use `/admin/dashboard` to view KPIs, search/filter leads, update status, mark contacted/confirmed, and edit notes.
