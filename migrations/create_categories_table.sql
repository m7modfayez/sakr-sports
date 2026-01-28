-- -- Create categories table
-- CREATE TABLE IF NOT EXISTS categories (
--   id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
--   name VARCHAR(255) NOT NULL,
--   description TEXT,
--   app_id VARCHAR(255) NOT NULL,
--   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
--   updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
-- );

-- -- Add index for app_id for performance
-- CREATE INDEX IF NOT EXISTS idx_categories_app_id ON categories(app_id);

-- -- Add unique constraint for name within each app
-- CREATE UNIQUE INDEX IF NOT EXISTS idx_categories_name_app_id ON categories(name, app_id);

-- -- Add category_id column to products table (if it doesn't exist)
-- ALTER TABLE products 
-- ADD COLUMN IF NOT EXISTS category_id UUID REFERENCES categories(id) ON DELETE SET NULL;

-- -- Add index for category_id in products table
-- CREATE INDEX IF NOT EXISTS idx_products_category_id ON products(category_id);

-- -- Enable RLS (Row Level Security) if not already enabled
-- ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- -- Create policy for categories table (similar to products table)
-- CREATE POLICY "Users can view their own categories" ON categories
--   FOR SELECT USING (app_id = current_setting('app.current_app_id', true));

-- CREATE POLICY "Users can insert their own categories" ON categories
--   FOR INSERT WITH CHECK (app_id = current_setting('app.current_app_id', true));

-- CREATE POLICY "Users can update their own categories" ON categories
--   FOR UPDATE USING (app_id = current_setting('app.current_app_id', true));

-- CREATE POLICY "Users can delete their own categories" ON categories
--   FOR DELETE USING (app_id = current_setting('app.current_app_id', true));
