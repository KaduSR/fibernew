"use client";

export function FloatingButtons() {

  return (
    <div className="fixed bottom-14 right-2 z-60 flex flex-col gap-4 mr-6">
      {/* Botão de Contato WhatsApp */}
      <div className="flex size-16 cursor-pointer items-center justify-center rounded-full px-3 py-3 transition-all duration-500 ease-in-out dark:bg-orange-200 right-2">
        <button
          className="focus-visible:ring-ring text-lg font-semibold ring-offset-background focus:ring-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-background-dark dark:focus:ring-yellow-200 bottom-14 right-2 mb-12 mr-6 cursor-pointer bg-whatsapp transition-all duration-500 ease-in-out rounded-full dark:bg-yellow-200 dark:hover:bg-yellow-500 px-4 py-3 group flex size-16 items-center justify-center fixed hover:w-80"
          aria-label="whatsapp"
          id="botaowpp"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:R7f1la:"
          data-state="closed"
        >

          <p
            className="mr-1 hidden animate-show-text text-left text-lg font-semibold normal-case leading-[22px] text-white group-hover:block group-hover:overflow-hidden group-hover:whitespace-nowrap dark:text-black"
            id="botaowpp-txt"
          >
            Contrate direto pelo whatsapp
          </p>
          <svg
            id="botaowpp-ic"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 17 17"
            fill="none"
            className="h-12 w-12 min-h-10 min-w-10 text-white group-hover:pl-1 dark:text-black justify-center"
          >
            <path
              d="M15.3002 8.32481C15.3002 11.9837 12.3114 14.9497 8.6238 14.9497C7.45315 14.9497 6.35336 14.6505 5.39652 14.1254L1.7002 15.3L2.90531 11.7455C2.29739 10.7473 1.94726 9.57647 1.94726 8.32481C1.94726 4.66596 4.93639 1.69995 8.6238 1.69995C12.3117 1.69995 15.3002 4.66596 15.3002 8.32481ZM8.6238 2.75501C5.52844 2.75501 3.01063 5.25363 3.01063 8.32481C3.01063 9.54352 3.4079 10.6722 4.07989 11.5903L3.37859 13.6589L5.5357 12.9733C6.42196 13.5552 7.48367 13.8946 8.62396 13.8946C11.7189 13.8946 14.2371 11.3963 14.2371 8.32512C14.2371 5.25393 11.719 2.75501 8.6238 2.75501ZM11.9952 9.85058C11.954 9.78304 11.845 9.74224 11.6815 9.66109C11.5177 9.57994 10.7129 9.1869 10.5633 9.13296C10.4133 9.07886 10.3039 9.05166 10.1949 9.2141C10.086 9.3767 9.77225 9.74224 9.6766 9.85058C9.58109 9.95923 9.48574 9.97283 9.32194 9.89153C9.15844 9.81039 8.63121 9.63872 8.00606 9.08566C7.51964 8.65529 7.19112 8.12399 7.09562 7.96124C7.00027 7.7988 7.08564 7.711 7.1674 7.63016C7.24114 7.55732 7.3312 7.44051 7.41295 7.34576C7.495 7.25087 7.5222 7.18332 7.57645 7.07482C7.63131 6.96648 7.60396 6.87173 7.56285 6.79028C7.52205 6.70913 7.19444 5.91006 7.05814 5.58487C6.92184 5.25998 6.78569 5.31408 6.69004 5.31408C6.59468 5.31408 6.48543 5.30048 6.37633 5.30048C6.26723 5.30048 6.08982 5.34112 5.93977 5.50357C5.78987 5.66616 5.36721 6.05905 5.36721 6.85798C5.36721 7.65705 5.95337 8.42908 6.03542 8.53728C6.11717 8.64547 7.16724 10.3385 8.83098 10.9888C10.4949 11.6387 10.4949 11.4218 10.795 11.3946C11.0948 11.3676 11.763 11.0019 11.8999 10.6229C12.0359 10.2433 12.0359 9.91828 11.9952 9.85058Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>

      {/* Botão de Alternar Tema */}

    </div>
  );
}

export default FloatingButtons;
