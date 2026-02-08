import { Wrench, Snowflake, Cog, Settings, Heater } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import PhotoPart from "@/components/sections/PhotoPart";

const iconList = [Wrench, Snowflake, Cog, Settings, Heater];

const services = [
  {
    title: "Klima Teknik Servisi",
    description:
      "Tüm marka ve model klimalarınız için profesyonel teknik servis hizmeti. Arıza tespit, onarım ve bakım.",
  },
  {
    title: "Klima Satışı",
    description:
      "İhtiyacınıza uygun klima seçimi ve kurulum dahil satış hizmeti. En uygun fiyat garantisi.",
  },
  {
    title: "Klima Yedek Parça",
    description:
      "Orijinal ve kaliteli yedek parça temini. Tüm markalar için geniş parça stoğu.",
  },
  {
    title: "Bakım ve Onarım",
    description:
      "Düzenli bakım hizmetleri ile klimanızın ömrünü uzatın. Periyodik kontrol ve temizlik.",
  },
  {
    title: "Isıtma Sistemleri",
    description:
      "Enerji verimli ısıtma çözümleri ile konforlu yaşam alanları yaratın. Kurulum ve bakım hizmetleri.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="hizmetler"
      className="-mt-4 md:mt-0 pt-0 md:pt-0 pb-16 md:pb-24 bg-secondary/30"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-primary mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profesyonel ekibimiz ile tüm klima ihtiyaçlarınızda yanınızdayız
          </p>
        </div>

        {/* Services Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:flex lg:gap-6 lg:overflow-x-auto lg:pb-2 lg:snap-x lg:snap-mandatory lg:scrollbar-orange">
            {services.map((service, index) => {
              const Icon = iconList[index] ?? Wrench;
              return (
                <Card
                  key={`${service.title}-${index}`}
                  className="card-hover border-0 bg-card shadow-md lg:min-w-[340px] lg:snap-start"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="pointer-events-none hidden lg:block absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-secondary/40 to-transparent" />
          <div className="pointer-events-none hidden lg:block absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-secondary/40 to-transparent" />
        </div>
      </div>
      <PhotoPart />
    </section>
  );
};

export default ServicesSection;

