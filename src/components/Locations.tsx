import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Locations = () => {
  return (
    <section id="locations" className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground text-center mb-2 md:mb-4 italic">
            Besoek Ons
          </h2>
          <p className="text-center text-primary-foreground/80 mb-10 md:mb-16 max-w-lg mx-auto text-sm md:text-base">
            Ons verwelkom jou graag by ANNABeleef in die Ou Tronk, Worcester.
          </p>
        </ScrollReveal>
        
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="bg-cream-light rounded-2xl p-6 md:p-10">
              <div className="text-center mb-6 md:mb-8">
                <h3 className="font-serif text-2xl md:text-3xl text-primary mb-2">ANNABeleef</h3>
                <p className="text-muted-foreground text-sm md:text-base">Die Ou Tronk, Worcester</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex items-start gap-3 p-4 bg-background rounded-xl">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-primary text-sm md:text-base">Adres</p>
                    <p className="text-muted-foreground text-sm">Distilleryweg 2</p>
                    <p className="text-muted-foreground text-sm">Worcester</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-background rounded-xl">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-primary text-sm md:text-base">Telefoon</p>
                    <a href="tel:0716103232" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      +2771 610 3232
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-background rounded-xl">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-primary text-sm md:text-base">E-pos</p>
                    <a href="mailto:annalize@annabeleef.co.za" className="text-muted-foreground text-sm hover:text-primary transition-colors break-all">
                      annalize@annabeleef.co.za
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-background rounded-xl">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-primary text-sm md:text-base">Ure</p>
                    <p className="text-muted-foreground text-sm">Maandag - Vrydag: 9VM - 5NM</p>
                    <p className="text-muted-foreground text-sm">Sondae slegs vir groepbesprekings</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 md:mt-8 text-center">
                <a 
                  href="https://maps.google.com/?q=2+Distillery+Road,+Worcester" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-forest-dark transition-colors text-sm md:text-base"
                >
                  Kry Rigtings
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Locations;
