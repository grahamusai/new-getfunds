"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { IoCheckbox } from "react-icons/io5";
import Cta from "../components/cta";
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
      <Cta />

      {/* Merchant Cash */}

      <section className="">
        <div className="px-4  max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
            <div className="relative lg:mb-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="pl-12 pr-6"
              >
                <img className="relative" src="/images/phones.png" alt="" />
              </motion.div>
            </div>
            <div className="py-8 justify-self-start">
              <h1 className="text-[2.5rem] text-green-500 mb-10">
                Merchant Cash Advance
              </h1>
              <div className="flex flex-col items-start justify-start ">
                <p className="text-white flex ">
                  <span className="text-green-500 text-xl">
                    <IoCheckbox />
                  </span>
                  &nbsp;Up to One Months Revenue As a cash advance{" "}
                </p>
                <p className="text-white flex mt-3">
                  <span className="text-green-500 text-xl">
                    <IoCheckbox />
                  </span>
                  &nbsp;Pay Over 3 - 12 Months{" "}
                </p>
                <p className="text-white flex mt-3">
                  <span className="text-green-500 text-xl">
                    <IoCheckbox />
                  </span>
                  &nbsp;Cost 2- 5% Per Month{" "}
                </p>
                <p className="text-white flex mt-3">
                  <span className="text-green-500 text-xl">
                    <IoCheckbox />
                  </span>
                  &nbsp;Repayments Daily or Weekly
                </p>
              </div>
              <div className="hidden md:block  justify-start items-center gap-7 mt-14 md:mr-[20rem] ">
                <Link href={"https://apply.getfunds.co.za"}>
                  <motion.p className="flex justify-center items-center text-center cursor-pointer bg-[#07d159] shadow-md shadow-green-600 px-10 py-3 rounded-md hover:bg-transparent hover:border-[#07d159] hover:border-2 hover:text-white hover:shadow-none font-semibold text-black">
                    Get Funds Now
                  </motion.p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#111] py-20 mt-10">
        <h2 className="text-2xl text-white text-center py-2">
          The Industry Estimates
        </h2>
        <div className="max-w-2xl mx-auto border-2 border-white my-6 text-center">
          <div className="flex border-b-2 border-white text-white py-5 px-5 mx-8 justify-center items-center">
            <h2 className="w-1/2 text-xl">Term (Months)</h2>
            <h2 className="w-1/2 text-xl ml-20">Cost</h2>
          </div>
          <div className="flex mt-8 text-white mx-8">
            <div className="w-1/2">
              <ul className="px-5 pb-10">
                <li>3 Months</li>
                <li>6 Months</li>
                <li>7 Months</li>
                <li>8 Months</li>
                <li>9 Months</li>
                <li>10 Months</li>
              </ul>
            </div>
            <div className="w-1/2">
              <ul className="ml-10 pb-10">
                <li>10%</li>
                <li>20%</li>
                <li>22%</li>
                <li>24%</li>
                <li>26%</li>
                <li>28%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full px-5 pt-20">
        <div className="px-4  max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
            <div className="py-8 justify-self-start">
              <h1 className="text-[2.5rem] text-green-500 mb-10">
                Stack Advance
              </h1>
              <p>
                If you have a current cash advance facility but require more
                funds. Get Funds has access to funders that fund over and above
                current cash advances, known as stacking. Its super quick and
                costs a little more but it beats being forced to change funders
                and face the heavy settlement penalties
              </p>
              <div className="hidden md:block  justify-start items-center gap-7 mt-14 md:mr-[20rem] ">
                <Link href={"https://apply.getfunds.co.za"}>
                  <motion.p className="flex justify-center items-center text-center cursor-pointer bg-[#07d159] shadow-md shadow-green-600 px-10 py-3 rounded-md hover:bg-transparent hover:border-[#07d159] hover:border-2 hover:text-white hover:shadow-none font-semibold text-black">
                    Get Funds Now
                  </motion.p>
                </Link>
              </div>
            </div>
            <div className="relative lg:mb-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="pl-12 pr-6"
              >
                <img className="relative" src="/images/phones.png" alt="" />
              </motion.div>
            </div>
          </div>
        </div>
        <h2 className="text-center text-lg text-white">Stack Pricing</h2>
        <div className="max-w-2xl mx-auto border-2 border-white mb-6 mt-3">
          <div className="flex border-b-2 border-white text-white py-5 px-5 mx-8 justify-center items-center">
            <h2 className="w-1/2 text-xl">Term (Months)</h2>
            <h2 className="w-1/2 text-xl ml-16">Cost</h2>
          </div>
          <div className="flex mt-8 text-white mx-8">
            <div className="w-1/2">
              <ul className="px-5 pb-10">
                <li>6 Months</li>
                <li>7 Months</li>
                <li>8 Months</li>
              </ul>
            </div>
            <div className="w-1/2">
              <ul className="ml-12 pb-10">
                <li>10%</li>
                <li>20%</li>
                <li>22%</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center my-8 md:mt-20">
          <div className="px-8 py-4 text-center bg-gray-800 rounded-full">
            <p className="text-gray-50">
              Your access top up funds once you paid up 50%{" "}
              <a
                href="/faqs"
                title=""
                className="text-[#07d159] transition-all duration-200 hover:text-green-600 focus:text-green-400 hover:underline"
              >
                Read Our FAQ&apos;s
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-[10rem] py-20">
        <div className="flex flex-col justify-center items-center bg-gradient-to-r from-green-500 to-blue-500 mt-20 py-10 rounded-[4rem]">
          <h2 className="text-center text-[40px] pt-10 text-black">
            Need Working Capital
          </h2>
          <div className="py-10 text-center">
            <p className="text-black text-xl py-2">
              Opportunity: Only take money if the benefits outweighs the cost
            </p>
            <p className="text-black text-xl">
              Challenge: Only take money if you prefer the repayment over the
              problem
            </p>
          </div>

          <div className="flex justify-center items-center pt-5">
            <Link href="https://apply.getfunds.co.za" target="_blank">
              <motion.p
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                className="hidden lg:block bg-[#000]  px-10 py-3  hover:bg-transparent hover:border-[#000000] hover:border-2 hover:text-black hover:shadow-none text-white font-medium"
              >
                Apply Now
              </motion.p>
            </Link>
          </div>
        </div>
      </section>
      <section className="">
        <div className="px-4  max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
            <div className="relative lg:mb-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="pl-12 pr-6"
              >
                <img className="relative" src="/images/phones.png" alt="" />
              </motion.div>
            </div>
            <div className="py-8 justify-self-start">
              <h1 className="text-[2.5rem] text-green-500 mb-10">
                Revolving Credit
              </h1>
              <div className="flex flex-col items-start justify-start ">
                <p className="text-white flex ">
                  <span className="text-green-500 text-xl">
                    <IoCheckbox />
                  </span>
                  &nbsp;Get approved for an agreed amount (Usually up to 1 month
                  turn over){" "}
                </p>
                <p className="text-white flex mt-3">
                  <span className="text-green-500 text-xl">
                    <IoCheckbox />
                  </span>
                  &nbsp;Initial repayment is 3 - 12 Months{" "}
                </p>
                <p className="text-white flex mt-3">
                  <span className="text-green-500 text-xl">
                    <IoCheckbox />
                  </span>
                  &nbsp;The capital portion of you repayments becomes available
                  to draw down when needed{" "}
                </p>
                <p className="text-white flex mt-3">
                  <span className="text-green-500 text-xl">
                    <IoCheckbox />
                  </span>
                  &nbsp;Repayments Daily or Weekly
                </p>
              </div>
              <div className="hidden md:block  justify-start items-center gap-7 mt-14 md:mr-[20rem] ">
                <Link href={"https://apply.getfunds.co.za"}>
                  <motion.p className="flex justify-center items-center text-center cursor-pointer bg-[#07d159] shadow-md shadow-green-600 px-10 py-3 rounded-md hover:bg-transparent hover:border-[#07d159] hover:border-2 hover:text-white hover:shadow-none font-semibold text-black">
                    Get Funds Now
                  </motion.p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
