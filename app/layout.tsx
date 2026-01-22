import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BASIQ",
  description:
    "BASIQ - علامة تجارية للأزياء الرجالية الفاخرة. نقدم مجموعات منتقاة بعناية تجمع بين الأناقة الخالدة والاتجاهات الحديثة للرجل المميز.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
