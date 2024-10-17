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
  title: "Get Funds | Explore Fast, Flexible SME Funding & Business Loans in Gauteng with Over R3 Billion in Financing Secured",
  description:
    " Get Funds provides fast, flexible business loans to SMEs in Gauteng and across South Africa. Offering revolving capital facilities and short-term capital advances, our fintech-powered platform ensures quick loan approval and easy access to business funding without the hassle of paperwork. With over R3 billion secured in SME funding, Get Funds is a trusted partner in business growth, providing tailored financial solutions for cash flow management, business expansion, and overcoming challenges. Whether you're looking for quick capital or long-term finance, Get Funds is your top choice for SME loans and funding solutions. Secure flexible finance today with our fast, efficient, and transparent loan options, trusted by SMEs across South Africa. Apply online, compare the best funding offers from over 30 reputable lenders, and get business loans in minutes. Empower your business growth with Get Funds, the leading provider of fast business finance and SME loans in Gauteng and beyond.",
  keywords:
    "SME funding Gauteng, business loans Gauteng, SME finance Gauteng, small business loans Gauteng, small business finance Gauteng, business funding Gauteng, funding for SMEs Gauteng, easy business loans Gauteng, flexible business loans Gauteng, SME loan provider Gauteng, fast business loans Gauteng, fintech business loans Gauteng, Gauteng SME loans, SME funding solutions Gauteng, SME capital Gauteng, business capital Gauteng, funding options Gauteng, revolving capital Gauteng, capital advance Gauteng, quick business loans Gauteng, easy loan approval Gauteng, fast loan approval Gauteng, fintech funding solutions Gauteng, revolving capital facility Gauteng, fixed repayment loans Gauteng, lump-sum loans Gauteng, capital advance loans Gauteng, R3 billion SME loans, short-term business loans Gauteng, short-term SME loans Gauteng, loan provider Gauteng, loan options Gauteng, business growth loans Gauteng, cash flow loans Gauteng, easy loan application Gauteng, apply for business loans Gauteng, loan comparison Gauteng, compare business loans Gauteng, business loan options Gauteng, online SME funding Gauteng, online loan application Gauteng, apply for SME loan Gauteng, best business loans Gauteng, best SME loans Gauteng, trusted loan provider Gauteng, loan offers Gauteng, secure business funding Gauteng, fast funding Gauteng, digital SME funding Gauteng, digital business loans Gauteng, trusted SME loan provider Gauteng, secure business loans Gauteng, finance for SMEs Gauteng, small business funding Gauteng, get SME loans Gauteng, loan solutions Gauteng, flexible loan terms Gauteng, SME financial tools Gauteng, financial tools for SMEs Gauteng, flexible finance Gauteng, business loan support Gauteng, SME finance support Gauteng, short-term finance Gauteng, fast capital Gauteng, quick capital Gauteng, unsecured loans Gauteng, fast approval business loans Gauteng, fast loan processing Gauteng",
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
          <p className="text-[0.2px]">
            Empowering SMEs in Gauteng: Fast, Flexible Funding Solutions with
            Get Funds At Get Funds, we are dedicated to empowering South African
            small and medium-sized enterprises (SMEs) by providing fast, easy,
            and flexible business loans. Since our establishment in 2015, we
            have focused on addressing the challenges that SMEs face in
            accessing capital for growth, operations, and expansion. We
            understand that accessing funding quickly is essential for SMEs to
            seize growth opportunities, manage their cash flow, and overcome
            challenges effectively. That&apos;s why our funding solutions are
            streamlined and customized to meet the specific needs of your
            business. Whether you&apos;re looking for a flexible funding line to
            support your daily operations or a lump-sum advance to fuel your
            next big project, Get Funds has the solution. Why Choose Get Funds
            as Your SME Funding Partner? When it comes to business loans in
            Gauteng, Get Funds stands out as a leading provider. Our
            long-standing experience in the fintech sector ensures that we offer
            the fastest and most efficient funding solutions for businesses of
            all sizes. Since our inception, we&apos;ve facilitated more than R3
            billion in short-term funding for SMEs across South Africa, earning
            us a trusted reputation as one of the country&apos;s top fintech loan
            providers. Our cutting-edge fintech technology enables us to offer
            fast loan approvals. No more waiting in long queues or filling out
            endless paperwork—our digital process is designed to get you the
            capital you need as quickly as possible. Whether you&apos;re looking to
            expand your business, improve cash flow, or tackle a new
            opportunity, we make the funding process seamless, quick, and
            stress-free. Flexible Financing Solutions Tailored to Your Business
            At Get Funds, we understand that every business has different
            financial needs. This is why we offer flexible financing solutions
            that cater to a wide range of funding requirements. We provide two
            main options for SMEs: Revolving Capital Facility: Our Revolving
            Capital Facility allows you to access funds when you need them
            without any monthly account or administrative fees. You only pay for
            what you use, making it an ideal choice for businesses that require
            ongoing capital access for operational expenses or growth. Think of
            it as a revolving loan but better—this facility gives you
            flexibility and control over your business&apos;s financial future.
            Capital Advance: Our Capital Advance offers a lump-sum loan with
            fixed repayment terms over 3, 6, 9, or 12 months. It&apos;s a great
            option for businesses looking for fixed, predictable repayment
            plans. With no early repayment penalties, you have the freedom to
            repay the loan on your terms if your cash flow improves ahead of
            schedule. This makes managing finances easier while ensuring that
            you always have the necessary capital to seize growth opportunities.
            How We Make Funding Easy and Transparent for SMEs Our process is
            designed to be simple, transparent, and efficient. We know that
            running a business can be time-consuming, which is why we&apos;ve made
            our funding application process as straightforward as possible.
            Here&apos;s how it works: Simple Online Application: At Get Funds, we
            prioritize your time. You can apply for funding online in under 5
            minutes. All you need to do is complete a short form with basic
            information about your business, and we&apos;ll take it from there.
            There&apos;s no need to fill out lengthy forms or visit multiple lenders.
            We streamline the entire process for you, saving you time and
            energy. Compare Your Funding Options: Once we have the necessary
            information, our sophisticated fintech platform goes to work. We
            compare funding options from a vast network of reputable lenders
            across South Africa to find the best match for your business needs.
            Each option is clearly presented in an easy-to-understand format,
            allowing you to make an informed decision without any confusion.
            Fast Funding, Delivered: After choosing the best funding option for
            your business, all that&apos;s left is to finalize the application and
            get your funds. Our fintech-backed process ensures that once your
            application is approved, the funds will be transferred to your
            account as quickly as possible—giving you the capital you need to
            grow your business. Supporting Gauteng SMEs Every Step of the Way
            Gauteng&apos;s SMEs are the backbone of the South African economy, and at
            Get Funds, we understand the critical role they play. Our goal is to
            provide Gauteng-based businesses with the financial tools they need
            to succeed. Whether you need funding for expansion, to improve cash
            flow, or to tackle an unforeseen challenge, Get Funds is here to
            help. What sets us apart from other lenders is our commitment to
            supporting your business every step of the way. Our team of experts
            is always available to assist you and provide guidance throughout
            the funding process. We don&apos;t just see ourselves as a lender—we&apos;re a
            partner in your growth journey. We work behind the scenes to ensure
            you have everything you need to step into the spotlight and take
            advantage of new opportunities. Why Trust Get Funds as Your Funding
            Provider? Experience and Expertise: With years of experience in the
            fintech industry, Get Funds is uniquely positioned to understand the
            specific needs of SMEs in Gauteng. Our proven track record of
            disbursing over R3 billion in funding speaks for itself. Fast and
            Reliable Service: We know that in business, time is money. That&apos;s
            why our funding process is designed to be as fast as possible,
            ensuring you get the capital you need without unnecessary delays.
            Tailored Solutions: No two businesses are the same, and we treat
            each client with the unique attention they deserve. Our flexible
            financing options are tailored to meet the specific needs of your
            business, whether you&apos;re a small startup or an established
            enterprise. Trusted Network of Lenders: At Get Funds, we only
            partner with reputable lenders who have the best interests of SMEs
            at heart. This ensures that you are always offered fair, competitive
            loan options that are in line with your business goals. Contact Get
            Funds Today for Custom SME Funding Solutions Are you ready to take
            your business to the next level? Whether you&apos;re looking to expand,
            manage cash flow more effectively, or finance a new project, Get
            Funds is here to help. Contact us today to learn more about our
            flexible funding solutions, or simply fill out our easy online
            application to get started. We believe in the potential of South
            African SMEs, and we&apos;re committed to providing the funding they
            need to thrive.
          </p>
          {children}
        </body>
      </html>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
