import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motivio",
  description: "Generate random inspirational quote",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-cover bg-center bg-[url('/background.jpg')]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
