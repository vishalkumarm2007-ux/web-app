import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cfunqzfyjbiiimihcrim.supabase.co";
const supabaseKey = "sb_publishable_A01WNRY9wYFw2fUYAZVyNg_cPIuvuKT";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);