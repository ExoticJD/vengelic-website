import React from "react";
import Link from "next/link";

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);


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
            { icon: FacebookIcon, href: "https://www.facebook.com/profile.php?id=61564498508022" },
            { icon: InstagramIcon, href: "https://www.instagram.com/vengelic.official/" },
            { icon: XIcon, href: "https://x.com/Vengelic_" },
            { icon: LinkedInIcon, href: "https://www.linkedin.com/in/vengelic-859a35405/?skipRedirect=true" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-espresso/60 hover:text-espresso transition-colors duration-300 block p-2"
            >
              <social.icon />
            </a>
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
