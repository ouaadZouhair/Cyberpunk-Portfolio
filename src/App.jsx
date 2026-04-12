import React, { Suspense, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import GlitchTransition from "./Components/GlitchTransition";
import "./App.css";
import CustomCursor from "./Components/CustomCursor";
import CyberpunkBackground from "./Components/CyberpunkBackground ";
import Loading from "./Components/Loading";

const Hero    = React.lazy(() => import("./pages/Hero"));
const About   = React.lazy(() => import("./pages/About"));
const Projects = React.lazy(() => import("./pages/Projects"));
const Contact = React.lazy(() => import("./pages/Contact"));

const pageVariants = {
  enter:  (direction) => ({ x: direction > 0 ?  1000 : -1000, opacity: 0 }),
  center: { x: 0, opacity: 1, zIndex: 1 },
  exit:   (direction) => ({ x: direction > 0 ? -1000 :  1000, opacity: 0, zIndex: 0 }),
};
const pageTransition = { duration: 0.3, ease: "easeInOut" };

function AnimatedRoutes({ direction }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div className="page" custom={direction} variants={pageVariants}
            initial="enter" animate="center" exit="exit" transition={pageTransition}>
            <Hero />
          </motion.div>
        }/>
        <Route path="/about" element={
          <motion.div className="page" custom={direction} variants={pageVariants}
            initial="enter" animate="center" exit="exit" transition={pageTransition}>
            <About /><Footer />
          </motion.div>
        }/>
        <Route path="/projects" element={
          <motion.div className="page" custom={direction} variants={pageVariants}
            initial="enter" animate="center" exit="exit" transition={pageTransition}>
            <Projects /><Footer />
          </motion.div>
        }/>
        <Route path="/contact" element={
          <motion.div className="page" custom={direction} variants={pageVariants}
            initial="enter" animate="center" exit="exit" transition={pageTransition}>
            <Contact /><Footer />
          </motion.div>
        }/>
      </Routes>
    </AnimatePresence>
  );
}

function MainLayout({ pageNames, paths }) {
  const location  = useLocation();
  const navigate  = useNavigate();
  const [direction, setDirection] = useState(1);
  const [isGlitching, setIsGlitching] = useState(false);

  const currentIndex = paths.indexOf(location.pathname);

  const triggerGlitch = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 500);
  };

  const handleNext = () => {
    setDirection(1);
    triggerGlitch();
    navigate(paths[(currentIndex + 1) % paths.length]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrev = () => {
    setDirection(-1);
    triggerGlitch();
    navigate(paths[(currentIndex - 1 + paths.length) % paths.length]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* <GlitchTransition isActive={isGlitching} /> */}
      <CustomCursor />
      <Navbar
        pageIndex={currentIndex}
        pageNames={pageNames}
        pagesLength={paths.length}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
      <AnimatedRoutes direction={direction} />
    </>
  );
}

// ── Shared background layers (rendered once, never unmount) ──────────────────
function SharedBackground() {
  return (
    <>
      <CyberpunkBackground />
      <div
        className="fixed inset-0 opacity-40 z-0"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2300ffe7' fill-opacity='0.1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
      />
      <div className="fixed z-0 w-80 h-80 rounded-full blur-[100px] bg-secondary/40 animate-pulse duration-1000"
        style={{ top: "130px", right: "10%" }} />
      <div className="fixed z-0 w-80 h-80 rounded-full blur-[100px] bg-primary/40 animate-pulse delay-1000 duration-500"
        style={{ top: "330px", left: "10%" }} />
    </>
  );
}

function App() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setTimeout(() => setIsLoading(false), 2800);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  const pageNames = [
    t("navigation.home"),
    t("navigation.about"),
    t("navigation.projects"),
    t("navigation.contact"),
  ];
  const paths = ["/", "/about", "/projects", "/contact"];

  return (
    // ↓ Single wrapper — background lives here, never unmounts
    <div className="min-h-screen bg-black/95 text-gray font-cyber relative overflow-hidden">
      <SharedBackground />

      {isLoading ? (
        // Loading UI only — no background duplication
        <Loading/>
      ) : (
        <Router>
          <MainLayout pageNames={pageNames} paths={paths} />
        </Router>
      )}
    </div>
  );
}

export default App;
