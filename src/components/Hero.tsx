"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { BrandIntegration } from "./BrandIntegration";
import { useModal } from "@/lib/ModalContext";
import { TextReveal } from "./animations/TextReveal";

export const Hero = () => {
  const { openModal } = useModal();
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
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
            <div className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-espresso">
              <TextReveal text="The Art of" className="inline-block" />
              <br />
              <span className="italic text-gold">
                <TextReveal text="Search Dominance" className="inline-block" delay={0.4} />
              </span>{" "}
              <TextReveal text="& Impact." className="inline-block" delay={0.6} />
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="max-w-xl text-lg md:text-xl text-espresso/60 leading-relaxed font-light"
          >
            We help local businesses grow by making them the top choice on Google. No unnecessary complexity - just clear, proven strategies that get you more customers and more revenue.
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center space-x-8">
            <button 
              onClick={openModal}
              className="px-10 py-4 bg-espresso text-linen text-sm uppercase tracking-widest hover:bg-espresso/90 transition-all duration-300 shadow-xl rounded-md glow-hover"
            >
              Secure Consultation
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
          <BrandIntegration />
        </motion.div>
      </div>

      {/* Uniform Background - Decorative overlay removed to match left side */}
    </section>
  );
};
