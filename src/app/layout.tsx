import type { Metadata } from "next";
import { Geist, Geist_Mono ,Archivo_Black } from "next/font/google";
import "./globals.css";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";


const archivoBlack = Archivo_Black({
  subsets: ["latin" ],
  weight: ["400"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BookHive",
  description: "BookHive — discover, track, and share books.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${archivoBlack.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col w-7xl mx-auto"
      cz-shortcut-listen="true"
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
