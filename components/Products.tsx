"use client";

import ProductsPage from "./ProductsPage";

export default function Products() {
  return (
    <ProductsPage
      title="بعض"
      titleHighlight="منتجاتنا المميزة"
      description="اكتشف اختيارنا المنتقى من الأزياء الرجالية الفاخرة"
      limit={4}
      random={true}
      gridCols={{ mobile: 2, desktop: 4 }}
      showSearch={false}
      showViewAllButton={true}
      viewAllText="عرض كل المنتجات"
      viewAllHref="/products"
      sectionClassName="py-20 px-4 bg-background"
      containerClassName="max-w-6xl mx-auto"
    />
  );
}
