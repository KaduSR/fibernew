import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/fonts.css";
import "@/styles/styles1.css"
import "@/styles/globals.css";;
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Internet Fibra Óptica | Fiber.NET",
  description:
    "Desfrute de uma conexão estável e ultrarrápida com a Fiber.NET – sua porta de entrada para o mundo digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR"
    className="min-h-screen__variable7d5794 __variable_31b03a __variable_b539cb light">
      
      <body className="overflow-x-hidden {inter.className}" >
        <div className="relative flex min-h-screen flex-col">
        <Header/>
        <main>{children}</main>
        <Footer />
        </div>
      </body>
    </html>
  );
}
  