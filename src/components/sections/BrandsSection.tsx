const brands = [
  "Daikin",
  "Mitsubishi Electric",
  "Arçelik",
  "Vestel",
  "Bosch",
  "Samsung",
];

const BrandsSection = () => {
  return (
    <section id="markalar" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Çalıştığımız Markalar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Türkiye’de en çok tercih edilen markalarla uyumlu servis ve yedek parça desteği.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex items-center justify-center rounded-lg border bg-card px-4 py-6 text-sm font-semibold text-foreground shadow-sm hover:shadow-md transition-shadow"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
