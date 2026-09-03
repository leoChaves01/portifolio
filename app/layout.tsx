import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leonardo Chaves | Desenvolvedor Front-end",
  description:
    "Portfólio de Leonardo Chaves — Desenvolvedor Front-end, criador de experiências digitais e fundador da RLA Tech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
