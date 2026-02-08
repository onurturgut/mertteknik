"use client";

import { useState } from "react";

const AboutSection = () => {
  const stats = [
    { label: "Yıllık Deneyim", value: "10+" },
    { label: "Mutlu Müşteri", value: "1500+" },
    { label: "Hızlı Servis", value: "Aynı Gün" },
  ];

  const products = [
    {
      name: "Inverter Klima 12.000 BTU",
      image: "/images/gallery/01.jpg",
      features: "A++ enerji sınıfı, sessiz çalışma, Wi-Fi kontrol",
      details: [
        "Sessiz iç ünite tasarımı",
        "Hızlı soğutma ve ısıtma modu",
        "Akıllı enerji tasarruf algoritması",
      ],
    },
    {
      name: "Inverter Klima 18.000 BTU",
      image: "/images/products/klima-2.jpg",
      features: "A++ enerji sınıfı, hızlı soğutma, turbo mod",
      details: [
        "Geniş alan performansı",
        "Gece modu ve zamanlayıcı",
        "Anti-bakteriyel filtre",
      ],
    },
    {
      name: "Salon Tipi Klima 48.000 BTU",
      image: "/images/products/klima-3.jpg",
      features: "Geniş alan performansı, güçlü hava üfleme",
      details: [
        "Yüksek hava debisi",
        "Büyük mekanlar için ideal",
        "Uzaktan kumanda kontrolü",
      ],
    },
    {
      name: "Multi Split Klima",
      image: "/images/products/klima-4.jpg",
      features: "Tek dış ünite, çoklu iç ünite, esnek kullanım",
      details: [
        "Farklı odalara bağımsız kontrol",
        "Kompakt dış ünite",
        "Düşük enerji tüketimi",
      ],
    },
    {
      name: "Kaset Tipi Klima",
      image: "/images/products/klima-5.jpg",
      features: "Tavan içi kurulum, 4 yönlü hava dağıtımı",
      details: [
        "Eşit hava dağılımı",
        "Şık tavan görünümü",
        "Kolay bakım erişimi",
      ],
    },
  ];

  type Product = (typeof products)[number];
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [infoMode, setInfoMode] = useState(false);

  return (
    <section id="hakkimizda" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Hakkımızda</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Mert Teknik olarak Fethiye ve çevresinde klima satış, montaj, bakım ve onarım
              hizmetlerinde uzman ekibimizle hızlı ve güvenilir çözümler sunuyoruz.
            </p>
            <p className="text-muted-foreground">
              Orijinal yedek parça, şeffaf fiyatlandırma ve müşteri memnuniyeti odaklı hizmet
              anlayışımızla her zaman yanınızdayız.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border bg-card p-6 text-center shadow-sm"
              >
                <div className="text-3xl font-bold text-primary mb-2">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between gap-4 mb-4">
            <h3 className="text-2xl md:text-3xl font-bold text-primary">Ürünler</h3>
            <span className="text-sm text-muted-foreground">Maksimum 10 ürün</span>
          </div>

          <div className="overflow-x-auto pb-2 scrollbar-orange">
            <div className="flex gap-4 min-w-max">
              {products.slice(0, 10).map((product) => {
                return (
                  <div
                    key={product.name}
                    className="w-72 rounded-xl border bg-card shadow-sm flex-shrink-0 transition-transform duration-200 hover:scale-[1.02]"
                    onClick={() => {
                      setActiveProduct(product);
                      setInfoMode(false);
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setActiveProduct(product);
                        setInfoMode(false);
                      }
                    }}
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-t-xl bg-muted">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <div className="font-semibold text-primary mb-2">{product.name}</div>
                      <div className="text-xs text-muted-foreground">Detaylar için tıklayın</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {activeProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => {
            setActiveProduct(null);
            setInfoMode(false);
          }}
        >
          <div
            className="relative max-h-[80vh] w-full max-w-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => {
                setActiveProduct(null);
                setInfoMode(false);
              }}
              className="absolute -top-10 right-0 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-foreground shadow"
            >
              Kapat
            </button>
            <div className="rounded-xl bg-card shadow-lg overflow-hidden">
              <div
                className={`w-full bg-black transition-all duration-200 ${
                  infoMode ? "aspect-[21/9]" : "aspect-[16/9]"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className={`h-full w-full object-contain transition-all duration-200 ${
                    infoMode ? "p-4" : "p-3"
                  }`}
                />
              </div>
              <div className="p-6">
                <div className="text-xl font-semibold text-primary mb-2">
                  {activeProduct.name}
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  {activeProduct.features}
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  {activeProduct.details.join(" • ")}
                </div>
                <a
                  href="#iletisim"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  onClick={() => {
                    setActiveProduct(null);
                    setInfoMode(false);
                  }}
                >
                  Bilgi Al
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;

