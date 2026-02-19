import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import Images
import image1 from "@/assets/image-2025-1.jpg";
import image2 from "@/assets/image-2025-2.jpg";
import image3 from "@/assets/image-2025-3.jpg";
import image4 from "@/assets/image-2025-4.jpg";

const AnnualReport: React.FC = () => {
  const [expand2024Part1, setExpand2024Part1] = useState(false);
  const [expand2024Part2, setExpand2024Part2] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const images = [image1, image2, image3, image4];

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header />

      <section className="bg-gradient-to-b from-cream to-white py-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif text-center text-primary mb-20"
          >
            Jaarverslag 2024 – 2025
          </motion.h1>

          {/* ================= 2024 SECTION ================= */}
          {/* ================= 2024 SECTION ================= */}
{/* ================= 2024 SECTION ================= */}
{/* ================= 2024 SECTION ================= */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mb-24 bg-white shadow-xl rounded-3xl p-10 border-l-8 border-gold"
>
  <h2 className="text-3xl font-serif text-primary mb-8">
    🌿 2024 – Groei, Gemeenskap en Erkenning
  </h2>

  <div className="space-y-4 text-gray-800 text-lg leading-relaxed">

    {/* READ MORE BUTTON 1 */}
    <button
      onClick={() => setExpand2024Part1(!expand2024Part1)}
      className="mb-4 px-5 py-2 bg-primary text-white font-semibold rounded-full shadow hover:bg-primary/90 transition-colors duration-300"
    >
      {expand2024Part1 ? "Sluit" : "Lees Meer Deel 1"}
    </button>

    {expand2024Part1 && (
      <div className="space-y-4">
        <p>ANNABELEEF JAARVERSLAG 2024 (22.12.24)</p>
        <p>
          Hierdie jaar was ongelooflik besig en vol hoogtepunte wat ons passie en
          toewyding aan ons kliënte, ons gemeenskap en ons visie vir ANNABeleef weerspieël.
        </p>

        <p className="font-semibold">1. PRESTASIES</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Wenner: AfriForum Sakenetwerk Tinteltong-toekenning 2024</li>
          <li>Wenner: Kaapse Wynland Distriksmunisipaliteit Fenominale Vrou Entrepreneur 2024</li>
          <li>Semi-Finalis: AfriForum Sakenetwerk Entrepreneur van die Jaar 2024</li>
        </ul>

        <p className="font-semibold mt-4">2. SUKSESVOLLE PROJEKTE EN GEBEURE</p>
        <p>Kunsuitstalling: Ons bied plaaslike kunstenaars die geleentheid om hul werke uit te stal.</p>
        <p>Poësiekompetisie: 'n Hoogtepunt in Oktober met groot ondersteuning en pragtige inskrywings.</p>
        <p>Baking Skills Programme: Inisiatief om bakkersvaardighede in die gemeenskap te bevorder.</p>
        <p>Boomplantprojek: Bygedra tot omgewingsbewaring met boomplanting by ANNABeleef.</p>
      </div>
    )}

    {/* READ MORE BUTTON 2 */}
    <button
      onClick={() => setExpand2024Part2(!expand2024Part2)}
      className="mt-4 mb-4 px-5 py-2 bg-primary text-white font-semibold rounded-full shadow hover:bg-primary/90 transition-colors duration-300"
    >
      {expand2024Part2 ? "Sluit" : "Lees Meer Deel 2"}
    </button>

    {expand2024Part2 && (
      <div className="space-y-4">
        <p>Kombersprojek: Gemeenskapslede het gehelp om handgemaakte komberse te skep vir hierdie projek wat ons saam met ons Uitvoerende Burgemeester, Antoinette Steyn, aangepak het.</p>
        <p>Rolstoelvriendelikheid: Verbeterings aangebring om ons geriewe meer toeganklik te maak.</p>

        <p className="font-semibold mt-4">3. UNIEKE ASPEKTE VAN ANNABELEEF</p>
        <p>Braille-spyskaart: Maak eet-ervaring toeganklik vir ons siggestremde kliënte.</p>
        <p>Eie liedjie: Ruben Lennox het ons verhaal in musiek omskep.</p>
        <p>Vermaak: Vertellings deur Mel die Storieverteller het soveel kleur gebring.</p>
        <p>Bekendes kom loer in: Amoré Bekker, Annelize van der Ryst, Elwira Standili, Mel die Storieverteller</p>
        <p>Oorsese besoekers: Besoekers uit verskeie lande het ons kom besoek.</p>

        <p className="font-semibold mt-4">4. ONS INVLOED IN DIE GEMEENSKAP</p>
        <p>Ons is trots daarop om donasies te kon maak aan verskeie instansies, insluitend die Instituut vir Blindes, Toevlug Sentrum, Glen Heatlie Primêr, Worcester Toerisme (Mandeladag), Worcester Museum en ander gemeenskapsorganisasies.</p>

        <p className="font-semibold mt-4">5. TOEKOMSPROJEKTE</p>
        <p>'Beleef'-klerereeks: Nog in ontwikkeling, maar beloof om uniek te wees.</p>
        <p>Ander projekte: Nuwe idees en inisiatiewe is reeds in die pyplyn vir 2025.</p>

        <p className="font-semibold mt-4">6. ERKENNING EN DANKBAARHEID</p>
        <p>Ons kliënte: Julle lojaliteit en ondersteuning beteken alles. Julle maak dit moontlik vir ANNABeleef om voort te gaan om 'n verskil te maak. Julle is die hartklop van ANNABeleef en ons waardeer elke koppie koffie, elke geselsie en elke oomblik wat julle met ons deel. Ons sien uit daarna om julle in die nuwe jaar weer te verwelkom!</p>
        <p>Personeel: Julle is die ruggraat van ANNABeleef. Dankie vir julle harde werk en passie, selfs te midde van uitdagings, steeds elke dag jul beste gegee het. Julle toewyding, harde werk en passie maak ANNABeleef meer as net ’n koffiewinkel – dit maak dit ’n plek van warmte en inspirasie. Ek waardeer elkeen van julle opreg!</p>
        <p>Juanita Stanbridge: Jy het ons groei gesien en ons sukses gevier. Jy het ‘n blywende indruk gelaat en is ‘n integrale deel van ons reis. Op ’n meer persoonlike vlak wil ek jou bedank vir jou ondersteuning, aanmoediging en die inspirasie wat jy elke dag bring.</p>
        <p>Stephne Botha: Van dag een af het jy in my drome geglo en dit moontlik gemaak om ANNABeleef in die geskiedkundige ‘Ou Tronk’ te vestig. Jou onwrikbare ondersteuning en geloof in hierdie visie beteken meer as wat woorde kan sê. Die wêreld het beslis meer vroue soos jy nodig. Dankie vir alles wat jy is en alles wat jy doen!</p>
        <p>Raadslid Dr Julian Kritzinger en Salomie Lombaard: Julian, dankie vir die saamstel van 'n pragtige dokument wat die geskiedenis van hierdie historiese gebou so deeglik en met soveel sorg saamvat. Jou toewyding en harde werk, met ure van navorsing en detail, het 'n waardevolle stuk geskiedenis vir ons almal vasgevang. Ek is ewig dankbaar vir jou moeite en passie om hierdie storie te vertel en lewendig te hou! Dit is een van ANNA se kosbaarste besittings. Salomie het ure van toewyding ingesit om die ryk geskiedenis op te som en vas te vang op gedenkplate wat binnekort teen ANNA se mure sal pryk.</p>
        <p>Breedevallei Munisipaliteit: Dankie vir die ruimhartige donasie. Dit het ons in staat gestel om ANNABeleef meer rolstoelvriendelik te maak en sodoende seker te maak dat almal welkom en gemaklik is by ons. Hierdie gebaar bevestig weereens dat inklusiwiteit en gemeenskap hand aan hand gaan. Baie dankie dat julle saam met ons werk om 'n verskil te maak!</p>
        <p>Worcester Toerisme: Dankie vir julle ongelooflike ondersteuning en samewerking. Julle toewyding om ons dorp se geskiedenis, kultuur en unieke ondernemings te bevorder, maak 'n groot verskil. Met julle hulp kan ons die ryk erfenis van Worcester deel met besoekers van naby en ver. Dankie dat julle glo in ons visie en ons storie help vertel. Ons waardeer julle werklik en sien uit na nog vele suksesvolle projekte saam!</p>
        <p>Familie en vriende: Aan my ouers, my man, my kinders, my peetkinders, my familie en my vriende – julle is my anker, inspirasie en die wind onder my vlerke. Sonder julle liefde, ondersteuning en geloof in my, sou hierdie reis onmoontlik wees. Dankie dat julle altyd daar is, deur elke uitdaging en oorwinning. Julle maak alles die moeite werd!</p>
        <p>My Hemelse Pappa: U tyd, nie my tyd nie. U wil, nie my wil nie. U plan, nie myne nie! Dankie dat U ALTYD in beheer is van my lewe en ANNABeleef!</p>
        <p>SLOT: Met dankbaarheid en opgewondenheid sien ons uit na 2025. ANNABeleef bly 'n tuiste vir geskiedenis, kos, kreatiwiteit en 'n passie vir die mense wat ons bedien. Mag 2025 'n jaar wees vol hoop, groei en gemeenskapsverbondenheid. By ANNABeleef glo ons in die krag van mense, die skoonheid van elke klein gebaar en die waarde van saam bou. Mag ons almal die jaar omhels met dankbaarheid en die doel om ander se lewens te verbeter.</p>
        <p>Vriendelike groete, ANNAlize Thairt</p>
      </div>
    )}
  </div>
</motion.div>



          {/* ================= 2025 SECTION ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24 bg-white shadow-xl rounded-3xl p-10 border-l-8 border-primary"
          >
            <h2 className="text-3xl font-serif text-primary mb-8">
              🌻 2025 – Jou Eie Storie
            </h2>

            <p className="mb-6 text-gray-800 leading-relaxed">
              JY IS DIE HOOFKARAKTER IN JOU EIE STORIE - ANNA
              <br />
              In die lewe is jy nie ’n toeskouer nie; jy is die hoofkarakter in jou eie storie.
              Elke keuse, elke uitdaging en elke oorwinning is ’n hoofstuk wat jy self skryf.
              Dit gaan nie daaroor om te wag dat dinge gebeur nie; dit gaan daaroor om dit te laat gebeur.
              Leef jou lewe met doel en opset, jaag jou drome na en staar die uitdagings reg in die gesig.
              Omhels die op- en afdraandes, want dit is alles deel van jou unieke reis.
            </p>

            <p className="mb-6 text-gray-800 leading-relaxed">
              Onthou, die beste stories is nie dié sonder struikelblokke nie, maar dié waar die hoofkarakter met elke tree sterker, veerkragtiger en meer vasberade en gefokus word.
            </p>

            <p className="mb-6 text-gray-800 leading-relaxed">
              📍ANNABeleef (Ou Tronk) Distilleryweg 2 Worcester
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {images.map((img, idx) => (
                <motion.img
                  key={idx}
                  src={img}
                  alt={`2025 image ${idx + 1}`}
                  className="rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => setModalImage(img)}
                  whileHover={{ scale: 1.05 }}
                />
              ))}
            </div>

            {modalImage && (
              <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
                <img src={modalImage} alt="popup" className="max-h-[80%] rounded-lg shadow-lg" />
                <button
                  onClick={() => setModalImage(null)}
                  className="absolute top-5 right-5 px-4 py-2 bg-white text-primary rounded-full font-semibold shadow hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  Sluit
                </button>
              </div>
            )}
          </motion.div>

          {/* BACK BUTTON */}
          <div className="text-center mt-16">
            <Link
              to="/"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300"
            >
              ← Terug na die hoofblad
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AnnualReport;
