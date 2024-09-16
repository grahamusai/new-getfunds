"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import Hero from "../components/brokerComponents/hero";
import ContactForm from "../components/brokerComponents/contactForm";
import Wishes from "../components/wishes";
import { TypewriterEffect } from "../components/ui/typewriter-effect";

const Brokers = () => {
  const words = [
    {
      text: "Benefits",
    },
    {
      text: "of",
    },
    {
      text: "offering",
    },
    {
      text: "funding.",
      className: "text-teal-500 dark:text-blue-500",
    },
  ];
  const words2 = [
    {
      text: "Funding",
    },
    {
      text: "we",
    },
    {
      text: "Offer.",
      className: "text-teal-500 dark:text-blue-500",
    },
  ];
  const words3 = [
    {
      text: "Our",
    },
    {
      text: "funders.",
      className: "text-teal-500 dark:text-blue-500",
    },
  ];
  const words4 = [
    {
      text: "We",
    },
    {
      text: "match",
    },
    {
      text: "your",
    },
    {
      text: "commitment.",
      className: "text-teal-500 dark:text-blue-500",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="pt-[50px] ">
        <Hero />
        <div className="bg-gray-200">
          <div className="px-10 md:px-24 py-20">
            <div className="text-center">
              <TypewriterEffect words={words} />
            </div>
            <div className="flex flex-col md:flex-row mt-14">
              <div className="w-full md:w-1/3 flex flex-row md:flex-col gap-4 md:gap-0 md:justify-center items-center">
                <motion.img
                  src="/images/icon1.png"
                  alt="Bouncing"
                  style={{ width: "5rem" }}
                  className="bg-[#1E394C] p-5 rounded-md"
                />
                <h1 className="text-left md:text-center my-3">
                  Funding Attracts more <br /> Clients to your Business
                </h1>
              </div>
              <div className="w-full md:w-1/3 flex flex-row md:flex-col gap-4 md:gap-0 md:justify-center items-center">
                <motion.img
                  src="/images/icon2.png"
                  alt="Bouncing"
                  style={{ width: "5rem" }}
                  className="bg-[#1E394C] p-5 rounded-md"
                />
                <h3 className="text-left md:text-center my-3">
                  Opportunity to upsell your <br /> other services to those New
                  Clients
                </h3>
              </div>
              <div className="w-full md:w-1/3 flex flex-row md:flex-col gap-4 md:gap-0 md:justify-center  items-center">
                <motion.img
                  src="/images/icon3.png"
                  alt="Bouncing"
                  style={{ width: "5rem" }}
                  className="bg-[#1E394C] p-5 rounded-md"
                />
                <h3 className="text-left md:text-center my-3">
                  Improved <br /> Client Satisfaction
                </h3>
              </div>
              <div className="w-full md:w-1/3 flex flex-row md:flex-col gap-4 md:gap-0 md:justify-center items-center mt-3 md:mt-0">
                <motion.img
                  src="/images/icon4.png"
                  alt="Bouncing"
                  style={{ width: "5rem" }}
                  className="bg-[#1E394C] p-5 rounded-md"
                />
                <h3 className="text-left md:text-center my-3">
                  Provides a <br /> Competitive Edge
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center py-10">
          <TypewriterEffect words={words2} />
          <p className="text-sm mx-10 md:mx-32 pt-4">
            We provide working capital related Cash advances broken down into 3
            month bridging, 6-12 month traditional <br /> cash advancing, and 24
            month terms for businesses that trade above 20 million annually.
          </p>
        </div>
        <div className="flex flex-col md:flex-row px-10 md:px-24">
          <div className="w-full md:w-1/4 text-white text-center bg-[#1E394C] px-5 py-7 md:px-10 md:py-14">
            <h3 className="font-semibold">SPEED</h3>
            <p>1-72 hrs</p>
          </div>
          <div className="w-full md:w-1/4 text-[#1E394C] text-center bg-[#e0cb70] px-5 py-7 md:px-10 md:py-14">
            <h3 className="font-semibold">APPLICATION</h3>
            <p>Minimal Documents</p>
          </div>
          <div className="w-full md:w-1/4 text-[#1E394C] text-center bg-[#4AC2CC] px-5 py-7 md:px-10 md:py-14">
            <h3 className="font-semibold">ACCESSIBILITY</h3>
            <p>90% Approval Rate</p>
          </div>
          <div className="w-full md:w-1/4 text-white text-center bg-[#289A82] px-5 py-7 md:px-10 md:py-14">
            <h3 className="font-semibold">AMOUNT</h3>
            <p>Up to one Months revenue</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row px-10 md:px-24  md:mt-0">
          <div className="w-full md:w-1/4 text-[#1E394C] text-center bg-[#4AC2CC] px-5 py-7 md:px-10 md:py-14">
            <h3 className="font-semibold">TERM</h3>
            <p>3-12 Months</p>
          </div>
          <div className="w-full md:w-1/4 text-white text-center  bg-[#289A82] px-5 py-7 md:px-10 md:py-14">
            <h3 className="font-semibold">COST OF CAPITAL</h3>
            <p>2-5% per Month</p>
          </div>
          <div className="w-full md:w-1/4  text-[#1E394C] text-center  bg-[#e0cb70] px-5 py-7 md:px-10 md:py-14">
            <h3 className="font-semibold">REPEAT ADVANCE</h3>
            <p>At 50-70% Repaid</p>
          </div>
          <div className="w-full md:w-1/4 text-white text-center bg-[#1E394C] px-5 py-7 md:px-10 md:py-14">
            <h3 className="font-semibold">REPAYMENTS</h3>
            <p>Daily, Weekly or Monthly</p>
          </div>
        </div>
        <div className="mt-4">
          <Wishes />
        </div>

        <div className="py-10 ">
          <TypewriterEffect words={words3} />
          <p className="text-sm text-center px-5 lg:px-[18rem] pt-5">
            Fund Genie is deeply integrated with our funding partners, We have
            dedicated relationship managers, underwriting teams and our united
            deal flow makes us the highest paid brokerage in SA offering the
            best funding deals. With your help we all become stronger and
            empower the SMEs
          </p>
        </div>
        <div className="mx-5 md:mx-24">
          <div className="w-full px-5 md:px-20 bg-gray-300 py-8">
            <h3 className="font-bold text-center">
              What we know about the funders, is how we fast track the clients
              funding needs through our funding network
            </h3>
            <p className="px-8 md:px-14 py-10">
              We know the industries they like and dont like. The cheapest and
              most expensive, the quickest and slowest, the approval rates,
              highest appetite for risk and lowest appetite. We know who stack
              and doesnt and who has the least due diligence and most. With this
              experience we make getting funding for clients a smoother and
              accelerated process.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row pt-16 px-10 md:px-16 lg:px-20 gap-10">
          <div className="w-full  md:w-1/2 flex items-center mr-8 justify-end">
            <motion.img
              src="/images/Genie _Casual_cropped.png"
              alt="Bouncing"
              style={{ width: "24rem" }}
              className=""
            />
          </div>
          <div className="w-full lg:w-1/2 mt-12">
            <TypewriterEffect words={words4} />
            <p className="pt-12 px-4">
              At Fund Genie, we understand that every partner has unique goals
              and business models. That&lsquo;s why we offer a range of
              collaborative options tailored to your needs. Whether you want to
              integrate our digital online portals, run sales campaigns,
              leverage our outbound sales teams, utilise our inbound
              specialists, or simply refer clients from time to time, we are
              here to match your commitment. Let&lsquo;s discuss how we can
              collaborate to drive your business forward. Contact us today to
              explore the possibilities.
            </p>
            <div className="bg-[#1E394C]  text-white px-4 py-3 mt-10">
              <ul>
                <li>info@fundgenie.co.za</li>
                <li>www.fundgenie.co.za</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12" id="contactForm">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Brokers;
