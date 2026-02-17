import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

const History = () => {
  const [showPart2, setShowPart2] = useState(false);
  const [showPart6, setShowPart6] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <Header />

      <section className="bg-[#f8f5f0] py-20">
        <div className="max-w-5xl mx-auto px-6">

          {/* Back Button */}
          <div className="mb-12">
            <Link
              to="/"
              className="text-sm tracking-widest uppercase border-b border-primary pb-1 hover:text-gold transition"
            >
              ← Back to Main Website
            </Link>
          </div>

          {/* Page Title */}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif text-center text-primary mb-20"
          >
            The History of ANNABeleef
          </motion.h1>

          {/* ================= PART II ================= */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-serif text-primary mb-6">
              📢 Part II: The Founding of Worcester (1818 – 1820)
            </h2>

            <button
              onClick={() => setShowPart2(!showPart2)}
              className="mb-8 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition"
            >
              {showPart2 ? "Close Archive" : "Read Historical Archive"}
            </button>

            {showPart2 && (
              <div className="border-l-4 border-gold pl-8 space-y-8 text-lg leading-loose text-primary/90">

                <TimelineItem year="19 December 1818">
                  Barend Johannes Burger sold the farm “De Langerug, located on the Breede River,” to the Cape government.
                </TimelineItem>

                <TimelineItem year="10 January 1819">
                  Governor Lord Charles Somerset visited the farm to assess its suitability for Worcester. The old wine cellar would later become the 'Old Gaol'.
                </TimelineItem>

                <TimelineItem year="1819 – 1821">
                  Jacob Frederik van de Graaff arranged for the Old Wine Cellar to be converted into a gaol. On 5 March 1821, it was fully established.
                </TimelineItem>

                <TimelineItem year="3 November 1820">
                  Request submitted for the immediate construction of a prison as justice was suffering.
                </TimelineItem>

                <TimelineItem year="5 March 1821">
                  The ‘Old Gaol’ officially recorded as established.
                </TimelineItem>

                <TimelineItem year="12 June 1821">
                  British plank benches installed so prisoners would not sleep on cold ground.
                </TimelineItem>

                <TimelineItem year="1821 – 1861">
                  The Old Gaol served as Worcester’s prison until the New Gaol opened in 1861.
                </TimelineItem>

                <p>
                  Today, this site is home to ANNABeleef — a space full of culture,
                  coffee, and history that writes new stories while honoring the old ones.
                </p>

                <p className="italic">
                  Compiled by: Councillor  Dr JULIAN KRITZINGER
                </p>
              </div>
            )}
          </motion.div>

          {/* ================= PART VI ================= */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-serif text-primary mb-6">
              🌻 Part VI: Worcester Agricultural Society (1910 – 1971)
            </h2>

            <button
              onClick={() => setShowPart6(!showPart6)}
              className="mb-8 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition"
            >
              {showPart6 ? "Close Archive" : "Read Historical Archive"}
            </button>

            {showPart6 && (
              <div className="border-l-4 border-gold pl-8 space-y-8 text-lg leading-loose text-primary/90">

                <TimelineItem year="1911 – 1943">
                  The ‘Old Gaol’ served as residence for the Secretary of the Worcester Agricultural Society.
                </TimelineItem>

                <TimelineItem year="1920s">
                  Demolition of the ‘Old Langerug’ homestead, known as ‘Oude Post’.
                </TimelineItem>

                <TimelineItem year="1943 – 1946">
                  Used as administrative offices of the Italian Prisoner-of-War Camp.
                </TimelineItem>

                <TimelineItem year="1946 – 1971">
                  Used as storage, meeting place, and clubhouse.
                </TimelineItem>

                <TimelineItem year="27 November 1969">
                  Decision to relocate show grounds to Kleinplasie.
                </TimelineItem>

                <TimelineItem year="6 March 1971">
                  Final event held on old show grounds.
                </TimelineItem>

                <TimelineItem year="March 1971">
                  Worcester Agricultural Society relocates to Kleinplasie.
                </TimelineItem>

                <p className="italic">
                  Compiled by: Councillor Dr Dr Julian
                </p>
              </div>
            )}
          </motion.div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
};

/* ================= Timeline Component ================= */

const TimelineItem = ({ year, children }) => (
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative"
  >
    <div className="absolute -left-[42px] top-2 w-4 h-4 bg-gold rounded-full border-4 border-[#f8f5f0]"></div>
    <h4 className="font-semibold text-primary mb-2">{year}</h4>
    <p>{children}</p>
  </motion.div>
);

export default History;