"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // TODO: Implement your own backend API endpoint here
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

      console.log("Form submitted:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitStatus("success");
      alert("شكراً لتواصلك معنا. سنتواصل معك قريباً!");
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      alert("حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            اتصل <span className="text-accent">بنا</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            لديك أسئلة عن مجموعاتنا الرياضية؟ نحن هنا للمساعدة والإجابة على جميع استفساراتك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Phone,
              label: "الهاتف",
              value: "010 15185006",
              link: "tel:01015185006",
              detail: "اتصل بنا من 9 صباحاً إلى 6 مساءً",
            },
            // {
            //   icon: Mail,
            //   label: "البريد الإلكتروني",
            //   value: "info@sakrsports.example",
            //   detail: "سنتواصل معك في أقرب وقت ممكن",
            // },
            {
              icon: MapPin,
              label: "العنوان",
              value: "أجهور الكبرى, مركز طوخ, القليوبية",
              link: "https://maps.app.goo.gl/ag1wErno833WvVgU7",
              detail: "منطقة العشماوي",
            },
             {
              icon: MapPin,
              label: "العنوان الثاني",
              value: "فرع القناطر الخيرية -شارع سور النادي أمام الرعاية",
              // link: "https://maps.app.goo.gl/ag1wErno833WvVgU7",
              detail: "منطقة العشماوي",
            },
          ].map((contact, index) => {
            const Icon = contact.icon;
            return (
               <div
               
                key={index}
                className="bg-secondary p-8 rounded-xl text-center hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a href={contact.link} target="blank">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-foreground">
                    <Icon size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {contact.label}
                </h3>
                <p className="text-accent font-semibold mb-2">
                   {contact.value}
                </p>
                <p className="text-muted-foreground text-sm">{contact.detail}</p>
              </a>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              معلومات إضافية
            </h3>
            <div className="space-y-6 bg-gradient-to-br from-secondary to-card p-8 rounded-xl">
              <div>
                <p className="font-semibold text-foreground mb-2">اسم العلامة التجارية</p>
                <p className="text-foreground">Sakr Sports ملابس رياضية</p>
              </div>
              {/* <div>
                <p className="font-semibold text-foreground mb-2">
                  البريد الإلكتروني
                </p>
                <p className="text-foreground">info@sakrsports.example</p>
              </div> */}
              <div>
                <p className="font-semibold text-foreground mb-2">العنوان</p>
                <p className="text-foreground">أجهور الكبرى, مركز طوخ, القليوبية</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">ساعات العمل</p>
                <p className="text-foreground">
                  من السبت إلى الخميس: 8:00 - 22:00
                </p>
                <p className="text-foreground">
                  الجمعة: 2:00 - 22:00
                </p>
              </div>
            </div>
          </div>

          {/* <div className="animate-slide-in-left">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-secondary p-8 rounded-xl"
            >
              <div>
                <label className="block text-foreground font-semibold mb-2">
                  الاسم
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                  placeholder="أدخل اسمك"
                />
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                  placeholder="أدخل رقم هاتفك"
                />
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">
                  الموضوع
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                  placeholder="موضوع رسالتك"
                />
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">
                  الرسالة
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="أدخل رسالتك هنا"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "جاري الإرسال..." : "أرسل الرسالة"}
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
}
