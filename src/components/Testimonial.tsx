"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const testimonials = [
  {
    quote: "Vengelic didn't just increase our traffic; they redefined our digital presence with a level of precision we didn't think was possible in SEO.",
    author: "Julian Thorne",
    role: "Director of Strategy, Aether Global"
  },
  {
    quote: "The results were immediate and sustained. Our organic lead generation has tripled since partnering with the Vengelic team.",
    author: "Marcus Vane",
    role: "CEO, Obsidian Group"
  },
  {
    quote: "Precision, authority, and growth. They understand the nuances of luxury SEO better than any agency we've ever worked with.",
    author: "Elena Rossi",
    role: "Creative Director, Valerius & Co."
  },
  {
    quote: "The attention to detail and strategic foresight Vengelic brings to the table is unmatched. They are truly the architects of search dominance.",
    author: "Sophia Laurent",
    role: "Marketing Director, L'Avenir Jewels"
  },
  {
    quote: "Vengelic transformed our digital footprint. We now rank for keywords we thought were untouchable, bringing in a caliber of clientele we've never seen before.",
    author: "Alexander Sterling",
    role: "Founder, Sterling Estates"
  },
  {
    quote: "Their approach is as much an art as it is a science. Vengelic doesn't just rank pages; they build legacies in the digital space.",
    author: "Isabella Thorne",
    role: "CMO, Horizon Yachts"
  }
];

const TestimonialCard = ({ quote, author, role }: { quote: string, author: string, role: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.05, z: 50 }}
      className="flex-shrink-0 w-[350px] md:w-[450px] p-8 bg-linen border border-espresso/10 rounded-xl shadow-sm hover:shadow-2xl hover:border-gold/30 transition-all duration-500 group cursor-default"
    >
      <div className="space-y-6" style={{ transform: "translateZ(30px)" }}>
        <p className="font-serif text-lg md:text-xl text-espresso/80 leading-relaxed italic">
          "{quote}"
        </p>
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.2em] text-espresso font-bold">{author}</p>
          <p className="text-[10px] uppercase tracking-widest text-espresso/40">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const MarqueeRow = ({ items, direction = "left", speed = 40 }: { items: any[], direction?: "left" | "right", speed?: number }) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div 
      className="flex overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        animate={{ 
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{ 
          duration: speed, 
          repeat: Infinity, 
          ease: "linear",
        }}
        // Use a simpler approach for pausing to ensure smooth resumption
        style={{ 
          display: "flex", 
          gap: "2rem", 
          padding: "3rem 1rem",
          animationPlayState: isPaused ? "paused" : "running"
        }}
        className="flex gap-8"
      >
        {[...items, ...items, ...items].map((item, i) => (
          <TestimonialCard key={i} {...item} />
        ))}
      </motion.div>
    </div>
  );
};

export const Testimonial = () => {
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3, 6);

  return (
    <section className="py-32 bg-linen overflow-hidden relative">
       <div className="max-w-7xl mx-auto px-6 mb-12 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-espresso tracking-tight">
              The Gallery of <span className="italic text-gold">Success</span>
            </h2>
            <p className="text-espresso/40 uppercase tracking-[0.3em] text-[10px] mt-4 font-medium">Unchallenged Authority Across Markets</p>
          </motion.div>
       </div>

       <div className="space-y-0 relative z-10">
          <MarqueeRow items={row1} direction="left" speed={80} />
          <MarqueeRow items={row2} direction="right" speed={70} />
       </div>

       {/* Edge Fades for Seamless Look */}
       <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-linen to-transparent z-20 pointer-events-none" />
       <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-linen to-transparent z-20 pointer-events-none" />
    </section>
  );
};
