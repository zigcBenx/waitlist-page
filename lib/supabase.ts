import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jwcbizkcgiisezljjjvq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3Y2JpemtjZ2lpc2V6bGpqanZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4NzA5NTUsImV4cCI6MjA1OTQ0Njk1NX0.M8QAv79N3vIJlq3U91fC0Aoq2DicSF4eJHotX45jRHk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)