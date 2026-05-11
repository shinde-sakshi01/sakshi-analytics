import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Certifications,
  Contact,
  Footer,
  LoadingScreen,
} from "./components";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative bg-primary min-h-screen overflow-x-hidden">
          {/* Subtle noise grain overlay */}
          <div
            className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "128px",
            }}
          />

          <Navbar />

          <main className="relative z-10">
            <Hero />

            {/* Divider glow */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

            <About />
            <Skills />

            {/* Mid divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

            <Projects />
            <Certifications />

            {/* Bottom section bg shift */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black-100/50 pointer-events-none" />
              <Contact />
            </div>
          </main>

          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
