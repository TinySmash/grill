import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Navbar/Nav";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grill: Delicious menu",
  description: "Discover delicious and variant dishes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} overflow-x-hidden bg-antiflash-white`}
      >
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
