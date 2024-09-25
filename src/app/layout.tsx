import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Access multiple funders through one application | Getfunds",
  description: " Get Funds is a specialist consulting firm partnered with best in class funders to offer a range of funding options.",
  keywords: "Working Capital, Business Funding, unsecured funding, lulalend, getfunds login, getfunds app, getfunds, getfunds merchant capital, retail capital, funding hub",
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
