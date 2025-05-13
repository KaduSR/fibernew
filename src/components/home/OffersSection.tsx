"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Wifi, Tv, ArrowRight } from "lucide-react";

// Plan tabs
const PLAN_TABS = [
  { id: "destaques", label: "Destaques" },
  { id: "internet", label: "Internet" },
  { id: "movel", label: "Móvel" },
  { id: "streaming", label: "Streaming" },
  { id: "combos", label: "Combos" }
];

// Define the plan type
type Plan = {
  id: number;
  type: string;
  speed: string;
  price: number;
  priceDetails: string;
  features: string[];
  logo?: string;
  color: string;
};

// Plan offerings
const PLANS: Record<string, Plan[]> = {
  destaques: [
    {
      id: 1,
      type: "INTERNET + BRISAMUSIC",
      speed: "500MEGA",
      price: 89.99,
      priceDetails: "/mês",
      features: ["Wi-Fi grátis", "Melhor internet da região", "Brisamusic incluso"],
      logo: "/img/logos/brisamusic.svg",
      color: "bg-primary"
    },
    {
      id: 2,
      type: "INTERNET + GLOBOPLAY",
      speed: "700MEGA",
      price: 99.90,
      priceDetails: "/mês",
      features: ["Wi-Fi grátis", "Melhor internet da região", "Globoplay incluso"],
      logo: "/img/logos/globoplay.svg",
      color: "bg-primary"
    },
    {
      id: 3,
      type: "INTERNET + BRISAPLAY",
      speed: "500MEGA",
      price: 109.98,
      priceDetails: "/mês",
      features: ["Wi-Fi grátis", "Melhor internet da região", "Brisaplay incluso"],
      logo: "/img/logos/brisaplay.svg",
      color: "bg-primary"
    },
    {
      id: 4,
      type: "INTERNET + MAX",
      speed: "500MEGA",
      price: 129.89,
      priceDetails: "/mês",
      features: ["Wi-Fi grátis", "Melhor internet da região", "MAX incluso"],
      logo: "/img/logos/max.svg",
      color: "bg-primary"
    }
  ],
  internet: [
    {
      id: 5,
      type: "INTERNET FIBRA",
      speed: "350MEGA",
      price: 69.99,
      priceDetails: "/mês",
      features: ["Wi-Fi grátis", "Atendimento 24h", "Sem franquia de dados"],
      color: "bg-primary"
    },
    {
      id: 6,
      type: "INTERNET FIBRA",
      speed: "500MEGA",
      price: 79.99,
      priceDetails: "/mês",
      features: ["Wi-Fi grátis", "Atendimento 24h", "Sem franquia de dados"],
      color: "bg-primary"
    },
    {
      id: 7,
      type: "INTERNET FIBRA",
      speed: "700MEGA",
      price: 89.99,
      priceDetails: "/mês",
      features: ["Wi-Fi grátis", "Atendimento 24h", "Sem franquia de dados"],
      color: "bg-primary"
    }
  ],
  movel: [
    {
      id: 8,
      type: "MÓVEL 5G",
      speed: "4 GIGAS",
      price: 14.99,
      priceDetails: "/mês",
      features: ["Ligações ilimitadas", "WhatsApp ilimitado", "Roaming nacional"],
      color: "bg-primary"
    },
    {
      id: 9,
      type: "MÓVEL 5G",
      speed: "10 GIGAS",
      price: 29.99,
      priceDetails: "/mês",
      features: ["Ligações ilimitadas", "WhatsApp ilimitado", "Roaming nacional"],
      color: "bg-primary"
    },
    {
      id: 10,
      type: "MÓVEL 5G",
      speed: "13 GIGAS",
      price: 34.99,
      priceDetails: "/mês",
      features: ["Ligações ilimitadas", "WhatsApp ilimitado", "Roaming nacional"],
      color: "bg-primary"
    }
  ],
  streaming: [
    {
      id: 11,
      type: "STREAMING",
      speed: "BRISAMUSIC",
      price: 9.99,
      priceDetails: "/mês",
      features: ["Milhões de músicas", "Sem anúncios", "Acesso ilimitado"],
      logo: "/img/logos/brisamusic.svg",
      color: "bg-primary"
    },
    {
      id: 12,
      type: "STREAMING",
      speed: "BRISAPLAY",
      price: 29.99,
      priceDetails: "/mês",
      features: ["Filmes, séries e TV ao vivo", "Sem anúncios", "Multi-telas"],
      logo: "/img/logos/brisaplay.svg",
      color: "bg-primary"
    }
  ],
  combos: [
    {
      id: 13,
      type: "COMBO COMPLETO",
      speed: "500MEGA + MÓVEL 5G",
      price: 99.99,
      priceDetails: "/mês",
      features: ["Internet Fibra", "Plano móvel com 10 GIGAS", "Wi-Fi grátis"],
      color: "bg-primary"
    },
    {
      id: 14,
      type: "COMBO PREMIUM",
      speed: "700MEGA + STREAMING",
      price: 119.99,
      priceDetails: "/mês",
      features: ["Internet Fibra", "Brisamusic + Brisaplay", "Wi-Fi grátis"],
      color: "bg-primary"
    }
  ]
};

export function OffersSection() {
  const [activeTab, setActiveTab] = useState("destaques");
  const activePlans = PLANS[activeTab];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Aproveite nossas ofertas
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {PLAN_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm md:text-base font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activePlans.map((plan) => (
            <Card key={plan.id} className="overflow-hidden plan-card">
              {/* Card Header with plan type and speed */}
              <CardHeader className="bg-gray-100 pb-2 pt-4 px-4">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-600">{plan.type}</span>
                  <span className="text-xl font-bold text-gray-800">{plan.speed}</span>
                  {plan.logo && (
                    <div className="mt-2">
                      <div className="h-8 w-auto flex items-center">
                        <span className="text-sm text-primary font-medium">
                          Produto Incluído
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </CardHeader>

              {/* Card Content with price and features */}
              <CardContent className="pt-4 px-4">
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Mais detalhes</p>
                  <div className="flex items-baseline">
                    <span className="text-gray-800 text-xl font-bold">R$</span>
                    <span className="text-3xl font-bold text-gray-800">{plan.price.toFixed(2).replace(".", ",")}</span>
                    <span className="text-sm text-gray-600 ml-1">{plan.priceDetails}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              {/* Card Footer with CTA button */}
              <CardFooter className="pt-2 pb-4 px-4">
                <Link
                  href={`/assine-ja?plan=${plan.id}`}
                  className="w-full btn-primary py-2 text-center rounded-md"
                >
                  Assine agora
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OffersSection;
