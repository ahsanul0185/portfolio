import type { Metadata } from "next";
import { Bebas_Neue, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ReactLenis from "lenis/react";
import { ViewTransitions } from "next-view-transitions";
import Goshiner from "next/font/local";
import Helvetica from "next/font/local";
import Footer from "@/components/layout/Footer";
import { SmoothCursor } from "@/components/ui/SmoothCursor";
import { GoogleAnalytics } from "@next/third-parties/google";


const goshiner = Goshiner({
  src : "../../public/fonts/Goshiner.otf",
  variable : "--font-goshiner"
})

const helvetica = Helvetica({
  src : "../../public/fonts/QGYvz_MVcBeNP4NJtEtq.woff2",
  variable : "--font-helvetica"
})

const bebas_Neue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Ahsanul Haque",
  description: "Portfolio of Ahsanul Haque",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ViewTransitions>
    <html lang="en">
      <body
        className={`${bebas_Neue.variable} ${geistMono.variable} ${goshiner.variable} ${helvetica.variable} font-helvetica antialiased isolation-isolate`}
      >
        <ReactLenis root options={{lerp : 0.09}}>
        <Navbar />
        {children}
        <Footer />
        </ReactLenis>
        <SmoothCursor />
      </body>
      <GoogleAnalytics gaId="G-M5CSLTG916" />
    </html>
    </ViewTransitions>
  );
}
