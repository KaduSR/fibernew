// src/components/home/YourComboSection.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react"; // example for arrows, if needed

export default function YourComboSection() {
  return (
    <section
      id="your-combo"
      className="bg-white pb-20 dark:bg-gray-700 md:pb-24 md:pt-20 lg:pt-24"
    >
      <div className="flex flex-col gap-y-10 2lg:container 2lg:mx-auto 2lg:flex-row 2lg:justify-end 2lg:gap-x-[4.375rem]">
        {/* Grid de ofertas */}
        <div className="relative px-5 md:mx-auto md:max-w-[39.375rem] md:px-0">
          <div className="grid grid-cols-2 grid-rows-2 gap-y-1 md:grid-cols-3 md:grid-rows-1 md:gap-x-4 w-full ">
            {/* Card 1 */}
            <div className="relative flex h-[160px] w-full items-center gap-4 rounded-[1.25rem] bg-background pr-4 dark:bg-background-dark md:mt-[2.6875rem] md:h-[21.875rem] md:w-[12.75rem] md:flex-col md:gap-6 md:pr-0">
              <div className="relative bottom-[13px] h-[185px] w-[158px] min-w-[158px] object-contain md:bottom-[2.6875rem] md:h-[242px] md:w-[204px]">
                <Image
                  src="/img/propagandas/Controle1.png"
                  alt="Jovem com headset e controle gamer"
                  width={242}
                  height={202}
                  className="object-contain"
                />
              </div>
              <div className="relative md:bottom-[2.6875rem] md:w-[9.5625rem]">
                <h3 className="font-figtree text-xl font-medium text-gray-700 dark:text-white">
                  Internet
                </h3>
                <div className="mb-3 mt-2 h-0.5 w-9 rounded-md bg-orange-400 dark:bg-white" />
                <p className="font-barlow text-xs font-normal text-gray-600 dark:text-white">
                  Serviços de internet 100% fibra óptica.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="relative flex h-[180px] w-full items-center gap-4 rounded-[1.25rem] bg-background pr-4 dark:bg-background-dark md:mt-[2.6875rem] md:h-[21.875rem] md:w-[12.75rem] md:flex-col md:gap-6 md:pr-0">
              <div className="relative bottom-[13px] h-[185px] w-[158px] min-w-[158px] object-contain md:bottom-[2.6875rem] md:h-[242px] md:w-[204px]">
                <Image
                  src="/img/propagandas/MulherFone.png"
                  alt="Mulher com smartphone e fone de ouvido"
                  width={242}
                  height={202}
                  className="object-contain"
                />
              </div>
              <div className="relative md:bottom-[2.6875rem] md:w-[9.5625rem]">
                <h3 className="font-figtree text-xl font-medium text-gray-700 dark:text-white">
                  Entretenimento
                </h3>
                <div className="mb-3 mt-2 h-0.5 w-9 rounded-md bg-orange-400 dark:bg-white" />
                <p className="font-barlow text-xs font-normal text-gray-600 dark:text-white">
                  Serviços de streaming de filmes, canais ao vivo, músicas e
                  mais.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="relative flex h-[160px] w-full items-center gap-4 rounded-[1.25rem] bg-background pr-4 dark:bg-background-dark md:mt-[2.6875rem] md:h-[21.875rem] md:w-[12.75rem] md:flex-col md:gap-6 md:pr-0">
              <div className="relative bottom-[13px] h-[185px] w-[158px] min-w-[158px] object-contain md:bottom-[2.6875rem] md:h-[242px] md:w-[204px]">
                <Image
                  src="/img/propagandas/homem-feliz-com-smartphone.png"
                  alt="Homem com smartphone"
                  width={242}
                  height={202}
                  className="object-contain"
                />
              </div>
              <div className="relative md:bottom-[2.6875rem] md:w-[9.5625rem]">
                <h3 className="font-figtree text-xl font-medium text-gray-700 dark:text-white">
                  Wifi
                </h3>
                <div className="mb-3 mt-2 h-0.5 w-9 rounded-md bg-orange-400 dark:bg-white" />
                <p className="font-barlow text-xs font-normal text-gray-600 dark:text-white">
                  Aproveite o máximo do seu celular com a nossa rede
                </p>
              </div>
            </div>
          </div>

          {/* Texto e CTA */}
          <div className="flex flex-col px-5 md:mx-auto md:flex md:w-[42.5rem] md:px-6 2lg:w-[29.25rem] 2lg:p-0 justify-center">
            <h2 className="mb-2 font-figtree text-[2rem] font-bold leading-9 text-blue-700 dark:text-white md:mx-auto md:mb-8 md:text-center md:text-[2.5rem] md:leading-[2.75rem] 2lg:w-[29.25rem] 2lg:text-left">
              Aproveite os nossos serviços de{" "}
              <span className="relative">qualidade </span>e nosso suporte
              técnico
            </h2>
            <Link
              id="ctacombo-txt"
              href="https://wa.me/552424581861?text=Oi!%20Tenho%20interesse%20na%20internet%20da%20Fiber.NET.%20Pode%20me%20passar%20mais%20informações,%20por%20favor?"
              className="focus-visible:ring-ring inline-flex items-center justify-center rounded-lg text-lg ring-offset-background transition-colors focus:ring-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-background-dark dark:focus:ring-yellow-200 border-none bg-orange-500 font-semibold text-white hover:bg-orange-600 dark:bg-yellow-200 dark:text-black dark:hover:bg-yellow-500 h-12 px-4 py-3 m-auto md:flex 2lg:m-0"
            >
              Fale conosco
            </Link>
          </div>

          {/* CTA mobile */}
          <Link
            id="ctacombo-txt"
            href="/combo-internet-telefonia-e-mais"
            className="focus-visible:ring-ring inline-flex items-center justify-center rounded-lg text-lg ring-offset-background transition-colors focus:ring-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-background-dark dark:focus:ring-yellow-200 w-full max-w-[496px] border-none bg-orange-500 font-semibold text-white hover:bg-orange-600 dark:bg-yellow-200 dark:text-black dark:hover:bg-yellow-500 h-12 px-4 py-3 mt-8 md:hidden"
          >
            Conhecer as ofertas
          </Link>
        </div>
      </div>
    </section>
  );
}
