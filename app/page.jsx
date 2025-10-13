// /app/page.jsx

import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import ValleActivations from "@/components/ValleActivations";
import ContactFormSupabase from "@/components/ContactFormSupabase";
import DestinationCard from "@/components/DestinationCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// Server-side diagnostic: log types of imports to help catch imports that resolve to objects
try {
  // eslint-disable-next-line no-console
  console.log('SSR import types:', {
    AnnouncementBar: typeof AnnouncementBar,
    Navbar: typeof Navbar,
    HeroSection: typeof HeroSection,
    ValleActivations: typeof ValleActivations,
    DestinationCard: typeof DestinationCard,
    ContactFormSupabase: typeof ContactFormSupabase,
    Footer: typeof Footer,
  });
} catch (e) {
  // eslint-disable-next-line no-console
  console.error('Error logging SSR import types:', e);
}


export default function HomePage() {
  // Runtime sanity-checks to help identify imports that are not React components
  if (typeof window !== 'undefined') {
    try {
      const comps = {
        AnnouncementBar,
        Navbar,
        HeroSection,
        ValleActivations,
        DestinationCard,
        ContactFormSupabase,
        Footer,
      };

      Object.entries(comps).forEach(([name, Comp]) => {
        // React components are functions (or classes). If an import is an object,
        // it likely means a wrong import/export (default vs named) or an unresolved alias.
        if (typeof Comp === 'object') {
          // Print a helpful message to the browser console
          // eslint-disable-next-line no-console
          console.warn(`Import check: component ${name} is an object (likely wrong export/import). Value:`, Comp);
        } else if (typeof Comp !== 'function') {
          // eslint-disable-next-line no-console
          console.warn(`Import check: component ${name} has unexpected type: ${typeof Comp}`, Comp);
        } else {
          // eslint-disable-next-line no-console
          console.debug(`Import check: component ${name} looks like a function/component.`);
        }
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Error running import checks in HomePage:', e);
    }
  }
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <ValleActivations />
      <DestinationCard />
      <ContactFormSupabase />
      <Footer />
    </main>
  );
}
