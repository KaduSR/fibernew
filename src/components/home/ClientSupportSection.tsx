"use client";

import Link from "next/link";
import Image from "next/image";
import { FileText, PhoneCall, Headphones, Monitor, MapPin } from "lucide-react";
import ModalFatura from "@/components/modals/ModalFatura";
import { useState } from "react";

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
    link: "https://g.co/kgs/CEcHP3J",
  },
];

export function ClientSupportSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <section className="py-20 dark:border-t dark:border-gray-600 dark:background-dark border-gray-700">
        <div className="container px-6 md:px-6 2lg:px-0">
          <h2 className="mb-8 font-figtree text-3xl font-bold leading-9 text-blue-700 dark:text-white md:text-4xl md:leading-[2.75rem] xl:text-5xl xl:leading-[3.25rem]">
            Autoatendimento para clientes
          </h2>
          <div className="grid grid-cols-2 flex-wrap gap-x-4 gap-y-6 md:flex md:gap-x-8 md:gap-y-8 xl:gap-x-7">
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded={isModalOpen}
              aria-controls="radix-:R6qnnjf1la:"
              data-state="closed"
              className="tab-focus flex justify-start rounded-2xl"
            >
              <div className="border shadow-sm group/card flex h-52 w-full cursor-pointer flex-col justify-between rounded-2xl dark:border-white border-black bg-white p-5 transition-colors durantion-300 hover:bg-orange-500 dark:border-solid dark:bg-gray-800 dark:hover:ring-2 dark:hover:ring-yellow-200 md:w-[10.6rem]">
                <div className="flex flex-1 flex-col items-start justify-start p-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="-ml-[0.5rem] size-8 text-gray-600 group-hover/card:text-white dark:text-white"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.4659 6.66699H12.4854C11.1073 6.66699 9.99023 7.8609 9.99023 9.33366V30.667C9.99023 32.1398 11.1073 33.3337 12.4854 33.3337H27.4561C28.8341 33.3337 29.9513 32.1398 29.9513 30.667V14.667L22.4659 6.66699Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M22.4648 6.66699V14.667H29.9502"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M24.961 21.333H14.9805"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M24.961 26.667H14.9805"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M17.4756 16H16.228H14.9805"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <h3 className="mt-5 text-sm font-medium text-gray-700 group-hover/card:text-white dark:text-white md:text-base">
                    2ª via da fatura
                  </h3>
                  <div
                    data-orientation="horizontal"
                    role="none"
                    className="shrink-1 mt-3 h-[3px] w-[2.5625rem] rounded-sm bg-orange-500 group-hover/card:bg-white dark:bg-orange-500 "
                  ></div>
                  <p className="mt-3 max-w-fit text-left text-[0.75rem] leading-4 text-gray-600 group-hover/card:text-white dark:text-white md:text-sm md:leading-[1.125rem]">
                    Baixe sua fatura aqui{" "}
                  </p>
                </div>
                <div className="items-center flex justify-end p-0">
                  <span className="sr-only">Seta apontando para a direita</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-8 w-9 text-orange-500 hover:text-orange-600 group-hover/card:text-white dark:text-orange-500 dark:hover:text-white"
                  >
                    <path
                      d="M4.16675 10H15.8334"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 4.16675L15.8333 10.0001L10 15.8334"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </button>
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:R6qnnjf1la:"
              data-state="closed"
              className="tab-focus flex justify-start rounded-2xl"
            >
              <div className="border shadow-sm group/card flex h-52 w-full cursor-pointer flex-col justify-between rounded-2xl dark:border-white border-black bg-white p-5 transition-colors durantion-300 hover:bg-orange-500 dark:border-solid dark:bg-gray-800 dark:hover:ring-2 dark:hover:ring-yellow-200 md:w-[10.6rem]">
                <div className="flex flex-1 flex-col items-start justify-start p-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="-ml-[0.5rem] size-8 text-gray-600 group-hover/card:text-white dark:text-white"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.4659 6.66699H12.4854C11.1073 6.66699 9.99023 7.8609 9.99023 9.33366V30.667C9.99023 32.1398 11.1073 33.3337 12.4854 33.3337H27.4561C28.8341 33.3337 29.9513 32.1398 29.9513 30.667V14.667L22.4659 6.66699Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M22.4648 6.66699V14.667H29.9502"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M24.961 21.333H14.9805"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M24.961 26.667H14.9805"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M17.4756 16H16.228H14.9805"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <h3 className="mt-5 text-sm font-medium text-gray-700 group-hover/card:text-white dark:text-white md:text-base">
                    Suporte técnico
                  </h3>
                  <div
                    data-orientation="horizontal"
                    role="none"
                    className="shrink-1 mt-3 h-[3px] w-[2.5625rem] rounded-sm bg-orange-500 group-hover/card:bg-white dark:bg-orange-500 "
                  ></div>
                  <p className="mt-3 max-w-fit text-left text-[0.75rem] leading-4 text-gray-600 group-hover/card:text-white dark:text-white md:text-sm md:leading-[1.125rem]">
                    Suporte técnico especializado!
                  </p>
                </div>
                <div className="items-center flex justify-end p-0">
                  <span className="sr-only">Seta apontando para a direita</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-8 w-9 text-orange-500 hover:text-orange-600 group-hover/card:text-white dark:text-orange-500 dark:hover:text-white"
                  >
                    <path
                      d="M4.16675 10H15.8334"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M10 4.16675L15.8333 10.0001L10 15.8334"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClientSupportSection;
