const stats = [
  { label: "Yıllık Deneyim", value: "10+" },
  { label: "Mutlu Müşteri", value: "1500+" },
  { label: "Hızlı Servis", value: "Aynı Gün" },
];

const AboutSection = () => {
  return (
    <section id="hakkimizda" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hakkımızda
            </h2>
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
      </div>
    </section>
  );
};

export default AboutSection;
