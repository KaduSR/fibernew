"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import OffersSection from "@/components/home/OffersSection";
import ServicesSection from "@/components/home/ServicesSection";
import ClientSupportSection from "@/components/home/ClientSupportSection";
import CitySelectionModal from "@/components/modals/CitySelectionModal";

export default function Home() {
  // const [showCityModal, setShowCityModal] = useState(false);
  // const [selectedCity, setSelectedCity] = useState<string | null>(null);

  // Show the city selection modal when the page loads
  // useEffect(() => {
    // Only show the modal after the initial page load and if no city has been selected
    // const timer = setTimeout(() => {
    //   const hasSelectedCity = localStorage.getItem("selectedCity");
    //  if (!hasSelectedCity) {
    //    setShowCityModal(true);
    //  } else {
    //    setSelectedCity(hasSelectedCity);
    //  }
   // }, 1000);

 //   return () => clearTimeout(timer);
 // }, []);

 // const handleCitySelect = (city: string) => {
 //   setSelectedCity(city);
 //   localStorage.setItem("selectedCity", city);
 //   setShowCityModal(false);
 // };

  return (

    <>
      <HeroSection />
      <StatsSection />
      <OffersSection />
      <ServicesSection />
      <ClientSupportSection />
    </>
  );
}
