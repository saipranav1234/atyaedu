// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gprfexuwiyldekgqszxm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwcmZleHV3aXlsZGVrZ3FzenhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4NzIzMjgsImV4cCI6MjA2NTQ0ODMyOH0.w1Xr9FVlQNX7XtZihG2raqxtf1veShcVgTjSscb2_O0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
