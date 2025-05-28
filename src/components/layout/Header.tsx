import Link from "next/link";
import { ChevronDown, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button"; // Importando o Button customizado
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import Image from "next/image";

export function Header() {
  const whatsappLink =
    "https://wa.me/552424581861?text=Gostaria%20de%20suporte%20t%C3%A9cnico%2C%20titular%20do%20contrato";
  return (
    <header className="z-10 flex min-w-[375px] flex-col items-center bg-gray-300">
      <div className="flex w-full flex-col">
        {/* Top Navigation */}
        <div className="container flex h-[3.75rem] items-center justify-between bg-transparent md:h-[5.5rem] md:px-6 2lg:px-0">
          <div className="flex items-center">
            {/* Logo */}
            <Link
              href="/"
              className="transition-all duration-500 focus-visible:p-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500 cursor-default"
              data-state="closed"
              aria-label="Link para redirecionar para a tela inicial"
            >
              <span className="sr-only">
                Link para redirecionar para a tela inicial
              </span>
              <Image
                src="/img/logos/Imagem1.png"
                alt="FiberNET"
                width={132}
                height={24}
                className="h-7 w-32 lg:h-8 lg:w-44"
              />
            </Link>

            {/* Primary Navigation */}
            <nav
              aria-label="Main"
              data-orientation="horizontal"
              dir="ltr"
              className="relative items-start justify-start container z-[2] 2md:flex space-x-6"
            >
              <div style={{ position: "relative" }}>
                <ul
                  data-orientation="horizontal"
                  className="group flex flex-1 list-none items-center justify-start h-[4.75rem] gap-6 space-x-0 xl:gap-10 bg-transparent"
                  dir="ltr"
                >
                  <li>
                    <Link
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 group m-0 select-none p-0 focus:outline-none"
                      href="/"
                      data-radix-collection-item=""
                    >
                      <div className="flex flex-col items-center justify-center gap-2 bg-transparent rounded-full">
                        <h2 className="md:text-sm lg:text-base font-medium leading-5 text-black hover:text-orange-500 group-data-[state=open]:text-white">
                          Para sua casa
                        </h2>
                        <div
                          data-orientation="horizontal"
                          role="none"
                          className="shrink-0 w-12 block h-[3px] max-w-[96px] rounded-t-lg bg-black dark:bg-gray-100"
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
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 bg-transparent group group m-0 select-none p-0 focus:outline-none"
                      tabIndex={0}
                      data-radix-collection-item=""
                    >
                      <div className="flex flex-col items-center justify-center gap-2 bg-transparent">
                        <h2 className="md:text-sm lg:text-base font-medium leading-5 text-black hover:text-orange-500 group-data-[state=open]:text-white">
                          Empresas
                        </h2>
                        <div
                          data-orientation="horizontal"
                          role="none"
                          className="shrink-0 h-[3px] w-12 rounded-t-lg bg-transparent dark:bg-transparent hover:text-orange-500"
                        ></div>
                      </div>
                      <span className="sr-only">Seta apontada para baixo</span>
                      <svg
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative top-[-3px] ml-1 size-4 text-gray-800 group-focus-visible:text-orange-600 group-data-[state=open]:text-orange-600 dark:text-yellow-200 dark:group-focus:text-yellow-500 dark:group-data-[state=open]:text-yellow-500"
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
                    <Link
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 bg-transparent group m-0 select-none p-0 focus:outline-none"
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
                    </Link>
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
              className="shrink-0 w-[1px] h-10 bg-gray-200"
            ></div>
            <nav
              aria-label="Main"
              data-orientation="horizontal"
              dir="ltr"
              className="relative items-start justify-start container z-[2] 2md:flex"
            >
              <div style={{ position: "relative" }}>
                <ul
                  data-orientation="horizontal"
                  className="group flex flex-1 list-none items-center justify-start space-x-1 h-[4.75rem]"
                  dir="ltr"
                >
                  <li>
                    <Button
                      id="radix-:Rkaf1la:-trigger-assine"
                      data-state="closed"
                      aria-expanded="false"
                      aria-controls="radix-:Rkaf1la:-content-assine"
                      tabIndex={0}
                      data-radix-collection-item=""
                      variant="transparentOrange"
                      className="h-10 py-2 pl-0 pr-4 font-figtree text-lg leading-6 shadow-md hover:shadow-lg w-full md:w-auto"
                      asChild
                    >
                      <Link href="/assinatura">
                        Assine já
                        <span className="sr-only">
                          Seta apontada para baixo
                        </span>
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
                      </Link>
                    </Button>
                  </li>
                  <li>
                    {/* INÍCIO DA CORREÇÃO: Usando DropdownMenu do Shadcn UI */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        {/* Seu botão "Área do cliente" como o trigger */}
                        {/* Removidos id, data-state, aria-expanded, aria-controls pois DropdownMenuTrigger gerencia */}
                        <Button
                          data-radix-collection-item=""
                          variant="transparentOrange"
                          className="h-10 py-2 pl-0 pr-4 font-figtree text-lg leading-6 shadow-md hover:shadow-lg w-full md:w-auto"
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
                        </Button>
                      </DropdownMenuTrigger>
                      {/* Conteúdo do DropdownMenuContent */}
                      <DropdownMenuContent
                        // id="radix-:Rkaf1la:-content-eusoucliente" // Geralmente não é necessário definir o ID aqui, Radix gera
                        align="end" // Alinha o dropdown à direita do trigger
                        className="w-auto p-0 z-50 bg-background-light dark:bg-background-dark border border-input-light dark:border-input-dark shadow-lg rounded-md" // Estilos para o container do dropdown
                      >
                        <div className="flex flex-col gap-6 p-6 items-center">
                          <div className="flex flex-row gap-6">
                            {/* Seção Brisacliente fibra */}
                            <div className="flex flex-col gap-3">
                              <div className="flex flex-row items-center">
                                {/* SVG para Brisacliente fibra */}
                                <svg
                                  viewBox="0 0 72 72"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="size-8 text-gray-700 dark:text-white"
                                >
                                  <path
                                    d="M33.2996 51.4757V64.7999H41.0996V51.4757M33.5996 43.8619H41.8496M33.2996 9.59985V17.2136H41.0996V9.59985M25.4996 9.59985H48.8996V24.8274H52.7996V36.2481L44.9996 51.4757H29.3996L21.5996 36.2481V24.8274H25.4996V9.59985ZM33.2996 24.8274V32.4412C33.2996 34.5437 35.0457 36.2481 37.1996 36.2481C39.3535 36.2481 41.0996 34.5437 41.0996 32.4412V24.8274H33.2996Z"
                                    stroke="currentColor"
                                    strokeWidth="1.87013"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                                <h2 className="select-none font-figtree text-base font-semibold leading-5 text-gray-700 dark:text-white">
                                  Brisacliente fibra
                                </h2>
                              </div>
                              <p className="max-w-[288px] select-none text-justify text-sm text-gray-600 dark:text-white">
                                Pelo app você tem acesso as suas faturas,
                                informações do seu plano e muito mais.
                              </p>
                              <h3 className="select-none font-figtree text-sm font-semibold text-gray-700 dark:text-white">
                                Baixe o App Brisacliente
                              </h3>
                              <div className="flex items-center gap-4">
                                {/* Link Google Play Brisacliente fibra */}
                                <Link
                                  target="_blank"
                                  href="https://play.google.com/store/apps/details?id=br.com.brisanet.minhabrisa&amp;hl=pt_BR&amp;gl=US&amp;pli=1"
                                  data-size="small"
                                  className="group-[data-size=small] group flex items-center justify-center gap-3 rounded-lg border py-2 transition-all duration-500 dark:border-yellow-200 dark:hover:bg-yellow-200 hover:border-orange-500 bg-orange-500 dark:bg-yellow-200 hover:bg-orange-600 dark:hover:border-yellow-500 h-[2.4375rem] w-[8.5rem]"
                                  data-tabindex=""
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    className="size-7 group-hover:text-white group-data-[size=small]:size-5 dark:group-hover:text-black text-white dark:text-gray-700"
                                  >
                                    <path
                                      d="M11.5731 8.18145L3.05854 0.470356L13.8915 6.0874L11.5731 8.18145ZM0.837009 0.0170898C0.335174 0.254037 0 0.686117 0 1.24698V16.624C0 17.1849 0.335791 17.617 0.837009 17.8539L10.7367 8.93355L0.837009 0.0170898ZM17.2402 7.87816L14.968 6.69008L12.4335 8.93745L14.968 11.1848L17.2865 9.99674C17.9809 9.49888 17.9809 8.37658 17.2402 7.87816ZM3.05916 17.4051L13.8921 11.7881L11.5737 9.69401L3.05916 17.4051Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                  <div className="m-0 flex flex-col">
                                    <p className="font-inter text-[0.5rem] font-medium group-hover:text-white dark:group-hover:text-black text-white dark:text-gray-700">
                                      Download via
                                    </p>
                                    <p className="font-inter text-sm font-semibold group-hover:text-white dark:group-hover:text-black text-white dark:text-gray-700">
                                      Google Play
                                    </p>
                                  </div>
                                </Link>
                                {/* Link App Store Brisacliente fibra */}
                                <Link
                                  target="_blank"
                                  href="https://apps.apple.com/br/app/brisacliente/id1271781919"
                                  data-size="small"
                                  className="group-[data-size=small] group flex items-center justify-center gap-3 rounded-lg border py-2 transition-all duration-500 dark:border-yellow-200 dark:hover:bg-yellow-200 hover:border-orange-500 bg-orange-500 dark:bg-yellow-200 hover:bg-orange-600 dark:hover:border-yellow-500 h-[2.4375rem] w-[8.5rem]"
                                  data-tabindex=""
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    className="size-7 group-hover:text-white group-data-[size=small]:size-5 dark:group-hover:text-black text-white dark:text-gray-700"
                                  >
                                    <path
                                      d="M4.72651 20.4112C4.26368 20.1383 3.85348 19.8012 3.51169 19.4128C3.13571 19.0118 2.78736 18.5912 2.46852 18.1531C1.72032 17.1819 1.13357 16.1204 0.726252 15.0013C0.236949 13.7013 0 12.4552 0 11.2365C0 9.87539 0.332316 8.6872 0.982274 7.6888C1.46408 6.90844 2.17246 6.25633 3.03412 5.79991C3.86917 5.34035 4.82865 5.08885 5.81148 5.07192C6.15554 5.07192 6.526 5.11612 6.9192 5.20062C7.20163 5.27147 7.54569 5.38327 7.96603 5.52237C8.50082 5.70502 8.79499 5.81681 8.89475 5.84411C9.208 5.94551 9.47135 5.98971 9.67823 5.98971C9.83521 5.98971 10.0568 5.94551 10.3084 5.87791C10.45 5.83371 10.717 5.75571 11.0992 5.61077C11.4777 5.48857 11.7756 5.38392 12.0125 5.30592C12.3756 5.21102 12.727 5.12327 13.0403 5.07907C13.4116 5.0272 13.7885 5.01345 14.1634 5.03812C14.8131 5.07574 15.453 5.19773 16.0626 5.40017C17.0596 5.75572 17.8658 6.31081 18.4659 7.09991C18.2122 7.23842 17.9742 7.39818 17.755 7.577C17.2779 7.95178 16.8715 8.39175 16.5512 8.88025C16.1326 9.54783 15.9155 10.2999 15.9211 11.0636C15.9365 12.0015 16.2079 12.8277 16.7427 13.542C17.1358 14.0714 17.6468 14.5242 18.2443 14.8726C18.5502 15.0552 18.8136 15.1807 19.066 15.2652C18.9478 15.5902 18.8217 15.9048 18.6727 16.2168C18.335 16.9164 17.9257 17.5872 17.4499 18.2207C17.0258 18.766 16.6935 19.1723 16.4412 19.4427C16.048 19.8554 15.6694 20.1707 15.2872 20.3904C14.8669 20.6374 14.3703 20.7693 13.8655 20.7693C13.5237 20.781 13.182 20.7443 12.8532 20.6608C12.5708 20.5763 12.2913 20.4846 12.0162 20.38C11.7302 20.2636 11.4353 20.1652 11.1337 20.0855C10.3881 19.9159 9.60643 19.9147 8.86028 20.0823C8.55437 20.1603 8.2602 20.2513 7.9697 20.3631C7.56109 20.5152 7.28966 20.6172 7.13268 20.6608C6.81943 20.742 6.49445 20.7927 6.16581 20.8096C5.65743 20.8096 5.18353 20.6809 4.71404 20.4203L4.72651 20.4112ZM11.4315 4.41152C10.7669 4.70597 10.1323 4.83142 9.50216 4.79047C9.40313 4.22822 9.50216 3.65298 9.76552 3.02313C9.98973 2.48953 10.321 1.99626 10.7434 1.56714C11.1894 1.11541 11.7307 0.74514 12.3367 0.477097C12.9823 0.182649 13.5978 0.0233999 14.1861 0C14.2624 0.588896 14.1861 1.16804 13.9418 1.79399C13.7158 2.34732 13.3851 2.86254 12.964 3.31758C12.5341 3.76993 12.0066 4.14164 11.4124 4.41087L11.4315 4.41152Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                  <div className="m-0 flex flex-col">
                                    <p className="font-inter text-[0.5rem] font-medium group-hover:text-white dark:group-hover:text-black text-white dark:text-gray-700">
                                      Download via
                                    </p>
                                    <p className="font-inter text-sm font-semibold group-hover:text-white dark:group-hover:text-black text-white dark:text-gray-700">
                                      App Store
                                    </p>
                                  </div>
                                </Link>
                              </div>
                              <p className="select-none font-figtree text-sm font-semibold text-gray-700 dark:text-white">
                                Ou acesse nosso portal Web
                              </p>
                              {/* Link para o portal web Brisacliente fibra */}
                              <Link
                                className="tab-focus group flex h-[48px] w-[290px] items-center justify-center rounded-lg border-2 border-orange-500 hover:border-orange-600 hover:bg-orange-500 dark:border-yellow-200 dark:hover:border-yellow-500 dark:hover:bg-yellow-200"
                                href="https://brisacliente.brisanet.com.br/#/areaassinante/auth"
                                data-radix-collection-item=""
                                data-tabindex=""
                                tabIndex={-1}
                              >
                                <p className="font-figtree text-sm font-semibold text-orange-500 group-hover:text-white dark:text-yellow-200 dark:group-hover:text-gray-800">
                                  Brisacliente
                                </p>
                              </Link>
                            </div>
                          </div>

                          {/* Divisor horizontal */}
                          <div
                            data-orientation="horizontal"
                            role="none"
                            className="shrink-0 dark:bg-white h-[1px] w-full bg-gray-200"
                          ></div>

                          <div className="flex flex-row gap-12">
                            {/* Coluna FIBRA */}
  
                            <div className="flex flex-col gap-3">
                              <p className="max-w-fit select-none font-figtree text-xs font-medium text-gray-400 dark:text-white">
                                FIBRA
                              </p>
                              <Link
                                className="tab-focus mt-1 max-w-fit text-base text-gray-500 hover:text-orange-600 dark:text-yellow-200 dark:hover:text-yellow-500"
                                href="/brisacliente"
                                data-radix-collection-item=""
                                data-tabindex=""
                                tabIndex={-1}
                              >
                                Cliente Fiber.NET
                              </Link>
                              <div className="max-w-fit">
                                {/* Botão para 2ª via da fatura (FIBRA) */}
                                <Button
                                  type="button"
                                  aria-haspopup="dialog"
                                  aria-expanded="false"
                                  aria-controls="radix-:re5:"
                                  data-state="closed"
                                  className="tab-focus flex justify-start p-0 h-auto"
                                  data-tabindex=""
                                  tabIndex={-1}
                                  variant="ghost"
                                >
                                  <p className="max-w-fit text-base text-gray-500 hover:text-orange-600 dark:text-yellow-200 dark:hover:text-yellow-500">
                                    2° via da fatura
                                  </p>
                                </Button>
                              </div>
                            </div>

                            {/* Coluna GUIAS E SUPORTE */}
                            <div className="flex flex-col gap-3">
                              <p className="max-w-fit select-none font-figtree text-xs font-medium text-gray-400 dark:text-white">
                                GUIAS E SUPORTE
                              </p>
                              <Link
                                className="tab-focus mt-1 w-fit text-base text-gray-500 hover:text-orange-600 dark:text-yellow-200 dark:hover:text-yellow-500"
                                href="/guia-do-cliente"
                                data-radix-collection-item=""
                                data-tabindex=""
                                tabIndex={-1}
                              >
                                Guia do cliente
                              </Link>
                              <Link
                                className="tab-focus w-fit text-base text-gray-500 hover:text-orange-600 dark:text-yellow-200 dark:hover:text-yellow-500"
                                href="/centro-de-privacidade"
                                data-radix-collection-item=""
                                data-tabindex=""
                                tabIndex={-1}
                              >
                                Central de privacidade
                              </Link>
                            </div>
                          </div>
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    {/* FIM DA CORREÇÃO */}
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
