"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import CallToAction from "../components/calltoaction";
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
      <div className="grid grid-cols-2 md:grid-cols-4 my-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full border-r-2 border-white flex justify-center items-center">
          <h2 className="text-[#07d159] text-2xl text-center py-10">
            Merchant Cash Advance
          </h2>
        </div>
        <div className="w-full md:border-r-2 border-white flex justify-center items-center">
          <h2 className="text-[#07d159] text-2xl text-center py-10">
            Stack <br /> Advance
          </h2>
        </div>
        <div className="w-full border-r-2 border-white flex justify-center items-center">
          <h2 className="text-[#07d159] text-2xl text-center py-10">
            Revolving <br /> Credit
          </h2>
        </div>
        <div className="w-full  flex justify-center items-center">
          <h2 className="text-[#07d159] text-2xl text-center py-10">
            3 Month <br /> Baloon
          </h2>
        </div>
      </div>
      {/* Merchant Cash */}

      <section className="py-10 bg-[#111] sm:py-16 text-white lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-left sm:text-center ">
            <h2 className="text-3xl font-bold leading-tight text-center text-white lg:text-4xl">
              Merchant Cash Advance
            </h2>
            <p className="max-w-xl text-center mx-auto mt-4 text-base leading-relaxed text-gray-200">
              An unsecure loan provided in 1-3days.
            </p>
          </div>

          <div className="mt-10 md:mt-20 grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="flex text-center">
              <div className="md:ml-4">
                <h3 className="text-lg  ">
                  Up to 1 Months Revenue <br /> As an advance{" "}
                </h3>
              </div>
            </div>
            <div className="flex text-center">
              <div className="md:ml-4">
                <h3 className="text-lg  ">
                  Pay Over <br /> 3 - 12 Months
                </h3>
              </div>
            </div>
            <div className="flex text-center">
              <div className="md:ml-4">
                <h3 className="text-lg  ">
                  Cost 2- 5% <br />
                  Per Months
                </h3>
              </div>
            </div>
            <div className="flex text-center">
              <div className="md:ml-4">
                <h3 className="text-lg  ">
                  Repayments Daily <br /> or Weekly
                </h3>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center my-8 md:mt-20">
            <div className="px-8 py-4 text-center bg-gray-800 rounded-full">
              <p className="text-gray-50">
                Your access top up funds once you paid up 50% |{" "}
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
        </div>
      </section>

      <div className="mx-10 mt-20">
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

      <div className="mt-20 bg-[#111] px-10 py-16 text-center text-white">
        <h2 className="text-2xl md:text-4xl  py-10">Need Working Capital?</h2>
        <p className="pb-2">
          <span className="text-green-700 text-lg">Opportunity:</span> Only take
          money if the benefits outweighs the cosy
        </p>
        <p className="text-lg">
          <span className="text-green-700">Challenge:</span> Only take money if
          you prefer the repayment over the problem
        </p>
        <div className="flex justify-center items-center">
          <Link href="https://apply.getfunds.co.za" target="_blank">
            <motion.p
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="hidden lg:block bg-[#07d159] shadow-md shadow-green-600 px-12 py-3  hover:bg-transparent hover:border-[#07d159] hover:border-2 hover:text-white hover:shadow-none text-black font-medium mt-14"
            >
              Apply Now
            </motion.p>
          </Link>
        </div>
      </div>

      <div className="w-full px-5">
        <div className="py-10">
          <h2 className="text-4xl text-white text-center py-2">
            Stack Advance
          </h2>
          <p className="text-white text-center text-lg">Same day funding</p>
          <p className="hidden md:block text-white text-center py-5 max-w-4xl mx-auto">
            If you have a current cash advance facility but require more funds.
            Get Funds has access to funders that fund over and above current
            cash advances, known as stacking. Its super quick and costs a little
            more but it beats being forced to change funders and face the heavy
            settlement penalties
          </p>
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
      </div>

      <section className="py-10 bg-[#111] sm:py-16 text-white text-center lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-left sm:text-center ">
            <h2 className="text-center text-3xl font-bold leading-tight text-white lg:text-4xl">
              Revolving Credit
            </h2>
            <p className="text-center max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-200">
              Only for SME&apos;s that trade over 20Million per annum
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="flex items-start ">
              <div className="ml-4">
                <h3 className="  ">
                  Get approved for an agreed amount (Usually up to 1 month turn
                  over)
                </h3>
              </div>
            </div>
            <div className="flex items-start">
              <div className="ml-4">
                <h3 className="  ">Initial repayment is 3 - 12 Months</h3>
              </div>
            </div>
            <div className="flex items-start">
              <div className="ml-4">
                <h3 className="  ">
                  The capital portion of you repayments becomes available to
                  draw down when needed
                </h3>
              </div>
            </div>
            <div className="flex items-start">
              <div className="ml-4">
                <h3 className="  ">Repayments Daily or Weekly</h3>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center my-8 md:mt-20">
            <div className="px-8 py-4 text-center bg-gray-800 rounded-full">
              <p className="text-gray-50">
                Your access top up funds once you paid up 50% |{" "}
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
        </div>
      </section>
      <section className="py-10  sm:py-16 text-white text-center lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-left sm:text-center ">
            <h2 className="text-center text-3xl font-bold leading-tight text-white lg:text-4xl">
              3 Month Baloon
            </h2>
            <p className="text-center max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-200">
              5 - 7 Day Turnaround time
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="flex items-start ">
              <div className="ml-4">
                <h3 className="  ">Up to One Month Revenue in Cash Advance</h3>
              </div>
            </div>
            <div className="flex items-start">
              <div className="ml-4">
                <h3 className="  ">3 Months Term</h3>
              </div>
            </div>
            <div className="flex items-start">
              <div className="ml-4">
                <h3 className="  ">Total Cost 10%</h3>
              </div>
            </div>
            <div className="flex items-start">
              <div className="ml-4">
                <h3 className="  ">Only Pay at the end of the 3 months</h3>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center my-8 md:mt-20">
            <div className="px-8 py-4 text-center bg-gray-800 rounded-full">
              <p className="text-gray-50">
                Your access top up funds once you paid up 50% |{" "}
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
