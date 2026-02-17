import { ArrowLeft, MapPin, Heart, Calendar, Palette, Star, Image as ImageIcon, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import newsBlankets from "@/assets/news-blankets.jpg";
import newsBag from "@/assets/news-bag.jpg";
import newsTeam from "@/assets/news-team.jpg";
// import newsArt from "@/assets/news-art.jpg";
import blindArtVideo from "@/assets/kuns-vi.mp4"; // replace with your video path

// Import art images
import art1 from "@/assets/art.jpg";
import art2 from "@/assets/art-2.jpg";
// import art3 from "@/assets/art-3.jpg";
import art4 from "@/assets/art-4.jpg";
import art5 from "@/assets/art-5.jpg";
import art6 from "@/assets/ANNABeleef KUNS (2).jpg";

const News = () => {
  const artworks = [
    { src: art1, alt: "Plaaslike kuns werk 1" },
    { src: art2, alt: "Plaaslike kuns werk 2" },
    // { src: art3, alt: "Plaaslike kuns werk 3" },
    { src: art4, alt: "Plaaslike kuns werk 4" },
    { src: art5, alt: "Plaaslike kuns werk 5" },
    { src: art6, alt: "Plaaslike kuns werk 6" }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-medium mb-6">
              Gemeenskapsnuus
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-cream mb-6">
              Drade van <span className="italic">Liefde</span>
            </h1>
            <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto">
              Wat as 'n droom begin het om ander warm te hou, het nou 'n landswye beweging van hoop geword.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 md:mb-16"
            >
              <div className="bg-primary/5 p-6 md:p-10 rounded-3xl mb-8">
                <p className="text-primary text-lg md:text-xl leading-relaxed mb-6">
                  Gemeenskapslede help om handgebreide komberse vir hierdie projek te skep, 
                  wat ons saam met ons Uitvoerende Burgemeester, Antoinette Steyn, onderneem.
                </p>
                <p className="text-primary text-lg md:text-xl leading-relaxed">
                  Ná my RSG-uitsending oor hekel en brei, het ek iets besonders ervaar: 
                  die ongelooflike belangstelling, stories en ondersteuning van elke hoek van Suid-Afrika. 
                  Dit is bevestiging dat ons harte nog warm vir mekaar klop.
                </p>
              </div>
            </motion.div>

            {/* Image Grid */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 md:mb-16"
>
  <div className="rounded-2xl overflow-hidden aspect-square">
    <img
      src={newsBlankets}
      alt="Kleurvolle komberse"
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
    />
  </div>

  <div className="rounded-2xl overflow-hidden aspect-square">
    <img
      src={newsBag}
      alt="ANNABeleef sak"
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
    />
  </div>

  <div className="rounded-2xl overflow-hidden aspect-square">
    <img
      src={newsTeam}
      alt="Span met komberse"
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
    />
  </div>
</motion.div>


            {/* NEW ART GALLERY SECTION - 6 IMAGES */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-16 md:mb-24"
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center gap-3 mb-4">
                  <Palette className="w-8 h-8 text-gold" />
                  <h2 className="font-serif text-3xl md:text-4xl text-primary">
                    Plaaslike Kuns Galery
                  </h2>
                  <Star className="w-6 h-6 text-gold fill-gold/30" />
                </div>
                <p className="text-primary/70 text-lg max-w-3xl mx-auto">
                  Ontdek die skoonheid van plaaslike talent en ondersteun ons kunstenaars
                </p>
              </div>

              {/* Art Definition Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-primary/5 to-gold/5 border border-primary/10 rounded-3xl p-6 md:p-8 mb-10"
              >
                <div className="flex items-start gap-4">
                  <div className="hidden md:flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full shrink-0">
                    <ImageIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-primary mb-3">Wat is KUNS?</h3>
                    <p className="text-primary text-lg leading-relaxed italic mb-4">
                      "KUNS is iets wat 'n individu se gedagtes, emosies, oortuigings of idees deur die sintuie stimuleer."
                    </p>
                    <p className="text-primary/80">
                      Hierdie pragtige kunswerke (en nog vele meer) van plaaslike kunstenaars kan by ANNABeleef besigtig word.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Art Gallery Grid - 6 Images */}
              <div className="mb-12">
                {/* Desktop & Tablet View - Grid */}
                <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {artworks.map((art, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ 
                        y: -8,
                        transition: { duration: 0.3 }
                      }}
                      className="group"
                    >
                      <div className="relative overflow-hidden rounded-2xl aspect-square shadow-lg">
                        <img 
                          src={art.src} 
                          alt={art.alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Simple hover overlay */}
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile View - Grid (2 columns) */}
                <div className="sm:hidden grid grid-cols-2 gap-4">
                  {artworks.map((art, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="relative overflow-hidden rounded-xl aspect-square">
                        <img 
                          src={art.src} 
                          alt={art.alt}
                          className="w-full h-full object-cover active:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-primary/10 opacity-0 active:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Call to Support Artists */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 rounded-3xl p-8 md:p-10 text-center overflow-hidden relative"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gold/10 rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gold/5 rounded-full translate-x-20 translate-y-20"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
                    <Users className="w-10 h-10 text-gold" />
                    <h3 className="font-serif text-2xl md:text-3xl text-cream">
                      Ondersteun Ons Plaaslike Talent
                    </h3>
                  </div>
                  
                  <div className="max-w-2xl mx-auto">
                    <p className="text-cream/90 text-lg md:text-xl leading-relaxed mb-6">
                      Hierdie pragtige kunswerke (en nog vele meer) van plaaslike kunstenaars kan by ANNABeleef besigtig word.
                    </p>
                    
                    <div className="bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-2xl p-6 md:p-8 mb-8">
                      <p className="text-cream text-xl md:text-2xl font-medium mb-4">
                        Ondersteun asseblief hierdie baie talentvolle plaaslike kunstenaars.
                      </p>
                      <div className="flex items-center justify-center gap-3 text-gold">
                        <Heart className="w-6 h-6 fill-gold" />
                        <span className="font-semibold text-lg">Elke aankoop maak 'n verskil</span>
                        <Heart className="w-6 h-6 fill-gold" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Location Info */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="inline-block bg-cream/10 backdrop-blur-sm border border-gold/20 p-6 md:p-8 rounded-2xl max-w-md"
                  >
                    <div className="flex items-center justify-center gap-3 text-gold mb-4">
                      <MapPin className="w-7 h-7" />
                      <span className="font-semibold text-xl">📍 ANNABeleef</span>
                    </div>
                    <div className="text-cream space-y-3">
                      <div className="text-center">
                        <p className="font-medium text-lg">Ou Tronk, Distilleryweg 2</p>
                        <p className="font-medium text-lg">Worcester</p>
                      </div>
                      <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-gold/30">
                        <Calendar className="w-5 h-5" />
                        <div>
                          <p className="font-medium">Maandag tot Vrydag</p>
                          <p className="text-cream/90">9vm - 5nm</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button className="bg-gold text-primary px-6 py-3 rounded-full font-semibold hover:bg-gold/90 transition-colors active:scale-95">
                          Beplan Jou Besoek
                        </button>
                      </div>
                    </div>
                  </motion.div>
                  
                  <div className="mt-10">
                    <p className="font-serif text-3xl text-gold italic">
                      Liefde ANNA
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-4 text-gold/80">
                      <span className="text-sm">BELEEF</span>
                      <Heart className="w-4 h-4 fill-gold/50" />
                      <span className="text-sm">INSPIREER</span>
                      <Heart className="w-4 h-4 fill-gold/50" />
                      <span className="text-sm">LEEF</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              {/* Blind Artists Video Section */}
{/* Video Section - Blind Artists */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mb-16 md:mb-24"
>
  <div className="flex flex-col md:flex-row items-center gap-8 bg-primary/5 rounded-3xl p-6 md:p-10">
    
    {/* Video */}
    <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
      <video 


        src={blindArtVideo} // <-- replace with your video file path
        controls
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>

    {/* Text */}
    <div className="w-full md:w-1/2 text-primary space-y-4">
      <h3 className="font-serif text-2xl md:text-3xl text-primary mb-2">
        ❤️ Innovasie deur Blindes
      </h3>
      <p className="text-lg md:text-xl leading-relaxed">
        Hierdie spesiale video wys hoe visueel gestremdes pragtige kunswerke skep met toewyding en liefde. 
        Hulle hande en harte bring kleur en kreatiwiteit tot lewe in elke stuk.
      </p>
      <p className="text-primary/80 text-lg md:text-lg italic">
        Kyk, beleef, en inspireer – elke skepwerk vertel 'n storie van passie en deursettingsvermoë.
      </p>
    </div>

  </div>
</motion.div>


            </motion.div>
              {/* Special Moment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 md:mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🧶</span>
                <div className="flex items-center gap-2 text-primary/60">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">24 Junie 2025</span>
                </div>
              </div>
              <div className="bg-gold/10 border-l-4 border-gold p-6 md:p-8 rounded-r-2xl">
                <p className="text-primary text-lg md:text-xl leading-relaxed mb-4">
                  <strong>Innovasie vir Blindes</strong> het 14 "liefdevol gehekelde komberse" aan my oorhandig — 
                  'n hoendervleis-oomblik wat in 'n spesiale video vasgevang is.
                </p>
                <p className="text-primary/80">
                  Ek kon nie anders as om dankie te sê met 'n lekkerny nie: cappuccino's verpak deur visueel 
                  gestremdes en 12 balle Charity-wol om hulle hande weer besig te kry.
                </p>
              </div>
            </motion.div>



          
            {/* Continue with the rest of your existing sections... */}

            
            {/* Back Link */}
           <div className="mt-16 text-center">
  <Link 
    to="/" 
    className="inline-flex items-center gap-2 bg-primary text-cream font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gold hover:text-primary transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
  >
    <ArrowLeft className="w-5 h-5" />
    Terug na Tuisblad
  </Link>
</div>

          </div>
        </div>

        
      </section>

      <Footer />
    </div>
  );
};

export default News;