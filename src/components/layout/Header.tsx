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
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  
  return (
    <header
      className={`w-full z-10 transition-transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-white dark:bg-background-dark`}
    >
      {/* Top bar - green */}
      <div className="bg-green- py-3 px-5 text-black text-ls hidden md:flex justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/para-sua-casa" className="hover:underline">
            Para sua casa
          </Link>
          <Link href="/empresas" className="hover:underline">
            Empresas
          </Link>
          <Link href="/parceiros" className="hover:underline">
            Parceiros
          </Link>
        </div>
        <div className="flex items-center space-x-4 ">
          <div
            className=" dark:bg-white w-[1px] h-10 bg-gray-800"
            data-orientation="vertical"
            role="none"
          ></div>
          <Link
            href="https://wa.me/552424581861?text=%20Oi!%20Tenho%20interesse%20na%20internet%20da%20Fiber.NET%20.%20Pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es,%20por%20favor?%20"
            className="hover:underline"
          >
            Assine já
          </Link>
          <Link
            href="https://centralfiber.online/central_assinante_web/login"
            className="hover:underline flex items-center"
          >
            Área do cliente <ChevronDown className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>

      {/* Main navbar */}
      <div className="border-b py-4 px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/img/logos/Imagem1.png"
              alt="FiberNET"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-end space-x-11 w-full h-full">
            <div
              className=" dark:bg-white w-[1px] h-5 bg-gray-800"
              data-orientation="horizontal"
              role="none"
            ></div>
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center">
                Internet <ChevronDown className="h-4 w-4 ml-1" />
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
          <div className="flex items-center space-x-11">

            <button className="p-2 rounded-full hover:bg-black transition-colors">
              <Search className="h-5 w-5 text-black" />
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
                      <nav className="flex flex-col space-y-4">
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

                    <div className="mt-auto">
                      <Link
                        href="/assine-ja"
                        className="w-full btn-primary block text-center py-2 px-4 mb-2"
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
