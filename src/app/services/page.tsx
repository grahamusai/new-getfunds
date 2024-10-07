"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Options from "../components/options";
import Calculator from "../components/calculator";
import WhyUs from "../components/fundingOptions";
import { TiTick } from "react-icons/ti";
import Link from "next/link";
import { motion } from "framer-motion";

const Services = () => {
  const terms = [
    { label: "SPEED 1-72 hrs" },
    { label: "Application - Minimal Documents" },
    { label: "Accessibility - 90% Approval Rate" },
    { label: "Amount - Up to one Months revenue" },
    { label: "Term - 3-12 Months" },
    { label: "COST OF CAPITAL 2-5% per Month" },
  ];
  return (
    <div>
      <Navbar />
      <div className="">
        <h1 className="font-semibold text-[42px] mb-5 px-32 leading-tight text-white mt-24">
          The Funding <br /> We Offer
        </h1>
      </div>

      <div className="px-32">
        <div className="flex">
          <div className="w-full md:w-1/2">
            <ul className="mt-12 space-y-4 md:mt-20">
              <li className="grid grid-cols-[auto_1fr] items-center gap-3">
                <div className="inline-flex items-center justify-center  flex-shrink-0 w-5 h-5 bg-green-500 rounded-full">
                  <TiTick />
                </div>
                <span className="text-lg font-medium text-white">
                  Speed - 1-72 hrs
                </span>
              </li>

              <li className="grid grid-cols-[auto_1fr] items-center gap-3">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-green-500 rounded-full">
                  <TiTick />
                </div>
                <span className="text-lg font-medium text-white">
                  Application - Minimal Documents
                </span>
              </li>

              <li className="grid grid-cols-[auto_1fr] items-center gap-3">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-green-500 rounded-full">
                  <TiTick />
                </div>
                <span className="text-lg font-medium text-white">
                  Accecibility - 90% Approval Rate
                </span>
              </li>

              <li className="grid grid-cols-[auto_1fr] items-center gap-3">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-green-500 rounded-full">
                  <TiTick />
                </div>
                <span className="text-lg font-medium text-white">
                  Amount - Up to one Months revenue
                </span>
              </li>

              <li className="grid grid-cols-[auto_1fr] items-center gap-3">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-green-500 rounded-full">
                  <TiTick />
                </div>
                <span className="text-lg font-medium text-white">
                  Term - 3-12 Months
                </span>
              </li>
              <li className="grid grid-cols-[auto_1fr] items-center gap-3">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-green-500 rounded-full">
                  <TiTick />
                </div>
                <span className="text-lg font-medium text-white">
                  Cost of capital - 2-5% per Month
                </span>
              </li>
              <li className="grid grid-cols-[auto_1fr] items-center gap-3">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-green-500 rounded-full">
                  <TiTick />
                </div>
                <span className="text-lg font-medium text-white">
                  Repeat advance - At 50-70% Repaid
                </span>
              </li>
              <li className="grid grid-cols-[auto_1fr] items-center gap-3">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-green-500 rounded-full">
                  <TiTick />
                </div>
                <span className="text-lg font-medium text-white">
                  Repayments - Daily, Weekly or Monthly
                </span>
              </li>
            </ul>
          </div>
          <img src="/images/image18.png" alt="" />
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-16  mx-20 my-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-1 flex flex-col justify-center">
            <h2 className="text-3xl font-semibold">Popular Funding Uses</h2>
              <button className="mt-4 px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-green-800">
                Start an Application
              </button>
          </div>

          {/* Right Column - List */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4 text-lg">
            <ul className="space-y-2">
              <li>Cash Flow</li>
              <li>Expansion</li>
              <li>Upgrades</li>
              <li>Revamps</li>
              <li>Stock Purchases</li>
            </ul>
            <ul className="space-y-2">
              <li>Bridging Capital</li>
              <li>Opportunities</li>
              <li>Equipment Purchases</li>
              <li>New Ventures</li>
            </ul>
          </div>
        </div>
      </div>

      <Options />
      <Calculator />
      {/* <WhyUs /> */}

      <Footer />
    </div>
  );
};

export default Services;
