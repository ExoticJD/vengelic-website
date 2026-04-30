"use client";

import React from "react";
import { motion } from "framer-motion";

export const AscentAnimation = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      <svg
        viewBox="0 0 400 400"
        className="w-full max-w-md h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Abstract Lines */}
        {[...Array(5)].map((_, i) => (
          <motion.path
            key={i}
            d={`M ${50 + i * 40} 350 L ${150 + i * 40} ${100 - i * 10}`}
            stroke="var(--espresso)"
            strokeWidth="0.5"
            strokeOpacity={0.2 + i * 0.15}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}

        {/* Floating Geometric Elements */}
        <motion.circle
          cx="200"
          cy="200"
          r="80"
          stroke="var(--espresso)"
          strokeWidth="0.25"
          strokeDasharray="5 5"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <motion.rect
          x="150"
          y="150"
          width="100"
          height="100"
          stroke="var(--espresso)"
          strokeWidth="0.5"
          strokeOpacity="0.1"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 0.3 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Ambient Gradient Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-espresso/5 blur-[100px] rounded-full" />
    </div>
  );
};
