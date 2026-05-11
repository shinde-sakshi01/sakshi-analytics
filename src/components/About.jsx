import { motion } from "framer-motion";
import { about, education } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import SectionWrapper from "../utils/SectionWrapper";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">
          Introduction
        </p>
        <h2 className="text-white font-bold text-4xl sm:text-5xl" style={{ fontFamily: 'Syne, sans-serif' }}>
          About Me
        </h2>
      </motion.div>

      <div className="mt-16 flex flex-col lg:flex-row gap-12 items-start">
        {/* Left: Bio Card */}
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-1"
        >
          {/* Avatar */}
          <div className="flex items-center gap-5 mb-8">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-4xl font-bold text-white shadow-lg shadow-violet-500/25" style={{ fontFamily: 'Syne, sans-serif' }}>
                S
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-primary" />
            </div>
            <div>
              <h3 className="text-white text-xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>{about.name}</h3>
              <p className="text-violet-400 text-sm">{about.role}</p>
              <p className="text-gray-500 text-xs mt-0.5">Mumbai, India 🇮🇳</p>
            </div>
          </div>

          {/* Summary */}
          <div className="glass rounded-2xl p-6 mb-6">
            <p className="text-gray-300 text-base leading-relaxed">
              {about.summary}
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: "📧", label: "Email", value: about.email, href: `mailto:${about.email}` },
              { icon: "📱", label: "Phone", value: about.phone, href: `tel:${about.phone}` },
              { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/sakshi", href: about.linkedin },
              { icon: "⌨️", label: "GitHub", value: "github.com/sakshi", href: about.github },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-300 group"
              >
                <span className="text-xl">{item.icon}</span>
                <div className="min-w-0">
                  <p className="text-gray-500 text-xs">{item.label}</p>
                  <p className="text-white text-sm font-medium truncate group-hover:text-violet-300 transition-colors">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: Education + Quick Facts */}
        <motion.div
          variants={fadeIn("left", "tween", 0.3, 1)}
          className="flex-1 flex flex-col gap-6"
        >
          {/* Education */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2" style={{ fontFamily: 'Syne, sans-serif' }}>
              <span className="text-2xl">🎓</span> Education
            </h3>
            <div className="flex flex-col gap-4">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn("up", "tween", 0.1 * idx, 0.6)}
                  className="glass rounded-2xl p-5 hover:border-violet-500/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600/30 to-cyan-500/30 flex items-center justify-center text-xl shrink-0">
                      {edu.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>{edu.title}</h4>
                      <p className="text-gray-400 text-sm mt-0.5">{edu.institution}</p>
                      <span className="inline-block mt-2 px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-400 text-xs border border-violet-500/20">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Facts */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2" style={{ fontFamily: 'Syne, sans-serif' }}>
              <span className="text-2xl">⚡</span> Quick Facts
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "📊", label: "Power BI", sub: "Dashboards" },
                { icon: "🐍", label: "Python", sub: "Analytics" },
                { icon: "🗄️", label: "SQL", sub: "Databases" },
                { icon: "📈", label: "Tableau", sub: "Visualization" },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="glass rounded-xl p-4 flex items-center gap-3 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <span className="text-2xl">{fact.icon}</span>
                  <div>
                    <p className="text-white text-sm font-semibold">{fact.label}</p>
                    <p className="text-gray-500 text-xs">{fact.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
