import { motion } from "framer-motion";
import coffeeBagLeft from "@/assets/coffee-bag-left.png";
import coffeeBagCentre from "@/assets/coffee-bag-centre.png";
import coffeeBagRight from "@/assets/coffeer.png";

const Hero = () => {
  return (
    <section className="min-h-screen bg-primary flex flex-col items-center justify-between pt-28 md:pt-40 pb-0 overflow-hidden">
      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
    <motion.h1
  initial={{ y: 40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="font-display text-4xl md:text-6xl lg:text-8xl text-cream leading-tight italic"
>
  <span className="text-3xl md:text-5xl lg:text-7xl">Ons</span> koffie 
  <span className="text-4xl md:text-6xl lg:text-7xl mx-2">|</span> 
  Plaaslik. <br/>Doelgedrewe. Met sorg verpak.
</motion.h1>


        
        {/* Beautifully formatted statement */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mt-4 md:mt-6 mb-4 md:mb-6"
        >
          <div className="relative inline-block">
            {/* Decorative elements */}
          
            {/* Main statement */}
           
            
          </div>
        </motion.div>
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-cream/90 text-sm md:text-base lg:text-lg mt-4 md:mt-6 max-w-2xl px-4 text-center space-y-3"
        >
       
        </motion.div>
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8"
        >
          <a
            href="#menu"
            className="px-5 md:px-6 py-2.5 md:py-3 bg-transparent border-2 border-cream text-cream font-medium rounded-full hover:bg-cream hover:text-primary transition-all duration-300 text-sm md:text-base"
          >
            Ontdek Spyskaart
          </a>
          <a
            href="#locations"
            className="px-5 md:px-6 py-2.5 md:py-3 bg-cream text-primary font-medium rounded-full hover:bg-gold transition-all duration-300 text-sm md:text-base"
          >
            Ons Ligging
          </a>
        </motion.div>
      </div>

      {/* Coffee Bags */}
      <div className="w-full flex justify-center items-end gap-0 md:gap-4 mt-8 md:mt-12">
        <motion.div
          initial={{ y: 150, opacity: 0, rotate: -8 }}
          animate={{ y: 0, opacity: 1, rotate: -8 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative -mr-6 md:-mr-12"
        >
          <img
            src={coffeeBagLeft}
            alt="ANNABeleef Hoop Koffie"
            className="w-36 md:w-52 lg:w-80 drop-shadow-2xl"
          />
        </motion.div>
        
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="relative z-10 -mb-4"
        >
          <img
            src={coffeeBagCentre}
            alt="ANNABeleef Koffie"
            className="w-52 md:w-72 lg:w-[28rem] drop-shadow-2xl"
          />
        </motion.div>
        
        <motion.div
          initial={{ y: 150, opacity: 0, rotate: 8 }}
          animate={{ y: 0, opacity: 1, rotate: 8 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="relative -ml-6 md:-ml-12"
        >
          <img
            src={coffeeBagRight}
            alt="ANNABeleef Koffie"
            className="w-36 md:w-52 lg:w-80 drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;