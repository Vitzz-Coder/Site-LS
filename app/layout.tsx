import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prestador de Serviços | Soluções Modernas",
  description: "Landing Page de alta conversão para prestadores de serviços profissionais.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.className} bg-graphite-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
