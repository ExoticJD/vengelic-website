"use client";

import React from "react";
import { motion } from "framer-motion";
import { AscentAnimation } from "./AscentAnimation";
import { useModal } from "@/lib/ModalContext";

export const Hero = () => {
  const { openModal } = useModal();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-10 gap-12 items-center">
        {/* Left Side (60%) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 space-y-10"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <span className="text-xs uppercase tracking-[0.4em] text-espresso/40 block">
              Authority-First SEO
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-espresso">
              The Art of <br />
              <span className="italic">Invisibility</span> & Impact.
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="max-w-xl text-lg md:text-xl text-espresso/60 leading-relaxed font-light"
          >
            Vengelic crafts bespoke search strategies for brands that demand authority without the noise. 
            We don't just rank; we command the narrative.
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center space-x-8">
            <button 
              onClick={openModal}
              className="px-10 py-4 bg-espresso text-linen text-sm uppercase tracking-widest hover:bg-espresso/90 transition-all duration-300 shadow-xl rounded-md"
            >
              Secure Consultation
            </button>
            <button className="group flex items-center space-x-3 text-sm uppercase tracking-widest text-espresso hover:text-espresso/60 transition-colors">
              <span>Our Methodology</span>
              <span className="w-8 h-px bg-espresso group-hover:w-12 transition-all duration-300" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side (40%) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="lg:col-span-4 hidden lg:block"
        >
          <AscentAnimation />
        </motion.div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-espresso/[0.02] -z-10" />
    </section>
  );
};
