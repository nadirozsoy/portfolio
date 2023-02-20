import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ftxbkxipeppdkoptwfjp.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0eGJreGlwZXBwZGtvcHR3ZmpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY4ODg2NTIsImV4cCI6MTk5MjQ2NDY1Mn0.msx6pEgfTFTyp8FaGc1jonqfk0Py-e5j6zJYX1pi9xM'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
