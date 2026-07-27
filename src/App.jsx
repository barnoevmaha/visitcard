import { useState, useEffect } from "react";
import config from "./config/config";
import { ToastProvider } from "./context/ToastContext";
import Particles from "./components/Particles";
import ScrollProgress from "./components/ScrollProgress";
import ThemeToggle from "./components/ThemeToggle";
import BackToTop from "./components/BackToTop";
import Hero from "./components/Hero";
import ContactButtons from "./components/ContactButtons";
import About from "./components/About";
import Skills from "./components/Skills";
import QRCodeSection from "./components/QRCodeSection";
import ShareCard from "./components/ShareCard";
import DownloadContact from "./components/DownloadContact";
import Footer from "./components/Footer";

function LoadingScreen({ onLoaded }) {
  useEffect(() => {
    const timer = setTimeout(onLoaded, 800);
    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className="loading-screen">
      <div className="loading-spinner" />
    </div>
  );
}

function AppContent() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <>
      <Particles />
      <ScrollProgress />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <div className="app">
        <Hero config={config} />
        <ContactButtons config={config} />
        <About config={config} />
        <Skills config={config} />
        <QRCodeSection config={config} />
        <ShareCard config={config} />
        <DownloadContact config={config} />
        <Footer config={config} />
      </div>
      <BackToTop />
    </>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <ToastProvider>
      {!loaded && (
        <LoadingScreen onLoaded={() => setLoaded(true)} />
      )}
      <AppContent />
    </ToastProvider>
  );
}
