"use client";

import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-gray-100 to-gray-200 overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center">
          {/*Content */}
          <div className="w-full md:w-1/2 mt-8 md-mt-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Fiber.NET
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-700">
              Cobertura total em Rio das Flores
            </p>
            <div className="mt-8">
              <Link
                href="/cobertura"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white font-medium hover:bg-primary/90 transition-colors"
              >
                Ver Cobertura
              </Link>
            </div>
          </div>
          {/*Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              <div className="absolute top-0 -right w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blue-xl opacity-70 animate-blob animation-delay-4000 " />
              <div className="relative">
                {/* Replace with actual image from the website */}
                <div className="relative h-[300px] w-[300px] md:h-[400px] md-w[400px]">
                  {/* Placeholder for the hero image */}
                  <div className="rounded-lg bg-white shadow-lg h-full w-full flex items-center justify-center">
                    <div className="p-4 text-center">
                      <p className="text-gray-400 text-sm">
                        Imagem da nossa cobertura
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
