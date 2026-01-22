export default function Certifications() {
  const achievements = [
    'أقمشة فاخرة عالية الجودة',
    'ممارسات أزياء مستدامة',
    'تعاونات مع مصممين حصريين',
  ];

  const standards = [
    'معايير أزياء دولية',
    'ممارسات تصنيع أخلاقية',
    'شهادات أزياء عالمية',
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            التميز في <span className="text-accent">الجودة</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-foreground mb-8">إنجازاتنا</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-card rounded-lg shadow hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground flex-shrink-0 font-bold">
                    ✓
                  </div>
                  <p className="text-foreground text-lg">{achievement}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-foreground mb-8">معايير الجودة</h3>
            <div className="space-y-6">
              {standards.map((standard, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-card rounded-lg shadow hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground flex-shrink-0 font-bold">
                    ✓
                  </div>
                  <p className="text-foreground text-lg">{standard}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground p-12 rounded-2xl text-center animate-scale-in">
          <h3 className="text-3xl font-bold mb-4">وعد الجودة</h3>
          <p className="text-lg leading-relaxed">
            نحن ملتزمون بأعلى معايير الجودة والحرفية في جميع مجموعاتنا. كل قطعة يتم اختيارها وتصميمها بعناية لتلبية توقعات الرجل العصري الذي يقدر التميز والأناقة.
          </p>
        </div>
      </div>
    </section>
  );
}
