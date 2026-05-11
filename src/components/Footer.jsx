import { motion } from "framer-motion";
import { about } from "../constants";

const Footer = () => (
  <footer className="relative border-t border-white/5 py-10">
    <div className="max-w-7xl mx-auto px-6 sm:px-16">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-400 flex items-center justify-center text-white font-bold text-sm" style={{ fontFamily: "Syne, sans-serif" }}>
            S
          </div>
          <span className="text-gray-400 text-sm">
            Sakshi Shinde · Data Analyst
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          {[
            { href: `mailto:${about.email}`, label: "Email" },
            { href: about.linkedin, label: "LinkedIn" },
            { href: about.github, label: "GitHub" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-violet-400 text-sm transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-700 text-xs">
          © {new Date().getFullYear()} Sakshi Shinde. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
