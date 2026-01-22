export default function Hero() {
  return (
    <section id="hero" className="min-h-[600px] bg-gradient-to-br from-background to-secondary pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            أزياء رجالية فاخرة
            <br />
            <span className="text-accent">من BASIQ</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            اكتشف مجموعتنا الحصرية من الأزياء الرجالية الفاخرة. الجودة العالية تلبي الأناقة العصرية للرجل المميز.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a href="#contact" className="bg-accent text-accent-foreground px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors font-semibold text-lg hover-lift">
              تسوق المجموعة
            </a>
            <a href="#about" className="border-2 border-accent text-accent px-8 py-3 rounded-lg hover:bg-accent/10 transition-colors font-semibold text-lg hover-lift">
              اعرف المزيد
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '👔', label: 'أقمشة عالية الجودة', delay: '0s' },
            { icon: '🌍', label: 'شحن دولي', delay: '0.2s' },
            { icon: '✓', label: 'علامة تجارية موثوقة', delay: '0.4s' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-lg text-center hover-lift animate-scale-in"
              style={{ animationDelay: stat.delay }}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <p className="text-foreground font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
