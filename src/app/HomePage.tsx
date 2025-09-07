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
        <div id="home">
          <LandingSection />
        </div>
        <ServiceTimes />
        <DailyVerse />
        <div id="events">
          <UpcomingEvents />
        </div>
        <YearlyPromise />
        <div id="sermons">
          <LatestSermon />
        </div>
        <div id="about">
          <PastorSection />
        </div>
        <LocationMap />
        <div id="contact">
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
}
