"use client";

import Link from "next/link";
import Image from "next/image";
import { FileText, PhoneCall, Headphones, Monitor, MapPin } from "lucide-react";

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
    <div>
      <section className="py-16 bg-[hsl(var(--background))] dark:bg-[hsl(var(--background))] transition-colors">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--foreground))] mb-6">
            Autoatendimento para clientes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {SUPPORT_OPTIONS.map((option) => (
              <Link
                key={option.id}
                href={option.link}
                className="
                  bg-[hsl(var(--background))]
                  rounded-lg shadow-sm hover:shadow-md transition-shadow p-4
                  flex flex-col items-center text-center
                  border border-[hsl(var(--border))]
                  hover:border-[hsl(var(--green))]
                "
              >
                <div
                  className="
                    h-12 w-12 rounded-full bg-[hsl(var(--green))]/10
                    flex items-center justify-center text-[hsl(var(--green))]
                    mb-3
                  "
                >
                  <option.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-[hsl(var(--foreground))] mb-1">
                  {option.title}
                </h3>
                <p className="text-sm text-[hsl(var(--foreground))/0.75]">
                  {option.description}
                </p>
                <div className="mt-3 text-[hsl(var(--green))]">
                  {/* ícone de seta */}
                  <svg /* ... */ />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="section-extra-services-fibernet"
        className="px-5 pb-[9.5rem] pt-24 md:px-6 md:pb-24 lg:pb-20 lg:pt-20 2l:px-0 bg-[hsl(var(--background))] dark:bg-[hsl(var(--background))] transition-colors"
      >
        {/* App banner */}
        <div
          className="px-5 pb-[9.5rem] pt-24
    md:px-6 md:pb-24
    lg:pb-20 lg:pt-20
    2lg:px-0

    /* Fundo com imagem */
    bg-[url('/img/wallpaper/fundo-azul.jpg')]
    bg-cover
    bg-center
    bg-no-repeat

    /* Para alternar tema, se quiser overlay escuro */
    relative
    transition-colors

    /* Arredondamento */
    rounded-2xl"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="p-8 md:p-12 text-[hsl(var(--green-foreground))] md:w-2/3">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Agora você pode baixar a sua fatura online
              </h2>
              <p className="font-figtree text-xl font-medium leading-6 text-white lg:w-[22rem]">
                Entre na nossa central do assinante
              </p>
              <Link
                href="https://www.centralfiber.online/central_assinante_web/login"
                className="
                    inline-flex items-center justify-center rounded-md
                    text-white bg-green-800
                    px-5 py-2 font-medium hover:bg-[hsl(var(--muted))] hover:text-black transition-colors
                  "
              >
                Conheça nossa central
              </Link>
            </div>
            <div className="md:w-1/3 text-center">
              {/* Placeholder for app image */}
              <div
                className="
    relative
    w-full
    h-full
    /* Largura dinâmica */
    md:w-[10.5rem]
    lg:w-[18.5rem]
    2lg:w-[12.8rem]

    /* Assegura proporção 1:1 para ser sempre quadrado */
    aspect-square

    /* Arredondamento */
    rounded-2xl

    /* Espaçamento interno e overflow */
    overflow-hidden

    /* Transições */
    transition-all
    duration-500

    /* Borda dinâmica */
    border
    border-[hsl(var(--border))]
    dark:border-[hsl(var(--foreground))]

    /* Fundo dinâmico */
    bg-[hsl(var(--background))]
    dark:bg-[hsl(var(--background))]

    /* Reduz o tamanho em 10% */
    transform
    scale-95
  "
              >
                <div
                  className="
    relative                /* necessário para o Image fill */
    w-full                  /* largura total do quadrado */
    h-full                  /* altura total do quadrado */
    overflow-hidden         /* esconde o que ultrapassar */
    rounded-2xl         /* suas bordas arredondadas */
  "
                >
                  <Image
                    src="/img/paginas/centraldoassinante.png"
                    alt="App"
                    fill /* preenche 100% do pai */
                    className="object-cover" /* mantém proporção e cobre todo o pai */
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClientSupportSection;
