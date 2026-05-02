"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence, useInView } from "framer-motion";
import { Search, Globe, Shield, Zap, MapPin, CheckCircle, Wifi, Battery, Signal, BatteryLow, BatteryMedium, BatteryFull } from "lucide-react";

// Sub-component for the 3D Phone Mockup
const PhoneMockup = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const [displayText, setDisplayText] = useState("");
  const [isDoneTyping, setIsDoneTyping] = useState(false);
  const fullText = "Seo marketing agency near me";

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [10, -10]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-10, 10]), { stiffness: 150, damping: 20 });

  useEffect(() => {
    if (!isInView) return;

    let currentText = "";
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        currentText += fullText[i];
        setDisplayText(currentText);
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setIsDoneTyping(true), 500);
      }
    }, 70);

    return () => clearInterval(typingInterval);
  }, [isInView]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const businesses = [
    { name: "Vengelic", rating: "5.0", reviews: "128", primary: true },
    { name: "Apex Strategy Group", rating: "4.2", reviews: "45", primary: false },
    { name: "Summit Digital", rating: "4.0", reviews: "32", primary: false },
    { name: "Horizon Marketing", rating: "4.1", reviews: "28", primary: false },
    { name: "Elite Search Partners", rating: "3.9", reviews: "19", primary: false },
  ];

  const [time, setTime] = useState("");
  const [batteryLevel, setBatteryLevel] = useState(1);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours() % 12 || 12;
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);

    // Battery Logic
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        const updateBattery = () => setBatteryLevel(battery.level);
        updateBattery();
        battery.addEventListener('levelchange', updateBattery);
      });
    }

    return () => clearInterval(interval);
  }, []);

  const CustomBattery = ({ level }: { level: number }) => {
    const percentage = Math.round(level * 100);
    return (
      <div className="flex items-center space-x-0.5">
        <div className="relative w-6 h-3.5 border border-gray-800/30 rounded-[3px] p-[1px] flex items-center">
          <div
            className={`h-full rounded-[1px] ${percentage <= 20 ? 'bg-red-500' : 'bg-gray-800'}`}
            style={{ width: `${percentage}%` }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-[7px] font-extrabold text-white leading-none">
            {percentage}
          </div>
        </div>
        <div className="w-0.5 h-1.5 bg-gray-800/30 rounded-r-[1px]" />
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className="perspective-1000 w-full max-w-[340px] mx-auto lg:mx-0"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative w-[320px] h-[640px] bg-black rounded-[3.5rem] p-[8px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[2px] border-white/10 overflow-hidden"
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-30" />

        {/* Status Bar */}
        <div className="absolute top-0 left-0 w-full px-7 pt-4 flex justify-between items-center z-40">
          <div className="text-[12px] font-bold text-gray-800 ml-4">{time}</div>
          <div className="flex items-center space-x-1.5 text-gray-800">
            <Signal size={14} />
            <Wifi size={14} />
            <CustomBattery level={batteryLevel} />
          </div>
        </div>

        {/* Screen Content */}
        <div className="w-full h-full bg-[#f8f9fa] rounded-[3rem] overflow-hidden relative flex flex-col items-center">

          {/* Static Header */}
          <div className="w-full bg-[#f8f9fa] pt-16 pb-4 px-4 flex flex-col items-center border-b border-gray-100/50 sticky top-0 z-20">
            {/* Google Logo */}
            <div className="flex items-center space-x-0.5 mb-6">
              <span className="text-[#4285F4] font-bold text-3xl">G</span>
              <span className="text-[#EA4335] font-bold text-3xl">o</span>
              <span className="text-[#FBBC05] font-bold text-3xl">o</span>
              <span className="text-[#4285F4] font-bold text-3xl">g</span>
              <span className="text-[#34A853] font-bold text-3xl">l</span>
              <span className="text-[#EA4335] font-bold text-3xl">e</span>
            </div>

            {/* Search Bar */}
            <div className="w-full h-12 bg-white rounded-full flex items-center px-5 shadow-sm border border-gray-100 overflow-hidden">
              <div className="text-gray-800 text-xs font-medium flex-grow flex items-center h-full whitespace-nowrap overflow-hidden">
                {displayText}
                {!isDoneTyping && (
                  <motion.div
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-0.5 h-4 bg-blue-500 ml-0.5"
                  />
                )}
              </div>
              <Search size={16} className="text-gray-300" />
            </div>
          </div>

          {/* Scrollable Area */}
          <AnimatePresence>
            {isDoneTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full flex-1 overflow-y-auto pt-4 px-4 space-y-4 scrollbar-hide pb-20"
              >
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Local Results</p>

                {/* Business Cards */}
                {businesses.map((biz, idx) => (
                  <motion.div
                    key={biz.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`${biz.primary ? 'bg-white shadow-lg border-gray-100' : 'bg-white/60 opacity-80 border-gray-100/50'} rounded-2xl p-4 border`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h4 className={`font-medium ${biz.primary ? 'text-gray-700 text-base' : 'text-gray-500 text-sm'}`}>{biz.name}</h4>
                        <div className="flex items-center space-x-1 my-0.5">
                          <span className="text-[10px] font-medium text-gray-500">{biz.rating}</span>
                          <div className={`flex ${biz.primary ? 'text-gold' : 'text-gold/40'}`}>
                            {[1, 2, 3, 4, 5].map((s) => (
                              <svg key={s} className="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-[10px] text-gray-400 font-light">({biz.reviews})</span>
                        </div>
                      </div>
                      <div className="flex space-x-1.5">
                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center ${biz.primary ? 'border-blue-100 text-blue-500' : 'border-blue-50 text-blue-300'}`}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center ${biz.primary ? 'border-blue-100 text-blue-500' : 'border-blue-50 text-blue-300'}`}>
                          <Globe size={16} strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400/80 text-[10px]">Digital Strategy · SEO</p>
                    <p className="text-[10px] mt-0.5">
                      <span className="text-green-600 font-medium">Open 24 hours</span>
                      <span className="text-gray-400"> · Locally Managed</span>
                    </p>
                  </motion.div>
                ))}

                {/* Organic Result at the Bottom */}
                <a
                  href="https://vengelic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block pt-6 border-t border-gray-100 hover:bg-blue-50/50 transition-colors rounded-xl p-2 -mx-2"
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-6 h-6 bg-espresso rounded-full flex items-center justify-center text-[10px] text-linen font-bold">V</div>
                    <div className="text-[10px] text-gray-500 italic">vengelic.com</div>
                  </div>
                  <h4 className="text-[#1a0dab] font-medium text-base mb-1 leading-tight hover:underline">Vengelic | Elite SEO Agency & Search Architects</h4>
                  <p className="text-[11px] text-gray-600 leading-snug">Command your market with bespoke search strategies. Vengelic crafts digital legacies through precision, authority, and unchallenged search dominance.</p>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/20 rounded-full" />
      </motion.div>

      {/* Decorative Glow */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 blur-[60px] rounded-full -z-10" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/10 blur-[60px] rounded-full -z-10" />
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className="glass-card p-8 rounded-2xl glow-hover relative overflow-hidden group"
  >
    <div className="relative z-10">
      <div className="w-12 h-12 bg-espresso text-linen rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
        <Icon size={24} />
      </div>
      <h3 className="font-serif text-2xl text-espresso mb-4 tracking-tight">{title}</h3>
      <p className="text-sm text-espresso/60 leading-relaxed font-light">
        {description}
      </p>
    </div>

    {/* Subtle Background Glow */}
    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gold/5 blur-[40px] rounded-full group-hover:bg-gold/10 transition-colors duration-700" />
  </motion.div>
);

export const RoadMap = () => {
  return (
    <section id="roadmap" className="py-40 px-6 bg-linen relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Side: Mockup */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <PhoneMockup />
          </div>

          {/* Right Side: Content & Features */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-12">
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs uppercase tracking-[0.4em] text-espresso/40 block"
              >
                The Execution Framework
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="font-serif text-4xl md:text-6xl text-espresso tracking-tight leading-[1.1]"
              >
                The Art of <br />
                <span className="italic text-gold">Dominating</span> Search.
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <FeatureCard 
                  icon={MapPin}
                  title="Complete Google Business Profile Optimization."
                  description="We rebuild your entire Google Business Profile from the ground up to match exactly what Google wants to see."
                  delay={0.2}
                />
              </div>
              <FeatureCard 
                icon={Shield}
                title="Local Authority Building."
                description="We establish your business as the dominant local authority through citations, content, and signals Google actually cares."
                delay={0.4}
              />
              <FeatureCard 
                icon={Globe}
                title="Custom Website Design & Development."
                description="We build your digital presence to turn website visitors into potential clients."
                delay={0.6}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Large Decorative Text (Background) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 pointer-events-none select-none opacity-[0.02] -z-10">
        <span className="font-serif text-[400px] text-espresso leading-none whitespace-nowrap">
          VENGELIC AUTHORITY
        </span>
      </div>
    </section>
  );
};
