import { Award, Trophy, Star, Medal, BadgeCheck, Gem } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { FileDown } from "lucide-react";
import categorySalad from "@/assets/category-salad.png";
import categorySandwich from "@/assets/category-sandwich.png";
import categoryBreakfast from "@/assets/category-breakfast.png";

const categories = [
  {
    name: "Vars Slaaie",
    image: categorySalad,
  },
  {
    name: "Toebroodjies",
    image: categorySandwich,
  },
  {
    name: "Ontbyt",
    image: categoryBreakfast,
  },
];

// Awards data
const awards = [
  {
    title: "Wenner Kaapse Wynland Distriksmunisipaliteit Fenominale Vroue Entrepreneur van die Jaar",
    organization: "Kaapse Wynland",
    icon: Trophy,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    year: "2024"
  },
  {
    title: "Wenner AfriForum Sakenetwerk Tinteltong-toekenning 2024",
    organization: "AfriForum Sakenetwerk",
    icon: Award,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    year: "2024"
  },
    {
    title: "Semi-Finalis AfriForum Sakenetwerk Entrepreneur van die Jaar ",
    organization: "AfriForum",
    icon: Medal,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    year: "2024"
  },
  {
    title: "AfriForum Sakenetwerk Tinteltong-toekenning 2025",
    organization: "AfriForum Sakenetwerk",
    icon: Gem,
    color: "text-green-600",
    bgColor: "bg-green-50",
    year: "2025"
  },

];

const Categories = () => {
  return (
    <>
      {/* Awards Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-cream to-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <Trophy className="w-8 h-8 text-gold" />
                <h2 className="font-serif text-3xl md:text-4xl text-primary">
                  Erkenning en Toekennings
                </h2>
                <Star className="w-6 h-6 text-gold fill-gold/30" />
              </div>
              <p className="text-primary/70 text-lg max-w-2xl mx-auto">
                Trots om erken te word vir uitnemendheid in entrepreneurskap en gemeenskapsbetrokkenheid
              </p>
            </div>
          </ScrollReveal>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {awards.map((award, index) => {
              const Icon = award.icon;
              return (
                <ScrollReveal key={award.title} delay={index * 0.1}>
                  <div className="group relative">
                    {/* Main Award Card */}
                    <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-primary/10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                      {/* Decorative Background */}
                      <div className={`absolute top-0 right-0 w-20 h-20 ${award.bgColor} rounded-full -translate-y-8 translate-x-8 opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                      
                      {/* Icon Container */}
                      <div className={`relative mb-6 inline-flex items-center justify-center w-16 h-16 ${award.bgColor} rounded-2xl group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className={`w-8 h-8 ${award.color}`} />
                      </div>
                      
                      {/* Award Year Badge */}
                      <div className="absolute top-6 right-6 bg-primary/5 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                        {award.year}
                      </div>
                      
                      {/* Award Content */}
                      <div>
                        <h3 className="font-serif text-xl text-primary mb-3 leading-tight group-hover:text-primary/90 transition-colors">
                          {award.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary/70 mb-4">
                          <BadgeCheck className="w-4 h-4" />
                          <span className="text-sm font-medium">{award.organization}</span>
                        </div>
                        
                        {/* Award Details */}
                        <div className="pt-4 border-t border-primary/10">
                          <div className="flex items-center justify-between">
                            <span className="text-primary/60 text-sm">Toekenning</span>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 text-gold fill-gold" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Hover Effect Glow */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gold/30 transition-all duration-500 pointer-events-none"></div>
                    </div>
                    
                    {/* Floating Accent */}
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Award Summary */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-4 bg-primary/5 px-6 py-4 rounded-full">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-gold" />
                  <span className="text-primary font-medium">{awards.length} Toekennings</span>
                </div>
                <div className="w-px h-6 bg-primary/20"></div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-gold fill-gold/50" />
                  <span className="text-primary font-medium">4 Kontinuerlike Jare</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Original Categories Section */}
      <section id="menu" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary text-center mb-2 md:mb-4 italic">
              Vind en Kry
            </h2>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary text-center mb-10 md:mb-16">
              Wat Jy Liefhet
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {categories.map((category, index) => (
              <ScrollReveal key={category.name} delay={index * 0.15}>
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center overflow-hidden mb-4 md:mb-6 group-hover:scale-105 transition-transform duration-500 bg-[#2d5a3d]">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-40 h-40 md:w-52 md:h-52 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-primary">{category.name}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Menu Download Buttons */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12 md:mt-16">
              <a
                href="/menus/English_Menu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-primary text-cream rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <FileDown className="w-5 h-5 group-hover:animate-bounce" />
                <span className="font-medium text-lg">Engelse Spyskaart</span>
              </a>
              <a
                href="/menus/Afrikaans_Menu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-gold text-primary rounded-full hover:bg-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <FileDown className="w-5 h-5 group-hover:animate-bounce" />
                <span className="font-medium text-lg">Afrikaanse Spyskaart</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Categories;