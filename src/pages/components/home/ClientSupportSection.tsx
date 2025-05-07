"use client"

import Link from "next/link";
import { FileText, PhoneCall, Headphones, Monitor,MapPin }from 'lucide-react';
import { title } from "process";

const SUPPORT_TYPE = [
  {
    id: "invoice",
    title: "Suporte Técnico",
    description:
      "Assistência técnica especializada para resolver problemas de conexão e equipamentos.",
    icon: FileText,
    link: "https://centralfiber.online/central_assinante_web/login",
    },
    {
        id: "call-us",
        title: "Atendimento via whatsapp",
        description:
            "Entre em contato com nossa equipe de suporte pelo WhatsApp para assistência rápida.",
        icon: PhoneCall,
        link: "https://api.whatsapp.com/send?phone=552424581861&text=Olá!%20Preciso%20de%20ajuda%20com%20meu%20plano.",
    }

];

export default function ClientSupportSection() { 

    return (
      <section className="py-16 bg-gray-80">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-600 mb-10">
            Suporte ao Cliente
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {SUPPORT_TYPE.map((option) => (
              <Link
                key={option.id}
                href={option.link}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col items-center text-center"
              >
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <option.icon className="h-6 w-6" />
                    </div>
                    <h3></h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );

}

