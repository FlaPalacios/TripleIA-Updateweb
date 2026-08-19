import type { Metadata } from "next";
import { AboutAndContact } from "../src/components/home/AboutAndContact";
import { EvidenceSection } from "../src/components/home/EvidenceSection";
import { FeaturedOpportunities } from "../src/components/home/FeaturedOpportunities";
import { HomeHero } from "../src/components/home/HomeHero";
import { ObservatorySection } from "../src/components/home/ObservatorySection";
import { PillarsSection } from "../src/components/home/PillarsSection";
import { ServicesSection } from "../src/components/home/ServicesSection";
import { SocialSection } from "../src/components/home/SocialSection";
import { SiteFooter } from "../src/components/layout/SiteFooter";
import { SiteHeader } from "../src/components/layout/SiteHeader";
import { WhatsAppButton } from "../src/components/layout/WhatsAppButton";
import { getOpportunities } from "../src/lib/opportunities";

export const metadata: Metadata = {
  title: "Triple IA Consultores | Innovación, oportunidades y tecnología",
  description:
    "Triple IA conecta oportunidades de financiamiento, innovación, investigación aplicada y tecnología para desarrollar proyectos con impacto.",
};

export default function HomePage() {
  const opportunities = getOpportunities();
  const active = opportunities.filter((item) => item.deadlineStatus !== "expired");
  const featured = [...active]
    .sort((left, right) => {
      const scoreDifference = right.strategicScore - left.strategicScore;
      if (scoreDifference !== 0) return scoreDifference;
      return (left.deadlineDate ?? "9999").localeCompare(right.deadlineDate ?? "9999");
    })
    .slice(0, 4);

  return (
    <>
      <main className="home-page">
        <div className="home-hero-shell" id="inicio">
          <SiteHeader tone="dark" />
          <HomeHero
            total={opportunities.length}
            upcoming={opportunities.filter((item) => item.deadlineStatus === "upcoming").length}
            open={opportunities.filter((item) => item.deadlineStatus === "open").length}
          />
          <div className="connection-line" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
        <FeaturedOpportunities opportunities={featured} />
        <ServicesSection />
        <PillarsSection />
        <EvidenceSection />
        <SocialSection />
        <ObservatorySection />
        <AboutAndContact />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
