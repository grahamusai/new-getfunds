import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import { Krona_One } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const kronaOne = Krona_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-krona-one",
});

export const metadata: Metadata = {
  title: "Get Funds | Your cashflow brokers.",
  description:
    "Access multiple working capital providers with one application. We boast the highest success rate in South Africa",
  keywords: "Business Funding, Business Loans, SME Funding, SME Loans",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={kronaOne.className}>
          {children}
        </body>
      </html>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
