import Navigation from "@/components/Navigation";
import LandingSection from "@/components/LandingSection";
import ServiceTimes from "@/components/ServiceTimes";
import DailyVerse from "@/components/DailyVerse";
import YearlyPromise from "@/components/YearlyPromise";
import UpcomingEvents from "@/components/UpcomingEvents";
import LatestSermon from "@/components/LatestSermon";
import PastorSection from "@/components/PastorSection";
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
        <DailyVerse />
        <UpcomingEvents />
        <YearlyPromise />
        <LatestSermon />
        <PastorSection />
        <LocationMap />
        <Footer />
      </div>
    </PageTransition>
  );
}
