// /app/page.jsx

import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import ValleActivations from "@/components/ValleActivations";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function HomePage() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <ValleActivations />
      <Footer />
    </main>
  );
}
