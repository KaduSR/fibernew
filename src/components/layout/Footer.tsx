"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-white">
      {/* Footer navigation */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Sobre nós */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Sobre nós</h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/sobre-a-fibernet"
                className="text-gray-600 hover:text-primary text-sm"
              >
                Sobre a Fiber.net
              </Link>
            </li>
            <li>
              <Link
                href="/nossa-loja"
                className="text-gray-600 hover:text-primary text-sm"
              >
                Nossa loja
              </Link>
            </li>
            <li>
              <Link
                href="/regulatorio"
                className="text-gray-600 hover:text-primary text-sm"
              >
                Regulatório
              </Link>
            </li>
            <li>
              <Link
                href="/acessibilidade"
                className="text-gray-600 hover:text-primary text-sm"
              >
                Acessibilidade
              </Link>
            </li>
          </ul>
        </div>

        {/* Cliente */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Cliente</h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/cliente-fibra"
                className="text-gray-600 hover:text-primary text-sm"
              >
                FiberNET cliente fibra
              </Link>
            </li>
            <li>
              <Link
                href="/guia-do-cliente"
                className="text-gray-600 hover:text-primary text-sm"
              >
                Guia do Cliente
              </Link>
            </li>
            <li>
              <Link
                href="/ouvidoria"
                className="text-gray-600 hover:text-primary text-sm"
              >
                Ouvidoria
              </Link>
            </li>
            <li>
              <Link
                href="/central-de-seguranca"
                className="text-gray-600 hover:text-primary text-sm"
              >
                Central de segurança
              </Link>
            </li>
            <li>
              <Link
                href="https://wa.me/552424581861?text=%20Oi!%20Tenho%20interesse%20na%20internet%20da%20Fiber.NET%20.%20Pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es,%20por%20favor?%20
"
                className="text-gray-600 hover:text-primary text-sm"
              >
                Entre em Contato
              </Link>
            </li>
            <li>
              <Link
                href="/suporte-cliente"
                className="text-gray-600 hover:text-primary text-sm"
              >
                Suporte ao cliente
              </Link>
            </li>
          </ul>
        </div>

        {/* Planos */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Planos</h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/internet"
                className="text-gray-600 hover:text-primary text-sm"
              >
                Internet
              </Link>
            </li>
            <li>
              <Link
                href="/para-empresas"
                className="text-gray-600 hover:text-primary text-sm"
              >
                Para empresas
              </Link>
            </li>
          </ul>
        </div>

        {/* Support/Help section */}
        <div className="space-y-8">
          <div>
            <h3 className="flex items-center gap-2 text-base font-semibold mb-2">
              <span className="h-6 w-6 flex items-center justify-center bg-primary/10 rounded-full text-primary">
                <span className="sr-only">Ícone de central de ajuda</span>
                🎧
              </span>
              Central de ajuda
            </h3>
            <p className="text-sm text-gray-600">
              Tudo o que você precisa saber para tirar suas dúvidas
            </p>
            <Link
              href="/central-de-ajuda"
              className="mt-2 inline-flex items-center text-sm text-primary"
            >
              <span>Acessar</span>
              <span className="ml-1">→</span>
            </Link>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-base font-semibold mb-2">
              <span className="h-6 w-6 flex items-center justify-center bg-primary/10 rounded-full text-primary">
                <span className="sr-only">Ícone de privacidade</span>
                🔒
              </span>
              Central de privacidade
            </h3>
            <p className="text-sm text-gray-600">
              Conheça as políticas da Fiber.NET para proteger seus dados
            </p>
            <Link
              href="/central-de-privacidade"
              className="mt-2 inline-flex items-center text-sm text-primary"
            >
              <span>Acessar</span>
              <span className="ml-1">→</span>
            </Link>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-base font-semibold mb-2">
              <span className="h-6 w-6 flex items-center justify-center bg-primary/10 rounded-full text-primary">
                <span className="sr-only">Ícone de compliance</span>✅
              </span>
              Ética e Compliance
            </h3>
            <p className="text-sm text-gray-600">
              Veja como buscamos manter a integridade em nossos serviços
            </p>
            <Link
              href="/etica-e-compliance"
              className="mt-2 inline-flex items-center text-sm text-primary"
            >
              <span>Acessar</span>
              <span className="ml-1">→</span>
            </Link>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Redes sociais</h3>
          <div className="flex gap-3">
            {/*  <Link href="https://facebook.com/brisanet" className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </Link> */}
            <Link
              href="https://www.instagram.com/fibernettelecom_/"
              className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            {/* } <Link href="https://linkedin.com/company/brisanet" className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://youtube.com/brisanet" className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors" aria-label="YouTube">
              <Youtube className="h-5 w-5" />
            </Link> */}
          </div>
        </div>
      </div>

      {/* Separator for ethical links */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row gap-4">
          <Link
            href="/canal-de-etica"
            className="text-sm text-gray-600 hover:text-primary"
          >
            Canal de Ética
          </Link>
          <Link
            href="/canal-da-mulher"
            className="text-sm text-gray-600 hover:text-primary"
          >
            Canal da mulher
          </Link>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="w-full bg-orange-500 dark:bg-green-700">
        <div className="bg-primary text-white">
          <div className="container flex h-24 flex-row items-center justify-start pl-6 2lg:pl-0">
            <Link
              href="/acessibilidade"
              className="tab-focus text-base font-medium text-white hover:underline focus:ring-white dark:text-foreground-dark dark:hover:p-2 dark:hover:text-yellow-500 dark:hover:ring-1 dark:hover:ring-yellow-200"
            >
              Acessibilidade
            </Link>
            <div className="ml-auto mr-6 flex w-64 flex-col lg:w-80">
              <p className="text-start text-xs font-extralight text-white">
                TELECOM FIBER.NET LTDA - CNPJ: 22.969.088/0001-97
              </p>
              <p className="text-start text-xs font-extralight text-white">
                RJ 145, km 93, nº 53320 - Elisabeth, Rio das Flores - RJ
              </p>
            </div>
          </div>
          <div className="bg-orange-500 px-6 dark:bg-gray-700 2lg:px-0"></div>
          <div className="w-full bg-orange-500 dark:bg-gray-700">
            <div className="container flex h-20 flex-row items-center justify-start p-x-6 2lg:px-0">
              <Link
                href="/"
                className="transition-all duration-500 hover:cursor-pointer focus:outline-none focus-visible:p-2 focus-visible:ring-1 focus-visible:ring-white dark:focus-visible:ring-yellow-200"
              >
                <Image
                  src="/img/logos/Imagem1.png"
                  alt="FiberNET"
                  width={100}
                  height={24}
                  className="h-6 w-auto brightness-0 invert"
                />
              </Link>
              <p className="ml-auto select-none text-center text-sm font-medium text-white">
                Copyright 2025 © - Fiber.NET - Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
