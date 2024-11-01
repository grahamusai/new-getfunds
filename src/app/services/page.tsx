import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { IoCheckbox } from "react-icons/io5";
import Cta from "../components/cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Get Funds | Tailored SME Funding Services - Revolving Capital & Business Loans for Growth, Cash Flow & Expansion",
  keywords:
    "SME funding services, business loans Gauteng, revolving capital, cash flow management, capital advances, business growth loans, short-term financing, quick loan approval",
};

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
      <section className=" bg-black sm:pt-10 lg:pt-24 ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24 space-x-reverse">
            <div className="hidden md:block relative mb-12">
              <img
                className="w-full rounded-md"
                src="/images/blackdude.png"
                alt=""
              />
            </div>

            <div>
              <h2 className="uppercase text-center md:text-left my-10 text-2xl md:text-3xl leading-tight text-white sm:text-4xl  lg:leading-tight">
                Unsecured merchant cash advance
              </h2>
              <div className="flex flex-col items-start justify-start my-10">
                <p className="text-white flex ">
                  <span className="text-green-500 text-xl">
                    <IoCheckbox />
                  </span>
                  &nbsp;Up to one months revenue as a cash advance{" "}
                </p>
                <p className="text-white flex mt-3">
                  <span className="text-green-500 text-xl">
                    <IoCheckbox />
                  </span>
                  &nbsp;Pay over 3 - 12 months{" "}
                </p>
                <p className="text-white flex mt-3">
                  <span className="text-green-500 text-xl">
                    <IoCheckbox />
                  </span>
                  &nbsp;Cost 2- 5% per Month{" "}
                </p>
                <p className="text-white flex mt-3">
                  <span className="text-green-500 text-xl">
                    <IoCheckbox />
                  </span>
                  &nbsp;Repayments daily, weekly & monthly
                </p>
              </div>

              <div className="block md:hidden flex justify-center items-center">
                <a
                  href="https://apply.getfunds.co.za?broker=getfunds"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md md:mt-9 bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                  role="button"
                >
                  {" "}
                  Get Funds Now{" "}
                </a>
              </div>
              <div className="hidden md:block">
                <a
                  href="https://apply.getfunds.co.za?broker=getfunds"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md md:mt-9 bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                  role="button"
                >
                  {" "}
                  Get Funds Now{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:bg-[#1f1f1f] py-5  sm:py-10 lg:pt-24 mt-5">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl ">
          {/* Background div visible only on mobile (hidden on md and up) */}
          <div className="py-10 absolute inset-0 bg-[url('/images/01.png')] bg-cover opacity-35 z-0 md:hidden" />

          {/* Content */}
          <div className="py-12 relative z-10 grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div>
              <h2 className="text-center md:text-left uppercase my-10 md:my-16 text-2xl md:text-3xl leading-tight text-white sm:text-4xl lg:leading-tight">
                Stack advance
              </h2>
              <p className="text-white ">
                If you have a current cash advance facility but require more
                funds. Get Funds has access to funders that fund over and above
                current cash advances, known as stacking. Its super quick and
                costs a little more but it beats being forced to change funders
                and face the heavy settlement penalties
              </p>
              <div className="mt-8 md:hidden flex justify-center items-center">
                <a
                  href="https://apply.getfunds.co.za?broker=getfunds"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md md:mt-9 bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                  role="button"
                >
                  {" "}
                  Get Funds Now{" "}
                </a>
              </div>
              <div className="hidden md:block">
                <a
                  href="https://apply.getfunds.co.za?broker=getfunds"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md md:mt-9 bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                  role="button"
                >
                  {" "}
                  Get Funds Now{" "}
                </a>
              </div>
            </div>
            <div className="hidden md:block relative mb-12">
              <img
                className="w-full rounded-md"
                src="/images/whitedude.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="md:pt-20">
        <div className="px-4  max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
            <div className="hidden md:block relative mb-12">
              <img
                className="w-[70%] rounded-md"
                src="/images/giiirl.png"
                alt=""
              />
            </div>
            <div className="py-8 justify-self-start">
              <h1 className="text-center md:text-left uppercase text-2xl  md:text-3xl text-white mb-10">
                Revolving credit
              </h1>

              <div className="flex flex-col items-start justify-start mt-5">
                <p className="text-white flex ">
                  <span className="text-green-500 text-xl">
                    <IoCheckbox />
                  </span>
                  &nbsp;Get approved for an agreed amount, usually up to 1
                  month&apos;s turnover{" "}
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
                  &nbsp;Repayments Daily, Weekly & Monthly
                </p>
              </div>

              <div className="mt-10 md:hidden flex justify-center items-center">
                <a
                  href="https://apply.getfunds.co.za?broker=getfunds"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md md:mt-9 bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                  role="button"
                >
                  {" "}
                  Get Funds Now{" "}
                </a>
              </div>
              <div className="hidden md:block">
                <a
                  href="https://apply.getfunds.co.za?broker=getfunds"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md md:mt-9 bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                  role="button"
                >
                  {" "}
                  Get Funds Now{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-10 sm:py-16 lg:pt-24 mt-10">
        {/* Mobile-only background */}
        <div className="absolute inset-0 bg-[url('/images/04.png')] bg-cover opacity-40 z-0 md:hidden" />

        {/* Dark background for non-mobile */}
        <div className="absolute inset-0 bg-[#111] z-0 hidden md:block" />

        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div>
              <h2 className="text-center md:text-left uppercase mb-5 md:my-16 text-2xl md:text-3xl leading-tight text-white sm:text-3xl lg:leading-tight">
                3 month balloon
              </h2>

              <div className="flex flex-col items-start justify-start md:my-10">
                <p className="text-white flex items-center">
                  <span className="text-green-500 text-xl">
                    <IoCheckbox />
                  </span>
                  <span className="ml-2">
                    Up to one month revenue as a cash advance
                  </span>
                </p>

                <p className="text-white flex items-center mt-3">
                  <span className="text-green-500 text-xl">
                    <IoCheckbox />
                  </span>
                  <span className="ml-2">3 months term</span>
                </p>

                <p className="text-white flex items-center mt-3">
                  <span className="text-green-500 text-xl">
                    <IoCheckbox />
                  </span>
                  <span className="ml-2">Total cost 10%</span>
                </p>

                <p className="text-white flex items-center mt-3">
                  <span className="text-green-500 text-xl">
                    <IoCheckbox />
                  </span>
                  <span className="ml-2">
                    Only pay at the end of the 3 months
                  </span>
                </p>
              </div>

              <div className="mt-10 md:hidden flex justify-center items-center">
                <a
                  href="https://apply.getfunds.co.za?broker=getfunds"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md md:mt-9 bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                  role="button"
                >
                  {" "}
                  Get Funds Now{" "}
                </a>
              </div>
              <div className="hidden md:block">
                <a
                  href="https://apply.getfunds.co.za?broker=getfunds"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md md:mt-9 bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                  role="button"
                >
                  {" "}
                  Get Funds Now{" "}
                </a>
              </div>
            </div>

            <div className="hidden md:block relative mb-12">
              <img
                className="w-[70%] rounded-md"
                src="/images/lady.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-10 sm:py-16 lg:pt-24 mt-10">
        {/* Mobile-only background */}
        <div className="absolute inset-0 bg-[url('/images/thingy.png')] bg-cover opacity-40 z-0 md:hidden" />

        {/* Dark background for non-mobile */}
        <div className="absolute inset-0 z-0 hidden md:block" />

        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div className="hidden md:block relative mb-12">
              <img className="w-[70%] " src="/images/medical.png" alt="" />
            </div>
            <div>
              <h2 className="text-center md:text-left uppercase mb-5 md:my-16 text-2xl md:text-3xl leading-tight text-white sm:text-3xl lg:leading-tight">
                Medical Funding
              </h2>

              <div className="flex flex-col items-start justify-start my-10">
                <p>
                  Get a cash advance and pay as you practice. Your repayments
                  work directly in line with your medical aid claims: A debit
                  order will run directly against your practice&apos;s bank
                  account and your Medical Practice Advance facility is paid
                  back as a percentage of all future medical aid claims
                </p>
              </div>

              <div className="mt-10 md:hidden flex justify-center items-center">
                <a
                  href="https://apply.getfunds.co.za?broker=getfunds"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md md:mt-9 bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                  role="button"
                >
                  {" "}
                  Get Funds Now{" "}
                </a>
              </div>
              <div className="hidden md:block">
                <a
                  href="https://apply.getfunds.co.za?broker=getfunds"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md md:mt-9 bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                  role="button"
                >
                  {" "}
                  Get Funds Now{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* <div className="fixed bottom-4 right-4">
        <a href="https://apply.getfunds.co.za?broker=getfunds" className="md:hidden bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-3xl py-3 px-4 shadow-lg">
          APPLY NOW
        </a>
      </div> */}
      <Footer />
    </div>
  );
};

export default Services;
