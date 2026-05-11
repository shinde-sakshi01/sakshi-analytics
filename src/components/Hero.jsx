import { motion } from "framer-motion";
import DataSphereCanvas from "./canvas/DataSphere";
import StarsCanvas from "./canvas/Stars";
import { about } from "../constants";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <StarsCanvas />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-16 h-full flex flex-col lg:flex-row items-center gap-10 pt-24">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center z-10">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
            <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">
              Data Analyst
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-7xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Hi, I'm{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Sakshi
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full origin-left"
              />
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-xl mb-8"
          >
            Transforming complex datasets into{" "}
            <span className="text-cyan-400 font-medium">actionable insights</span>{" "}
            through data visualization, analytics, and dashboards.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-8 mb-10"
          >
            {[
              { value: "3+", label: "Projects" },
              { value: "5+", label: "Tools" },
              { value: "2", label: "Certifications" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 hover:border-white/20 transition-all duration-300"
            >
              Let's Connect →
            </a>
            <a
              href="mailto:sakshishinde813@gmail.com"
              className="px-6 py-3 rounded-xl border border-cyan-500/30 text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              ↓ Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex gap-4 mt-8"
          >
            {[
              { href: about.github, label: "GitHub", icon: "⌨️" },
              { href: about.linkedin, label: "LinkedIn", icon: "💼" },
              { href: `mailto:${about.email}`, label: "Email", icon: "✉️" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-colors duration-300"
              >
                <span>{social.icon}</span>
                <span>{social.label}</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: 3D Sphere */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="flex-1 w-full h-[400px] lg:h-[600px] relative"
        >
          {/* Glow ring */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 rounded-full border border-violet-500/20 animate-ping" style={{ animationDuration: '3s' }} />
          </div>
          <DataSphereCanvas />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-600 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-1 rounded-full bg-violet-400"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
