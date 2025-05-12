"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-white">
      {/* Footer navigation */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Sobre nós */}
        <div>
          <h3 className="text-lg font-semihold mb-4">Sobre nós</h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/sobre-a-fibernet"
                className="text-gray-600 hover:text-primary text-sm"
              >
                Sobre a FiberNet
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
              <Link href="https://www.gov.br/anatel/pt-br/consumidor/compare-as-prestadoras/pesquisa-de-satisfacao-e-qualidade/satisfacao-e-qualidade-percebida"></Link>
            </li>
          </ul>
        </div>
        {/*  Cliente */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Client</h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="https://centralfiber.online/central_assinante_web/login"
                className="text-gray-600 hover:text-primary text-sm"
              ></Link>
            </li>
            <li>
              <Link
                href="/guia-do-client"
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
          </ul>
        </div>
        {/* Suporte */}
        <div className="space-y-8-">
          <div>
            <h3 className="flex items-center gap-2 text-base font-semibold mb-2">
              <span className="h-6 w-6 flex items-center justify-center bg-primary/10 rounded-full text-primary">
                <span className="sr-only">Ícone de central de ajuda</span>
                🎧
              </span>
            </h3>
            <p className="text-sm text-gray-600">
              Conheça as políticas da FiberNet para protegr seus dados
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
              <span className="flex items-center gap-2 text-base font-semibold mb-2">
                <span className="sr-only">Ícone de privacidade</span>
                🔒
              </span>
              Central de privacidade
            </h3>
            <p className="text-sm text-gray-600">
              Conheça as políticas da FiberNET para proteger os seus dados
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
              Ética e compliance
            </h3>
            <p className="text-sm text-gray-600">
              Veja como buscamos manter a integridade e nossos serviços
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
            <Link
              href="https://www.instagram.com/fibernettelecom_/"
              className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-centertext-gray-600 hover:bg-primary hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
