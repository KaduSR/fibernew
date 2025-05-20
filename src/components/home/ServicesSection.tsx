"use client";

import { Wifi, Smartphone, Film, Globe } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    id: "Fiber.NET",
    title: "Fiber.NET",
    description: "Chegou a tecnologia 5G na Fiber.NET: muito mais rápida!",
    icon: Wifi,
    link: "/",
  },
  {
    id: "brisamusic",
    title: "Brisamusic",
    description: "Ouça suas músicas preferidas onde e quando quiser.",
    icon: Film,
    link: "/streaming/brisamusic",
  },
  {
    id: "brisaplay",
    title: "Brisaplay",
    description: "Filmes, séries e canais de TV ao vivo",
    icon: Film,
    link: "/streaming/brisaplay",
  },
  {
    id: "conecta-plus",
    title: "Conecta+",
    description: "Serviço de atendimento especializado",
    icon: Globe,
    link: "/conecta-plus",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 bg-white ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Conheça nossos serviços
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A Fiber.NET tem diversos serviços para você e sua família aproveitar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="inline-flex items-center text-primary text-sm font-medium"
              >
                Saiba mais
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
