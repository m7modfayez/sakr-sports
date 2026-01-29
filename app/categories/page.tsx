"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
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
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
              {filteredCategories.map((category, index) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.id}`}
                  className="group"
                >
                  <div
                    className="bg-card p-8 rounded-xl shadow-lg hover-lift animate-fade-in-up transition-all duration-300 hover:scale-105 cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                      {category.icon || "📦"}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {category.name}
                    </h3>
                    <p className="hidden md:block text-sm text-muted-foreground leading-relaxed mb-4">
                      استكشف منتجات قسم {category.name}
                    </p>
                    <div className="md:flex items-center justify-between">
                      <div className="w-12 h-1 bg-accent rounded-full"></div>
                      <span className="text-accent font-medium text-sm group-hover:translate-x-2 transition-transform">
                        عرض المنتجات ←
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
