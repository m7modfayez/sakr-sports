"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";
import Link from "next/link";
import { getFirstImage } from "@/lib/utils";
import { Product, ProductWithCategory } from "@/types";

interface ProductsPageProps {
  // Display configuration
  title?: string;
  titleHighlight?: string;
  description?: string;
  showSearch?: boolean;
  showViewAllButton?: boolean;
  viewAllText?: string;
  viewAllHref?: string;
  
  // Product fetching configuration
  limit?: number;
  categoryId?: string; // For category pages
  
  // Layout configuration
  gridCols?: {
    mobile: number;
    desktop: number;
  };
  
  // Styling configuration
  sectionClassName?: string;
  containerClassName?: string;
  showHeader?: boolean;
  
  // Loading state
  initialLoading?: boolean;
}

export default function ProductsPage({
  title = "منتجاتنا",
  titleHighlight = "المميزة",
  description = "اكتشف اختيارنا المنتقى من الأزياء الرجالية الفاخرة",
  showSearch = false,
  showViewAllButton = true,
  viewAllText = "عرض كل المنتجات",
  viewAllHref = "/products",
  limit = 8,
  categoryId,
  gridCols = { mobile: 1, desktop: 4 },
  sectionClassName = "py-20 px-4 bg-background",
  containerClassName = "max-w-6xl mx-auto",
  showHeader = true,
  initialLoading = true,
}: ProductsPageProps) {
  const router = useRouter();
  const [products, setProducts] = useState<ProductWithCategory[]>([]);
  const [isLoading, setIsLoading] = useState(initialLoading);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Build query parameters
        const params = new URLSearchParams();
        
        if (categoryId) {
          params.append('category_id', categoryId);
        }
        
        if (limit) {
          params.append('limit', limit.toString());
        }
        
        const response = await fetch(`/api/products?${params.toString()}`);
        if (response.ok) {
          const data: ProductWithCategory[] = await response.json();
          setProducts(data);
        } else {
          setError("حدث خطأ في تحميل المنتجات");
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setError("حدث خطأ في تحميل المنتجات");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId, limit]);

  const filteredProducts = products.filter((product) => {
    if (!showSearch || !searchQuery) return true;
    
    const q = searchQuery.toLowerCase();
    return (
      product.title.toLowerCase().includes(q) ||
      product.description.toLowerCase().includes(q) ||
      product.specs.some((s: any) => s.toLowerCase().includes(q))
    );
  });

  if (isLoading) {
    return (
      <section className={sectionClassName}>
        <div className={containerClassName}>
          {showHeader && (
            <div className="text-center mb-16">
              <Skeleton className="h-12 w-1/2 mx-auto mb-4 bg-gray-200" />
              <Skeleton className="h-4 w-3/4 mx-auto bg-gray-200" />
            </div>
          )}
          
          {showSearch && (
            <div className="mb-12">
              <Skeleton className="h-12 w-full max-w-xl mx-auto bg-gray-200 rounded-lg" />
            </div>
          )}
          
          <div className={`grid grid-cols-${gridCols.mobile} md:grid-cols-${gridCols.desktop} gap-8`}>
            {Array.from({ length: limit || 8 }).map((_, index) => (
              <div
                key={index}
                className="bg-card rounded-xl overflow-hidden shadow-lg"
              >
                <Skeleton className="h-54 w-full bg-gray-200" />
                <div className="p-6 space-y-4">
                  <Skeleton className="h-6 w-3/4 bg-gray-200" />
                  <Skeleton className="h-4 w-full bg-gray-200" />
                  <Skeleton className="h-4 w-5/6 bg-gray-200" />
                  <Skeleton className="h-8 w-1/2 bg-gray-200" />
                  <Skeleton className="h-10 w-full bg-gray-200 rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={sectionClassName}>
        <div className={containerClassName}>
          <div className="text-center py-20">
            <p className="text-red-600 text-lg mb-6">{error}</p>
            <Link
              href={viewAllHref}
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-colors"
            >
              {viewAllText}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        {showHeader && (
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-foreground mb-4">
              {title} <span className="text-accent">{titleHighlight}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </div>
        )}

        {showSearch && (
          <div className="mb-12">
            <input
              type="text"
              placeholder="ابحث عن منتج..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-xl mx-auto block px-6 py-4 rounded-lg border-2 border-border focus:border-accent focus:outline-none text-lg text-right bg-card"
            />
          </div>
        )}

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-6">
              {searchQuery ? "لا توجد منتجات مطابقة للبحث" : "لا توجد منتجات متاحة حالياً"}
            </p>
            {showViewAllButton && (
              <Link
                href={viewAllHref}
                className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-colors"
              >
                {viewAllText}
              </Link>
            )}
          </div>
        ) : (
          <>
            <div className={`grid grid-cols-${gridCols.mobile} md:grid-cols-${gridCols.desktop} gap-8`}>
              {filteredProducts.map((product, index) => {
                const image = getFirstImage(product);

                return (
                  <div
                    key={product.id}
                    className="bg-card rounded-xl overflow-hidden shadow-lg hover:scale-105 transition animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="h-54 bg-gradient-to-r from-accent to-accent/80">
                      {image ? (
                        <img
                          src={image}
                          alt={product.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-6xl">⬛</div>
                        </div>
                      )}
                    </div>

                    <div className="p-6 text-right">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        {product.title}
                      </h3>
                      <p className="hidden md:block text-sm text-muted-foreground mb-3">
                        {product.description}
                      </p>

                      {product.price_before_discount && (
                        <p className="text-lg md:text-2xl line-through decoration-3 opacity-40 font-bold text-accent">
                          {product.price_before_discount.toFixed(2)}
                        </p>
                      )}

                      {product.price && (
                        <p className="text-xl md:text-3xl font-bold text-accent mb-3">
                          {product.price.toFixed(2)}
                        </p>
                      )}

                      <Button
                        onClick={() => router.push(`/products/${product.id}`)}
                        className="w-full bg-accent text-accent-foreground py-3 rounded-lg hover:bg-accent/90 transition-colors"
                      >
                        عرض التفاصيل
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            {showViewAllButton && !categoryId && (
              <div className="text-center mt-12">
                <Link
                  href={viewAllHref}
                  className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-colors"
                >
                  {viewAllText}
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
