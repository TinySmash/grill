import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Navbar/Nav";
import { Providers } from "@/redux/providers";
import Footer from "@/components/Footer/Footer";
// import { Suspense } from "react";
// import Loading from "./loading";

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
        <Providers>
          {/* <Suspense fallback={<Loading />}> */}
          <Nav />
          {children}
          <Footer />
          {/* </Suspense> */}
        </Providers>
      </body>
    </html>
  );
}
