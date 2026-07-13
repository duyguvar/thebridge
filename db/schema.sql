-- Client registrations submitted via /register.
-- `details` holds segment-specific fields as JSON so the schema stays
-- stable even if per-segment questions change later.
CREATE TABLE IF NOT EXISTS clients (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  segment TEXT NOT NULL CHECK (segment IN ('international', 'gcc', 'government')),
  name TEXT NOT NULL,
  organization TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  country TEXT NOT NULL,
  details JSONB NOT NULL DEFAULT '{}'::jsonb
);

CREATE INDEX IF NOT EXISTS clients_segment_idx ON clients (segment);
CREATE INDEX IF NOT EXISTS clients_created_at_idx ON clients (created_at DESC);
