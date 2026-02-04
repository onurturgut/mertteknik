import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileCallButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button
        asChild
        size="lg"
        className="rounded-full w-16 h-16 shadow-2xl bg-primary hover:bg-primary/90 animate-pulse"
      >
        <a href="tel:+905317097972" aria-label="Hemen Ara">
          <Phone className="w-7 h-7" />
        </a>
      </Button>
    </div>
  );
};

export default MobileCallButton;
