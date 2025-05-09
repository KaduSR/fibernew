import { Metadata } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Internet de Verdade, para Todas as Horas. | Fiber.NET",
  description:
    "A Fiber.NET conecta Rio das Flores com internet fibra óptica de alta velocidade. Conheça nossos serviços e navegue sem limites!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={"${inter.className} antiliased"}>
        <main> {children}</main>
      </body>
    </html>
  );
}
