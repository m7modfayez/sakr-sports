export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="animate-fade-in-up" style={{ animationDelay: '0s' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-bold">
                BQ
              </div>
              <span className="text-xl font-bold">BASIQ</span>
            </div>
            <p className="text-muted-foreground">علامة تجارية للأزياء الرجالية الفاخرة تقدم أناقة راقية وجودة استثنائية للرجل العصري</p>
            <p className="mt-2 text-sm text-gray-500">تم تصميم وتطوير هذا الموقع بواسطة <br /> <span><b>Mahmoud Fayez, </b></span><span><b>Mahmoud Elabady</b></span> </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#hero" className="hover:text-accent transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">من نحن</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">المجموعات</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors">المنتجات</a></li>
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-bold mb-4">المجموعات</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#services" className="hover:text-accent transition-colors">مجموعة الأعمال</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">خط الكاجوال</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">خياطة مخصصة</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">استشارة أناقة</a></li>
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-lg font-bold mb-4">اتصل بنا</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+15551234567" className="hover:text-accent transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:info@basiq.example" className="hover:text-accent transition-colors">info@basiq.example</a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>نيويورك، نيويورك</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="text-center text-muted-foreground">
            <p>© {currentYear} BASIQ أزياء رجالية - جميع الحقوق محفوظة</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
