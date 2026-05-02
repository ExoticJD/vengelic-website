"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useModal } from "@/lib/ModalContext";
import { ContactForm } from "./ContactForm";

export const ConsultationModal = () => {
  const { isOpen, closeModal } = useModal();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-espresso/40 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-linen p-8 md:p-12 rounded-xl shadow-[0_32px_64px_-16px_rgba(67,38,22,0.3)] overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-8 right-8 text-espresso/40 hover:text-espresso transition-colors"
            >
              <X size={24} />
            </button>

            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.4em] text-espresso/40 block">Step One</span>
                <h2 className="font-serif text-3xl md:text-4xl text-espresso tracking-tight">
                  Secure Your Consultation
                </h2>
                <p className="text-espresso/60 max-w-md">
                  Provide your details below, and our lead strategist will reach out within 24 hours.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Decorative background element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-espresso/5 blur-3xl rounded-full" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
