"use client";

import React from "react";
import { motion } from "framer-motion";

const metrics = [
  { label: "Revenue ROI", value: "140%", sub: "Portfolio Growth" },
  { label: "Market Reach", value: "2.4M", sub: "Annual Impressions" },
  { label: "Search Dominance", value: "85%", sub: "Top 3 Rankings" },
  { label: "Strategic Trust", value: "98%", sub: "Partner Retention" },
];

export const ImpactMetrics = () => {
  return (
    <section className="py-32 px-6 bg-linen border-y border-espresso/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="space-y-2 group"
            >
              <h3 className="font-serif text-5xl md:text-6xl text-espresso tracking-tighter">
                {metric.value}
              </h3>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-espresso font-semibold">
                  {metric.label}
                </p>
                <p className="text-xs text-espresso/40 italic font-light">
                  {metric.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
