import { motion } from "framer-motion";
import { skillCategories } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import SectionWrapper from "../utils/SectionWrapper";

const SkillBar = ({ name, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="group"
  >
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 transition-all duration-300 cursor-default">
      <div className="w-1.5 h-1.5 rounded-full bg-violet-400 group-hover:bg-cyan-400 transition-colors duration-300" />
      <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">{name}</span>
    </div>
  </motion.div>
);

const CategoryCard = ({ category, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    whileHover={{ y: -6, scale: 1.02 }}
    className="relative glass rounded-2xl p-6 overflow-hidden group cursor-default transition-all duration-300 hover:shadow-xl"
    style={{ "--glow-color": category.color }}
  >
    {/* Glow on hover */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
      style={{ background: `radial-gradient(circle at 50% 0%, ${category.color}18 0%, transparent 70%)` }}
    />

    {/* Top accent line */}
    <div
      className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
      style={{ background: `linear-gradient(90deg, transparent, ${category.color}80, transparent)` }}
    />

    {/* Header */}
    <div className="flex items-center gap-3 mb-5">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl shadow-lg"
        style={{ background: `${category.color}20`, border: `1px solid ${category.color}30` }}
      >
        {category.icon}
      </div>
      <h3
        className="text-white font-bold text-base"
        style={{ fontFamily: "Syne, sans-serif" }}
      >
        {category.title}
      </h3>
    </div>

    {/* Skills grid */}
    <div className="flex flex-wrap gap-2">
      {category.skills.map((skill, i) => (
        <SkillBar key={skill} name={skill} delay={index * 0.1 + i * 0.05} />
      ))}
    </div>
  </motion.div>
);

/* Floating 3D-ish animated blobs in background */
const BackgroundBlobs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
    {[
      { size: 320, top: "5%", left: "0%", color: "#915eff" },
      { size: 260, top: "60%", right: "0%", color: "#00cea8" },
      { size: 200, top: "30%", left: "50%", color: "#ec008c" },
    ].map((blob, i) => (
      <motion.div
        key={i}
        animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }}
        className="absolute rounded-full blur-3xl"
        style={{
          width: blob.size,
          height: blob.size,
          top: blob.top,
          left: blob.left,
          right: blob.right,
          background: blob.color,
        }}
      />
    ))}
  </div>
);

const Skills = () => (
  <div className="relative">
    <BackgroundBlobs />

    <motion.div variants={textVariant()}>
      <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">
        What I know
      </p>
      <h2
        className="text-white font-bold text-4xl sm:text-5xl"
        style={{ fontFamily: "Syne, sans-serif" }}
      >
        Skills & Tools
      </h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-gray-400 text-base max-w-2xl"
    >
      A versatile toolkit spanning data analysis, visualization, and
      programming — built through hands-on projects and continuous learning.
    </motion.p>

    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {skillCategories.map((cat, i) => (
        <CategoryCard key={cat.title} category={cat} index={i} />
      ))}
    </div>

    {/* Bottom proficiency strip */}
    <motion.div
      variants={fadeIn("up", "tween", 0.5, 0.8)}
      className="mt-12 glass rounded-2xl p-6"
    >
      <p className="text-gray-400 text-sm mb-5 font-medium">Core proficiency levels</p>
      <div className="flex flex-col gap-4">
        {[
          { label: "SQL / MySQL", pct: 85, color: "#56ccf2" },
          { label: "Python (Pandas, NumPy)", pct: 80, color: "#915eff" },
          { label: "Power BI / Tableau", pct: 82, color: "#00cea8" },
          { label: "Data Visualization", pct: 88, color: "#f5af19" },
          { label: "Excel / Reporting", pct: 90, color: "#ec008c" },
        ].map((item, i) => (
          <div key={item.label} className="flex items-center gap-4">
            <span className="text-gray-300 text-sm w-52 shrink-0">{item.label}</span>
            <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.pct}%` }}
                transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${item.color}80, ${item.color})` }}
              />
            </div>
            <span className="text-gray-500 text-xs w-8 text-right">{item.pct}%</span>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default SectionWrapper(Skills, "skills");
