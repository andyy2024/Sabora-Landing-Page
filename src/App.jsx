// src/App.tsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Trust from "./components/Trust";
import HowItWorks from "./components/HowItWorks";
import Download from "./components/Download";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Waitlist from "./components/Waitlist";
import PatternBackground from "./PatternBackground";

export default function App() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-purple-50 via-white to-white text-zinc-900">
      <Header />
      <main>
        <PatternBackground
          src="/icon.webp"       // ✅ your image path
          tileSize={180}         // adjust to control how big each repeat looks
          overlay="bg-purple-400/50"   // optional soft overlay
          className="min-h-screen" // make sure it fills the page
        >
          <Hero />
        <div className="bg-gradient-to-b from-rose-50 to-amber-50">
          <Features />
        </div>
        <div className="bg-gradient-to-b from-amber-50 to-pink-100">
          <Trust />
        </div>
        <div className="bg-gradient-to-b from-pink-100 to-purple-200">
          <HowItWorks />
        </div>
        <div className="bg-gradient-to-b from-purple-200 to-pink-200">
          <Waitlist />
        </div>
        <div className="bg-gradient-to-b from-pink-200 to-purple-200">
          <Download />
        </div>
        <div className="bg-gradient-to-b from-purple-200 to-purple-300">
          <FAQ />
        </div>
        </PatternBackground>
      </main>
      <div className="bg-gradient-to-b from-purple-200 to-purple-300">
        <Footer />
      </div>
    </div>
  );
}
