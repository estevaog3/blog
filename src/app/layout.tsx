import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Estevão Costa",
  description: "Um blog sobre a vida, o universo e tudo mais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base-200`}
      >
        <div className="navbar bg-base-300">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl">
              Estevão Costa
            </Link>
          </div>
        </div>
        {children}
        <footer className="bg-base-300 p-4 text-center mt-16">
          Ano: 2024. criador: Estevão Costa.
        </footer>
      </body>
    </html>
  );
}
