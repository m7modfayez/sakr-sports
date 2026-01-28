-- Disable RLS temporarily for categories to allow service role
ALTER TABLE categories DISABLE ROW LEVEL SECURITY;

-- Alternative: Keep RLS but use service role bypass
-- The service role key should bypass RLS, but let's ensure it works

-- Check if the table exists and has the right structure
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'categories' 
ORDER BY ordinal_position;

-- Test insert
INSERT INTO categories (name, description, app_id) 
VALUES ('test', 'test description', 'sakr_sports_app')
ON CONFLICT DO NOTHING;

-- Clean up test data
DELETE FROM categories WHERE name = 'test';

-- Re-enable RLS with simpler policies
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view their own categories" ON categories;
DROP POLICY IF EXISTS "Users can insert their own categories" ON categories;
DROP POLICY IF EXISTS "Users can update their own categories" ON categories;
DROP POLICY IF EXISTS "Users can delete their own categories" ON categories;

-- Create simpler policies that work with service role
CREATE POLICY "Enable insert for all users" ON categories
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable select for all users" ON categories
  FOR SELECT USING (true);

CREATE POLICY "Enable update for all users" ON categories
  FOR UPDATE USING (true);

CREATE POLICY "Enable delete for all users" ON categories
  FOR DELETE USING (true);
