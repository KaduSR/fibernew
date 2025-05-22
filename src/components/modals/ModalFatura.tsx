"use client";

import React from "react";
import clsx from "clsx";

type ModalFaturaProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ModalFatura: React.FC<ModalFaturaProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={clsx(
        "no-scrollbar fixed left-1/2 top-1/2 z-50 max-w-lg -translate-x-1/2 -translate-y-1/2 border shadow-lg transition duration-200 flex h-dvh w-full flex-col overflow-y-auto bg-background dark:bg-background-dark md:h-[587px] md:max-w-[680px] sm:rounded-lg",
        isOpen
          ? "animate-in fade-in-0 zoom-in-95 slide-in-from-top-[48%]"
          : "hidden"
      )}
    >
      {/* Cabeçalho */}
      <div className="flex flex-col space-y-1.5 text-center sm:text-left bg-white px-6 pt-7 dark:bg-gray-700 md:px-12 md:pt-10">
        <h2 className="text-lg font-semibold leading-none tracking-tight mb-5 flex md:mb-0">
          <p className="font-barlow text-base font-medium text-gray-700 dark:text-white md:font-figtree md:text-2xl md:font-normal">
            2ª via da fatura
          </p>
        </h2>
        <div className="shrink-0 dark:bg-white h-[1px] w-full bg-gray-200 md:hidden" />
        <p className="w-[19rem] pb-4 pt-4 text-left text-base text-gray-600 dark:text-white md:w-full md:pb-11 md:pt-0">
          Acesse a sua fatura através do aplicativo Brisacliente
        </p>
      </div>

      {/* Conteúdo principal */}
      <main className="mt-6 flex flex-col px-6 md:px-12 md:pt-0">
        <p className="mb-12 hidden select-none font-figtree text-xl font-normal leading-6 text-gray-600 dark:text-white md:block">
          Baixe e pague a sua fatura através do nosso aplicativo Brisacliente ou
          acesse no navegador
        </p>

        {/* Botões */}
        <div className="flex flex-col gap-14 md:flex-row md:justify-between">
          {/* Cliente Fibra */}
          <div>
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8 text-orange-500 dark:text-white">...</svg>
              <h2 className="text-xl font-figtree dark:text-white">
                Cliente Fibra
              </h2>
            </div>
            <a
              href="https://brisacliente.brisanet.com.br/#/areaassinante/auth"
              target="_blank"
              className="mt-7 inline-flex items-center justify-center w-60 h-12 px-4 py-3 bg-orange-500 text-white font-semibold text-lg rounded-lg hover:bg-orange-600 dark:bg-yellow-200 dark:text-black dark:hover:bg-yellow-500"
            >
              Brisacliente Fibra
            </a>
          </div>

          {/* Cliente Móvel */}
          <div>
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8 text-orange-500 dark:text-white">...</svg>
              <h2 className="text-xl font-figtree dark:text-white">
                Brisacliente Móvel
              </h2>
            </div>
            <a
              href="https://brisaclientemovel.brisanet.com.br"
              target="_blank"
              className="mt-7 inline-flex items-center justify-center w-60 h-12 px-4 py-3 bg-orange-500 text-white font-semibold text-lg rounded-lg hover:bg-orange-600 dark:bg-yellow-200 dark:text-black dark:hover:bg-yellow-500"
            >
              Brisacliente Móvel
            </a>
          </div>
        </div>
      </main>

      {/* Botão de fechar */}
      <button
        onClick={onClose}
        type="button"
        aria-label="Fechar"
        className="absolute top-6 right-6 text-gray-400 hover:text-orange-500 dark:text-yellow-200 dark:hover:text-yellow-500"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 28 28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0002 26.5416C7.08183 26.5416 1.4585 20.9183 1.4585 13.9999..."
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
};

export default ModalFatura;
