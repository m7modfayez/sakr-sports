export default function Hero() {
  return (
    <section id="hero" className="min-h-[300px] md:min-h-[600px] relative pt-20 pb-16 px-4 overflow-hidden">
      {/* Background gradient only */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-secondary/90" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            ملابس رياضية احترافية
            <br />
            <span className="text-accent">من Sakr Sports</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            اكتشف مجموعتنا الحصرية من الملابس الرياضية الاحترافية. الجودة العالية تلبي أداء استثنائي للرياضيين المميزين.
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
            { icon: '🏃', label: 'أداء رياضي فائق', delay: '0s' },
            { icon: '�', label: 'جودة احترافية', delay: '0.2s' },
            { icon: '🏆', label: 'علامة تجارية موثوقة', delay: '0.4s' },
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
