"use client";

import React from "react";
import { motion } from "framer-motion";

export const Testimonial = () => {
  return (
    <section className="py-40 px-6 bg-linen relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="relative"
        >
          {/* Large Quote Mark */}
          <span className="absolute -top-20 left-1/2 -translate-x-1/2 text-[200px] font-serif text-espresso/5 select-none">
            &ldquo;
          </span>
          
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-espresso leading-tight tracking-tight relative z-10">
            Vengelic didn&rsquo;t just increase our traffic; they redefined our digital presence with a level of precision we didn&rsquo;t think was possible in SEO.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="space-y-2"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-espresso font-bold">
            Julian Thorne
          </p>
          <p className="text-xs uppercase tracking-widest text-espresso/40">
            Director of Strategy, Aether Global
          </p>
        </motion.div>
      </div>

      {/* Decorative side element */}
      <div className="absolute top-0 left-0 w-px h-full bg-espresso/5 ml-12 hidden lg:block" />
    </section>
  );
};
