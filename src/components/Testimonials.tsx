import { Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import icedCoffeeImg from "@/assets/iced-coffee.jpg";
import latteArtImg from "@/assets/latte-art.jpg";

const testimonials = [
  {
    quote: "Daar is geen ander plek mooier waar ons in Suid-Afrika was nie. Die tuin, die vriendelike personeel, die kos en die drankies was werklik wonderlik. Dankie vir alles.",
    author: "Alim Aras",
    role: "Turkye",
  },
  {
    quote: "Altyd 'n warm, verwelkomende atmosfeer — perfek vir 'n vinnige koffie of 'n stil lees. Die piesangbrood? Totaal verslavend.",
    author: "Johan P.",
    role: "Koffie-liefhebber",
  },
  {
    quote: "Ek stop elke oggend voor werk hier aan, en dit is die beste deel van my dag. Die yskoue latte is my gunsteling, maar ek het eerlikwaar nog nooit 'n slegte drankie hier gehad nie. Alles proe met liefde gemaak.",
    author: "Liezel M.",
    role: "Yskoue latte verslaafde",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <p className="text-gold text-center text-lg mb-4">
            ✨ Moenie net ons woord vat nie…..hoor wat ons BESOEKERS sê! ✨
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream text-center mb-6 md:mb-8 italic">
            Wat Mense van Ons Hou
          </h2>
          <div className="text-center mb-10 md:mb-16">
            <p className="text-cream/80 text-sm md:text-base flex items-center justify-center gap-2">
              🌿 Kom beleef dit self hier by ANNABeleef – waar huis, gasvryheid en smaak ontmoet.
            </p>
            <p className="text-cream/60 text-sm mt-2">
              📍 ANNABeleef (Ou Tronk) Distilleryweg 2 Worcester
            </p>
          </div>
        </ScrollReveal>
        
        {/* Masonry-style Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-4 md:gap-6">
            <ScrollReveal delay={0.1}>
              <div className="bg-cream p-6 md:p-8 rounded-2xl">
                <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />
                <p className="text-primary text-lg md:text-xl font-semibold mb-6 leading-relaxed">
                  {testimonials[0].quote}
                </p>
                <div>
                  <span className="text-muted-foreground text-sm md:text-base">
                    {testimonials[0].author} — {testimonials[0].role}
                  </span>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl overflow-hidden h-64 md:h-80">
                <img 
                  src={latteArtImg} 
                  alt="Pouring coffee" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </ScrollReveal>
          </div>
          
          {/* Center Column - Large Image */}
          <div className="flex flex-col gap-4 md:gap-6">
            <ScrollReveal delay={0.15}>
              <div className="rounded-2xl overflow-hidden h-72 md:h-96">
                <img 
                  src={icedCoffeeImg} 
                  alt="Iced coffee at ANNABeleef" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.25}>
              <div className="bg-cream p-6 md:p-8 rounded-2xl">
                <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />
                <p className="text-primary text-lg md:text-xl font-semibold mb-6 leading-relaxed">
                  {testimonials[2].quote}
                </p>
                <div>
                  <span className="text-muted-foreground text-sm md:text-base">
                    {testimonials[2].author} — {testimonials[2].role}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-4 md:gap-6">
            <ScrollReveal delay={0.2}>
              <div className="bg-cream p-6 md:p-8 rounded-2xl">
                <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />
                <p className="text-primary text-lg md:text-xl font-semibold mb-6 leading-relaxed">
                  {testimonials[1].quote}
                </p>
                <div>
                  <span className="text-muted-foreground text-sm md:text-base">
                    {testimonials[1].author} — {testimonials[1].role}
                  </span>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="rounded-2xl overflow-hidden h-64 md:h-80">
                <img 
                  src={latteArtImg} 
                  alt="Latte art" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
