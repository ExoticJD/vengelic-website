"use client";

import React, { createContext, useContext, useState } from "react";

export type ModalType = "inquiry" | "about" | "privacy" | "terms";

interface ModalContextType {
  isOpen: boolean;
  modalType: ModalType;
  openModal: (type?: ModalType | React.MouseEvent) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>("inquiry");

  const openModal = (type?: ModalType | React.MouseEvent) => {
    if (typeof type === "string") {
      setModalType(type as ModalType);
    } else {
      setModalType("inquiry");
    }
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, modalType, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
