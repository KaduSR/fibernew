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
          </ul>
        </div>
        {/*  Cliente */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Client</h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="https://centralfiber.online/central_assinante_web/login"
                className=""
              ></Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
