import { Hero } from "@/components/Hero";
import { RoadMap } from "@/components/RoadMap";
import { Testimonial } from "@/components/Testimonial";
import { FAQAccordion } from "@/components/FAQAccordion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <RoadMap />
      <Testimonial />
      <FAQAccordion />
      {/* Subsequent sections will be added in following phases */}
    </div>
  );
}
