"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type CitySelectionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCitySelect: (city: string) => void;
};

export function CitySelectionModal({
  isOpen,
  onClose,
  onCitySelect,
}: CitySelectionModalProps) {
  const [cityInput, setCityInput] = useState("");

  const handleCitySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cityInput.trim()) {
      onCitySelect(cityInput);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] md:max-w-[738px] xl:max-w-[1166px] p-0">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Fechar</span>
        </button>

        <div className="p-6 md:p-8 xl:p-16">
          <div className="mx-auto flex flex-col items-center justify-center md:flex-row-reverse md:items-start md:justify-between xl:items-center">
            {/* Map illustration */}
            <div className="relative md:ml-20 xl:ml-32">
              <div className="relative h-40 w-48 md:h-[13.35rem] md:w-[16.37rem] xl:h-[17.36rem] xl:w-[21.29rem]">
                <Image
                  src="/img/maps/brazil-map.svg"
                  alt="Mapa do Brasil com destaques para cobertura Fiber.NET"
                  width={340}
                  height={277}
                  className="h-full w-full object-contain"
                  priority
                />
                {/* Animated pin markers would be added here in a production site */}
              </div>
            </div>

            {/* Form content */}
            <div className="mt-6 flex flex-col md:mt-0">
              <h2 className="text-2xl font-semibold leading-6 text-gray-700 md:w-[13.5rem] md:text-[2rem] md:leading-8 xl:w-full xl:text-4xl">
                Bem vindo ao site Fiber.NET!
              </h2>
              <p className="mt-2 text-sm leading-4 text-gray-600 md:w-[20.25rem] md:text-lg md:leading-5 xl:w-[26.5rem]">
                Informe a sua cidade para que possamos personalizar as ofertas
                de acordo com disponibilidade para a sua região
              </p>

              <form
                onSubmit={handleCitySubmit}
                className="mt-6 md:w-[20.75rem] xl:mt-4 xl:w-[26.625rem]"
              >
                <div className="relative">
                  <div className="relative group flex items-center rounded-lg border px-3 focus-within:border-primary">
                    <Input
                      id="city-input"
                      value={cityInput}
                      onChange={(e) => setCityInput(e.target.value)}
                      className="peer flex h-11 w-full border-0 bg-transparent p-0 placeholder-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Digite sua cidade"
                    />
                    <Label
                      htmlFor="city-input"
                      className="pointer-events-none absolute left-3 top-0 -translate-y-1/2 transform bg-white px-1 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:-top-0 peer-focus:text-xs peer-focus:text-primary"
                    >
                      Digite sua cidade
                    </Label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CitySelectionModal;
