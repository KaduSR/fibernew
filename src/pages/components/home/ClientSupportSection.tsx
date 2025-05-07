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

    
}

