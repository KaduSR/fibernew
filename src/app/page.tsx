"use client";

import ClientSupportSection from "@/components/home/ClientSupportSection";
import HeroSection from "@/components/home/HeroSection";
import OffersSection from "@/components/home/OffersSection";
import YourComboSection from "@/components/home/YourComboSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OffersSection />
      <YourComboSection />
      <ClientSupportSection />
    </>
  );
}
