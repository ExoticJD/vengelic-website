"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does Vengelic ensure a positive ROI?",
    answer: "We focus on revenue-generating search intent rather than vanity metrics. By building unchallenged authority and targeting high-conversion keywords, we turn search traffic into measurable business growth.",
  },
  {
    question: "What is your approach to market capture?",
    answer: "We don't just chase rankings; we dominate the digital landscape. Our framework identifies and captures the exact search entry points where your highest-value prospects are most active.",
  },
  {
    question: "How long before we see measurable dominance?",
    answer: "While search authority is built over time, our strategic framework typically yields measurable shifts in search visibility and market capture within the first 90 days of partnership.",
  },
  {
    question: "What makes your strategy 'Result-Driven'?",
    answer: "Every action we take is mapped to your bottom line. We prioritize authority building and conversion-optimized search signals that translate directly into qualified leads and revenue.",
  },
  {
    question: "Is Vengelic right for my business?",
    answer: "We partner exclusively with established businesses ready to command their industry. If you prioritize long-term market authority and precision growth, our methodology is built for you.",
  },
];

export const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    // Only trigger hover on non-touch devices (desktop)
    if (window.matchMedia("(hover: hover)").matches) {
      setActiveIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (window.matchMedia("(hover: hover)").matches) {
      setActiveIndex(null);
    }
  };

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-32 px-6 bg-linen" id="faq">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto space-y-12"
      >
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.4em] text-espresso/40">Clarification</span>
          <h2 className="font-serif text-4xl text-espresso tracking-tight">Frequently Asked</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-espresso/10"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleClick(index)}
                className="w-full py-6 flex justify-between items-center text-left group"
              >
                <span className="text-lg text-espresso/80 group-hover:text-espresso transition-colors font-medium">
                  {faq.question}
                </span>
                <div className="relative flex items-center justify-center w-6 h-6">
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 90 : 0, opacity: activeIndex === index ? 0 : 1 }}
                    className="absolute"
                  >
                    <Plus size={20} className="text-espresso/40" />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 0 : -90, opacity: activeIndex === index ? 1 : 0 }}
                    className="absolute"
                  >
                    <Minus size={20} className="text-espresso/40" />
                  </motion.div>
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-espresso/60 leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
