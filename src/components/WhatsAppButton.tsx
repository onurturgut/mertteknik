import { MessageCircleMore } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-24 right-6 z-50 md:bottom-6">
      <div className="absolute -top-12 right-0 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-foreground shadow-md border border-border">
        Bizimle iletişime geçin
      </div>
      <Button
        asChild
        size="lg"
        className="rounded-full w-20 h-20 shadow-2xl bg-primary hover:bg-primary/90 text-white flex items-center justify-center ring-4 ring-primary/30"
      >
        <a
          href="https://wa.me/905317097972"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp ile mesaj at"
          className="flex h-full w-full items-center justify-center"
        >
          <MessageCircleMore
            className="w-10 h-10"
            stroke="white"
            fill="none"
            strokeWidth={2.5}
            aria-hidden="true"
          />
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppButton;

