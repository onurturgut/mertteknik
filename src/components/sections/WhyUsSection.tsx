import { Users, Zap, Shield, Award } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Uzman Teknik Kadro",
    description: "Deneyimli ve sertifikalı teknik ekibimiz ile kaliteli hizmet",
  },
  {
    icon: Zap,
    title: "Hızlı Servis",
    description: "Aynı gün müdahale ve hızlı çözüm garantisi",
  },
  {
    icon: Shield,
    title: "Orijinal Yedek Parça",
    description: "Sadece orijinal ve garantili yedek parça kullanımı",
  },
  {
    icon: Award,
    title: "Güvenilir Hizmet",
    description: "Müşteri memnuniyeti odaklı, garantili servis hizmeti",
  },
];

const WhyUsSection = () => {
  return (
    <section id="neden-biz" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Neden Biz?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fethiye'de güvenilir klima servisi denince akla ilk gelen isim
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Yıllık Deneyim</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5000+</div>
            <div className="text-muted-foreground">Mutlu Müşteri</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Servis Verilen Marka</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">%98</div>
            <div className="text-muted-foreground">Müşteri Memnuniyeti</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
