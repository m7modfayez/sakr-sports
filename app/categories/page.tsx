"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Category } from "@/types";

export default function CategoriesPage() {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        if (!res.ok) throw new Error("Failed to fetch");
        const data: Category[] = await res.json();
        setCategories(data);
      } catch (e) {
        console.error("Failed to fetch categories", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const filteredCategories = categories.filter((category) => {
    const q = searchQuery.toLowerCase();
    return (
      category.name.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-background text-foreground text-right">
      <Header />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              الأقسام <span className="text-accent">Sakr Sports</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              استكشف مجموعاتنا المتنوعة من الملابس الرياضية المصنفة حسب النشاط والاستخدام
            </p>
          </div>

          <div className="mb-12">
            <input
              type="text"
              placeholder="ابحث عن قسم..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-xl mx-auto block px-6 py-4 rounded-lg border-2 border-border focus:border-accent focus:outline-none text-lg text-right bg-card"
            />
          </div>

          {/* Loading */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-lg">
                  <Skeleton className="h-48 w-full" />
                  <div className="p-6 space-y-3">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {!isLoading && categories.length === 0 && (
            <p className="text-center text-muted-foreground">
              لا توجد أقسام متاحة حالياً
            </p>
          )}

          {!isLoading && filteredCategories.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredCategories.map((category) => (
                <div
                  key={category.id}
                  className="bg-card rounded-xl overflow-hidden shadow-lg hover:scale-105 transition cursor-pointer"
                  onClick={() => router.push(`/categories/${category.id}`)}
                >
                  <div className="h-48 bg-gradient-to-r from-accent to-accent/80 flex items-center justify-center">
                    <div className="text-6xl">{category.icon || "📦"}</div>
                  </div>

                  <div className="p-6 text-right">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {category.name}
                    </h3>

                    <button className="w-full bg-accent text-accent-foreground py-3 rounded-lg hover:bg-accent/90 transition-colors">
                      عرض المنتجات
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
