"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Category } from "@/types";
import ProductsPage from "@/components/ProductsPage";
import { getFirstImage } from "@/lib/utils";

export default function CategoryDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const categoryId = params.id as string;
  
  const [category, setCategory] = useState<Category | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        // Fetch category details
        const categoryRes = await fetch(`/api/categories?id=${categoryId}`);
        if (categoryRes.ok) {
          const categoryData: Category = await categoryRes.json();
          setCategory(categoryData);
        }
      } catch (e) {
        console.error("Failed to fetch category", e);
      } finally {
        setIsLoading(false);
      }
    };

    if (categoryId) {
      fetchCategory();
    }
  }, [categoryId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground text-right">
        <Header />
        
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Skeleton className="h-12 w-1/2 mx-auto mb-4 bg-gray-200" />
              <Skeleton className="h-8 w-1/3 mx-auto mb-6 bg-gray-200" />
              <Skeleton className="h-4 w-2/3 mx-auto bg-gray-200" />
            </div>
            
            <div className="mb-12">
              <Skeleton className="h-12 w-full max-w-xl mx-auto bg-gray-200 rounded-lg" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="bg-card rounded-xl overflow-hidden shadow-lg">
                  <Skeleton className="h-50 w-full" />
                  <div className="p-6 space-y-4">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-8 w-1/2" />
                    <Skeleton className="h-10 w-full rounded-lg" />
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
            <h1 className="text-4xl font-bold text-foreground mb-6">
              القسم غير موجود
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              عذراً، القسم الذي تبحث عنه غير موجود أو تم حذفه
            </p>
            <button
              onClick={() => router.push("/categories")}
              className="bg-accent text-accent-foreground px-8 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-colors"
            >
              العودة للأقسام
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

          {/* Products for this category */}
          <ProductsPage
            title=""
            titleHighlight=""
            description=""
            categoryId={categoryId}
            gridCols={{ mobile: 2, desktop: 4 }}
            showSearch={true}
            showViewAllButton={false}
            showHeader={false}
            sectionClassName=""
            containerClassName=""
            initialLoading={false}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
