"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/lib/ModalContext";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModal } = useModal();

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
        <Link href="/" className="group">
          <h1 className="font-serif text-2xl tracking-tight text-espresso">
            VENGELIC<span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">.</span>
          </h1>
        </Link>

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
            className="px-6 py-2 border border-espresso text-sm uppercase tracking-widest hover:bg-espresso hover:text-linen transition-all duration-500 rounded-md"
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
