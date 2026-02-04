import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">MT</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Mert Teknik</h3>
                <p className="text-sm text-background/70">Profesyonel Klima Servisi</p>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed">
              Fethiye'de güvenilir klima servisi, satış ve yedek parça hizmeti.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hizmetler" className="text-background/70 hover:text-background transition-colors">
                  Hizmetler
                </a>
              </li>
              <li>
                <a href="#neden-biz" className="text-background/70 hover:text-background transition-colors">
                  Neden Biz?
                </a>
              </li>
              <li>
                <a href="#markalar" className="text-background/70 hover:text-background transition-colors">
                  Markalar
                </a>
              </li>
              <li>
                <a href="#hakkimizda" className="text-background/70 hover:text-background transition-colors">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#iletisim" className="text-background/70 hover:text-background transition-colors">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <div className="space-y-3">
              <a
                href="tel:+905317097972"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Phone className="w-5 h-5" />
                0531 709 79 72
              </a>
              <div className="flex items-start gap-3 text-background/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Turgut Özal Blv., 118A<br />Fethiye, Muğla</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} Mert Teknik. Tüm hakları saklıdır.
            </p>
            <a
              href="tel:+905317097972"
              className="text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              Hemen Ara: 0531 709 79 72
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
