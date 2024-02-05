import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";
import BookDemo from "@/components/BookDemo";
import FooterSection from "@/components/FooterSection";
import NextTopLoader from "nextjs-toploader";
import AOSInit from "@/components/Aos";
import AnimatedCursor from "react-animated-cursor"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agence Digital MMO",
  description: "Nous sommes une entreprise qui offre des solutions créatives",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedCursor />
        <NextTopLoader color="#4892D6" showSpinner={false} />
        <Navbar />
        <AOSInit />
        {children}
        <Navigation />
        <BookDemo />
        <FooterSection />
      </body>
    </html>
  );
}
