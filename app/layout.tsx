"use client";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { GlobalContext, GlobalContextProvider } from "@/context/context";
import Stats from "@/components/homepage/Stats";
import Hero from "@/components/homepage/Hero";
import Navbar from "@/components/homepage/Navbar";
import { useContext } from "react";
import Load from "@/components/Load";
import SideContent from "@/components/SideContent";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: 'Tributes',
//   description: 'An app in loving memory',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loading, setLoading } = useContext(GlobalContext);

  return (
    <html lang="en">
      <body className={poppins.className} style={{fontFamily:'Poppins'}}>
        <GlobalContextProvider>
          <main className="w-full relative">
            {loading === true && <Load />}

            {/* NAVBAR */}
            <div className="sticky top-0 z-50">
              <Navbar />
            </div>
            {/* HERO SECTION */}
            <div className="">
              <Hero />
            </div>

            <div className="l-container pt-32">
              {/* STATS SECTION */}
              <div className="w-full flex items-start gap-6 pt-10">
                <div className="flex-[2]">
                  <div className="">
                    <Stats />
                  </div>
                  <div className="w-full bg-orange-300">{children}</div>
                </div>

                <div className="flex-[1] max-w-[350px]">
                  <SideContent/>
                </div>
              </div>
            </div>
          </main>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
