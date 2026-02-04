import { Wrench, Snowflake, Cog, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Wrench,
    title: "Klima Teknik Servisi",
    description: "Tüm marka ve model klimalarınız için profesyonel teknik servis hizmeti. Arıza tespit, onarım ve bakım.",
  },
  {
    icon: Snowflake,
    title: "Klima Satışı",
    description: "İhtiyacınıza uygun klima seçimi ve kurulum dahil satış hizmeti. En uygun fiyat garantisi.",
  },
  {
    icon: Cog,
    title: "Klima Yedek Parça",
    description: "Orijinal ve kaliteli yedek parça temini. Tüm markalar için geniş parça stoğu.",
  },
  {
    icon: Settings,
    title: "Bakım ve Onarım",
    description: "Düzenli bakım hizmetleri ile klimanızın ömrünü uzatın. Periyodik kontrol ve temizlik.",
  },
];

const ServicesSection = () => {
  return (
    <section id="hizmetler" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profesyonel ekibimiz ile tüm klima ihtiyaçlarınızda yanınızdayız
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="card-hover border-0 bg-card shadow-md"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
