import { Link } from "react-router-dom";
import { Coffee, Heart, Users, Sparkles, Eye, Palette, Theater, HandHeart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import cafeInteriorImg from "@/assets/new.jpeg";
import coffeeVideo from "@/assets/coffee-video.mp4";
import { useEffect } from "react";

const About = () => {
  // Scroll to top when this page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Section 1: Eerste Ontmoeting */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <ScrollReveal>
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Eerste Ontmoeting</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6 italic">
              Meer as koffie. 'n Belewenis.
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                By ANNABeleef word elke koppie met sorg voorberei, elke mens raakgesien, en elke besoek 'n oomblik om te beleef.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                Ons is 'n sosiale onderneming waar mense, stories en insluiting saamvloei geleë in 'n historiese ruimte met 'n nuwe storie van hoop.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#locations" 
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-cream rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Kom beleef ANNABeleef
              </a>
              {/* Internal navigation uses Link */}
              <Link 
                to="/news" 
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-cream transition-colors"
              >
                Lees ons storie
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Section 2: Gemeenskap & Impak */}
        <div className="max-w-6xl mx-auto mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <ScrollReveal>
              <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={cafeInteriorImg} 
                  alt="ANNABeleef Coffee Shop at Old Prison, Worcester" 
                  className="w-full h-64 md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-5 md:space-y-6">
                <p className="text-gold uppercase tracking-[0.3em] text-sm">Gemeenskap & Impak</p>
                <h3 className="font-serif text-3xl md:text-4xl text-primary italic">
                  Koffie met 'n doel. 'n Plek met 'n hart.
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Ons werk saam met siggestremde individue by Innovation for the Blind, Worcester, wat ons koffie verpak en ander unieke vaardighede ontwikkel. Dit is deel van ons missie om geleenthede en insluiting te skep.
                </p>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Ons betrek die gemeenskap deur kuns, musiek, opvoering en vaardigheidsprogramme. By ANNABeleef word klein gebare groot betekenisse. Elke besoek dra by tot 'n groter doel: mense sien en waardeer, stories word gedeel, en gemeenskappe word versterk.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link 
                    to="/news"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gold text-primary rounded-full font-medium hover:bg-gold/90 transition-colors"
                  >
                    Ontdek ons impak
                  </Link>
                  <a 
                    href="https://wa.me/27716103232" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-gold text-gold rounded-full font-medium hover:bg-gold hover:text-primary transition-colors"
                  >
                    Sluit aan by ons
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Section 2.5: Coffee in Action */}
        <div id="coffee-in-action" className="max-w-6xl mx-auto mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            
            {/* Text Info */}
            <ScrollReveal>
              <div className="space-y-5 md:space-y-6">
                <p className="text-gold uppercase tracking-[0.3em] text-sm">Koffie in Aksie</p>
                <h3 className="font-serif text-3xl md:text-4xl text-primary italic">
                  Van boon tot koppie
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Elke koppie koffie by ANNABeleef begin met sorg en passie. Ons werk saam met plaaslike produsente en sorg dat elke stap – van brand tot maal en uiteindelik bediening – perfek is.
                </p>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Kyk hoe ons koffie voorberei word, die handwerk agter elke bottel en koppie, en ontdek die storie van die mense wat ons koffie lewendig maak.
                </p>
              </div>
            </ScrollReveal>

            {/* Video */}
            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full h-[500px] md:h-[600px] flex items-center justify-center bg-primary/5">
                <video 
                  src={coffeeVideo} // ✅ Use ES Module import
                  controls
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </ScrollReveal>

          </div>
        </div>

        {/* Section 3: Beleef Dit */}
        <div className="max-w-4xl mx-auto text-center bg-cream/30 rounded-3xl p-8 md:p-12">
          <ScrollReveal>
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Beleef Dit</p>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-6 italic">
              Hier is jou uitnodiging:
            </h3>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <p className="text-xl md:text-2xl text-primary font-serif italic mb-6">
              Neem 'n oomblik. Ruik, proe en beleef.
            </p>
            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Elke koppie vertel 'n storie, elke besoek skep 'n herinnering.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                ANNABeleef is waar hart en hand saamwerk, waar koffie en gemeenskap ontmoet, en waar jy deel kan wees van iets besonders.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#locations" 
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-cream rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Beleef ANNABeleef vandag
              </a>
              <Link 
                to="/news" 
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-cream transition-colors"
              >
                Kom loer in
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
