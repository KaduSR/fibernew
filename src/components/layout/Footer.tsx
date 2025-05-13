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
              <Link href="/sobre-a-brisanet" className="text-gray-600 hover:text-primary text-sm">
                Sobre a Brisanet
              </Link>
            </li>
            <li>
              <Link href="/nossas-lojas" className="text-gray-600 hover:text-primary text-sm">
                Nossas lojas
              </Link>
            </li>
            <li>
              <Link href="/investidores" className="text-gray-600 hover:text-primary text-sm">
                Investidores
              </Link>
            </li>
            <li>
              <Link href="/regulatorio" className="text-gray-600 hover:text-primary text-sm">
                Regulatório
              </Link>
            </li>
            <li>
              <Link href="/nossos-apoiadores" className="text-gray-600 hover:text-primary text-sm">
                Nossos apoiadores
              </Link>
            </li>
            <li>
              <Link href="/nosso-blog" className="text-gray-600 hover:text-primary text-sm">
                Nosso blog
              </Link>
            </li>
            <li>
              <Link href="/pesquisa-de-qualidade" className="text-gray-600 hover:text-primary text-sm">
                Pesquisa de qualidade
              </Link>
            </li>
            <li>
              <Link href="/trabalhe-conosco" className="text-gray-600 hover:text-primary text-sm">
                Trabalhe conosco
              </Link>
            </li>
            <li>
              <Link href="/acessibilidade" className="text-gray-600 hover:text-primary text-sm">
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
              <Link href="/indique-um-amigo" className="text-gray-600 hover:text-primary text-sm">
                Indique um amigo
              </Link>
            </li>
            <li>
              <Link href="/brisacliente-fibra" className="text-gray-600 hover:text-primary text-sm">
                Brisacliente fibra
              </Link>
            </li>
            <li>
              <Link href="/brisacliente-movel" className="text-gray-600 hover:text-primary text-sm">
                Brisacliente móvel
              </Link>
            </li>
            <li>
              <Link href="/guia-do-cliente" className="text-gray-600 hover:text-primary text-sm">
                Guia do Cliente
              </Link>
            </li>
            <li>
              <Link href="/ouvidoria" className="text-gray-600 hover:text-primary text-sm">
                Ouvidoria
              </Link>
            </li>
            <li>
              <Link href="/central-de-seguranca" className="text-gray-600 hover:text-primary text-sm">
                Central de segurança
              </Link>
            </li>
            <li>
              <Link href="/ligamos-para-voce" className="text-gray-600 hover:text-primary text-sm">
                Ligamos para você
              </Link>
            </li>
            <li>
              <Link href="/suporte-remoto" className="text-gray-600 hover:text-primary text-sm">
                Suporte remoto
              </Link>
            </li>
          </ul>
        </div>

        {/* Planos */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Planos</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/brisanet-movel-5g" className="text-gray-600 hover:text-primary text-sm">
                Brisanet móvel 5G/4G
              </Link>
            </li>
            <li>
              <Link href="/combos" className="text-gray-600 hover:text-primary text-sm">
                Combos
              </Link>
            </li>
            <li>
              <Link href="/internet" className="text-gray-600 hover:text-primary text-sm">
                Internet
              </Link>
            </li>
            <li>
              <Link href="/brisaplay" className="text-gray-600 hover:text-primary text-sm">
                Brisaplay
              </Link>
            </li>
            <li>
              <Link href="/brisafixo" className="text-gray-600 hover:text-primary text-sm">
                Brisafixo
              </Link>
            </li>
            <li>
              <Link href="/para-empresas" className="text-gray-600 hover:text-primary text-sm">
                Para empresas
              </Link>
            </li>
            <li>
              <Link href="/brisamovel" className="text-gray-600 hover:text-primary text-sm">
                Brisamóvel
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
            <Link href="/central-de-ajuda" className="mt-2 inline-flex items-center text-sm text-primary">
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
              Conheça as políticas da Brisanet para proteger seus dados
            </p>
            <Link href="/central-de-privacidade" className="mt-2 inline-flex items-center text-sm text-primary">
              <span>Acessar</span>
              <span className="ml-1">→</span>
            </Link>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-base font-semibold mb-2">
              <span className="h-6 w-6 flex items-center justify-center bg-primary/10 rounded-full text-primary">
                <span className="sr-only">Ícone de compliance</span>
                ✅
              </span>
              Ética e Compliance
            </h3>
            <p className="text-sm text-gray-600">
              Veja como buscamos manter a integridade em nossos serviços
            </p>
            <Link href="/etica-e-compliance" className="mt-2 inline-flex items-center text-sm text-primary">
              <span>Acessar</span>
              <span className="ml-1">→</span>
            </Link>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Redes sociais</h3>
          <div className="flex gap-3">
            <Link href="https://facebook.com/brisanet" className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://instagram.com/brisanet" className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com/company/brisanet" className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://youtube.com/brisanet" className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors" aria-label="YouTube">
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Separator for ethical links */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row gap-4">
          <Link href="/canal-de-etica" className="text-sm text-gray-600 hover:text-primary">
            Canal de Ética
          </Link>
          <Link href="/canal-da-mulher" className="text-sm text-gray-600 hover:text-primary">
            Canal da mulher
          </Link>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-primary text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/acessibilidade" className="text-sm">
              Acessibilidade
            </Link>

            <div className="flex items-center">
              <Link href="/" className="inline-block mr-4">
                <Image
                  src="/img/logos/brisanet-logo.svg"
                  alt="Brisanet"
                  width={100}
                  height={24}
                  className="h-6 w-auto brightness-0 invert"
                />
              </Link>
            </div>

            <div className="text-sm text-white/90">
              <p className="text-xs">
                Brisanet Telecomunicações S.A. - CNPJ: 04.601.397/0001-28
              </p>
              <p className="text-xs">
                Rodovia CE - 138, km 14 - Zona Rural, Pereiro/CE
              </p>
            </div>
          </div>
          <div className="text-center mt-4 text-xs">
            Copyright 2023 © - Brisanet - Todos os direitos reservados
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
