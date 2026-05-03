"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [website, setWebsite] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12 space-y-4"
      >
        <div className="w-16 h-16 bg-espresso text-linen rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-espresso tracking-tight">Application Received</h3>
        <p className="text-espresso/60 max-w-xs mx-auto">Our lead strategist will review your profile and reach out within 24 hours.</p>
      </motion.div>
    );
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-espresso/60 block px-1">Name *</label>
          <input
            required
            type="text"
            className="w-full bg-transparent border-b border-espresso/20 py-3 px-1 focus:border-espresso outline-none transition-colors text-espresso"
            placeholder="Evelyn Harper"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-espresso/60 block px-1">Email *</label>
          <input
            required
            type="email"
            className="w-full bg-transparent border-b border-espresso/20 py-3 px-1 focus:border-espresso outline-none transition-colors text-espresso"
            placeholder="evelyn@aether.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest text-espresso/60 block px-1">Website</label>
        <input
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="w-full bg-transparent border-b border-espresso/20 py-3 px-1 focus:border-espresso outline-none transition-colors text-espresso"
          placeholder="vengelic.com"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest text-espresso/60 block px-1">Message</label>
        <textarea
          rows={4}
          className="w-full bg-transparent border-b border-espresso/20 py-3 px-1 focus:border-espresso outline-none transition-colors text-espresso resize-none"
          placeholder="Tell us about your brand's vision..."
        />
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className="w-full py-5 bg-espresso text-linen text-sm uppercase tracking-[0.2em] hover:bg-espresso/90 transition-all duration-300 rounded-md shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" size={18} />
            <span>Application Processing...</span>
          </>
        ) : (
          <span>Submit Application</span>
        )}
      </button>
    </form>
  );
};
