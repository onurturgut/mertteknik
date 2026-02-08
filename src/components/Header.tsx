"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#hizmetler", label: "Hizmetler" },
    { href: "#neden-biz", label: "Neden Biz?" },
    { href: "#hakkimizda", label: "Hakkımızda" },
    { href: "#iletisim", label: "İletişim" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 ml-[4.25rem] md:ml-[4.25rem]">
            <div className="w-[6rem] h-[5rem] sm:w-[7.5rem] sm:h-[6rem] md:w-[7.5rem] md:h-[6rem] lg:w-[8.5rem] lg:h-[7rem] rounded-lg flex items-center justify-center">
              <img
                src="/images/logo.png"
                alt="Mert Teknik Logo"
                className="w-[4.75rem] h-[4rem] sm:w-[6rem] sm:h-[5rem] md:w-[6rem] md:h-[5rem] lg:w-[6.75rem] lg:h-[5.75rem]"
              />
            </div>
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary whitespace-nowrap">
              Viessmann Mert Teknik
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="sm" className="ml-2">
              <a href="tel:+905317097972">
                <Phone className="mr-2 h-4 w-4" />
                Ara
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-background border-t border-border py-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="px-4 py-3 text-foreground hover:bg-accent rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button asChild className="w-full">
                  <a href="tel:+905317097972">
                    <Phone className="mr-2 h-4 w-4" />
                    Hemen Ara
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

