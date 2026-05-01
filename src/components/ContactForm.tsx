"use client";

import React from "react";

export const ContactForm = () => {
  return (
    <form className="space-y-8">
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
          type="url"
          className="w-full bg-transparent border-b border-espresso/20 py-3 px-1 focus:border-espresso outline-none transition-colors text-espresso"
          placeholder="https://aether.com"
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
        type="submit"
        className="w-full py-5 bg-espresso text-linen text-sm uppercase tracking-[0.2em] hover:bg-espresso/90 transition-all duration-300 rounded-md shadow-2xl"
      >
        Submit Inquiry
      </button>
    </form>
  );
};
