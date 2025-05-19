"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, Search, ChevronDown, User, X, AlignJustify } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { relative } from "path";

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
    <header
      className={`w-full z-10 transition-transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-white dark:bg-background-dark`}
    >
      {/* Top bar - green */}
      <div className="flex w-full flex-col">
        <div className="container flex h-[3.75rem] space-x-11 bg-background dark:bg-background-dark md:h-[5.5rem] md:px-6 2lg:px-0">
          <div className="flex items-center justify-between gap-11">
            <Link
              aria-label="Link para HomePager"
              href="/"
              className="transition-all duration-500 focus-visible:p-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500 dark:ring-yellow-200 dark:focus-visible:ring-yellow-200 cursor-default"
              data-state="closed"
            >
              <span className="sr-only">Link para tela inicial do site</span>
              <Image
                src="/img/logos/Imagem1.png"
                alt="FiberNET"
                width={135}
                height={24}
                className="h-7 w-32 text-orange-400 dark:text-white lg:h-8 lg:w-44"
              />
            </Link>
          </div>
          <nav
            aria-label="Main"
            data-orientation="horizontal"
            dir="ltr"
            className="relative items-start justify-start container z-[2] 2md:flex"
          >
            <div style={{ position: "relative" }}>
              <ul
                data-orientation="horizontal"
                className="group flex flex-1 list-none items-center justify-start h-[4.75rem] gap-6 space-x-0 xl:gap-10"
                dir="ltr"
              >
                <li>
                  <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background text-sm font-medium disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 group m-0 focus:outline-none"
                    href="/"
                    data-radix-collection-item
                  >
                    <div className="flex flex-col items-center justify-center gap-2">
                      <h2 className="dark:text-foreground-dark dark:group-focus:text-yellow-500 md:text-sm lg:text-base font-medium leading-5 text-gray-700 hover:text-gray-700 group-data-[state=open]:text-gray-700 dark:hover:text-foreground-dark">
                        Para sua Casa
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
                    id="radix-:rlp:-trigger-empresa"
                    data-state="closed"
                    aria-expanded="false"
                    aria-controls="radix-:-trigger-empresa"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background text-sm font-medium disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 group group m-0 select-none p-0 focus:outline-none"
                    tabIndex={0}
                    data-radix-collection-item
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
                  </button>
                </li>
                <li>
                  <Link
                    href="/parceiro"
                    data-radix-collection-item=""
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background text-sm font-medium disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 group m-0 select-none p-0 focus:outline-none"
                  >
                    <div className="flex flex-col items-center justify-center gap-2">
                      <h2 className="leading-5 text-gray-600 hover:text-orange-600 group-focus:text-orange-600 dark:text-foreground-dark dark:hover:text-yellow-500 dark:group-focus:text-yellow-500 md:text-sm lg:text-base">
                        Parceiros
                      </h2>
                      <div
                        data-orientation="horizontal"
                        role="none"
                        className="shrink-0 h-[5px] w-16 rounded-t-lg bg-transparent dark:bg-transparent"
                      ></div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex h-10 items-end justify-end lg:gap-2 xl:mr-3 2lg:gap-8">
              <div
                data-orientation="vertical"
                role="none"
                className="shrink-0 dark:bg-white w-[1px] h-10 bg-gray-200"
              ></div>

              <Link
                href="https://wa.me/552424581861?text=%20Oi!%20Tenho%20interesse%20na%20internet%20da%20Fiber.NET%20.%20Pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es,%20por%20favor?%20"
                className="hover:underline"
              >
                Assine já
              </Link>
              <div
                className=" dark:bg-white w-[1px] h-10 bg-gray-500"
                data-orientation="horizontal"
                role="none"
              ></div>
              <Link
                href="https://centralfiber.online/central_assinante_web/login"
                className="hover:underline flex items-center "
              >
                Área do cliente <ChevronDown className="h-9 w-6 ml-2" />
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Main navbar */}

      <div className="container flex h-[3.75rem] items-center justify-between bg-background dark:bg-background-dark md:h-[5.5rem] md:px-6 2lg:px-0">
        <div className="flex items-center justify-between gap-11">
          {/* Desktop Navigation */}
          <nav
            aria-label="Main"
            data-orientation="horizontal"
            dir="ltr"
            className="relative 2md:flex justify-start z-[2] space-x-11 items-start"
          >
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center">
                Internet <ChevronDown className="h-5 w-4 ml-2" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/internet">Internet Fibra</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/internet/empresarial">Empresarial</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/seguranca" className="nav-link">
              Segurança
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center">
                Mais Serviços <ChevronDown className="h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/seguranca">Segurança</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/email">Email</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center">
                Ajuda <ChevronDown className="h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/ajuda/central">Central de Ajuda</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/ajuda/contato">Contato</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Search button */}
          <div className="flex ml-3">
            <button className="p-2 rounded-full hover:bg-black transition-colors">
              <Search className="h-6 w-6 text-black" />
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden ml-2">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="p-2 rounded-full hover:bg-muted transition-colors">
                    <AlignJustify className="h-5 w-5 text-black" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[85%] sm:w-[385px]">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <Image
                        src="/img/logos/Imagem1.png"
                        alt="FiberNET"
                        width={120}
                        height={32}
                        className="h-8 w-auto"
                      />
                    </div>
                    <div className="justify-end container">
                      <nav className="flex flex-col space-y-2hidden md:flex justify-end space-x-11 w-full h-full">
                        <Link
                          href="/para-sua-casa"
                          className="text-lg text-white font-medium p-2 hover:bg-muted rounded-md"
                        >
                          Para sua casa
                        </Link>
                        <Link
                          href="/empresas"
                          className="text-lg font-medium p-2 hover:bg-muted rounded-md"
                        >
                          Empresas
                        </Link>
                        <Link
                          href="/internet"
                          className="text-lg font-medium p-2 hover:bg-muted rounded-md"
                        >
                          Internet
                        </Link>
                        <Link
                          href="/streaming"
                          className="text-lg font-medium p-2 hover:bg-muted rounded-md"
                        >
                          Streaming
                        </Link>
                        <Link
                          href="/seguranca"
                          className="text-lg font-medium p-2 hover:bg-muted rounded-md"
                        >
                          Segurança
                        </Link>
                        <Link
                          href="/ajuda"
                          className="text-lg font-medium p-2 hover:bg-muted rounded-md space-x-11"
                        >
                          Ajuda
                        </Link>
                      </nav>
                    </div>

                    <div className="hidden md:flex justify-end space-x-11 w-full h-full">
                      <Link
                        href="/assine-ja"
                        className="w-full btn-primary block text-center py-2 px-4 mb-2 space-x-11"
                      >
                        Assine já
                      </Link>
                      <Link
                        href="/area-do-cliente"
                        className="w-full btn-secondary block text-center py-2 px-4"
                      >
                        Área do cliente
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
