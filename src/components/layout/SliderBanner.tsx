// components/SliderBanner.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Slide {
  id: number;
  image: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

const SliderBanner: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const slides: Slide[] = [
    {
      id: 1,
      image: "/img/banner/banner1.jpg",
      alt: "Promoção de Verão",
      title: "Ofertas Especiais",
      subtitle: "Até 50% de desconto em itens selecionados",
    },
    {
      id: 2,
      image: "/img/banner/banner2.jpg",
      alt: "Coleção Nova",
      title: "Nova Coleção",
      subtitle: "Descubra as últimas tendências da temporada",
    },
    {
      id: 3,
      image: "/img/banner/banner3.jpg",
      alt: "Frete Grátis",
      title: "Entrega Rápida",
      subtitle: "Frete grátis para todo o Brasil",
    },
  ];

  if (!isClient) {
    return (
      <div className="relative w-full h-[80vh] max-h-[800px] bg-gray-200">
        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />

        {/* Conteúdo placeholder */}
        <div className="absolute left-10 md:left-20 bottom-20 z-20 text-white max-w-lg">
          <div className="h-12 bg-gray-400 rounded mb-4 w-3/4 animate-pulse"></div>
          <div className="h-8 bg-gray-400 rounded mb-6 w-1/2 animate-pulse"></div>
          <div className="h-12 bg-gray-500 rounded-full w-32 animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[80vh] max-h-[800px]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet bg-white opacity-50",
          bulletActiveClass:
            "swiper-pagination-bullet-active !bg-primary !opacity-100",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Overlay gradiente */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />

            {/* Imagem de fundo */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={slide.image}
                alt={slide.alt}
                className="object-cover w-full h-full"
                loading={slide.id === 1 ? "eager" : "lazy"}
              />
            </div>

            {/* Conteúdo do slide */}
            <div className="absolute left-5 md:left-20 bottom-10 md:bottom-20 z-20 text-white max-w-xs md:max-w-lg">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6">
                {slide.subtitle}
              </p>
              <button className="bg-primary hover:bg-primary-dark px-6 py-2 md:px-8 md:py-3 rounded-full text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Ver Oferta
              </button>
            </div>
          </SwiperSlide>
        ))}

        {/* Navegação personalizada */}
        <div className="swiper-button-prev !text-white !left-4 after:!text-xl md:after:!text-2xl"></div>
        <div className="swiper-button-next !text-white !right-4 after:!text-xl md:after:!text-2xl"></div>
      </Swiper>
    </div>
  );
};

export default SliderBanner;
