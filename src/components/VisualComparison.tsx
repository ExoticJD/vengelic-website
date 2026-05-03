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
    highlight: false
  },
  {
    traditional: "12-18 Months (Estimated)",
    vengelic: "90 Day Guarantee",
    highlight: false
  },
  {
    traditional: "Temporary Visibility",
    vengelic: "Permanent Ranking",
    highlight: false
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
            <span className="italic text-gold">Vengelic</span> <span className="inline-block ml-8 mr-4">vs</span> Traditional
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-espresso/10">
                <th className="py-8 px-6 text-center text-xs uppercase tracking-widest text-gold font-bold bg-espresso/5 rounded-t-2xl">The Vengelic Standard</th>
                <th className="py-8 px-6 text-center text-xs uppercase tracking-widest text-espresso/40 font-medium">Traditional SEO</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, idx) => (
                <motion.tr 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <td className={`py-8 px-6 border-b border-espresso/5 text-center font-medium ${row.highlight ? 'text-espresso' : 'text-espresso/80'} bg-espresso/5`}>
                    <div className="flex flex-col items-center space-y-2">
                      <Check size={16} className="text-gold" />
                      <span>{row.vengelic}</span>
                    </div>
                  </td>
                  <td className="py-8 px-6 border-b border-espresso/5 text-center text-espresso/40 font-light">
                    <div className="flex flex-col items-center space-y-2">
                      <X size={16} className="opacity-20" />
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>


    </section>
  );
};
