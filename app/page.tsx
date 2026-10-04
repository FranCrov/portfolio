import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { JourneySection } from "@/components/journey-section";
import { ProjectsSection } from "@/components/projects-section";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell" id="contenido">
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
