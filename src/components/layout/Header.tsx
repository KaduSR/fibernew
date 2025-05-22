import Link from "next/link";
import { ChevronDown, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  return (
    <header className="bg-primary/10 shadow-sm">
      <div className="container-custom">
        {/* Top Navigation */}
        <div className="flex items-center justify-between py-3 border-b">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="mr-10">
              <div className="flex items-center"></div>
            </Link>

            {/* Primary Navigation */}
            <nav className="hidden md:flex items-start space-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger className="nav-link flex items-center">
                  Para sua casa <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Internet</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="nav-link flex items-center">
                  Empresas <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Internet Empresarial</DropdownMenuItem>
                  <DropdownMenuItem>Plano Empresarial</DropdownMenuItem>
                  <DropdownMenuItem>Soluções Corporativas</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>

          <div className="hidden md:flex items-end space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border-white shadown-sm text-white hover:bg-black"
                >
                  Contrate já <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Internet</DropdownMenuItem>
                <DropdownMenuItem>Fonte</DropdownMenuItem>
                <DropdownMenuItem>Combos</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border-white shadown-sm text-white hover:bg-black"
                >
                  Área do cliente <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Meu Perfil</DropdownMenuItem>
                <DropdownMenuItem>Faturas</DropdownMenuItem>
                <DropdownMenuItem>Suporte</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Secondary Navigation */}
        <div className="hidden md:flex items-center justify-between py-3">
          <nav className="flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center">
                Internet <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Fibra óptica</DropdownMenuItem>
                <DropdownMenuItem>Planos</DropdownMenuItem>
                <DropdownMenuItem>Promoções</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/movel-5g" className="nav-link">
              Móvel 5G
            </Link>
            <Link href="/combos" className="nav-link">
              Combos
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center">
                Streaming <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Globoplay</DropdownMenuItem>
                <DropdownMenuItem>MAX</DropdownMenuItem>
                <DropdownMenuItem>BrisaPlay</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center">
                Mais Serviços <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>BrisaFlix</DropdownMenuItem>
                <DropdownMenuItem>Para Empresas</DropdownMenuItem>
                <DropdownMenuItem>BrisaMóvel</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/seguranca" className="nav-link">
              Segurança
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center">
                Ajuda <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Central de Ajuda</DropdownMenuItem>
                <DropdownMenuItem>FAQ</DropdownMenuItem>
                <DropdownMenuItem>Suporte Remoto</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
