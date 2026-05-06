"use client";

import React from "react";
import { motion } from "framer-motion";
import { useModal } from "@/lib/ModalContext";
import { Sparkles } from "lucide-react";

export const FinalCTA = () => {
  const { openModal } = useModal();

  return (
    <section className="pt-16 pb-32 px-6 bg-linen relative overflow-hidden">
      {/* Background decorative elements - Removed for flat color consistency */}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <h2 className="font-serif text-5xl md:text-8xl text-espresso tracking-tight leading-tight">
            Be <span className="italic text-gold">seen</span>.
          </h2>

          <div className="pt-12">
            <button
              onClick={() => openModal("inquiry")}
              className="px-12 py-5 bg-espresso text-linen text-sm uppercase tracking-[0.3em] font-bold rounded-xl hover:bg-gold transition-all duration-500 shadow-[0_20px_50px_rgba(67,38,22,0.2)] hover:shadow-[0_20px_50px_rgba(153,101,21,0.3)] transform hover:-translate-y-1 active:scale-95"
            >
              Get a free consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
