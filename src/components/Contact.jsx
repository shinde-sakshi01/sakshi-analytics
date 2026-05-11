import { motion } from "framer-motion";
import { useState } from "react";
import { about } from "../constants";
import { slideIn, textVariant } from "../utils/motion";
import SectionWrapper from "../utils/SectionWrapper";

const InputField = ({ label, name, type = "text", placeholder, value, onChange, multiline }) => (
  <div className="flex flex-col gap-2">
    <label className="text-gray-400 text-sm font-medium">{label}</label>
    {multiline ? (
      <textarea
        name={name}
        rows={5}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all duration-300 resize-none"
      />
    ) : (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all duration-300"
      />
    )}
  </div>
);

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    // Simulate send (replace with EmailJS in production)
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  const socials = [
    {
      label: "Email",
      value: about.email,
      href: `mailto:${about.email}`,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "#915eff",
    },
    {
      label: "Phone",
      value: `+91 ${about.phone}`,
      href: `tel:${about.phone}`,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      color: "#00cea8",
    },
    {
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/sakshi-shinde-7bb923367?",
      href: about.linkedin,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: "#0077B5",
    },
    {
      label: "GitHub",
      value: "https://github.com/shinde-sakshi01",
      href: about.github,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      color: "#f3f3f3",
    },
  ];

  return (
    <div className="relative">
      <motion.div variants={textVariant()}>
        <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">
          Get in Touch
        </p>
        <h2
          className="text-white font-bold text-4xl sm:text-5xl"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          Contact
        </h2>
      </motion.div>

      <div className="mt-14 flex flex-col lg:flex-row gap-10">
        {/* Left: Info */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-1 flex flex-col gap-6"
        >
          <p className="text-gray-400 text-base leading-relaxed max-w-sm">
            I'm always open to new opportunities, collaborations, and conversations
            about data. Drop me a message!
          </p>

          <div className="flex flex-col gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 transition-all duration-300 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${s.color}20`, color: s.color, border: `1px solid ${s.color}30` }}
                >
                  {s.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-xs">{s.label}</p>
                  <p className="text-white text-sm font-medium group-hover:text-violet-300 transition-colors">{s.value}</p>
                </div>
                <svg className="w-4 h-4 text-gray-600 group-hover:text-white ml-auto transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>

          {/* Availability badge */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/5 border border-green-500/20">
            <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-sm font-medium">Available for opportunities</span>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex-1"
        >
          <form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-7 flex flex-col gap-5"
          >
            <InputField
              label="Your Name"
              name="name"
              placeholder="Sakshi Shinde"
              value={form.name}
              onChange={handleChange}
            />
            <InputField
              label="Email Address"
              name="email"
              type="email"
              placeholder="sakshishinde813@gmail.com"
              value={form.email}
              onChange={handleChange}
            />
            <InputField
              label="Message"
              name="message"
              placeholder="Hi Sakshi, I'd love to connect about..."
              value={form.message}
              onChange={handleChange}
              multiline
            />

            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className="relative w-full py-3.5 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 disabled:opacity-70"
              style={{ background: "linear-gradient(135deg, #915eff, #6d28d9)" }}
            >
              {/* Shimmer */}
              <span className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(135deg, #a78bfa, #7c3aed)" }} />

              <span className="relative flex items-center justify-center gap-2">
                {status === "sending" && (
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                )}
                {status === "idle" && "Send Message →"}
                {status === "sending" && "Sending…"}
                {status === "success" && "✅ Message Sent!"}
                {status === "error" && "❌ Try again"}
              </span>
            </button>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-green-400 text-sm"
              >
                Thanks for reaching out! I'll get back to you shortly. 🎉
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
