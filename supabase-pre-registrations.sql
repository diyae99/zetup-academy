-- Zet Up Academy pre-registration backend setup
-- Run this SQL in the Supabase SQL editor.

create extension if not exists "pgcrypto";

create table if not exists public.pre_registrations (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text not null,
  email text not null,
  city text,
  preferred_language text,
  level text,
  message text,
  status text not null default 'new',
  contacted boolean not null default false,
  confirmed boolean not null default false,
  notes text,
  last_contacted_at timestamptz,
  confirmed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint pre_registrations_status_check
    check (status in ('new', 'contacted', 'confirmed', 'cancelled'))
);

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists set_pre_registrations_updated_at on public.pre_registrations;

create trigger set_pre_registrations_updated_at
before update on public.pre_registrations
for each row
execute function public.set_updated_at();

alter table public.pre_registrations enable row level security;

drop policy if exists "Public can insert pre registrations" on public.pre_registrations;
drop policy if exists "Authenticated admins can select pre registrations" on public.pre_registrations;
drop policy if exists "Authenticated admins can update pre registrations" on public.pre_registrations;

create policy "Public can insert pre registrations"
on public.pre_registrations
for insert
to anon, authenticated
with check (true);

create policy "Authenticated admins can select pre registrations"
on public.pre_registrations
for select
to authenticated
using (true);

create policy "Authenticated admins can update pre registrations"
on public.pre_registrations
for update
to authenticated
using (true)
with check (true);
