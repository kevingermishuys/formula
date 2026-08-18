import { Hero } from "@/components/blocks/Hero";
import { StatsBar } from "@/components/blocks/StatsBar";
import { ServicesGrid } from "@/components/blocks/ServicesGrid";
import { BrandBanner } from "@/components/blocks/BrandBanner";
import { HowItWorks } from "@/components/blocks/HowItWorks";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { QuoteForm } from "@/components/blocks/QuoteForm";
import { Downloads } from "@/components/blocks/Downloads";
import { Branches } from "@/components/blocks/Branches";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <BrandBanner />
      <HowItWorks />
      <FAQAccordion />
      <QuoteForm />
      <Downloads />
      <Branches />
    </>
  );
}
