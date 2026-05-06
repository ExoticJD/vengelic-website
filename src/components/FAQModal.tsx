"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus } from "lucide-react";
import { useModal } from "@/lib/ModalContext";

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

export const FAQModal = () => {
  const { isOpen, closeModal, modalType, openModal } = useModal();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (modalType !== "faq") return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex justify-end">
          {/* Backdrop with Depth Recede Effect (handled in layout) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-espresso/60 backdrop-blur-sm"
          />

          {/* Modal Container: Side-Slide & Liquid Ink Reveal */}
          <motion.div
            initial={{ x: "100%", clipPath: "circle(0% at 100% 50%)" }}
            animate={{ 
              x: 0, 
              clipPath: "circle(150% at 100% 50%)",
              transition: {
                type: "spring",
                damping: 25,
                stiffness: 120,
                clipPath: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
              }
            }}
            exit={{ 
              x: "100%", 
              clipPath: "circle(0% at 100% 50%)",
              transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1]
              }
            }}
            className="relative w-full max-w-2xl bg-linen h-full shadow-[-20px_0_50px_rgba(0,0,0,0.2)] flex flex-col"
          >
            {/* Liquid Background Pulse */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
               <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <motion.path
                   initial={{ d: "M0,50 Q25,45 50,50 T100,50 L100,100 L0,100 Z" }}
                   animate={{
                     d: [
                       "M0,50 Q25,45 50,50 T100,50 L100,100 L0,100 Z",
                       "M0,50 Q25,55 50,50 T100,50 L100,100 L0,100 Z",
                       "M0,50 Q25,45 50,50 T100,50 L100,100 L0,100 Z"
                     ]
                   }}
                   transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                   fill="var(--espresso)"
                 />
               </svg>
            </div>

            {/* Header */}
            <div className="p-8 md:p-12 flex justify-between items-center border-b border-espresso/5">
              <div className="space-y-1">
                <h2 className="font-serif text-3xl md:text-4xl text-espresso tracking-tight">
                  Clarification <span className="italic text-gold">&</span> Insight
                </h2>
                <p className="text-espresso/40 uppercase tracking-[0.3em] text-[10px] font-medium">Frequently Asked Questions</p>
              </div>
              <button
                onClick={closeModal}
                className="w-12 h-12 rounded-full border border-espresso/10 flex items-center justify-center text-espresso/40 hover:text-espresso hover:border-espresso/30 transition-all duration-300"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 scrollbar-hide">
              <div className="space-y-2">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="border-b border-espresso/5 last:border-0"
                    onMouseEnter={() => {
                      if (window.matchMedia("(hover: hover)").matches) {
                        setActiveIndex(index);
                      }
                    }}
                    onMouseLeave={() => {
                      if (window.matchMedia("(hover: hover)").matches) {
                        setActiveIndex(null);
                      }
                    }}
                  >
                    <button
                      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                      className="w-full py-6 flex justify-between items-center text-left group"
                    >
                      <span className={`text-lg transition-all duration-300 ${activeIndex === index ? "text-gold translate-x-2" : "text-espresso/80 group-hover:text-espresso"}`}>
                        {faq.question}
                      </span>
                      <div className="relative flex items-center justify-center w-6 h-6">
                        <motion.div
                          animate={{ rotate: activeIndex === index ? 90 : 0, opacity: activeIndex === index ? 0 : 1 }}
                        >
                          <Plus size={18} className="text-espresso/30" />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, rotate: -90 }}
                          animate={{ rotate: activeIndex === index ? 0 : -90, opacity: activeIndex === index ? 1 : 0 }}
                          className="absolute"
                        >
                          <Minus size={18} className="text-gold" />
                        </motion.div>
                      </div>
                    </button>
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, y: -10 }}
                          animate={{ height: "auto", opacity: 1, y: 0 }}
                          exit={{ height: 0, opacity: 0, y: -10 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-8 text-espresso/60 leading-relaxed max-w-xl font-light">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer / CTA */}
            <div className="p-8 md:p-12 bg-espresso/5 border-t border-espresso/5">
              <p className="text-espresso/60 text-sm mb-6">Still have more questions?</p>
              <button 
                onClick={() => {
                  closeModal();
                  setTimeout(() => openModal("inquiry"), 300);
                }}
                className="w-full py-4 bg-espresso text-linen text-xs uppercase tracking-[0.3em] font-bold rounded-lg hover:bg-gold transition-all duration-500 shadow-xl"
              >
                GET A FREE CONSULTATION
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
