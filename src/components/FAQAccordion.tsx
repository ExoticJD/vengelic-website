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
    question: "How long before we dominate our market?",
    answer: "While search authority is built over time, our strategic framework typically yields measurable shifts in search visibility and market capture within the first 90 days of partnership.",
  },
  {
    question: "Is Vengelic right for my business?",
    answer: "We partner exclusively with established businesses ready to command their industry. If you prioritize long-term market authority and precision growth, our methodology is built for you.",
  },
];

export const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-linen">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.4em] text-espresso/40">Clarification</span>
          <h2 className="font-serif text-4xl text-espresso tracking-tight">Frequently Asked</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-espresso/10">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full py-6 flex justify-between items-center text-left group"
              >
                <span className="text-lg text-espresso/80 group-hover:text-espresso transition-colors font-medium">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <Minus size={20} className="text-espresso/40" />
                ) : (
                  <Plus size={20} className="text-espresso/40" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as any }}
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
      </div>
    </section>
  );
};
