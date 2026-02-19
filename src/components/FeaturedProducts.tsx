import { Coffee, Heart, Sparkles, ShoppingBag, Cross } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import featuredBagLeft from "@/assets/featured-bag-left.png";
import featuredBagCentre from "@/assets/featured-bag-centre.png";
import featuredBagBack from "@/assets/coffeer.png";
import featuredBagGrace from "@/assets/ola.jpeg";

const WHATSAPP_NUMBER = "27716103232"; // No + and no spaces

const products = [
  {
    name: "Hoop",
    image: featuredBagLeft,
    description: "Die perfekte mengsel van hoop en smaak",
    tag: "Mees Verkoop",
    accentColor: "from-purple-500/20 to-pink-500/20",
    icon: <Sparkles className="w-4 h-4" />,
    status: "in stock"
  },
  {
    name: "ANNABeleef",
    image: featuredBagCentre,
    description: "Ons vlagskipkoffie met 'n persoonlike aanraking",
    tag: "Huismerk",
    accentColor: "from-primary/20 to-gold/20",
    icon: <Heart className="w-4 h-4 fill-red-500 text-red-500" />,
    status: "in stock"
  },
  {
    name: "Genade",
    image: featuredBagGrace,
    description: "'n Verfrissende mengsel van genade en geborgenheid",
    tag: "Nuutste",
    accentColor: "from-blue-500/20 to-teal-500/20",
    icon: <Cross className="w-4 h-4" />,
    status: "in stock"
  },
  {
    name: "Vrede",
    image: featuredBagBack,
    description: "’n Tydlose harmonie wat altyd blywend is",
    tag: "Vrede",
    accentColor: "from-amber-500/20 to-orange-500/20",
    icon: <Coffee className="w-4 h-4" />,
    status: "in stock"
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-cream/30 relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Coffee className="w-6 h-6 text-gold" />
              </div>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary italic">
                Gebrou met Liefde
              </h2>

              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-gold" />
              </div>
            </div>

            <div className="max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-primary/80 mb-6 leading-relaxed">
                Vars. Vol smaak. Plaaslik verpak.
              </p>

              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50"></div>
                <ShoppingBag className="w-5 h-5 text-gold" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => {

            const message = encodeURIComponent(
              `Hallo ANNABeleef 🌿 Ek stel belang in die ${product.name} koffie.`
            );

            const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

            return (
              <ScrollReveal key={product.name} delay={index * 0.15}>
                <div className="group h-full">
                  
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                    
                    {/* Background Hover Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                    {/* Tag */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                        {product.icon}
                        <span className="text-xs font-semibold text-primary">
                          {product.tag}
                        </span>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative h-48 md:h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10"></div>

                      <div className="relative h-full flex items-center justify-center p-6">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="max-h-40 md:max-h-48 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="relative p-5 md:p-6 bg-gradient-to-b from-white to-cream/50">
                      
                      <div className="mb-4">
                        <h3 className="font-serif text-xl md:text-2xl text-primary mb-2">
                          {product.name}
                        </h3>
                        <p className="text-primary/70 text-sm leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Bottom Row */}
                      <div className="mt-4 flex items-center justify-between">

                        {/* Status */}
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span className="text-xs font-medium text-emerald-600">
                              Beskikbaar
                            </span>
                          </div>
                        </div>

                        {/* WhatsApp Arrow */}
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/arrow w-8 h-8 rounded-full bg-primary/5 hover:bg-primary/15 flex items-center justify-center transition-all duration-300 hover:scale-110"
                        >
                          <svg
                            className="w-4 h-4 text-primary/70 group-hover/arrow:text-primary transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </a>
                      </div>

                      <div className="mt-3 h-1 w-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
