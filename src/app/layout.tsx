import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/fonts.css";
import "@/styles/styles1.css";
  /* import "@/styles/styles2.css"; */
import "@/styles/globals.css";
import Footer from "@/components/layout/Footer";
import FloatingButton from "@/components/ui/FloatingButton";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";

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
    <html
      lang="pt-BR"
      className="suppressHydrationWarning dark"
      style={{ colorScheme: "dark" }}
    >
      <body className="overflow-x-hidden">
        <ThemeProvider attribute={"class"}>
          
          <Navbar/>
          <Header />
          <main>{children}</main>

          <Footer />
        </ThemeProvider>
        <FloatingButton />
      </body>
    </html>
  );
}
