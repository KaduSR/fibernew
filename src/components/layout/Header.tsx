"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Menu,
  Search,
  ChevronDown,
  User,
  X,
  AlignJustify
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar - orange */}
      <div className="bg-primary py-1.5 px-4 text-white text-xs hidden md:flex justify-between">
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
          <Link href="/indique-um-amigo" className="hover:underline">
            Indique um amigo
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/assine-ja" className="hover:underline">
            Assine já
          </Link>
          <Link href="/area-do-cliente" className="hover:underline flex items-center">
            Área do cliente <ChevronDown className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-white border-b py-4 px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/img/logos/brisanet-logo.svg"
              alt="Brisanet"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
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

            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center">
                Móvel 5G <ChevronDown className="h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/movel-5g">Planos</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/movel-5g/cobertura">Cobertura</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/combos" className="nav-link">
              Combos
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center">
                Streaming <ChevronDown className="h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/streaming/brisamusic">Brisamusic</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/streaming/brisaplay">Brisaplay</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

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

            <Link href="/seguranca" className="nav-link">
              Segurança
            </Link>

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
          <div className="flex items-center">
            <button className="p-2 rounded-full hover:bg-muted transition-colors">
              <Search className="h-5 w-5 text-gray-600" />
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden ml-2">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="p-2 rounded-full hover:bg-muted transition-colors">
                    <AlignJustify className="h-5 w-5 text-gray-600" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[85%] sm:w-[385px]">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <Image
                        src="/img/logos/brisanet-logo.svg"
                        alt="Brisanet"
                        width={120}
                        height={32}
                        className="h-8 w-auto"
                      />
                    </div>

                    <nav className="flex flex-col space-y-4">
                      <Link href="/para-sua-casa" className="text-lg font-medium p-2 hover:bg-muted rounded-md">
                        Para sua casa
                      </Link>
                      <Link href="/empresas" className="text-lg font-medium p-2 hover:bg-muted rounded-md">
                        Empresas
                      </Link>
                      <Link href="/internet" className="text-lg font-medium p-2 hover:bg-muted rounded-md">
                        Internet
                      </Link>
                      <Link href="/movel-5g" className="text-lg font-medium p-2 hover:bg-muted rounded-md">
                        Móvel 5G
                      </Link>
                      <Link href="/combos" className="text-lg font-medium p-2 hover:bg-muted rounded-md">
                        Combos
                      </Link>
                      <Link href="/streaming" className="text-lg font-medium p-2 hover:bg-muted rounded-md">
                        Streaming
                      </Link>
                      <Link href="/seguranca" className="text-lg font-medium p-2 hover:bg-muted rounded-md">
                        Segurança
                      </Link>
                      <Link href="/ajuda" className="text-lg font-medium p-2 hover:bg-muted rounded-md">
                        Ajuda
                      </Link>
                    </nav>

                    <div className="mt-auto">
                      <Link href="/assine-ja" className="w-full btn-primary block text-center py-2 px-4 mb-2">
                        Assine já
                      </Link>
                      <Link href="/area-do-cliente" className="w-full btn-secondary block text-center py-2 px-4">
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
