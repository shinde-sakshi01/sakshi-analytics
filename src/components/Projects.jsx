import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import SectionWrapper from "../utils/SectionWrapper";

const ProjectCard = ({ project, index }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 16;
    setTilt({ x, y });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={resetTilt}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: hovered ? "transform 0.1s ease" : "transform 0.5s ease",
      }}
      className="relative rounded-2xl overflow-hidden group cursor-default"
    >
      {/* Card body */}
      <div className="glass rounded-2xl overflow-hidden border border-white/5 group-hover:border-white/15 transition-all duration-500 h-full flex flex-col">
        {/* Header gradient banner */}
        <div className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
          {/* Animated grid overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <motion.span
            animate={hovered ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.4 }}
            className="text-7xl z-10 drop-shadow-lg"
          >
            {project.icon}
          </motion.span>

          {/* Glow */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col flex-1">
          <h3
            className="text-white font-bold text-xl mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-300 group-hover:to-cyan-300 transition-all duration-300"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {project.name}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="mb-5">
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-3 font-medium">Key Features</p>
            <ul className="grid grid-cols-1 gap-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="w-1 h-1 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/5 ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-bl-none rounded-tr-2xl">
        <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-tr-2xl`} />
      </div>
    </motion.div>
  );
};

const Projects = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">
        My Work
      </p>
      <h2
        className="text-white font-bold text-4xl sm:text-5xl"
        style={{ fontFamily: "Syne, sans-serif" }}
      >
        Projects
      </h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-gray-400 text-base max-w-2xl"
    >
      Real-world projects that demonstrate my ability to design databases,
      build analytics pipelines, and create compelling data dashboards.
    </motion.p>

    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={project.name} project={project} index={index} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Projects, "projects");
