export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-right space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              عن <span className="text-accent">Sakr Sports</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sakr Sports هي علامة تجارية للملابس الرياضية مكرسة للجودة الاستثنائية والأداء الاحترافي. نقدم مجموعات منتقاة بعناية تجمع بين التقنية الرياضية المتقدمة والأناقة العصرية للرياضيين المميزين الذين يقدرون الأداء والاهتمام بالتفاصيل.
            </p>
          </div>

          <div className="animate-slide-in-left">
            <div className="bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-8 text-accent-foreground shadow-2xl">
              <div className="space-y-8">
                {[
                  { number: '10+', label: 'سنوات من التميز' },
                  { number: '500+', label: 'عميل راضٍ' },
                  { number: '50+', label: 'مجموعة فاخرة' },
                ].map((stat, index) => (
                  <div key={index} className="border-b border-accent/30 pb-6 last:border-b-0 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="text-4xl font-bold">{stat.number}</div>
                    <div className="text-accent-foreground/90 mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
