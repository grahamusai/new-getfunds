import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Automated, online access to multiple funders | FundGenie",
  description: "Why use one funder when Fund Genie has access to all.",
  keywords: "Working Capital, Business Funding, unsecured funding, lulalend, fundgenie login, fundgenie app, fundgenie, fundgenie merchant capital, retail capital, funding hub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <html lang="en">
      <body className="">{children}</body>
    </html>
    <Analytics />
    <SpeedInsights />
    </>
  );
}
