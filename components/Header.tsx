"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "الرئيسية", href: "/" },
    { label: "المنتجات", href: "/products" },
    { label: "الأقسام", href: "/categories" },
    // { label: "من نحن", href: "/#about" },
    // { label: "المجموعات", href: "/#services" },
    // { label: "اتصل بنا", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background shadow-md animate-fade-in-down">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/Sakr-logo.jpg" 
                alt="Sakr Sports Logo" 
                className="h-10 w-auto"
              />
              {/* <span className="text-2xl font-extrabold text-foreground">
                Sakr Sports
              </span> */}
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row gap-8 absolute md:relative top-full md:top-auto right-0 md:right-auto left-0 md:left-auto bg-background md:bg-transparent p-4 md:p-0 md:items-center shadow-md md:shadow-none`}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {/* <Link
              href="/login"
              className="text-foreground hover:text-accent transition-colors font-medium md:hidden"
              onClick={() => setIsOpen(false)}
            >
              لوحة التحكم
            </Link> */}
          </div>

          <div className="hidden md:flex gap-4">
            {/* <Link
              href="/login"
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              لوحة التحكم
            </Link> */}
            <a
              href="/#products"
              className="bg-accent text-accent-foreground px-6 py-2 rounded-lg hover:bg-accent/90 transition-colors font-semibold"
            >
              تسوق الآن
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
