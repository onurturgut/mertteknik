import { Users, Zap, Shield, Award } from "lucide-react";

const iconList = [Users, Zap, Shield, Award];

const features = [
  {
    title: "Uzman Teknik Kadro",
    description: "Deneyimli ve sertifikalı teknik ekibimiz ile kaliteli hizmet",
  },
  {
    title: "Hızlı Servis",
    description: "Aynı gün müdahale ve hızlı çözüm garantisi",
  },
  {
    title: "Orijinal Yedek Parça",
    description: "Sadece orijinal ve garantili yedek parça kullanımı",
  },
  {
    title: "Güvenilir Hizmet",
    description: "Müşteri memnuniyeti odaklı, garantili servis hizmeti",
  },
];

const stats = [
  { value: "10+", label: "Yıllık Deneyim" },
  { value: "5000+", label: "Mutlu Müşteri" },
  { value: "15+", label: "Kalorifer Hizmetleri" },
  { value: "%98", label: "Müşteri Memnuniyeti" },
];

const WhyUsSection = () => {
  return (
    <section id="neden-biz" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Neden Biz?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fethiye'de güvenilir klima servisi denince akla ilk gelen isim
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = iconList[index] ?? Users;
            return (
              <div key={`${feature.title}-${index}`} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

