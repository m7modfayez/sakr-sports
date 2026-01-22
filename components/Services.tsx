export default function Services() {
  const collections = [
    {
      title: 'ملابس تدريب',
      description: 'طقمات رياضية عالية الجودة للتدريب واللياقة',
      icon: '🏃',
    },
    {
      title: 'ملابس منافسات',
      description: 'ملابس احترافية للمنافسات الرياضية المختلفة',
      icon: '🏆',
    },
    {
      title: 'إكسسوارات رياضية',
      description: 'إكسسوارات ومعدات رياضية عالية الجودة',
      icon: '⚡',
    },
    {
      title: 'أحذية رياضية',
      description: 'أحذية مريحة وعملية للأنشطة الرياضية',
      icon: '👟',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            مجموعاتنا <span className="text-accent">المميزة</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اكتشف مجموعاتنا الرياضية المصممة للأداء والراحة في كل الأنشطة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-lg hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{collection.icon}</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{collection.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{collection.description}</p>
              <div className="mt-4 w-12 h-1 bg-accent rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
