import React from "react";
import Link from "next/link";
import { Camera, MessageCircle, Send, Briefcase } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-linen border-t border-espresso/10 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h2 className="font-serif text-xl text-espresso tracking-tight">VENGELIC</h2>
          <p className="text-xs uppercase tracking-[0.2em] text-espresso/40">
            © 2024 Vengelic Authority. All Rights Reserved.
          </p>
        </div>

        <div className="flex space-x-8">
          {[
            { icon: Camera, href: "#" },
            { icon: MessageCircle, href: "#" },
            { icon: Send, href: "#" },
            { icon: Briefcase, href: "#" },
          ].map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className="text-espresso/60 hover:text-espresso transition-colors duration-300"
            >
              <social.icon size={20} strokeWidth={1.5} />
            </Link>
          ))}
        </div>

        <div className="flex space-x-12">
          {["Privacy", "Terms"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-widest text-espresso/60 hover:text-espresso transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
