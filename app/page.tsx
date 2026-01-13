import Hero from "@/components/Hero";
import ValueStrip from "@/components/ValueStrip";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Waitlist from "@/components/Waitlist";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ValueStrip />
      <Features />
      <Screenshots />
      <HowItWorks />
      <About />
      <Portfolio />
      <Waitlist />
    </main>
  );
}
