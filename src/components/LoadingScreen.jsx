import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-primary flex flex-col items-center justify-center"
    >
      {/* Animated rings */}
      <div className="relative flex items-center justify-center mb-10">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
            className="absolute rounded-full border border-violet-500/30"
            style={{ width: 60 + i * 40, height: 60 + i * 40 }}
          />
        ))}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-violet-500/30"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          S
        </motion.div>
      </div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-white text-2xl font-bold mb-1"
        style={{ fontFamily: "Syne, sans-serif" }}
      >
        Sakshi Shinde
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-violet-400 text-sm tracking-widest uppercase mb-10"
      >
        Data Analyst
      </motion.p>

      {/* Progress bar */}
      <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
          style={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <p className="text-gray-600 text-xs mt-3">{Math.min(Math.round(progress), 100)}%</p>
    </motion.div>
  );
};

export default LoadingScreen;
