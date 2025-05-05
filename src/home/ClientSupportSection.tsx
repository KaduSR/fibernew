"use client";

import Link from "next/link";
import { FileText, PhoneCall, Headphones, Monitor, MapPin } from "lucide-react";

const SUPPORT_OPTIONS = [
  {
    id: "invoice",
    title: "2ª via da fatura",
    description: "Baixe sua fatura através do Brisacliente.",
    icon: FileText,
    link: "/area-do-cliente/2via",
  },
  {
    id: "call-us",
    title: "Ligamos para você",
    description: "Informe seus dados que entraremos em contato.",
    icon: PhoneCall,
    link: "/ligamos-para-voce",
  },
  {
    id: "help-center",
    title: "Central de ajuda",
    description: "Tudo o que você precisa saber para tirar suas dúvidas.",
    icon: Headphones,
    link: "/central-de-ajuda",
  },
  {
    id: "remote-support",
    title: "Suporte remoto",
    description: "Receba assistência remota diretamente por nossos técnicos.",
    icon: Monitor,
    link: "/suporte-remoto",
  },
  {
    id: "stores",
    title: "Nossas lojas",
    description: "Verifique se há cobertura Brisanet na sua cidade.",
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
                Agora você pode consultar seu saldo, pacote de dados móveis e
                chamadas.
              </h3>
              <p className="mb-6">
                Baixe o aplicativo e tenha acesso a todas essas funcionalidades.
              </p>
              <Link
                href="/apps"
                className="inline-flex items-center justify-center rounded-md bg-white text-primary px-5 py-2 font-medium hover:bg-gray-100 transition-colors"
              >
                Conheça o app
              </Link>
            </div>
            <div className="md:w-1/3 text-center">
              {/* Placeholder for app image */}
              <div className="bg-primary-600 h-64 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-primary-400 flex items-center justify-center">
                  <span className="text-white text-sm">
                    Imagem do aplicativo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            Dúvidas sobre o Pré-Pago?
          </h3>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <button className="flex items-center justify-between w-full text-left">
                <span className="font-medium text-gray-800">
                  Dúvidas sobre o consumo de internet?
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <button className="flex items-center justify-between w-full text-left">
                <span className="font-medium text-gray-800">
                  Dúvidas sobre ligações e SMS?
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <button className="flex items-center justify-between w-full text-left">
                <span className="font-medium text-gray-800">
                  Dúvidas sobre tarifas e preços?
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientSupportSection;
