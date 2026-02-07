import { ShoppingBag, Coffee, Palette, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import featuredBagCentre from "@/assets/featured-bag-centre.png";
import lupusBookCover from "@/assets/book.jpeg";
import artTeam from "@/assets/all-art.jpg";

const shopCategories = [
  {
    icon: Coffee,
    title: "Koffieprodukte",
    description: "Ons unieke gebraaide koffie, vars verpak deur Innovation for the Blind",
    available: true,
    buttonText: "Bestel Nou",
    image: featuredBagCentre,
    link: null, // We'll handle WhatsApp here
  },
  {
    icon: Palette,
    title: "Kunswerke",
    description: "Plaaslike kunstenaars se werk – elke stuk vertel 'n storie",
    available: true,
    buttonText: "Verken Kuns",
    image: artTeam,
    link: "/news",
  },
  {
    icon: BookOpen,
    title: "LUPUS Boek",
    description: "'n Persoonlike reis van hoop en oorwinning  binnekort beskikbaar",
    available: false,
    buttonText: "Kom Binnekort",
    image: lupusBookCover,
    link: null,
  },
];

const Shop = () => {
  return (
    <section id="shop" className="py-16 md:py-24 bg-cream/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 mb-4">
              <ShoppingBag className="w-5 h-5 text-gold" />
              <p className="text-gold uppercase tracking-[0.3em] text-sm">Ons Winkel</p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6 italic">
              Neem ANNABeleef huis toe
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Ondersteun ons missie deur ons produkte te koop – elke aankoop maak 'n verskil in ons gemeenskap.
            </p>
          </ScrollReveal>
        </div>

        {/* Shop Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {shopCategories.map((category, index) => (
              <ScrollReveal key={category.title} delay={index * 0.15}>
                <div className="bg-background rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  
                  {/* Image or Icon */}
                  <div className="aspect-square mb-6 rounded-xl overflow-hidden bg-cream/50 flex items-center justify-center">
                    {category.image ? (
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center">
                        <category.icon className="w-12 h-12 text-gold" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <category.icon className="w-5 h-5 text-gold" />
                      <h3 className="font-serif text-xl md:text-2xl text-primary">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                      {category.description}
                    </p>
                  </div>

                  {/* Button */}
                  {category.title === "Koffieprodukte" ? (
                    <a
                      href="https://wa.me/27716103232?text=Hallo! Ek wil graag ANNABeleef koffie bestel."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-6 rounded-full font-medium transition-colors bg-primary text-cream hover:bg-primary/90 text-center block"
                    >
                      {category.buttonText}
                    </a>
                  ) : category.link ? (
                    <Link 
                      to={category.link}
                      className="w-full py-3 px-6 rounded-full font-medium transition-colors bg-primary text-cream hover:bg-primary/90 text-center block"
                    >
                      {category.buttonText}
                    </Link>
                  ) : (
                    <button 
                      className={`w-full py-3 px-6 rounded-full font-medium transition-colors ${
                        category.available 
                          ? 'bg-primary text-cream hover:bg-primary/90' 
                          : 'bg-muted text-muted-foreground cursor-not-allowed'
                      }`}
                      disabled={!category.available}
                    >
                      {category.buttonText}
                    </button>
                  )}

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-2xl mx-auto text-center mt-12 md:mt-16">
          <ScrollReveal>
            <p className="text-muted-foreground text-sm md:text-base mb-4">
              Vrae oor bestellings? Kontak ons gerus.
            </p>
            <a 
              href="tel:+27716103232" 
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-gold text-gold rounded-full font-medium hover:bg-gold hover:text-primary transition-colors"
            >
              Kontak Ons
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Shop;
