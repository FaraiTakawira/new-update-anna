import { ArrowLeft, MapPin, Heart, Calendar, Palette, Star, Image as ImageIcon, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import newsBlankets from "@/assets/news-blankets.jpg";
import newsBag from "@/assets/news-bag.jpg";
import newsTeam from "@/assets/news-team.jpg";
import newsArt from "@/assets/news-art.jpg";
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
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 md:mb-16"
            >
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img src={newsBlankets} alt="Kleurvolle komberse" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img src={newsBag} alt="ANNABeleef sak" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img src={newsTeam} alt="Span met komberse" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img src={newsArt} alt="Kuns by ANNABeleef" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
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

{/* ANNABeleef Heritage Teaser with Read More */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="mb-16 md:mb-24 bg-primary/5 rounded-3xl p-6 md:p-10 max-w-5xl mx-auto"
>
  <div className="space-y-4">
    <h2 className="font-serif text-2xl md:text-3xl text-primary mb-2 text-center">
      📢 ANNABeleef – Part of Worcester’s Rich Heritage
    </h2>

    {/* Teaser */}
    <p className="text-primary/90 text-lg md:text-xl leading-relaxed">
      ANNABeleef is not just a coffee shop but also a piece of Worcester’s profound history. 🌍 Here’s a fascinating piece of archival information that tells the story of the origins of the Old Gaol, the site where ANNA is located today.
    </p>

    <p className="text-primary/80 italic">
      Read more below about how Worcester’s foundation began in 1818 – and discover the story of an old wine cellar that later became the 'Old Gaol', now transformed into something truly unique!
    </p>

    {/* Read More Button */}
    <div className="text-center">
      <button
        onClick={() => {
          const content = document.getElementById("heritage-full-content");
          content.classList.toggle("hidden");
        }}
        className="bg-gold text-primary px-6 py-2 rounded-full font-medium hover:bg-gold/90 transition-colors active:scale-95"
      >
        Read More
      </button>
    </div>

    {/* Full Content Hidden by Default */}
    <div id="heritage-full-content" className="hidden mt-6 space-y-4 text-primary/90 leading-relaxed">
      <p>PART II: PREPARATIONS FOR THE FOUNDING OF WORCESTER 1818 – 1820</p>
      <p>📜 Excerpt:</p>
      <p>On 19 December 1818, Barend Johannes Burger sold the farm “De Langerug, located on the Breede River,” to the Cape government.</p>
      <p>On 10 January 1819, Governor Lord Charles Somerset and his party visited the farm to assess its suitability for the new town, Worcester. It is likely that they inspected all the buildings on the farm that day – including the old wine cellar, which would later become known as the 'Old Gaol'.</p>
      <p>In 1819, the Deputy Landdros of Worcester, Jacob Frederik van de Graaff, took up residence in the old main homestead of ‘De-Langerug-gelegen-aan-het-Breede-Rivier’, and in 1820, he began making the necessary arrangements to set up the Old Wine Cellar as a gaol. On 5 March 1821, the gaol was fully established.</p>
      <p>3 November 1820: Jacob van de Graaff Requests Permission to Establish a Gaol<br />
      On 3 November 1820, Jacob van de Graaff requested permission for “the immediate construction of a prison with the necessary apartments for the schout and judicial officers,” as the lack of such a building caused “justice to suffer greatly.”</p>
      <p>5 March 1821: ‘Old Gaol’ is Fully Established<br />
      On 5 March 1821, at the first meeting of Landdros Charles Trappes with the first heemrade, Pieter de Vos of ‘Buffelskraal’ in the Hex Valley and Carel Stephanus Erasmus of ‘Nonna’ at Overhex, it was recorded in the minutes that the prison was “visiteur” (i.e., ‘visitable,’ meaning ‘already established’). The gaol was set up in the original main section of the old wine cellar as follows:
      <ul className="list-disc pl-6 mt-2">
        <li>One large hall section that could also serve as a hospital</li>
        <li>A kitchen area in the middle</li>
        <li>Three small detention cells</li>
      </ul>
      The rear wing, extended in 1820/1821, contained the following:
      <ul className="list-disc pl-6 mt-2">
        <li>A living room for the ‘schout’ (i.e., ‘guard’ or ‘overseer’)</li>
        <li>A living room at the very end for the ‘judicial officers’ (i.e., the ‘bailiff’)</li>
      </ul>
      </p>
      <p>12 June 1821: Benches Installed in the ‘Old Gaol’<br />
      On 12 June 1821, it was recorded that “a British (‘plank bench’) has been installed in the prison here, on which the prisoners can lie – as the prisoners cannot endure the cold from lying on the ground.”</p>
      <p>From 5 March 1821 until 26 November 1861, the ‘Old Gaol’ was used as a prison, after which the ‘New Gaol’ was commissioned on 26 November 1861 at the top of Russell Street (at the Russell and Somerset Street intersection).</p>
      <p>From 1821 to 1893, the Landdros of Worcester, in his dual capacity as Landdros and Civil Commissioner, was responsible for the maintenance of the ‘Old Gaol.’</p>
      <p>It is unknown exactly what the ‘Old Gaol’ was used for from 26 November 1861 until 1910, but it can possibly be assumed that it was still used for ‘prison purposes,’ such as housing for a prison warden, prison overseer, or other prison personnel, and so forth.</p>
      <p>Today, this site is home to ANNABeleef, a space full of culture, coffee, and history that writes new stories while honoring the old ones. ☕ Come visit and experience it for yourself!</p>
      <p>Compiled by: Councillor Dr Dr JULIAN KRITZINGER</p>
    </div>
  </div>
</motion.div>
{/* ANNABeleef Heritage Teaser - Part I */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="mb-16 md:mb-24 bg-primary/5 rounded-3xl p-6 md:p-10 max-w-5xl mx-auto"
>
  <div className="space-y-4">
    <h2 className="font-serif text-2xl md:text-3xl text-primary mb-2 text-center">
      🌻 ANNABeleef: Where Heritage and Community Meet 🌻
    </h2>

    {/* Teaser */}
    <p className="text-primary/90 text-lg md:text-xl leading-relaxed">
      ANNABeleef is more than just a coffee and gift shop; it is a place where Worcester’s rich history and our passion for the community converge. Located in the iconic "Old Gaol" building, our shop boasts a history that tells Worcester’s agricultural and community story across decades.
    </p>

    <p className="text-primary/80 italic">
      PART VI: WORCESTER AGRICULTURAL SOCIETY 1910 – 1971. Read more below for fascinating historical details.
    </p>

    {/* Read More Button */}
    <div className="text-center">
      <button
        onClick={() => {
          const content = document.getElementById("heritage-part1-full");
          content.classList.toggle("hidden");
        }}
        className="bg-gold text-primary px-6 py-2 rounded-full font-medium hover:bg-gold/90 transition-colors active:scale-95"
      >
        Read More
      </button>
    </div>

    {/* Full Content Hidden by Default */}
    <div id="heritage-part1-full" className="hidden mt-6 space-y-4 text-primary/90 leading-relaxed">
      <p>INTRODUCTION</p>
      <p>
        From 1911 to 1943, the ‘Old Gaol’ was used as the residence of the Secretary of the Worcester Agricultural Society.
      </p>
      <p>
        In the 1920s, the old main homestead of ‘De-Langerug-gelegen-aan-het-Breede-Rivier’ was demolished. At that time, this homestead was known as ‘Oude Post’.
      </p>
      <p>
        From 1943 to 1946, the ‘Old Gaol’ served as the administrative offices of the Worcester Italian Prisoner-of-War Camp. From 1946 to 1971, the ‘Old Gaol’ was used as a storage facility, later as a meeting place, and eventually as a clubhouse for the Worcester Agricultural Society.
      </p>
      <p>November 1909: Cape Colonial Parliament Passes Bill for Transfer of Portion of Drostdy Grounds to the Worcester Agricultural Society</p>
      <p>In November 1909, both houses of the Cape Parliament passed a bill stipulating that plots E and F of the Drostdy grounds be allocated to the Worcester Agricultural Society for the purpose of holding agricultural exhibitions.</p>
      <p>18 February 1910: Deed of Grant for Portion of Drostdy Grounds Signed by Governor Sir Walter Hely-Hutchinson</p>
      <p>The deed of grant was signed on 18 February 1910 by the Cape Governor, Sir Walter Hely-Hutchinson, transferring land measuring 4 morgen, 186 square roods, and 42 square feet to the Worcester Agricultural Society.</p>
      <p>27 July 1911: Further Deed of Grant for Additional Drostdy Grounds Signed by Governor Lord Sydney Buxton</p>
      <p>
        As it became apparent that the grounds allocated in 1910 were too small for an agricultural exhibition, the Worcester Agricultural Society secured an additional piece of land. This further deed of grant was signed on 27 July 1911 by Governor Lord Sydney Buxton, transferring a piece of land called ‘The Show Ground Extension,’ measuring 1 morgen, 206 square roods, and 122 square feet, to the Worcester Agricultural Society.
      </p>
      <p>1911 – 1943: The ‘Old Gaol’ Used as Residence for the Secretary of the Worcester Agricultural Society</p>
      <p>1911 – 1925: Further Eight Morgen of Land Transferred by Worcester Municipality to Worcester Agricultural Society</p>
      <p>1920s: Demolition of ‘Old Langerug’ Homestead, ‘Oude Post’</p>
      <p>1943 – 30 June 1946: Italian Prisoner-of-War Camp on the Worcester Agricultural Show Grounds, and the ‘Old Gaol’ Used as Administrative Offices</p>
      <p>October 1946: Auction of Italian Prisoner-of-War Camp Structures and Items</p>
      <p>1946 – 1971: The ‘Old Gaol’ Used as Storage, Meeting Place, and Later Clubhouse for the Worcester Agricultural Society</p>
      <p>27 November 1969: Worcester Agricultural Society Decides to Relocate from Old Show Grounds to Kleinplasie</p>
      <p>6 March 1971: Last Event on the Old Show Grounds</p>
      <p>Compiled by: Councillor Dr Dr Julian Kritzinger</p>
    </div>
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