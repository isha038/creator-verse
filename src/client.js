import { createClient } from '@supabase/supabase-js';
const URL = 'https://wefbxrqcnfjzdxrhovhw.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndlZmJ4cnFjbmZqemR4cmhvdmh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzMzg4ODYsImV4cCI6MjAzMzkxNDg4Nn0.S-POX94UxttZ9qRxRdljjz9DaLk9XgY3TmYRxoPGLYk';


export const supabase = createClient(URL, API_KEY);