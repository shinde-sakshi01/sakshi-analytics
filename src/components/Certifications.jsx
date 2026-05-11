import { motion } from "framer-motion";
import { certifications, education } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import SectionWrapper from "../utils/SectionWrapper";

const CertCard = ({ cert, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    whileHover={{ y: -6 }}
    className="glass rounded-2xl p-6 relative overflow-hidden group border border-white/5 hover:border-white/15 transition-all duration-300"
  >
    {/* Glow */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
      style={{ background: `radial-gradient(circle at 30% 20%, ${cert.color}15 0%, transparent 60%)` }}
    />
    {/* Top line */}
    <div
      className="absolute top-0 left-0 right-0 h-px"
      style={{ background: `linear-gradient(90deg, transparent, ${cert.color}60, transparent)` }}
    />

    <div className="flex items-start gap-4">
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-lg"
        style={{ background: `${cert.color}20`, border: `1px solid ${cert.color}40` }}
      >
        {cert.icon}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3
            className="text-white font-bold text-base leading-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {cert.title}
          </h3>
          <span
            className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ background: `${cert.color}20`, color: cert.color, border: `1px solid ${cert.color}40` }}
          >
            {cert.year}
          </span>
        </div>

        <p
          className="text-sm font-medium mb-3"
          style={{ color: cert.color }}
        >
          {cert.provider}
        </p>

        <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>

        {/* Badge */}
        <div className="mt-4 flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: cert.color }}
          />
          <span className="text-xs text-gray-500">Verified Certificate</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const Certifications = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">
        Achievements
      </p>
      <h2
        className="text-white font-bold text-4xl sm:text-5xl"
        style={{ fontFamily: "Syne, sans-serif" }}
      >
        Certifications
      </h2>
    </motion.div>

    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
      {certifications.map((cert, i) => (
        <CertCard key={cert.title} cert={cert} index={i} />
      ))}
    </div>

    {/* Education mini section */}
    <motion.div
      variants={fadeIn("up", "tween", 0.4, 0.8)}
      className="mt-12"
    >
      <h3
        className="text-white font-bold text-2xl mb-6 flex items-center gap-3"
        style={{ fontFamily: "Syne, sans-serif" }}
      >
        <span className="text-2xl">🎓</span> Education Timeline
      </h3>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-transparent" />

        <div className="flex flex-col gap-6 pl-14">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              variants={fadeIn("right", "tween", 0.1 * i, 0.6)}
              className="relative glass rounded-2xl p-5 hover:border-violet-500/30 transition-all duration-300"
            >
              {/* Timeline dot */}
              <div className="absolute -left-9 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 shadow-lg shadow-violet-500/40 border-2 border-primary" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4
                    className="text-white font-semibold text-base"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {edu.title}
                  </h4>
                  <p className="text-gray-400 text-sm mt-1">{edu.institution}</p>
                </div>
                <span className="shrink-0 text-xs font-medium px-2.5 py-1 rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  {edu.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>

    {/* Achievement stats bar */}
    <motion.div
      variants={fadeIn("up", "tween", 0.5, 0.8)}
      className="mt-12 glass rounded-2xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center"
    >
      {[
        { value: "2", label: "Certifications", icon: "🏆" },
        { value: "3+", label: "Projects Built", icon: "💡" },
        { value: "248", label: "Records Analysed", icon: "📊" },
        { value: "5+", label: "Tools Mastered", icon: "🛠️" },
      ].map((stat) => (
        <div key={stat.label} className="flex flex-col items-center gap-1">
          <span className="text-2xl">{stat.icon}</span>
          <span
            className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {stat.value}
          </span>
          <span className="text-gray-500 text-xs">{stat.label}</span>
        </div>
      ))}
    </motion.div>
  </>
);

export default SectionWrapper(Certifications, "certifications");
