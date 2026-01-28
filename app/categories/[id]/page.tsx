"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { getFirstImage } from "@/lib/utils";
import { Category, ProductWithCategory } from "@/types";

export default function CategoryDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const categoryId = params.id as string;
  
  const [category, setCategory] = useState<Category | null>(null);
  const [products, setProducts] = useState<ProductWithCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch category details
        const categoryRes = await fetch(`/api/categories?id=${categoryId}`);
        if (categoryRes.ok) {
          const categoryData: Category = await categoryRes.json();
          setCategory(categoryData);
        }

        // Fetch category products
        const productsRes = await fetch(`/api/products?category_id=${categoryId}`);
        if (productsRes.ok) {
          const productsData: ProductWithCategory[] = await productsRes.json();
          setProducts(productsData);
        }
      } catch (e) {
        console.error("Failed to fetch data", e);
      } finally {
        setIsLoading(false);
      }
    };

    if (categoryId) {
      fetchData();
    }
  }, [categoryId]);

  const filteredProducts = products.filter((product) => {
    const q = searchQuery.toLowerCase();
    return (
      product.title.toLowerCase().includes(q) ||
      product.description.toLowerCase().includes(q) ||
      product.specs.some((s: any) => s.toLowerCase().includes(q))
    );
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground text-right">
        <Header />
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Skeleton className="h-16 w-64 mx-auto mb-4" />
              <Skeleton className="h-6 w-96 mx-auto" />
            </div>
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
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-background text-foreground text-right">
        <Header />
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              الفئة غير موجودة
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              عذراً، الفئة التي تبحث عنها غير موجودة أو تم حذفها
            </p>
            <button
              onClick={() => router.push("/categories")}
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors"
            >
              العودة للفئات
            </button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground text-right">
      <Header />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Category Header */}
          <div className="text-center mb-16">
            <button
              onClick={() => router.push("/categories")}
              className="text-accent hover:text-accent/80 mb-4 text-sm font-medium"
            >
              ← العودة للأقسام
            </button>
            <div className="text-8xl mb-6">{category.icon || "📦"}</div>
            <h1 className="text-5xl font-bold text-foreground mb-4">
              {category.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              استكشف منتجات قسم {category.name}
            </p>
          </div>

          <div className="mb-12">
            <input
              type="text"
              placeholder="ابحث عن منتج في هذا القسم..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-xl mx-auto block px-6 py-4 rounded-lg border-2 border-border focus:border-accent focus:outline-none text-lg text-right bg-card"
            />
          </div>

          {products.length === 0 && (
            <div className="text-center">
              <p className="text-xl text-muted-foreground mb-8">
                لا توجد منتجات في هذا القسم حالياً
              </p>
              <button
                onClick={() => router.push("/products")}
                className="bg-accent text-accent-foreground px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors"
              >
                عرض جميع المنتجات
              </button>
            </div>
          )}

          {filteredProducts.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {filteredProducts.map((product) => {
                const image = getFirstImage(product);

                return (
                  <div
                    key={product.id}
                    className="bg-card rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
                  >
                    <div className="h-50 bg-gradient-to-r from-accent to-accent/80">
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
                        {/* {product.description} */}
                      </p>

                      {product.price_before_discount > 0 && (
                        <p className="text-1xl line-through decoration-3 opacity-40 font-bold text-accent mb-1">
                          {product.price_before_discount.toFixed(2)}
                        </p>
                      )}

                      {product.price > 0 && (
                        <p className="text-1xl font-bold text-accent mb-6">
                          {product.price.toFixed(2)}
                        </p>
                      )}

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
