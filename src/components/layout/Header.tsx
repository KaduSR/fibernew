"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";



export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className="z-10 flex min-w-[375px] flex-col items-center">
      <div className="flex w-full flex-col">
        <div className="container flex h-[3.75rem] items-center justify-between bg-background dark:bg-background-dark md:h-[5.5rem] md:px-6 2lg:px-0">
          <div className="flex items-center justify-between gap-11">
            <Link
              aria-label="Link para redirecionar para a tela inicial do site"
              className="transition-all duration-500 focus-visible:p-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500 dark:ring-yellow-200 dark:focus-visible:ring-yellow-200 cursor-default"
              data-state="closed"
              href="/"
            >
              <span className="sr-only">
                Link para redirecionar para a tela inicial do site
              </span>
              <Image
                src="/img/logos/Imagem1.png"
                alt="Logo"
                width="132"
                height="24"
                className="object-cover" /* mantém proporção e cobre todo o pai */
                priority
              />
            </Link>
            <nav
              aria-label="Main"
              data-orientation="horizontal"
              dir="ltr"
              className="relative items-start justify-start container z-[2] hidden 2md:flex"
            >
              <div style={{ position: "relative" }}>
                <ul
                  data-orientation="horizontal"
                  className="group flex flex-1 list-none items-center justify-start h-[4.75rem] gap-6 space-x-0 xl:gap-10"
                  dir="ltr"
                >
                  <li>
                    <Link
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background text-sm font-medium disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 group m-0 select-none p-0 focus:outline-none"
                      href="/"
                      data-radix-collection-item=""
                    >
                      <div className="flex flex-col items-center justify-center gap-2">
                        <h2 className="dark:text-foreground-dark dark:group-focus:text-yellow-500 md:text-sm lg:text-base font-medium leading-5 text-gray-700 hover:text-gray-700 group-focus:text-gray-700 group-data-[state=open]:text-gray-700 dark:hover:text-foreground-dark">
                          Para sua casa
                        </h2>
                        <div
                          data-orientation="horizontal"
                          role="none"
                          className="shrink-0 w-12 block h-[3px] max-w-[96px] rounded-t-lg bg-blue-500 dark:bg-gray-100"
                        ></div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <button
                      id="radix-:Riaf1la:-trigger-empresa"
                      data-state="closed"
                      aria-expanded="false"
                      aria-controls="radix-:Riaf1la:-content-empresa"
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background text-sm font-medium disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 group group m-0 select-none p-0 focus:outline-none"
                      tabIndex={0}
                      data-radix-collection-item=""
                    >
                      <div className="flex flex-col items-center justify-center gap-2">
                        <h2 className="leading-5 text-gray-600 hover:text-orange-600 group-focus:text-orange-600 dark:text-foreground-dark dark:hover:text-yellow-500 dark:group-focus:text-yellow-500 md:text-sm lg:text-base group-focus-visible:text-orange-600 group-data-[active]:bg-orange-500 group-data-[state=open]:text-orange-500 dark:group-data-[state=open]:text-yellow-500">
                          Empresas
                        </h2>
                        <div
                          data-orientation="horizontal"
                          role="none"
                          className="shrink-0 h-[3px] w-12 rounded-t-lg bg-transparent dark:bg-transparent"
                        ></div>
                      </div>
                      <span className="sr-only">Seta apontada para baixo</span>
                      <svg
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative top-[-3px] ml-1 size-4 text-gray-600 group-focus-visible:text-orange-600 group-data-[state=open]:text-orange-600 dark:text-yellow-200 dark:group-focus:text-yellow-500 dark:group-data-[state=open]:text-yellow-500"
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
                  </li>
                  <li>
                    <a
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background text-sm font-medium disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 group m-0 select-none p-0 focus:outline-none"
                      href="/parceiro"
                      data-radix-collection-item=""
                    >
                      <div className="flex flex-col items-center justify-center gap-2">
                        <h2 className="leading-5 text-gray-600 hover:text-orange-600 group-focus:text-orange-600 dark:text-foreground-dark dark:hover:text-yellow-500 dark:group-focus:text-yellow-500 md:text-sm lg:text-base">
                          Parceiros
                        </h2>
                        <div
                          data-orientation="horizontal"
                          role="none"
                          className="shrink-0 h-[3px] w-12 rounded-t-lg bg-transparent dark:bg-transparent"
                        ></div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background text-sm font-medium disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 group m-0 select-none p-0 focus:outline-none"
                      href="/indiqueamigo"
                      data-radix-collection-item=""
                    >
                      <div className="flex flex-col items-center justify-center gap-2">
                        <h2 className="leading-5 text-gray-600 hover:text-orange-600 group-focus:text-orange-600 dark:text-foreground-dark dark:hover:text-yellow-500 dark:group-focus:text-yellow-500 md:text-sm lg:text-base">
                          Indique um amigo
                        </h2>
                        <div
                          data-orientation="horizontal"
                          role="none"
                          className="shrink-0 h-[3px] w-12 rounded-t-lg bg-transparent dark:bg-transparent"
                        ></div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="absolute left-6 top-[95%] flex justify-center xl:left-0"></div>
            </nav>
          </div>
          <div className="flex h-10 items-center justify-center lg:gap-2 xl:mr-3 2lg:gap-8">
            <div
              data-orientation="vertical"
              role="none"
              className="shrink-0 dark:bg-white w-[1px] h-10 bg-gray-200"
            ></div>
            <nav
              aria-label="Main"
              data-orientation="horizontal"
              dir="ltr"
              className="relative items-start justify-start container z-[2] hidden 2md:flex"
            >
              <div style={{ position: "relative" }}>
                <ul
                  data-orientation="horizontal"
                  className="group flex flex-1 list-none items-center justify-start space-x-1 h-[4.75rem]"
                  dir="ltr"
                >
                  <li>
                    <button
                      id="radix-:Rkaf1la:-trigger-assine"
                      data-state="closed"
                      aria-expanded="false"
                      aria-controls="radix-:Rkaf1la:-content-assine"
                      className="group px-4 dark:bg-gray-800 group group ml-0 inline-flex h-10 w-max select-none items-center justify-center rounded-md bg-transparent py-2 pl-0 pr-4 font-figtree text-lg font-medium leading-6 text-orange-500 hover:text-orange-600 focus:text-orange-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-orange-500 data-[state=open]:text-orange-600 dark:text-foreground-dark dark:hover:text-yellow-500 dark:focus:text-yellow-500 dark:data-[state=open]:text-yellow-500"
                      tabIndex={0}
                      data-radix-collection-item=""
                    >
                      Assine já
                      <span className="sr-only">Seta apontada para baixo</span>
                      <svg
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative top-[1px] ml-1 size-5 text-orange-500 group-focus:text-orange-600 group-data-[state=open]:text-orange-600 dark:text-yellow-200 dark:group-focus:text-yellow-500 dark:group-data-[state=open]:text-yellow-500"
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
                  </li>
                  <li>
                    <button
                      id="radix-:Rkaf1la:-trigger-eusoucliente"
                      data-state="closed"
                      aria-expanded="false"
                      aria-controls="radix-:Rkaf1la:-content-eusoucliente"
                      className="group dark:bg-gray-800 group group inline-flex h-10 w-max select-none items-center justify-center rounded-md bg-transparent px-4 py-2 font-figtree text-lg font-medium leading-6 text-orange-500 hover:text-orange-600 focus:text-orange-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-orange-500 data-[state=open]:text-orange-600 dark:text-foreground-dark dark:hover:text-yellow-500 dark:focus:text-yellow-500 dark:data-[state=open]:text-yellow-500"
                      data-radix-collection-item=""
                    >
                      Área do cliente
                      <svg
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative top-[1px] ml-1 size-5 text-orange-500 group-focus:text-orange-600 group-data-[state=open]:text-orange-600 dark:text-yellow-200 dark:group-focus:text-yellow-500 dark:group-data-[state=open]:text-yellow-500"
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
                  </li>
                </ul>
              </div>
              <div className="absolute left-6 top-[95%] flex justify-center xl:left-0"></div>
            </nav>
          </div>
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 dark:bg-white w-full hidden h-[1px] bg-gray-200 md:pl-4 2md:block"
        ></div>
        <nav
          aria-label="Main"
          data-orientation="horizontal"
          dir="ltr"
          className="relative items-start justify-start container z-[1] hidden md:pl-6 2md:flex 2lg:pl-0"
        >
          <div style={{ position: "relative" }}>
            <ul
              data-orientation="horizontal"
              className="group flex flex-1 list-none items-center justify-start space-x-1 h-20"
              dir="ltr"
            >
              <li>
                <button
                  id="radix-:Rqf1la:-trigger-internet"
                  data-state="closed"
                  aria-expanded="false"
                  aria-controls="radix-:Rqf1la:-content-internet"
                  className="group px-4 dark:bg-gray-800 group group inline-flex h-10 w-max select-none items-center justify-center rounded-md bg-transparent py-2 pr-4 font-barlow text-lg font-medium leading-6 text-gray-600 hover:text-blue-600 focus:text-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-blue-500 data-[first=true]:pl-0 data-[state=open]:text-blue-500 dark:text-foreground-dark dark:hover:text-yellow-500 dark:focus:text-yellow-500 dark:focus-visible:text-yellow-500 dark:data-[state=open]:text-yellow-500"
                  data-first="true"
                  tabIndex={0}
                  data-radix-collection-item=""
                >
                  <div className="flex flex-col items-center justify-center gap-1">
                    <h2 className="">Internet</h2>
                  </div>
                  <span className="sr-only">Abrir contéudo</span>
                  <svg
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative top-[1px] ml-1 size-4 text-gray-600 transition duration-200 group-focus-visible:text-blue-600 group-data-[state=open]:rotate-180 group-data-[state=open]:text-blue-600 dark:text-yellow-200 dark:group-focus-within:text-yellow-500 dark:group-data-[state=open]:text-yellow-500"
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
              </li>
              <li>
                <a
                  className="group dark:bg-gray-800 group inline-flex h-10 w-max select-none items-center justify-center rounded-md bg-transparent px-4 py-2 font-barlow text-lg font-medium leading-6 text-gray-600 hover:text-blue-600 focus:text-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-blue-500 data-[first=true]:pl-0 data-[state=open]:text-blue-500 dark:text-foreground-dark dark:hover:text-yellow-500 dark:focus:text-yellow-500 dark:focus-visible:text-yellow-500 dark:data-[state=open]:text-yellow-500"
                  href="/internet-movel-4g-5g"
                  data-radix-collection-item=""
                >
                  <div className="flex flex-col items-center justify-center gap-1">
                    <h2 className="">Móvel 5G</h2>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="group dark:bg-gray-800 group inline-flex h-10 w-max select-none items-center justify-center rounded-md bg-transparent px-4 py-2 font-barlow text-lg font-medium leading-6 text-gray-600 hover:text-blue-600 focus:text-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-blue-500 data-[first=true]:pl-0 data-[state=open]:text-blue-500 dark:text-foreground-dark dark:hover:text-yellow-500 dark:focus:text-yellow-500 dark:focus-visible:text-yellow-500 dark:data-[state=open]:text-yellow-500"
                  href="/combo-internet-telefonia-e-mais"
                  data-radix-collection-item=""
                >
                  <div className="flex flex-col items-center justify-center gap-1">
                    <h2 className="">Combos</h2>
                  </div>
                </a>
              </li>
              <li>
                <button
                  id="radix-:Rqf1la:-trigger-streaming"
                  data-state="closed"
                  aria-expanded="false"
                  aria-controls="radix-:Rqf1la:-content-streaming"
                  className="group dark:bg-gray-800 group group inline-flex h-10 w-max select-none items-center justify-center rounded-md bg-transparent px-4 py-2 font-barlow text-lg font-medium leading-6 text-gray-600 hover:text-blue-600 focus:text-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-blue-500 data-[state=open]:text-blue-500 dark:text-foreground-dark dark:hover:text-yellow-500 dark:focus:text-yellow-500 dark:focus-visible:text-yellow-500 dark:data-[state=open]:text-yellow-500"
                  data-first="true"
                  tabIndex={0}
                  data-radix-collection-item=""
                >
                  <div className="flex flex-col items-center justify-center gap-1">
                    <h2 className="">Streaming</h2>
                  </div>
                  <span className="sr-only">Abrir contéudo</span>
                  <svg
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative top-[1px] ml-1 size-4 text-gray-600 transition duration-200 group-focus-visible:text-blue-600 group-data-[state=open]:rotate-180 group-data-[state=open]:text-blue-600 dark:text-yellow-200 dark:group-focus-within:text-yellow-500 dark:group-data-[state=open]:text-yellow-500"
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
              </li>
              <li>
                <button
                  id="radix-:Rqf1la:-trigger-servicos"
                  data-state="closed"
                  aria-expanded="false"
                  aria-controls="radix-:Rqf1la:-content-servicos"
                  className="group dark:bg-gray-800 group group inline-flex h-10 w-max select-none items-center justify-center rounded-md bg-transparent px-4 py-2 font-barlow text-lg font-medium leading-6 text-gray-600 hover:text-blue-600 focus:text-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-blue-500 data-[state=open]:text-blue-500 dark:text-foreground-dark dark:hover:text-yellow-500 dark:focus:text-yellow-500 dark:focus-visible:text-yellow-500 dark:data-[state=open]:text-yellow-500"
                  data-first="false"
                  tabIndex={0}
                  data-radix-collection-item=""
                >
                  <div className="flex flex-col items-center justify-center gap-1">
                    <h2 className="">Mais Serviços</h2>
                  </div>
                  <span className="sr-only">Abrir contéudo</span>
                  <svg
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative top-[1px] ml-1 size-4 text-gray-600 transition duration-200 group-focus-visible:text-blue-600 group-data-[state=open]:rotate-180 group-data-[state=open]:text-blue-600 dark:text-yellow-200 dark:group-focus-within:text-yellow-500 dark:group-data-[state=open]:text-yellow-500"
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
              </li>
              <li>
                <a
                  className="group dark:bg-gray-800 group inline-flex h-10 w-max select-none items-center justify-center rounded-md bg-transparent px-4 py-2 font-barlow text-lg font-medium leading-6 text-gray-600 hover:text-blue-600 focus:text-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-blue-500 data-[first=true]:pl-0 data-[state=open]:text-blue-500 dark:text-foreground-dark dark:hover:text-yellow-500 dark:focus:text-yellow-500 dark:focus-visible:text-yellow-500 dark:data-[state=open]:text-yellow-500"
                  href="/seguranca"
                  data-radix-collection-item=""
                >
                  <div className="flex flex-col items-center justify-center gap-1">
                    <h2 className="">Segurança</h2>
                  </div>
                </a>
              </li>
              <li>
                <button
                  id="radix-:Rqf1la:-trigger-ajuda"
                  data-state="closed"
                  aria-expanded="false"
                  aria-controls="radix-:Rqf1la:-content-ajuda"
                  className="group dark:bg-gray-800 group group inline-flex h-10 w-max select-none items-center justify-center rounded-md bg-transparent px-4 py-2 font-barlow text-lg font-medium leading-6 text-gray-600 hover:text-blue-600 focus:text-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-blue-500 data-[state=open]:text-blue-500 dark:text-foreground-dark dark:hover:text-yellow-500 dark:focus:text-yellow-500 dark:focus-visible:text-yellow-500 dark:data-[state=open]:text-yellow-500"
                  data-first="true"
                  tabIndex={0}
                  data-radix-collection-item=""
                >
                  <div className="flex flex-col items-center justify-center gap-1">
                    <h2 className="">Ajuda</h2>
                  </div>
                  <span className="sr-only">Abrir contéudo</span>
                  <svg
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative top-[1px] ml-1 size-4 text-gray-600 transition duration-200 group-focus-visible:text-blue-600 group-data-[state=open]:rotate-180 group-data-[state=open]:text-blue-600 dark:text-yellow-200 dark:group-focus-within:text-yellow-500 dark:group-data-[state=open]:text-yellow-500"
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
              </li>
            </ul>
          </div>
          <div className="absolute top-[1.2rem] 2md:right-6 2lg:right-3">
            <div className="rounded-lg transition-all hover:border hover:border-gray-400 dark:border-white">
              <button
                className="focus-visible:ring-ring inline-flex items-center justify-center rounded-lg text-lg ring-offset-background transition-colors focus:ring-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-background-dark dark:focus:ring-yellow-200 border-none font-semibold text-white dark:text-black h-12 right-5 bg-transparent p-4 hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent"
                aria-label="Pesquisar"
                aria-labelledby="botão pesquisar por página"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:Raqf1la:"
                data-state="closed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="size-[1.125rem] text-gray-400 transition-all hover:text-gray-500 dark:text-yellow-200 dark:hover:text-yellow-500"
                >
                  <path
                    d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M19.0004 19.0004L14.6504 14.6504"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="absolute left-6 top-[95%] flex justify-center xl:left-0"></div>
        </nav>
        <div className="z-0 hidden h-1 w-full 2md:block"></div>
      </div>
    </header>
  );
}

export default Header;
