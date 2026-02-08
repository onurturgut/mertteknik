"use client";

import { useState } from "react";

const photos = [
  { src: "/images/gallery/01.jpg", alt: "Uygulama 1" },
  { src: "/images/gallery/Ekran görüntüsü 2024-11-13 215830.png", alt: "Uygulama 2" },
  { src: "/images/gallery/Ekran görüntüsü 2024-11-14 163325.png", alt: "Uygulama 3" },
  { src: "/images/gallery/Ekran görüntüsü 2024-12-24 153222.png", alt: "Uygulama 4" },
  { src: "/images/gallery/Ekran görüntüsü 2024-12-24 155928.png", alt: "Uygulama 5" },
  { src: "/images/gallery/Ekran görüntüsü 2024-12-24 165138.png", alt: "Uygulama 6" },
  { src: "/images/gallery/Ekran görüntüsü 2024-12-24 165624.png", alt: "Uygulama 7" },
  { src: "/images/gallery/Ekran görüntüsü 2024-12-24 170338.png", alt: "Uygulama 8" },
  { src: "/images/gallery/Ekran görüntüsü 2024-12-29 182605.png", alt: "Uygulama 9" },
  { src: "/images/gallery/Ekran görüntüsü 2025-01-15 141924.png", alt: "Uygulama 10" },
  { src: "/images/gallery/Ekran görüntüsü 2025-01-15 144238.png", alt: "Uygulama 11" },
  { src: "/images/gallery/Ekran görüntüsü 2025-01-15 144301.png", alt: "Uygulama 12" },
];

const totalSlots = 18;
const slots = Array.from({ length: totalSlots }, (_, i) => photos[i] ?? null);

type Photo = (typeof photos)[number];

const PhotoPart = () => {
  const [activePhoto, setActivePhoto] = useState<Photo | null>(null);

  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-24">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">Fotoğraf Galerisi</h3>
          <p className="text-muted-foreground">Yaptığımız işlerden örnekler</p>
        </div>

        <div className="overflow-x-auto pb-2 scrollbar-orange">
          <div className="grid grid-rows-3 grid-flow-col auto-cols-[180px] gap-3">
            {slots.map((photo, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl border border-border bg-card shadow-sm"
              >
                <div className="aspect-[4/3]">
                  {photo ? (
                    <button
                      type="button"
                      onClick={() => setActivePhoto(photo)}
                      className="w-full h-full"
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-4xl font-semibold text-muted-foreground/60">
                      +
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute -top-10 right-0 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-foreground shadow"
            >
              Kapat
            </button>
            <img
              src={activePhoto.src}
              alt={activePhoto.alt}
              className="max-h-[90vh] w-full rounded-xl object-contain bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoPart;

