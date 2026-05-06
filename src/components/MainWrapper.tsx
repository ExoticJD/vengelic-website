"use client";

import React from "react";
import { motion } from "framer-motion";
import { useModal } from "@/lib/ModalContext";

export const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, modalType } = useModal();
  
  // Depth Recede effect only for FAQ modal as requested, or generally for premium feel?
  // I'll apply it generally for a premium feel when any modal is open.
  const isFaq = modalType === "faq";

  return (
    <motion.div
      animate={{
        scale: isOpen ? 0.95 : 1,
        borderRadius: isOpen ? "2rem" : "0rem",
        x: isOpen && isFaq ? "-10%" : "0%",
        filter: isOpen ? "brightness(0.8) blur(2px)" : "brightness(1) blur(0px)",
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="flex-grow flex flex-col relative z-0 origin-right bg-background"
    >
      {children}
    </motion.div>
  );
};
