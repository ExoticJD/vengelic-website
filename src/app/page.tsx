import { Hero } from "@/components/Hero";
import { RoadMap } from "@/components/RoadMap";
import { Testimonial } from "@/components/Testimonial";
import { VisualComparison } from "@/components/VisualComparison";
import { FAQAccordion } from "@/components/FAQAccordion";
import { MarketCalculator } from "@/components/MarketCalculator";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <RoadMap />
      <MarketCalculator />
      <VisualComparison />
      <Testimonial />
      <FAQAccordion />
    </div>
  );
}
