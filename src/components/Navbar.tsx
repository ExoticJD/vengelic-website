"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/lib/ModalContext";
import { useLocation } from "@/hooks/useLocation";
import { MapPin, Moon, Sun, Menu, X as CloseIcon } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";
import { Logo } from "./Logo";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useModal();
  const { city, loading } = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { label: "Services", href: "#roadmap" },
    { label: "Proof", href: "#proof" },
    { label: "FAQ", onClick: () => openModal("faq") },
  ];

  const handleMobileLinkClick = (item: any) => {
    setIsMobileMenuOpen(false);
    if (item.onClick) {
      item.onClick();
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-linen py-4 border-b border-espresso/10" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <Link href="/" className="group flex items-center space-x-3">
            <Logo className="w-8 h-8" />
            <h1 className="font-serif text-2xl tracking-tight text-espresso leading-none">
              VENGELIC<span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">.</span>
            </h1>
          </Link>
          <div className="flex items-center space-x-1 mt-1 opacity-0 animate-fade-in transition-opacity duration-1000" style={{ animationFillMode: "forwards" }}>
            <MapPin size={10} className="text-gold" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-espresso/40">
              Serving {loading ? "..." : city}
            </span>
          </div>
        </div>

        {/* Web Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((item) => (
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm uppercase tracking-widest text-espresso/60 hover:text-espresso transition-colors duration-300"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={item.onClick}
                className="text-sm uppercase tracking-widest text-espresso/60 hover:text-espresso transition-colors duration-300"
              >
                {item.label}
              </button>
            )
          ))}
          
          <div className="flex items-center space-x-6">
            <button
              onClick={toggleTheme}
              className="text-espresso/60 hover:text-espresso transition-colors p-2 rounded-full hover:bg-espresso/5"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <button 
              onClick={() => openModal("inquiry")}
              className="px-6 py-2 border border-espresso text-sm uppercase tracking-widest hover:bg-espresso hover:text-linen transition-all duration-500 rounded-md glow-hover"
            >
              Consultation
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Menu Trigger */}
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden flex flex-col items-end space-y-1.5 p-2 group"
          aria-label="Open Menu"
        >
          <div className="w-8 h-px bg-espresso group-hover:w-6 transition-all duration-300"></div>
          <div className="w-6 h-px bg-espresso group-hover:w-8 transition-all duration-300"></div>
          <div className="w-4 h-px bg-espresso group-hover:w-6 transition-all duration-300"></div>
        </button>

        {/* Mobile Slide-in Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-espresso/20 backdrop-blur-sm z-[60]"
              />
              
              {/* Menu Content */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-[300px] bg-linen z-[70] shadow-[-10px_0_30px_rgba(0,0,0,0.1)] flex flex-col"
              >
                <div className="p-8 flex justify-end">
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-espresso/40 hover:text-espresso transition-colors"
                  >
                    <CloseIcon size={24} />
                  </button>
                </div>

                <div className="flex-1 flex flex-col p-12 space-y-8">
                  {navLinks.map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + idx * 0.1 }}
                    >
                      {item.href ? (
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-2xl font-serif text-espresso hover:text-gold transition-colors"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleMobileLinkClick(item)}
                          className="text-2xl font-serif text-espresso hover:text-gold transition-colors text-left"
                        >
                          {item.label}
                        </button>
                      )}
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="pt-8 space-y-6"
                  >
                    <button
                      onClick={toggleTheme}
                      className="flex items-center space-x-4 text-espresso/60"
                    >
                      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                      <span className="text-sm uppercase tracking-widest">{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
                    </button>
                    
                    <button 
                      onClick={() => handleMobileLinkClick({ onClick: () => openModal("inquiry") })}
                      className="w-full py-4 bg-espresso text-linen text-xs uppercase tracking-[0.2em] font-bold rounded-lg"
                    >
                      Consultation
                    </button>
                  </motion.div>
                </div>
                
                <div className="p-12 border-t border-espresso/5">
                  <div className="flex items-center space-x-2">
                    <MapPin size={12} className="text-gold" />
                    <span className="text-[10px] uppercase tracking-widest text-espresso/40">Serving {city}</span>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
