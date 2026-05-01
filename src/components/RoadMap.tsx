"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const milestones = [
  {
    title: "Keyword Dominance",
    description: "Identifying the high-value territory where your brand belongs.",
    detail: "We perform deep-dive analysis into the search patterns of the elite, uncovering the precise phrases that drive qualified luxury traffic."
  },
  {
    title: "Authority Building",
    description: "Strengthening the digital foundations of your domain.",
    detail: "Through high-end content and strategic networking, we establish your brand as the undisputed authority in its niche."
  },
  {
    title: "Page 1 Rank",
    description: "Achieving premium visibility where it matters most.",
    detail: "Your brand ascends to the first page, capturing the attention of those who value excellence above all else."
  },
  {
    title: "Sustained Growth",
    description: "Maintaining the lead in the luxury market.",
    detail: "The journey doesn't end at the top. We continuously refine and adapt to ensure your dominance remains unchallenged."
  },
  {
    title: "Market Expansion",
    description: "Scaling dominance across new territories and verticals.",
    detail: "Once the core is secured, we broaden your reach, identifying adjacent high-value niches to ensure total market saturation."
  },
  {
    title: "Digital Legacy",
    description: "Cementing your brand as a permanent fixture of excellence.",
    detail: "We focus on long-term authority that transcends trends, ensuring your brand remains the gold standard for decades to come."
  }
];

export const RoadMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax transforms for the background numbers
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="roadmap" ref={containerRef} className="py-40 px-6 bg-linen relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-40">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-4xl md:text-6xl text-espresso tracking-tight"
          >
            The Path to Dominance
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-sm uppercase tracking-[0.4em] text-espresso/40"
          >
            A Strategic Journey to the Top
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line (Static Track) */}
          <div className="absolute left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-px bg-espresso/5 hidden md:block" />
          
          {/* Liquid Path Animation (Glowing flowing line) */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-1/2 -translate-x-[1px] top-0 bottom-0 w-[2px] hidden md:block"
          >
            <div className="w-full h-full bg-gradient-to-b from-[#996515] via-[#996515] to-transparent relative">
              {/* The "Liquid" Head Glow */}
              <motion.div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#996515] blur-sm rounded-full opacity-50"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <div className="space-y-48 relative z-10">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const stepNumber = index + 1;
              
              return (
                <div key={index} className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center relative">
                  {/* Background Parallax Number */}
                  <motion.div 
                    style={{ y: yParallax }}
                    className={`absolute top-0 opacity-[0.03] pointer-events-none hidden md:block ${isEven ? 'left-0' : 'right-0'}`}
                  >
                    <span className="font-serif text-[200px] leading-none text-espresso select-none">
                      0{stepNumber}
                    </span>
                  </motion.div>

                  {/* Content (Left on odd, Right on even) */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className={`px-8 text-center relative z-10 ${isEven ? 'md:order-3 md:text-left' : 'md:order-1 md:text-right'}`}
                  >
                    <span className="text-xs font-bold tracking-[0.3em] text-[#996515] uppercase mb-4 block">
                      Step 0{stepNumber}
                    </span>
                    <h3 className="font-serif text-3xl text-espresso mb-4">
                      {milestone.title}
                    </h3>
                    <p className="text-espresso font-medium mb-4">
                      {milestone.description}
                    </p>
                    <p className="text-sm text-espresso/60 leading-relaxed max-w-md mx-auto md:mx-0">
                      {milestone.detail}
                    </p>
                  </motion.div>

                  {/* Circle Indicator (Center) */}
                  <div className="md:order-2 flex items-center justify-center my-8 md:my-0 w-12 h-12 relative">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                      className="w-4 h-4 rounded-full bg-[#996515] shadow-[0_0_15px_rgba(153,101,21,0.6)] z-20"
                    />
                  </div>

                  {/* Spacer (Right on odd, Left on even) */}
                  <div className={`hidden md:block ${isEven ? 'md:order-1' : 'md:order-3'}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#996515]/5 blur-[150px] rounded-full -z-10" />
    </section>
  );
};
