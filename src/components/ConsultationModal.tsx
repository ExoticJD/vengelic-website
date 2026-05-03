"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useModal } from "@/lib/ModalContext";
import { ContactForm } from "./ContactForm";

export const ConsultationModal = () => {
  const { isOpen, closeModal, modalType } = useModal();

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
              {modalType === "inquiry" ? (
                <>
                  <div className="space-y-4">
                    <span className="text-xs uppercase tracking-[0.4em] text-espresso/40 block">Step One</span>
                    <h2 className="font-serif text-3xl md:text-4xl text-espresso tracking-tight">
                      Free Consultation
                    </h2>
                    <p className="text-espresso/60 max-w-md">
                      Provide your details below, and our lead strategist will reach out within 24 hours.
                    </p>
                  </div>

                  <ContactForm />
                </>
              ) : (
                <div className="space-y-6">
                  <h2 className="font-serif text-3xl md:text-4xl text-espresso tracking-tight capitalize">
                    {modalType === "about" ? "About Vengelic" : modalType}
                  </h2>
                  <div className="text-espresso/70 space-y-4 leading-relaxed">
                    {modalType === "about" ? (
                      <>
                        <p>
                          Vengelic is a boutique digital partner for businesses that demand authority and results. We bridge the gap between high-end aesthetics and aggressive search performance.
                        </p>
                        <p>
                          Our philosophy is simple: search dominance isn't just about traffic—it's about market capture. We build digital assets that position our clients as the undisputed leaders in their space.
                        </p>
                      </>
                    ) : modalType === "privacy" ? (
                      <div className="space-y-4 text-sm">
                        <p>At Vengelic, we value your privacy as much as your market authority. We only collect information necessary to provide our services and communicate effectively with you.</p>
                        <p><strong>Data Usage:</strong> Your details are never sold or shared with third parties for marketing purposes. We use secure protocols to protect your business data.</p>
                        <p><strong>Cookies:</strong> We use minimal cookies to enhance your experience and analyze site performance.</p>
                      </div>
                    ) : modalType === "terms" ? (
                      <div className="space-y-4 text-sm">
                        <p>By engaging with Vengelic, you agree to our professional standards and mutual respect for intellectual property.</p>
                        <p><strong>Engagement:</strong> All consultations and strategies provided are bespoke to your business. Results may vary based on market conditions and implementation.</p>
                        <p><strong>Liability:</strong> While we strive for market dominance, we are not liable for changes in search engine algorithms or third-party platform policies.</p>
                      </div>
                    ) : (
                      <p>Content is being finalized.</p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Decorative background element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-espresso/5 blur-3xl rounded-full" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
