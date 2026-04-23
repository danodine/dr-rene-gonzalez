import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimoniosSection from "@/components/TestimoniosSection";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <TestimoniosSection />
    </main>
  );
}
