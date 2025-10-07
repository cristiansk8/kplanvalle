// /app/page.jsx

import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import ValleActivations from "@/components/ValleActivations";
import DestinationCard from "@/components/DestinationCard"; 
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function HomePage() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <ValleActivations />
      <DestinationCard />
      <Footer />
    </main>
  );
}
