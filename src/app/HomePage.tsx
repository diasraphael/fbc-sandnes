import Navigation from "@/components/Navigation";
import LandingSection from "@/components/LandingSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative">
      <Navigation />
      <LandingSection />
      <Footer />
    </div>
  );
}
