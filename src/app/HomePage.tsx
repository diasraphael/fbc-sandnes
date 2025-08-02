import Navigation from "@/components/Navigation";
import LandingSection from "@/components/LandingSection";
import ServiceTimes from "@/components/ServiceTimes";
import YearlyPromise from "@/components/YearlyPromise";
import UpcomingEvents from "@/components/UpcomingEvents";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function HomePage() {
  return (
    <PageTransition>
      <div className="relative">
        <Navigation />
        <LandingSection />
        <ServiceTimes />
        <YearlyPromise />
        <UpcomingEvents />
        <LocationMap />
        <Footer />
      </div>
    </PageTransition>
  );
}
