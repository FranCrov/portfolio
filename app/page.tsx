import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { JourneySection } from "@/components/journey-section";
import { ProjectsSection } from "@/components/projects-section";
import { RevealObserver } from "@/components/reveal-observer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <JourneySection />
        <ContactSection />
      </main>
      <SiteFooter />
      <RevealObserver />
    </>
  );
}
