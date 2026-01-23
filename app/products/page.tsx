"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { getFirstImage } from "@/lib/utils";
import { Product } from "@/types";

export default function ProductsPage() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch");
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (e) {
        console.error("Failed to fetch products", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const q = searchQuery.toLowerCase();
    return (
      product.title.toLowerCase().includes(q) ||
      product.description.toLowerCase().includes(q) ||
      product.specs.some((s: any) => s.toLowerCase().includes(q))
    );
  });

  return (
    <div className="min-h-screen bg-background text-foreground text-right">
      <Header />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              منتجات <span className="text-accent">Sakr Sports</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              اكتشف منتجاتنا المنتقاة بعناية من الملابس الرياضية الاحترافية
            </p>
          </div>

          <div className="mb-12">
            <input
              type="text"
              placeholder="ابحث عن منتج..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-xl mx-auto block px-6 py-4 rounded-lg border-2 border-border focus:border-accent focus:outline-none text-lg text-right bg-card"
            />
          </div>

          {/* Loading */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-lg">
                  <Skeleton className="h-64 w-full" />
                  <div className="p-6 space-y-3">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {!isLoading && products.length === 0 && (
            <p className="text-center text-muted-foreground">
              لا توجد منتجات متاحة حالياً
            </p>
          )}

          {!isLoading && filteredProducts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {filteredProducts.map((product) => {
                const image = getFirstImage(product);

                return (
                  <div
                    key={product.id}
                    className="bg-card rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
                  >
                    <div className="h-64 bg-gradient-to-r from-accent to-accent/80">
                      {image ? (
                        <img
                          src={image}
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="h-full flex items-center justify-center text-4xl">
                          ⬛
                        </div>
                      )}
                    </div>

                    <div className="p-6 text-right">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {product.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {product.description}
                      </p>

                      <p className="text-3xl font-bold text-accent mb-6">
                        {product.price.toFixed(2)}
                      </p>

                      <button
                        onClick={() => router.push(`/products/${product.id}`)}
                        className="w-full bg-accent text-accent-foreground py-3 rounded-lg hover:bg-accent/90 transition-colors"
                      >
                        عرض التفاصيل
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
