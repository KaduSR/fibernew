"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import OffersSection from "@/components/home/OffersSection";
import ServicesSection from "@/components/home/ServicesSection";
import ClientSupportSection from "@/components/home/ClientSupportSection";
import YourComboSection from "@/components/home/YourComboSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <OffersSection />
      <YourComboSection />
      <ClientSupportSection />
      </>
  );
}
