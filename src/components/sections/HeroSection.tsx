"use client";

import { Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("iletisim");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-12 md:py-16 flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/30" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Fethiye'nin Güvenilir Klima Servisi
          </div>

          {/* Main heading */}
          <h1 className="animate-fade-in-up animate-fade-in-delay-1 text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Profesyonel
            <span className="text-primary block">Klima Teknik Servisi</span>
          </h1>

          {/* Subheading */}
          <p className="animate-fade-in-up animate-fade-in-delay-2 text-xl md:text-2xl text-muted-foreground mb-8">
            Klima Satışı • Teknik Servis • Yedek Parça
          </p>

          {/* Description */}
          <p className="animate-fade-in-up animate-fade-in-delay-3 text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Muğla Fethiye bölgesinde uzman kadromuz ile klima montaj, bakım, onarım ve satış hizmetleri sunuyoruz.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="tel:+905317097972">
                <Phone className="mr-2 h-5 w-5" />
                Hemen Ara
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6 border-2 hover:bg-accent transition-all duration-300"
            >
              <FileText className="mr-2 h-5 w-5" />
              Teklif Al
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-in-up animate-fade-in-delay-4 mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Ücretsiz Keşif
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Aynı Gün Servis
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Garantili Hizmet
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

