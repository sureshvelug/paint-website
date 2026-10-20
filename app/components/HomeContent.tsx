"use client";
import Header from "./Header";
import Hero from "./Hero";
import ValueProps from "./ValueProps";
import TechSection from "./TechSection";
import ProjectsShowcase from "./ProjectsShowcase";
import SustainabilityMetrics from "./SustainabilityMetrics";
import InspirationGallery from "./Insipiration";
import TestimonialCarousel from "./TestimonialCarousel";
import CTASection from "./CTASection";
import RoomCategories from "./Oct2026/RoomCategories";
import FreeSwatchesSection from "./Oct2026/PopularColours";
import NewBannerVideo from "./Oct2026/NewBannerVideo";

export default function HomeContent() {
  return (
    <main className="bg-[#d9cfab] min-h-screen selection:bg-amber-200 selection:text-amber-900">

      <NewBannerVideo />

      <RoomCategories />

      <FreeSwatchesSection />

      <InspirationGallery />

      <ValueProps />

      <ProjectsShowcase />

      <TechSection />

      <SustainabilityMetrics />

      <TestimonialCarousel />

      <CTASection />

      {/* <Footer /> */}
    </main>
  );
}
