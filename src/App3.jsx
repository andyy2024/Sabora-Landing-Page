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

export default function App() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-purple-50 via-white to-white text-zinc-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <Trust />
        <HowItWorks />
        <Waitlist />
        <Download />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
