"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useModal } from "@/lib/ModalContext";

export const MobileCTA = () => {
  const { openModal } = useModal();
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      onClick={openModal}
      className="fixed bottom-8 left-8 z-50 md:hidden w-14 h-14 bg-espresso text-linen rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
      aria-label="Contact support"
    >
      <MessageSquare size={24} strokeWidth={1.5} />
    </motion.button>
  );
};
