"use client";

import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-gray-100 to-gray-200 overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center">
          {/* Content */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              brisamóvel
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-700">
              Cobertura nacional para você falar e navegar de qualquer lugar
            </p>
            <div className="mt-8">
              <Link
                href="/movel-5g"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white font-medium hover:bg-primary/90 transition-colors"
              >
                Conheça os planos
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              <div className="absolute top-0 -right-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
              <div className="relative">
                {/* Replace with actual image from the website */}
                <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
                  {/* Placeholder for the hero image */}
                  <div className="rounded-lg bg-white shadow-lg h-full w-full flex items-center justify-center">
                    <div className="p-4 text-center">
                      <p className="text-gray-400 text-sm">
                        Imagem de pessoas utilizando o serviço móvel da Brisanet
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
