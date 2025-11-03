import { createClient } from '@supabase/supabase-js';

// Get environment variables with fallbacks for build time
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDk5NzQwMDAsImV4cCI6MTk2NTU1MDAwMH0.placeholder';

// Initialize Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);
