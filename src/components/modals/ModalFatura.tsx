// components/ModalFatura.tsx
"use client";

import { useEffect } from "react";

export default function ModalFatura({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <div className="relative z-50 w-full max-w-lg rounded-lg bg-white dark:bg-gray-700 p-6 shadow-xl overflow-y-auto max-h-[90vh]">
        {/* Conteúdo do modal que você colou acima */}
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          2ª via da fatura
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Acesse a sua fatura através do aplicativo Brisacliente
        </p>

        <a
          className="block w-full text-center bg-orange-500 text-white dark:bg-yellow-200 dark:text-black font-medium py-3 rounded-lg hover:opacity-90 mb-4"
          href="https://brisacliente.brisanet.com.br/#/areaassinante/auth"
          target="_blank"
        >
          Brisacliente Fibra
        </a>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-orange-500 dark:text-yellow-200"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
