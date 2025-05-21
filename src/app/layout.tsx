import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/fonts.css";
import "@/styles/styles1.css";
import "@/styles/styles2.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButton from "@/components/modals/FloatingButton";
import { ThemeProvider } from "next-themes";

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
          <div className="relative flex min-h-screen flex-col">
            <nav className="sticky top-0 z-10 hidden w-screen min-w-[375px] bg-green-500 dark:bg-background-dark 2md:flex">
              <div className="container flex flex-row items-center justify-between px-6 2lg:px-0"></div>
            </nav>
            <Header />
            <main>{children}</main>
            <FloatingButton />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
  