"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/lib/ModalContext";
import { useLocation } from "@/hooks/useLocation";
import { MapPin } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModal } = useModal();
  const { city, loading } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-linen/80 backdrop-blur-md py-4 border-b border-espresso/10" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <Link href="/" className="group">
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

        {/* Web Links */}
        <div className="hidden md:flex items-center space-x-12">
          {[
            { label: "Road Map", href: "#roadmap" },
            { label: "Proof", href: "#proof" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm uppercase tracking-widest text-espresso/60 hover:text-espresso transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
          <button 
            onClick={openModal}
            className="px-6 py-2 border border-espresso text-sm uppercase tracking-widest hover:bg-espresso hover:text-linen transition-all duration-500 rounded-md glow-hover"
          >
            Inquire
          </button>
        </div>

        {/* Mobile Mini Menu (Placeholder) */}
        <div className="md:hidden">
          <div className="w-6 h-px bg-espresso mb-1.5"></div>
          <div className="w-4 h-px bg-espresso"></div>
        </div>
      </div>
    </nav>
  );
};
