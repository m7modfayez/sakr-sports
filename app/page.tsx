import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HomeCategories from "@/components/HomeCategories";
import Products from "@/components/Products";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground text-right">
      <Header />
      <Hero />
      <About />
      <HomeCategories />
      <Products />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
