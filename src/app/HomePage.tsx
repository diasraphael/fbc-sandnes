import Navigation from "@/components/Navigation";
import LandingSection from "@/components/LandingSection";
import ServiceTimes from "@/components/ServiceTimes";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative">
      <Navigation />
      <LandingSection />
      <ServiceTimes />
      <LocationMap />
      <Footer />
    </div>
  );
}
