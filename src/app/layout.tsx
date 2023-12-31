import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Naida Wanderland",
  description: "Your travel expert",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        <main className="max-w-6xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
