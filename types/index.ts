export interface Product {
  price_before_discount: number;
  id: string;
  title: string;
  description: string;
  price: number;
  image_urls: string[];
  specs: string[];
  created_at: string;
  updated_at: string;
  category_id?: string | null;
}

export interface ProductInsert {
  title: string;
  description?: string;
  price: number;
  price_before_discount: number;
  image_urls: string[];
  specs: string[];
  category_id?: string | null;
}

export interface Category {
  title: string;
  id: string;
  name: string;
  icon: string;
  // title: string;
  created_at: string;
  updated_at: string;
}

export interface CategoryInsert {
  name: string;
  icon: string;
}

export interface ProductWithCategory extends Product {
  category?: Category | null;
}
