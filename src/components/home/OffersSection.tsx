"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

type Offer = {
  id: number;
  speed: string;
  installation: string;
  fiber: string;
  wifi: string;
  download: string;
  upload: string;
  products: { icon: JSX.Element }[];
  price: string;
  discount: number;
};

const offers: Offer[] = [
  {
    id: 1,
    speed: "300MEGA",
    installation: "Instalação grátis",
    fiber: "Fibra Óptica",
    wifi: "Wi-Fi incluso",
    download: "300 Mbps Download",
    upload: "150 Mbps Upload",
    products: [
      { icon: <FaWhatsapp /> },
      { icon: <FaFacebookF /> },
      { icon: <FaInstagram /> },
      { icon: <FaYoutube /> },
    ],
    price: "R$ 89,90",
    discount: 10,
  },
  {
    id: 2,
    speed: "500MEGA",
    installation: "Instalação grátis",
    fiber: "Fibra Óptica",
    wifi: "Wi-Fi incluso",
    download: "500 Mbps Download",
    upload: "250 Mbps Upload",
    products: [
      { icon: <FaWhatsapp /> },
      { icon: <FaFacebookF /> },
      { icon: <FaInstagram /> },
      { icon: <FaYoutube /> },
    ],
    price: "R$ 109,90",
    discount: 10,
  },
  {
    id: 3,
    speed: "600MEGA",
    installation: "Instalação grátis",
    fiber: "Fibra Óptica",
    wifi: "Wi-Fi incluso",
    download: "600 Mbps Download",
    upload: "300 Mbps Upload",
    products: [
      { icon: <FaWhatsapp /> },
      { icon: <FaFacebookF /> },
      { icon: <FaInstagram /> },
      { icon: <FaYoutube /> },
    ],
    price: "R$ 119,90",
    discount: 10,
  },
  // ... adicione mais ofertas aqui
];

export function OffersSection() {
  return (
    <section id="offers-section-home" className="py-24 dark:bg-gray-900">
      <div className="2xl:container 2xl:mx-auto px-5 md:px-6 2xl:px-0">
        {/* Header */}
        <div className="flex flex-col-reverse items-start justify-between gap-6 md:flex-row md:items-center">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight dark:text-white">
            Aproveite nossas ofertas
          </h1>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-gray-600 dark:text-white">
              Ofertas válidas para:
            </p>
            <button
              type="button"
              className="flex items-center gap-1 text-black underline dark:text-yellow-200"
            >
              Rio das Flores
{/*              <svg viewBox="0 0 13 13" fill="none" className="h-4 w-4">
                <path
                  d="M10.834 4.333L6.5 8.666 2.167 4.333"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg> */}
            </button>
          </div>
        </div>
        {/* Swiper */}
        <Swiper
          slidesPerView="auto"
          spaceBetween={22}
          breakpoints={{
            640: { slidesPerView: 1},
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: false }}
          className="max-w-[1440px] justify-center"
        >
          {offers.map((offer) => {
            const priceNumber = Number(
              offer.price.replace("R$", "").replace(",", ".").trim()
            );
            const discounted = (priceNumber - offer.discount).toFixed(2);

            return (
              <SwiperSlide
                key={offer.id}
                className="max-w-[1080px] justify-center"
              >
                <div className="bg-white dark:bg-gray-800 p-6 shadow-lg dark:border dark:border-gray-700  flex-col md:justify-center">
                  {/* Cabeçalho */}
                  <div className="mb-1 justify-center">
                    <div className="flex items-center gap-1  text-sm text-gray-600 dark:text-white">
                      <span className="h-2 w-4 bg-orange-400 dark:bg-white"></span>
                      INTERNET
                    </div>
                    <h2 className="text-xl font-bold dark:text-white mt-2 md:items-center">
                      {offer.speed}
                    </h2>
                  </div>

                  {/* Recursos */}
                  <ul className="space-y-3 mb-6 text-sm text-gray-600 dark:text-gray-300 flex-1 md:items-center">
                    {[
                      offer.installation,
                      offer.fiber,
                      offer.wifi,
                      offer.download,
                      offer.upload,
                    ].map((text) => (
                      <li key={text} className="flex items-center gap-2">
                        <span className="h-1 w-1 bg-gray-600 dark:bg-white rounded-full"></span>
                        {text}
                      </li>
                    ))}
                  </ul>

                  {/* Produtos inclusos */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      Aproveite os serviços:
                    </p>
                    <div className="flex gap-2">
                      {offer.products.map((p, i) => (
                        <span
                          key={i}
                          className="p-2 rounded-lg bg-green-600 dark:bg-orange-200"
                        >
                          {p.icon}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Preço e CTA */}
                  <div>
                    <p className="text-green-500 dark:text-green-400 text-sm mb-2">
                      Desconto até o vencimento de R${" "}
                      {offer.discount.toFixed(2).replace(".", ",")}
                    </p>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-2xl line-through text-gray-400 dark:text-gray-500">
                        R${priceNumber.toFixed(2).replace(".", ",")}
                      </span>
                      <span className="text-3xl font-bold dark:text-white">
                        R${discounted.replace(".", ",")}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        /mês
                      </span>
                    </div>
                    <button className="w-full bg-orange-500 dark:bg-green-500 text-white dark:text-white py-3 rounded-lg hover:opacity-90 transition-opacity">
                      Assinar agora
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default OffersSection;
