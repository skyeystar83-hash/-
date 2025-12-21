-- 1. Create the consultations table
create table public.consultations (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  name text not null,
  contact text not null,
  space_type text null,
  inquiry text null,
  photo_url text null,
  status text not null default 'new'::text,
  constraint consultations_pkey primary key (id)
);

-- 2. Enable Row Level Security (RLS)
alter table public.consultations enable row level security;

-- 3. Create Policy: Allow anonymous users to INSERT (for the form)
create policy "Allow public insert"
on public.consultations
for insert
to anon
with check (true);

-- 4. Create Policy: Allow anonymous users to READ (for admin page - simplified for now)
-- WARNING: In a production app with sensitive data, you should allow read ONLY for authenticated users.
-- For this MVP, we will allow read to build the admin page easily, but we'll protect the page with a simple password in the code.
create policy "Allow public select"
on public.consultations
for select
to anon
using (true);

-- 5. Create Storage Bucket for photos
insert into storage.buckets (id, name, public)
values ('consultations', 'consultations', true);

-- 6. Storage Policy: Allow public to upload
create policy "Allow public upload"
on storage.objects
for insert
to anon
with check ( bucket_id = 'consultations' );

-- 7. Storage Policy: Allow public to view (for admin page)
create policy "Allow public view"
on storage.objects
for select
to anon
using ( bucket_id = 'consultations' );
