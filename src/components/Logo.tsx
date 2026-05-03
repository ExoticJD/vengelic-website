"use client";

import React from "react";

export const Logo = ({ className = "w-8 h-8", color = "var(--espresso)" }: { className?: string, color?: string }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="90" stroke={color} strokeWidth="6" />
        <circle cx="100" cy="70" r="25" stroke={color} strokeWidth="6" />
        <circle cx="70" cy="125" r="25" stroke={color} strokeWidth="6" />
        <circle cx="130" cy="125" r="25" stroke={color} strokeWidth="6" />
      </svg>
    </div>
  );
};
