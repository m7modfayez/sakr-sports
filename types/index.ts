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
}

export interface ProductInsert {
  title: string;
  description?: string;
  price: number;
  price_before_discount: number;
  image_urls: string[];
  specs: string[];
}
