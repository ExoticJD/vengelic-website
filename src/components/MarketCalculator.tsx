"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, TrendingUp, Target, ChevronRight, RefreshCcw, Sparkles } from "lucide-react";
import { useModal } from "@/lib/ModalContext";

const industries = [
  { id: "legal", name: "Legal & Professional", multiplier: 1.8 },
  { id: "medical", name: "Medical & Health", multiplier: 1.5 },
  { id: "realestate", name: "Real Estate & Estates", multiplier: 1.6 },
  { id: "luxury", name: "Luxury Goods & Retail", multiplier: 2.1 },
];

export const MarketCalculator = () => {
  const [step, setStep] = useState(1);
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);
  const [currentRevenue, setCurrentRevenue] = useState(50000);
  const [isCalculating, setIsCalculating] = useState(false);
  const { openModal } = useModal();

  const calculatePotential = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setStep(3);
      setIsCalculating(false);
    }, 2000);
  };

  const reset = () => {
    setStep(1);
    setIsCalculating(false);
  };

  const potentialGrowth = Math.floor(currentRevenue * selectedIndustry.multiplier);

  return (
    <section className="py-32 px-6 bg-linen relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl text-espresso tracking-tight">
            Analyze Your <span className="italic text-gold">Market Potential</span>
          </h2>
          <p className="text-espresso/40 uppercase tracking-widest text-xs font-medium">Uncover the gap between current reach and market dominance</p>
        </div>

        <motion.div
          layout
          className="bg-espresso/5 backdrop-blur-sm border border-espresso/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex items-center space-x-3 text-gold">
                  <BarChart3 size={20} />
                  <span className="text-xs uppercase tracking-[0.3em] font-bold">Step 01: Industry Context</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {industries.map((ind) => (
                    <button
                      key={ind.id}
                      onClick={() => setSelectedIndustry(ind)}
                      className={`p-6 text-left rounded-xl border transition-all duration-300 ${selectedIndustry.id === ind.id
                        ? "bg-espresso text-linen border-espresso shadow-lg"
                        : "bg-white/50 text-[#432616] border-espresso/10 hover:border-gold/30"
                        }`}
                    >
                      <p className="font-serif text-lg">{ind.name}</p>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="w-full py-4 bg-espresso text-linen rounded-xl flex items-center justify-center space-x-2 hover:bg-espresso/90 transition-all uppercase tracking-widest text-sm font-bold"
                >
                  <span>Next: Market Scale</span>
                  <ChevronRight size={18} />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-12"
              >
                <div className="flex items-center space-x-3 text-gold">
                  <TrendingUp size={20} />
                  <span className="text-xs uppercase tracking-[0.3em] font-bold">Step 02: Revenue Analysis</span>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <label className="text-espresso/60 uppercase tracking-widest text-xs font-bold">Current Monthly Revenue</label>
                    <span className="font-serif text-3xl text-espresso">${currentRevenue.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="500000"
                    step="5000"
                    value={currentRevenue}
                    onChange={(e) => setCurrentRevenue(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-espresso/10 rounded-lg appearance-none cursor-pointer accent-gold"
                  />
                  <div className="flex justify-between text-[10px] uppercase tracking-widest text-espresso/30 font-bold">
                    <span>$10,000</span>
                    <span>$500,000+</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 py-4 border border-espresso/20 text-espresso rounded-xl uppercase tracking-widest text-sm font-bold hover:bg-espresso/5 transition-all"
                  >
                    Back
                  </button>
                  <button
                    onClick={calculatePotential}
                    disabled={isCalculating}
                    className="flex-[2] py-4 bg-espresso text-linen rounded-xl flex items-center justify-center space-x-2 hover:bg-espresso/90 transition-all uppercase tracking-widest text-sm font-bold disabled:opacity-50"
                  >
                    {isCalculating ? (
                      <RefreshCcw size={18} className="animate-spin" />
                    ) : (
                      <>
                        <span>Generate Analysis</span>
                        <Target size={18} />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-8 text-center py-4"
              >
                <div className="w-20 h-20 bg-gold/20 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target size={40} />
                </div>
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.4em] text-espresso/40">Market Authority Analysis</span>
                  <h3 className="font-serif text-3xl md:text-5xl text-espresso leading-tight">
                    Your Unclaimed Potential: <br />
                    <span className="text-gold italic">${potentialGrowth.toLocaleString()} / mo</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <div className="p-6 bg-espresso rounded-2xl border border-espresso/5 shadow-inner">
                    <p className="text-[10px] uppercase tracking-widest text-linen/60 mb-2 font-bold">Authority Gap</p>
                    <p className="font-serif text-2xl text-linen">High</p>
                  </div>
                  <div className="p-6 bg-espresso rounded-2xl border border-espresso/5 shadow-inner">
                    <p className="text-[10px] uppercase tracking-widest text-linen/60 mb-2 font-bold">Market Capture</p>
                    <p className="font-serif text-2xl text-linen">12%</p>
                  </div>
                  <div className="p-6 bg-espresso rounded-2xl border border-espresso/5 shadow-inner">
                    <p className="text-[10px] uppercase tracking-widest text-linen/60 mb-2 font-bold">Growth Vector</p>
                    <p className="font-serif text-2xl text-linen">Aggressive</p>
                  </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <button
                    onClick={reset}
                    className="flex-1 py-4 border border-espresso/20 text-espresso rounded-xl uppercase tracking-widest text-sm font-bold hover:bg-espresso/5 transition-all"
                  >
                    New Analysis
                  </button>
                  <button
                    className="flex-[2] py-4 bg-espresso text-linen rounded-xl flex items-center justify-center space-x-2 hover:bg-espresso/90 transition-all uppercase tracking-widest text-sm font-bold shadow-xl"
                    onClick={() => openModal("inquiry")}
                  >
                    <span>Claim your Potential</span>
                    <Sparkles size={18} className="ml-2" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
