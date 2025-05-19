import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

const offers = [
  {
    id: 1,
    speed: "350MEGA",
    installation: "Pagamento somente da primeira na instalação",
    fiber: "100% fibra óptica",
    wifi: "WI-Fi grátis",
    download: "Download de 300 Mega",
    upload: "Upload de 150 Mega",
    price: "R$ 89,90",
    discount: 10.00,
    products: [
      {
        alt: "Ícone do aplicativo Whatsapp em fundo Verde",
        icon: <FaWhatsapp className="text-white" />,
      },
      {
        alt: "Ícone do aplicativo Instagram em fundo Verde",
        icon: <FaInstagram className="text-white" />,
      },
      {
        alt: "Ícone do aplicativo Facebook em fundo Verde",
        icon: <FaFacebookF className="text-white" />,
      },
      {
        alt: "Ícone do aplicativo Youtube em fundo Verde",
        icon: <FaYoutube className="text-white" />,
      },
    ],
  },
  {
    id: 2,
    speed: "500MEGA",
    installation: "Pagamento somente da primeira na instalação",
    fiber: "100% fibra óptica",
    wifi: "WI-Fi grátis",
    download: "Download de 500 Mega",
    upload: "Upload de 250 Mega",
    price: "R$ 109,90",
    discount: 10.00,
    products: [
      {
        alt: "Ícone do aplicativo Whatsapp em fundo Verde",
        icon: <FaWhatsapp className="text-white" />,
      },
      {
        alt: "Ícone do aplicativo Instagram em fundo Verde",
        icon: <FaInstagram className="text-white" />,
      },
      {
        alt: "Ícone do aplicativo Facebook em fundo Verde",
        icon: <FaFacebookF className="text-white" />,
      },
      {
        alt: "Ícone do aplicativo Youtube em fundo Verde",
        icon: <FaYoutube className="text-white" />,
      },
    ],
  },
  {
    id: 3,
    speed: "600 MEGA",
    installation: "Pagamento somente da primeira na instalação",
        fiber: "100% fibra óptica",
        wifi: "WI-Fi grátis",
        download: "Download de 600 Mega",
    upload: "Upload de 300 Mega",
    price: "R$ 119,90",
    discount: 10.00,
    products: [
      {
        alt: "Ícone do aplicativo Whatsapp em fundo Verde",
        icon: <FaWhatsapp className="text-white" />,
      },
      {
        alt: "Ícone do aplicativo Instagram em fundo Verde",
        icon: <FaInstagram className="text-white" />,
      },
      {
        alt: "Ícone do aplicativo Facebook em fundo Verde",
        icon: <FaFacebookF className="text-white" />,
      },
      {
        alt: "Ícone do aplicativo Youtube em fundo Verde",
        icon: <FaYoutube className="text-white" />,
      },
    ],
  },
];

function OffersSection() {
  return (
    <section id="offers-section-home" className="max-w-[1440px] mx-auto py-24">
      <header className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 px-6 md:px-0">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight max-w-lg">
          Aproveite as nossas ofertas
        </h1>
        <div className="mt-4 md:mt-0 text-right">
          <p className="text-xs text-white mb-1">Ofertas válidas para:</p>
          <button
            aria-expanded="false"
            aria-haspopup="listbox"
            className="text-yellow-400 font-semibold underline flex items-center justify-end gap-1 text-sm"
            type="button"
          >
            Rio das Flores
            <svg
              aria-hidden="true"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 9l-7 7-7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>          
        </div>
      </header>
      <nav className="flex border-b border-white border-opacity-60 mb-8 max-w-[1280px] px-6 md:px-0 items-center">
        <div role="tablist" aria-orientation="horizontal" tabIndex={0} className="bg-muted no-scrollbar h-10 tranform flex-nowrap items-center justify-center overflow-y-hidden overflow-x-scroll over">
        <button aria-current="page" className="text-yellow-400 font-semibold text-sm pb-1 border-b-2 border-yellow-400 mr-8">
          Internet
        </button>
        </div>
      </nav>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-[1280px] mx-auto px-6 md:px-6">
{offers.map((offer) => {
  // Parse price as number, remove 'R$' and spaces, and replace ',' with '.' if needed
  const priceNumber = Number(
    offer.price.replace('R$', '').replace(/\s/g, '').replace(',', '.')
  );
  const discountedPrice = (priceNumber - offer.discount).toFixed(2);

  return (
    <article
      key={offer.id}
      aria-label={`Plano ${offer.speed} de internet`}
    >
      <div>
        <div className="flex items-center gap-1 mb-2 text-[10px] font-semibold uppercase text-opacity-80 ">
          <i className="fas fa-wi-fi"></i>
          INTERNET
        </div>
        <h2 className="text-xl font-extrabold b-3 border-b border-white border-opacity-60 pb-1 max-w-max ">
          {offer.speed}
        </h2>
        <ul className="text-xs space-y-1 mb-3 text-white text-opacity-90">
          <li className="flex items-center gap-2">
            <i className="fas fa-cog text-[10px]"></i>
            {offer.installation}
          </li>
          <li className="flex items-center gap-2">
            <i className="fas fa-fiber-optic text-[10px]"></i>
            {offer.fiber}
          </li>
          <li className="flex items-center gap-2">
            <i className="fas fa-wifi text-[10px]"></i>
            {offer.wifi}
          </li>
          <li className="flex items-center gap-2">
            <i className="fas fa-download text-[10px]"></i>
            {offer.download}
          </li>
          <li className="flex items-center gap-2">
            <i className="fas fa-upload text-[10px]"></i>
            {offer.upload}
          </li>
        </ul>
        <p className="text-[11px] mb-3 text-white text-opacity-90">
          Aproveite esses serviços com a nossa internet de alta velocidade.
        </p>
        <div className="flex gap-2 mb-5">
          {offer.products.map((product, idx) => (
            <span key={idx} title={product.alt} className="rounded bg-green-600 p-1">
              {product.icon}
            </span>
          ))}
        </div>
        <button
          className="bg-yellow-400 font-semibold text-sm flex items-center gap-1 mb-6"
          type="button"
        >
          Saiba mais
          <i className="fas fa-plus-circle"></i>
        </button>
      </div>
      <div>
        <p className="text-xs text-green-400 mb-1">
          Pagando até a data de vencimento, desconto de R$ {offer.discount.toFixed(2).replace('.', ',')}
        </p>
        <p className="text-2xl font-semibold mb-4">
          R$
          <span className="text-3xl line-through opacity-60 mr-2">
            {priceNumber.toFixed(2).replace('.', ',')}
          </span>
          <span className="text-3xl font-semibold">
            {discountedPrice.replace('.', ',')}
          </span>
          <span className="font-normal text-base">
            /mês
          </span>
        </p>
        <button className="w-full bg-yellow-400 text-black font-bold py-3 rounded-b-xl hover:bg-yellow-500 transition" type="button">
          Assinar agora
        </button>
      </div>
    </article>
  );
})}
      </div>
    </section>
  );
}

export default OffersSection;