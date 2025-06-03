import "@/styles/fonts.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import FloatingButton from "@/components/ui/FloatingButton";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"], display: "swap",
  fallback:["systen-ui", "arial", "sans-serif"]
});

export const metadata: Metadata = {
  title: "Fiber.NET | A internet que você precisa",
  description:
    "Desfrute de uma conexão estável e ultrarrápida com a Fiber.NET – sua porta de entrada para o mundo digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButton />
      </body>
    </html>
  );
}
