# Supabase Backend Integration

This project now uses Supabase for:

- Public pre-registration form submissions
- Admin authentication
- Protected admin dashboard data

No service role key is used in the frontend.

## Environment Variables

Create `.env.local` for local development:

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Add the same variables in Vercel:

```text
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

## SQL Table And Policies

Run the SQL in:

```text
supabase-pre-registrations.sql
```

It creates the `pre_registrations` table with:

- `id uuid primary key`
- `full_name text`
- `phone text`
- `email text`
- `city text`
- `preferred_language text`
- `level text`
- `message text`
- `status text default 'new'`
- `contacted boolean default false`
- `confirmed boolean default false`
- `notes text`
- `last_contacted_at timestamptz`
- `confirmed_at timestamptz`
- `created_at timestamptz default now()`
- `updated_at timestamptz default now()`

Allowed status values:

```text
new, contacted, confirmed, cancelled
```

## RLS Policies

The SQL enables Row Level Security and adds:

- Public users can only `INSERT`.
- Public users cannot `SELECT` all data.
- Authenticated users can `SELECT`.
- Authenticated users can `UPDATE`.

In this frontend, authenticated Supabase users are treated as admins. Create admin users manually in Supabase and do not enable open public signup unless you add a stricter admin-role system.

## Create Admin User

1. Go to Supabase Dashboard.
2. Open **Authentication**.
3. Create a user manually.
4. Use that email/password at:

```text
/admin/login
```

After login, the dashboard is available at:

```text
/admin/dashboard
```

## Test The Public Form

1. Run the SQL setup.
2. Add `.env.local`.
3. Run:

```bash
npm run dev
```

4. Submit the public pre-registration form.
5. Check Supabase table rows.

## Test The Dashboard

1. Create an admin user in Supabase Auth.
2. Visit `/admin/login`.
3. Log in.
4. Confirm you can:
   - View KPI cards
   - Search leads
   - Filter by status
   - Update status
   - Mark contacted
   - Mark confirmed
   - Edit notes

## Vercel Deployment

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Use:

```text
Build command: npm run build
Output directory: dist
```

4. Add these environment variables in Vercel:

```text
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

5. Deploy.
