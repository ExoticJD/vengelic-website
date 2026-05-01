"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const BrandIntegration = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [loopKey, setLoopKey] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    // Restart the entire story animation every 12 seconds
    const interval = setInterval(() => {
      setLoopKey(prev => prev + 1);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return <div className="relative w-full h-[600px]" />;

  const otherBusinesses = [
    { top: 40, left: 80, scale: 0.5 },
    { top: 60, left: 280, scale: 0.6 },
    { top: 220, left: 40, scale: 0.45 },
    { top: 260, left: 320, scale: 0.55 },
    { top: 120, left: 340, scale: 0.4 },
  ];

  const customers = [
    { startX: -20, startY: 40, endX: 130, endY: 140, delay: 2.5 },
    { startX: 420, startY: 60, endX: 230, endY: 150, delay: 2.8 },
    { startX: -30, startY: 280, endX: 140, endY: 210, delay: 3.1 },
    { startX: 430, startY: 300, endX: 240, endY: 220, delay: 3.4 },
    { startX: -40, startY: 180, endX: 120, endY: 180, delay: 3.7 },
    { startX: 440, startY: 180, endX: 250, endY: 180, delay: 4.0 },
  ];

  // The custom storefront SVG based on user image
  const StorefrontIcon = ({ width = "60", height = "60", filter = "" }) => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="var(--espresso)" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" filter={filter}>
      <path d="M5 3h14v2H5z" />
      <path d="M5 5L3 11" />
      <path d="M19 5l2 6" />
      <path d="M8.5 5l-1 6" />
      <path d="M12 5v6" />
      <path d="M15.5 5l1 6" />
      <path d="M3 11c0 1.24 1.01 2.25 2.25 2.25s2.25-1.01 2.25-2.25c0 1.24 1.01 2.25 2.25 2.25s2.25-1.01 2.25-2.25c0 1.24 1.01 2.25 2.25 2.25s2.25-1.01 2.25-2.25c0 1.24 1.01 2.25 2.25 2.25s2.25-1.01 2.25-2.25" />
      <path d="M4 13.5v7.5" />
      <path d="M20 13.5v7.5" />
      <path d="M2 21h20" />
      <path d="M6 21v-7h4v7" />
      <path d="M12 14h6v4h-6z" />
    </svg>
  );

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* SVG Definitions for Gradients and Shadows */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C5A059" />
            <stop offset="50%" stopColor="#996515" />
            <stop offset="100%" stopColor="#6B460D" />
          </linearGradient>
          <filter id="premium-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="10" stdDeviation="15" floodColor="rgba(67, 38, 22, 0.3)" />
          </filter>
          <filter id="glow-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="rgba(153, 101, 21, 0.5)" />
          </filter>
        </defs>
      </svg>

      {/* Animation Stage: 400x400 coordinate system - Looping every 12s via key */}
      <motion.div
        key={loopKey}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative w-[400px] h-[400px] scale-90 md:scale-100"
      >

        {/* Map Context: Other small businesses */}
        {otherBusinesses.map((biz, i) => (
          <motion.div
            key={`biz-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }} // Faint map background
            transition={{ duration: 2, delay: i * 0.2 }}
            className="absolute"
            style={{ top: biz.top, left: biz.left, transform: `scale(${biz.scale})` }}
          >
            <StorefrontIcon />
          </motion.div>
        ))}

        {/* Radar Pulses (Spawn every 1.5s) */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`radar-${i}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.5, 3], opacity: [0, 0.3, 0] }}
            transition={{
              delay: 1.5 + (i * 1.5), // Synchronized interval
              duration: 4.5,
              repeat: Infinity,
              repeatDelay: 0,
              ease: "easeOut",
            }}
            className="absolute top-[120px] left-[120px] border-[2px] border-[#996515] rounded-full w-[160px] h-[160px] pointer-events-none"
          />
        ))}

        {/* Target Storefront Icon */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-[160px] left-[160px] z-10"
        >
          <StorefrontIcon width="80" height="80" filter="url(#premium-shadow)" />
        </motion.div>

        {/* Impact Flash */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 2, 3], opacity: [0, 0.8, 0] }}
          transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
          className="absolute top-[184px] left-[184px] w-[32px] h-[32px] bg-[#996515] rounded-full blur-xl pointer-events-none"
        />

        {/* Target Pin */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 120 }}
          transition={{ delay: 1, type: "spring", stiffness: 120, damping: 12 }}
          className="absolute left-[176px] z-20"
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="url(#gold-gradient)" filter="url(#glow-shadow)">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        </motion.div>

        {/* Pulsing Brand Container (VENGELIC + Logo) */}
        <div className="absolute top-[280px] w-full flex flex-col items-center z-30 pointer-events-none">
          {/* Fixed-size wrapper for perfectly stable pulsing */}
          <motion.div
            animate={{
              scale: [1, 1.04, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              willChange: "transform",
              transformOrigin: "center center"
            }}
            className="flex flex-col items-center justify-center w-[300px]"
          >
            <h2
              className="font-serif text-3xl md:text-4xl text-espresso uppercase font-medium tracking-[0.4em] text-center"
              style={{
                paddingLeft: "0.4em", // Properly centers text with tracking
                textShadow: "0px 10px 20px rgba(67, 38, 22, 0.1)"
              }}
            >
              Vengelic
            </h2>

            {/* Vengelic Custom Logo with Spinning Inner Circles */}
            <div className="mt-4 w-16 h-16 relative">
              <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0px 8px 12px rgba(67, 38, 22, 0.15))" }}>
                <circle cx="100" cy="100" r="90" stroke="var(--espresso)" strokeWidth="4" />

                {/* Rotating Inner Group - Explicitly centered on (100, 100) */}
                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "100px 100px" }}
                >
                  <circle cx="100" cy="70" r="25" stroke="var(--espresso)" strokeWidth="4" />
                  <circle cx="70" cy="125" r="25" stroke="var(--espresso)" strokeWidth="4" />
                  <circle cx="130" cy="125" r="25" stroke="var(--espresso)" strokeWidth="4" />
                </motion.g>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Customers converging from all angles */}
        {customers.map((cust, i) => (
          <motion.div
            key={`customer-${i}`}
            initial={{ opacity: 0, x: cust.startX, y: cust.startY }}
            animate={{ opacity: 1, x: cust.endX, y: cust.endY }}
            transition={{ delay: cust.delay, duration: 2, ease: "easeOut" }}
            className="absolute z-10"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--espresso)" filter="url(#premium-shadow)" className="opacity-90">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </motion.div>
        ))}

      </motion.div>
    </div>
  );
};
