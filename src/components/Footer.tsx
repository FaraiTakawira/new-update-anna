import { Link, useNavigate, useLocation } from "react-router-dom";
import { Coffee, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import Marquee from "./Marquee";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to an element by ID smoothly
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll or navigate to news subsection
  const handleNewsScroll = (hash: string) => {
    if (location.pathname !== "/news") {
      // Navigate first, then scroll after small delay
      navigate("/news");
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100); // wait 100ms for page to render
    } else {
      const element = document.getElementById(hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <Marquee />

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* ANNABeleef Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                <Coffee className="w-5 h-5 text-primary" />
              </div>
              <span className="font-serif text-xl text-gold">ANNABeleef</span>
            </div>
            <h3 className="font-serif text-xl md:text-2xl mb-4 md:mb-6">
              Die Lewe Begin<br />Na Koffie
            </h3>
            <div className="space-y-2 md:space-y-3 text-sm md:text-base">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="tel:0716103232" className="hover:text-gold transition-colors">
                  +27 71 610 3232
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="mailto:annalize@annabeleef.co.za"
                  className="hover:text-gold transition-colors text-xs md:text-sm"
                >
                  annalize@annabeleef.co.za
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm">2 Distillery Road, Worcester</span>
              </div>
            </div>
          </div>

          {/* Head / Main Links */}
          <div>
            <h4 className="font-medium mb-4 md:mb-6 text-gold text-sm md:text-base">Hoof</h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>
                <button
                  onClick={() => scrollToSection("menu")}
                  className="hover:text-gold transition-colors"
                >
                  Spyskaart
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("locations")}
                  className="hover:text-gold transition-colors"
                >
                  Ligging
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-gold transition-colors"
                >
                  Oor Ons
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/news")}
                  className="hover:text-gold transition-colors"
                >
                  Nuus
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-medium mb-4 md:mb-6 text-gold text-sm md:text-base">Kategorieë</h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>
                <Link to="/history" className="hover:text-gold transition-colors">
                  Geskiedenis
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleNewsScroll("art")}
                  className="hover:text-gold transition-colors"
                >
                  Plaaslike Kuns & Kultuur
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNewsScroll("projects")}
                  className="hover:text-gold transition-colors"
                >
                  Gemeenskap & Ondersteuning
                </button>
              </li>
              <li>
                <Link to="/AnnualReport" className="hover:text-gold transition-colors">
                  Jaarverslae
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-medium mb-4 md:mb-6 text-gold text-sm md:text-base">Volg Ons</h4>
            <div className="flex gap-3 md:gap-4">
              <a
                href="#"
                className="w-9 h-9 md:w-10 md:h-10 border border-primary-foreground/30 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold transition-colors group"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5 group-hover:text-primary" />
              </a>
              <a
                href="#"
                className="w-9 h-9 md:w-10 md:h-10 border border-primary-foreground/30 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold transition-colors group"
              >
                <Facebook className="w-4 h-4 md:w-5 md:h-5 group-hover:text-primary" />
              </a>
              <a
                href="#"
                className="w-9 h-9 md:w-10 md:h-10 border border-primary-foreground/30 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold transition-colors group"
              >
                <Twitter className="w-4 h-4 md:w-5 md:h-5 group-hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 py-4 md:py-6 text-center text-xs md:text-sm text-primary-foreground/60">
        © 2026 ANNABeleef Koffie. Alle regte voorbehou.
      </div>
    </footer>
  );
};

export default Footer;
