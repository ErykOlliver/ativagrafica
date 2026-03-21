import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: "Ativa Gráfica Rápida e Comunicação Visual",
  description: "Gráfica Rápida e Comunicação Visual",
};

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`h-full antialiased ${montserrat.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
