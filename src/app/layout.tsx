import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Space Motors - Sua oficina especializada!",
  description: "Oficina de motos em Belo Horizonte",
  keywords: ["oficina", "oficina motos", "motos", "motocicletas", "manutenção de motos"],
  openGraph: {
    title: "Space Motors - Sua oficina especializada!",
    images: [`${process.env.NEXT_PUBLIC_URL}/logo.png`]
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <p style={{ textAlign: "center", marginTop: 54, marginBottom: 8 }}>
          Todos os direitos reservados Space Motors @{`${new Date().getFullYear()}`}
        </p>
      </body>
    </html>
  );
}
