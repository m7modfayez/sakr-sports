"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";
import { Category } from "@/types";

export default function HomeCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories");
        if (response.ok) {
          const data: Category[] = await response.json();
          setCategories(data.slice(0, 4)); // Show max 4 categories
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (isLoading) {
    return (
      <section id="categories" className="py-20 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-1/2 mx-auto mb-4 bg-gray-200" />
            <Skeleton className="h-4 w-3/4 mx-auto bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-lg">
                <Skeleton className="h-12 w-12 mb-4 bg-gray-200 rounded" />
                <Skeleton className="h-6 w-3/4 mb-3 bg-gray-200" />
                <Skeleton className="h-4 w-full mb-4 bg-gray-200" />
                <Skeleton className="h-1 w-12 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="categories" className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            أقسامنا <span className="text-accent">الرياضية</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اكتشف مجموعاتنا الرياضية المصنفة حسب النشاط والاستخدام
          </p>
        </div>

        {categories.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-6">
              لا توجد أقسام متاحة حالياً
            </p>
            <Link
              href="/products"
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-colors"
            >
              عرض جميع المنتجات
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
              {categories.map((category, index) => (
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

            {/* View All Categories Link */}
            <div className="text-center mt-12">
              <Link
                href="/categories"
                className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-colors"
              >
                عرض كل الأقسام
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
