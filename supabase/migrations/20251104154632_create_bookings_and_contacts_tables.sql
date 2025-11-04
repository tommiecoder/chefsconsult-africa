/*
  # Create Bookings and Contact Submissions Tables

  ## Overview
  This migration creates tables for storing booking requests and contact form submissions
  for the Chefs Consult Africa website.

  ## New Tables

  ### `bookings`
  Stores consultation booking requests from potential clients
  - `id` (uuid, primary key) - Unique identifier for each booking
  - `name` (text) - Full name of the person booking
  - `email` (text) - Contact email address
  - `phone` (text) - Contact phone number
  - `business_name` (text) - Name of the client's business
  - `business_type` (text) - Type of food business
  - `service` (text) - Service they are interested in
  - `preferred_date` (date, nullable) - Preferred consultation date
  - `message` (text, nullable) - Additional information from client
  - `status` (text) - Booking status (pending, confirmed, completed, cancelled)
  - `created_at` (timestamptz) - Timestamp of booking submission

  ### `contact_submissions`
  Stores general contact form submissions
  - `id` (uuid, primary key) - Unique identifier for each submission
  - `name` (text) - Name of the person contacting
  - `email` (text) - Contact email address
  - `business_type` (text) - Type of business
  - `message` (text) - Message content
  - `status` (text) - Submission status (new, in_progress, resolved)
  - `created_at` (timestamptz) - Timestamp of submission

  ## Security
  - Enable RLS on both tables
  - Allow public inserts (for form submissions)
  - No public reads/updates/deletes (admin-only access through backend)

  ## Notes
  - Both tables use UUID for primary keys
  - Timestamps are automatically set to current time on insert
  - Status fields have default values
  - All contact information fields are required except optional fields
*/

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  business_name text NOT NULL,
  business_type text NOT NULL,
  service text NOT NULL,
  preferred_date date,
  message text,
  status text DEFAULT 'pending' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  business_type text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for bookings table
-- Allow anyone to insert booking requests
CREATE POLICY "Anyone can submit bookings"
  ON bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create policies for contact_submissions table
-- Allow anyone to insert contact form submissions
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS bookings_created_at_idx ON bookings(created_at DESC);
CREATE INDEX IF NOT EXISTS bookings_status_idx ON bookings(status);
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS contact_submissions_status_idx ON contact_submissions(status);
