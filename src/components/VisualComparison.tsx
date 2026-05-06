"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisons = [
  {
    traditional: "Generic Traffic Volume",
    vengelic: "Organic Quality Traffic",
    highlight: true
  },
  {
    traditional: "Competing for Rankings",
    vengelic: "Unchallenged Authority",
    highlight: true
  },
  {
    traditional: "12-18 Months (Estimated)",
    vengelic: "90 Day Guarantee",
    highlight: true
  },
  {
    traditional: "Temporary Visibility",
    vengelic: "Permanent Ranking",
    highlight: true
  },
  {
    traditional: "Monthly Data Dumps",
    vengelic: "Weekly Updates",
    highlight: true
  }
];

export const VisualComparison = () => {
  return (
    <section id="proof" className="py-32 px-6 bg-linen relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto space-y-20 relative z-10"
      >
        <div className="text-center space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl text-espresso tracking-tight">
            The <span className="italic text-gold">Vengelic</span> Difference
          </h2>
        </div>

        <div className="relative">
          {/* Header Row */}
          <div className="grid grid-cols-[1fr_auto_1fr] gap-8 md:gap-16 items-center mb-12 border-b border-espresso/10 pb-8 px-4">
            <div className="text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-black">Vengelic</span>
            </div>
            <div className="w-12 text-center">
              <span className="text-xs uppercase tracking-widest text-gold font-black">VS</span>
            </div>
            <div className="text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-espresso/40 font-bold">Others</span>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-4">
            {comparisons.map((row, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.1 }}
                className="grid grid-cols-[1fr_auto_1fr] gap-8 md:gap-16 items-center p-6 md:p-8 rounded-2xl transition-all duration-500 hover:bg-espresso/[0.02]"
              >
                {/* Vengelic Side */}
                <div className="text-center space-y-3">
                  <div className="flex justify-center">
                    <Check size={18} className="text-gold" />
                  </div>
                  <p className={`text-sm md:text-base font-serif tracking-tight text-espresso ${row.highlight ? 'font-bold' : ''}`}>
                    {row.vengelic}
                  </p>
                </div>

                {/* Divider Dot */}
                <div className="w-12 flex justify-center">
                  <div className="w-2 h-2 rounded-full bg-gold/60" />
                </div>

                {/* Others Side */}
                <div className="text-center space-y-3">
                  <div className="flex justify-center">
                    <X size={16} className="text-espresso/40" />
                  </div>
                  <p className="text-sm md:text-base text-espresso font-light italic">
                    {row.traditional}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>


    </section>
  );
};
