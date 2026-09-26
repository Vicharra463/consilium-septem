"use client";

import HeroSection from "@/components/sections/HeroSection";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import Testimonials from "@/components/sections/Testimonials";
import FirmValues from "@/components/sections/FirmValues";
import TeamPreview from "@/components/sections/TeamPreview";
import SuccessCasePreview from "@/components/sections/SuccessCasePreview";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <ProcessTimeline />
      <Testimonials />
      <FirmValues />
      <TeamPreview />
      <SuccessCasePreview />
      <CTASection />
    </>
  );
}
