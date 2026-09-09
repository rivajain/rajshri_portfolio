CREATE TABLE public.access_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  organisation TEXT,
  reason TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
GRANT INSERT ON public.access_requests TO anon;
GRANT INSERT, SELECT ON public.access_requests TO authenticated;
GRANT ALL ON public.access_requests TO service_role;
ALTER TABLE public.access_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit an access request" ON public.access_requests FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE public.access_settings (
  id INTEGER NOT NULL PRIMARY KEY DEFAULT 1,
  passcode TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  CONSTRAINT access_settings_single_row CHECK (id = 1)
);
GRANT ALL ON public.access_settings TO service_role;
ALTER TABLE public.access_settings ENABLE ROW LEVEL SECURITY;
INSERT INTO public.access_settings (id, passcode) VALUES (1, 'RJ-BSI-2026');