import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/fonts.css";
import "@/styles/styles1.css";
/* import "@/styles/styles2.css"; */
import "@/styles/globals.css";
import Footer from "@/components/layout/Footer";
import FloatingButton from "@/components/ui/FloatingButton";
import Navbar from "@/components/layout/Navbar";
import { Header } from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

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
        <Navbar />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButton />
      </body>
    </html>
  );
}
