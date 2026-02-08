import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Fethiye%2C%20Mu%C4%9Fla";
const mapEmbedUrl =
  "https://www.google.com/maps?q=Fethiye%2C%20Mu%C4%9Fla&output=embed";

const ContactSection = () => {
  return (
    <section id="iletisim" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">İletişim</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Teklif ve servis talepleriniz için bize hemen ulaşın.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="grid gap-4 lg:col-span-2">
            <div className="rounded-xl border bg-card p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">Telefon</span>
              </div>
              <a href="tel:+905317097972" className="text-muted-foreground hover:text-foreground">
                +90 531 709 79 72
              </a>
            </div>

            <div className="rounded-xl border bg-card p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">E-posta</span>
              </div>
              <a href="mailto:info@mertteknik.com" className="text-muted-foreground hover:text-foreground">
                info@mertteknik.com
              </a>
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Adres</span>
            </div>
            <p className="text-muted-foreground mb-4">Fethiye, Muğla</p>

            <div className="relative overflow-hidden rounded-lg border border-border">
              <iframe
                title="Harita"
                src={mapEmbedUrl}
                className="h-40 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0"
                aria-label="Yol tarifi al"
              />
            </div>
            <div className="mt-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline"
              >
                Yol tarifi al
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg">
            <a href="tel:+905317097972">Hemen Ara</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

