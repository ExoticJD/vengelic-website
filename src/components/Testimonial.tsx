"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Vengelic didn't just increase our traffic; they redefined our digital presence with a level of precision we didn't think was possible in SEO.",
    author: "Julian Thorne",
    role: "Director of Strategy, Aether Global"
  },
  {
    quote: "The results were immediate and sustained. Our organic lead generation has tripled since partnering with the Vengelic team.",
    author: "Marcus Vane",
    role: "CEO, Obsidian Group"
  },
  {
    quote: "Precision, authority, and growth. They understand the nuances of luxury SEO better than any agency we've ever worked with.",
    author: "Elena Rossi",
    role: "Creative Director, Valerius & Co."
  },
  {
    quote: "The attention to detail and strategic foresight Vengelic brings to the table is unmatched. They are truly the architects of search dominance.",
    author: "Sophia Laurent",
    role: "Marketing Director, L'Avenir Jewels"
  },
  {
    quote: "Vengelic transformed our digital footprint. We now rank for keywords we thought were untouchable, bringing in a caliber of clientele we've never seen before.",
    author: "Alexander Sterling",
    role: "Founder, Sterling Estates"
  },
  {
    quote: "Their approach is as much an art as it is a science. Vengelic doesn't just rank pages; they build legacies in the digital space.",
    author: "Isabella Thorne",
    role: "CMO, Horizon Yachts"
  }
];

export const Testimonial = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="proof" className="py-40 px-6 bg-linen relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center min-h-[500px] md:min-h-[400px] flex flex-col justify-center relative">
        {/* Large Quote Mark - Static Background */}
        <span className="absolute top-0 left-1/2 -translate-x-1/2 text-[150px] md:text-[200px] font-serif text-espresso/5 select-none pointer-events-none">
          &ldquo;
        </span>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="space-y-12 md:space-y-16 relative z-10 py-12"
          >
            <h2 className="font-serif text-2xl md:text-5xl lg:text-6xl text-espresso leading-tight tracking-tight px-4">
              {testimonials[index].quote}
            </h2>

            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.4em] text-espresso font-bold">
                {testimonials[index].author}
              </p>
              <p className="text-xs uppercase tracking-widest text-espresso/40">
                {testimonials[index].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center space-x-4 mt-8">
        {testimonials.map((_, i) => (
          <div 
            key={i}
            className={`h-px transition-all duration-1000 ${i === index ? "w-12 bg-espresso" : "w-6 bg-espresso/10"}`}
          />
        ))}
      </div>

      {/* Decorative side element */}
      <div className="absolute top-0 left-0 w-px h-full bg-espresso/5 ml-12 hidden lg:block" />
    </section>
  );
};
