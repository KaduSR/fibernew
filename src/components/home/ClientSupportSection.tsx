"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  PhoneCall,
  Headphones,
  Monitor,
  MapPin
} from "lucide-react";

const SUPPORT_OPTIONS = [
  {
    id: "invoice",
    title: "2ª via da fatura",
    description: "Baixe sua fatura através do Fibercliente.",
    icon: FileText,
    link: "https://centralfiber.online/central_assinante_web/login",
  },
  {
    id: "call-us",
    title: "Entre em contato",
    description: "Informe seus dados que ajudaremos você.",
    icon: PhoneCall,
    link: "https://wa.me/552424581861?text=%20Oi!%20Tenho%20interesse%20na%20internet%20da%20Fiber.NET%20.%20Pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es,%20por%20favor?%20",
  },
  {
    id: "help-center",
    title: "Central de ajuda",
    description: "Tudo o que você precisa saber para tirar suas dúvidas.",
    icon: Headphones,
    link: "https://wa.me/552424581861?text=Ol%C3%A1%2C%20tenho%20d%C3%BAvidas%20sobre%20instala%C3%A7%C3%A3o%20dos%20servi%C3%A7os.%20Poderiam%20me%20orientar%3F",
  },
  {
    id: "remote-support",
    title: "Suporte Técnico",
    description: "Receba assistência remota diretamente por nossos técnicos.",
    icon: Monitor,
    link: "https://wa.me/552424581861?text=Ol%C3%A1%2C%20preciso%20de%20suporte%20t%C3%A9cnico.%20Poderiam%20me%20ajudar%2C%20por%20favor%3F",
  },
  {
    id: "stores",
    title: "Nossas lojas",
    description: "Verifique se há cobertura da Fiber.NET na sua cidade.",
    icon: MapPin,
    link: "/nossas-lojas",
  },
];

export function ClientSupportSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Autoatendimento para clientes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {SUPPORT_OPTIONS.map((option) => (
            <Link
              key={option.id}
              href={option.link}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col items-center text-center"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
                <option.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">
                {option.title}
              </h3>
              <p className="text-sm text-gray-600">{option.description}</p>
              <div className="mt-3 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* App banner */}
        <div className="mt-16 bg-primary rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <div className="p-8 md:p-12 text-white md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">
                Agora você pode baixar a sua fatura online
              </h3>
              <p className="mb-6">Entre na nossa central do assinante</p>
              <Link
                href="/apps"
                className="inline-flex items-center justify-center rounded-md bg-white text-primary px-5 py-2 font-medium hover:bg-gray-100 transition-colors"
              >
                Conheça nossa central
              </Link>
            </div>
            <div className="md:w-1/3 text-center">
              {/* Placeholder for app image */}
              <div className="bg-primary-600 h-64 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-primary-400 flex items-center justify-center">
                  <span className="text-white text-sm">
                  <Image src="/img/paginas/centraldoassinante.png" alt="FiberNET"  width="1024" height="1024"/>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientSupportSection;
