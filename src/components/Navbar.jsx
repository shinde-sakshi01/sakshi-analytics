import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActive(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050816]/90 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => { setActive(""); window.scrollTo(0,0); }}
          className="flex items-center gap-3 group"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-sm font-bold font-['Syne'] group-hover:scale-110 transition-transform">
            SS
          </div>
          <span className="font-['Syne'] font-bold text-white text-lg tracking-wide hidden sm:block">
            Sakshi<span className="text-cyan-400">.</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={`relative font-['DM_Sans'] text-sm font-medium tracking-wide transition-colors duration-300 ${
                  active === link.id ? "text-cyan-400" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.title}
                {active === link.id && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 text-sm font-['Syne'] font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
          >
            Resume ↓
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0a0a1a]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-['DM_Sans'] font-medium ${
                    active === link.id ? "text-cyan-400" : "text-gray-400"
                  }`}
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>
          <a
            href="/resume.pdf"
            download
            className="mt-4 inline-block px-4 py-2 text-sm font-['Syne'] font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
          >
            Download Resume
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
