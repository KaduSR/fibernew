"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [showCityModal, setShowCityModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSelectedCity = localStorage.getItem("selectedCity");
      if (!hasSelectedCity) {
        setShowCityModal(true);
      } else {
        setSelectedCity(hasSelectedCity);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    localStorage.setItem("selectedCity", city);
    setShowCityModal(false);
  };

  return (
    <>
      <CitySelectionModal
        isOpen={showCityModal}
        onClose={() => setShowCityModal(false)}
        onSelect={handleCitySelect}
      />
    </>
  );
}
