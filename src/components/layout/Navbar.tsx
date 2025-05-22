import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-20 hidden w-screen min-w-[375px] bg-orange-500 dark:bg-background-dark 2md:flex">
      <div className="container flex flex-row items-center justify-between px-6 2lg:px-0">
        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:R9f1la:"
          data-state="closed"
          className="flex cursor-pointer items-center gap-1 text-xs font-medium text-white transition-all duration-500 hover:opacity-70 focus-visible:p-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500 dark:text-foreground-dark dark:focus-visible:ring-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 18"
            fill="none"
            className="size-4 text-white dark:text-foreground-dark"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.3999 7.52795C1.41182 4.0212 4.26426 1.18807 7.771 1.19999C11.2778 1.2119 14.1109 4.06434 14.099 7.57109V7.643C14.0558 9.9225 12.783 12.0294 11.2226 13.6761C10.3302 14.6028 9.33366 15.4232 8.25279 16.121C7.96378 16.371 7.53509 16.371 7.24607 16.121C5.63476 15.0722 4.22057 13.7481 3.06818 12.2092C2.04108 10.8672 1.45793 9.23843 1.3999 7.54952L1.3999 7.52795Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <circle
              cx="7.74937"
              cy="7.65025"
              r="2.03501"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></circle>
          </svg>
          <h2 className="text-xs md:text-base">Juazeiro do Norte</h2>
          <svg
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-0.5 size-4 text-white dark:text-foreground-dark"
          >
            <path
              d="M10.834 4.333L6.5 8.666 2.167 4.333"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <div className="flex flex-row items-center gap-10">
          <div className="flex flex-row items-center justify-center gap-10">
            <button className="font-barlow text-base font-semibold text-orange-500 transition-all duration-500 hover:underline focus-visible:p-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white dark:text-white dark:focus-visible:ring-yellow-200 2md:font-medium 2md:text-gray-100">
              1 - Conteúdo
            </button>
            <button className="font-barlow text-base font-semibold text-orange-500 transition-all duration-500 hover:underline focus-visible:p-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white dark:text-white dark:focus-visible:ring-yellow-200 2md:font-medium 2md:text-gray-100">
              2 - Menu
            </button>
            <button className="font-barlow text-base font-semibold text-orange-500 transition-all duration-500 hover:underline focus-visible:p-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white dark:text-white dark:focus-visible:ring-yellow-200 2md:font-medium 2md:text-gray-100">
              3 - Rodapé
            </button>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div
              data-orientation="vertical"
              role="none"
              className="shrink-0 dark:bg-white w-[1px] h-4 bg-white"
            ></div>
            <a
              className="text-base font-medium text-white hover:underline focus-visible:py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white dark:focus:ring-yellow-200"
              href="/acessibilidade"
            >
              Acessibilidade
            </a>
            <div
              data-orientation="vertical"
              role="none"
              className="shrink-0 dark:bg-white w-[1px] h-4 bg-white"
            ></div>
            <div className="mr-2">
              <div className="flex flex-row items-center gap-2">
                <button className="focus-visible:rounded-full focus-visible:p-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white flex flex-row items-center gap-2 text-lg font-medium leading-6 text-gray-600 dark:text-yellow-200 2md:text-base 2md:leading-5 2md:text-white 2md:dark:text-white hover:underline">
                  <span className="sr-only">ícone modo light/dark</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 15"
                    fill="none"
                    className="size-5 text-orange-500 dark:text-yellow-200 2md:text-white 2md:dark:text-white"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.68601 13.9974C7.67444 13.9977 7.66287 13.998 7.65128 13.9983C4.0624 14.0818 1.08533 11.2402 1.0018 7.65128C0.918272 4.0624 3.75992 1.08533 7.3488 1.0018C7.43261 0.99985 7.51609 0.999495 7.59921 1.00071L7.68601 13.9974ZM10.2132 14.4943C9.42417 14.8004 8.5695 14.9772 7.67455 14.998C3.53354 15.0944 0.0984513 11.8156 0.00207149 7.67455C-0.0943083 3.53354 3.18452 0.0984513 7.32553 0.00207149C8.84103 -0.0332009 10.262 0.383588 11.4593 1.12926C11.9914 1.437 12.4874 1.81045 12.9341 2.24438C14.356 3.62571 15.1622 5.50668 15.1753 7.47351C15.1884 9.44034 14.4074 11.3319 13.0041 12.7321C12.2107 13.5238 11.255 14.1217 10.2132 14.4943Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Alto contraste
                </button>
              </div>
            </div>
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:Rmhf1la:"
              data-state="closed"
              className="tab-focus mx-0 ml-6 mt-0 flex h-full w-24 items-center justify-around bg-orange-700 focus-visible:ring-white dark:bg-black 2md:ml-1 2md:h-12 2md:w-24"
            >
              <h3 className="text-xs font-medium text-white">A-</h3>
              <h3 className="text-xs font-medium text-white">A</h3>
              <h3 className="text-xs font-medium text-white">A+</h3>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
