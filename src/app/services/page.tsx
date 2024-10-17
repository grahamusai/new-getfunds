
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { IoCheckbox } from "react-icons/io5";
import Cta from "../components/cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Get Funds | Tailored SME Funding Services - Revolving Capital & Business Loans for Growth, Cash Flow & Expansion',
  keywords: 'SME funding services, business loans Gauteng, revolving capital, cash flow management, capital advances, business growth loans, short-term financing, quick loan approval'
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
      <section className=" bg-black sm:pt-10 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24 space-x-reverse">
            <div className="hidden md:block relative mb-12">
              <img className="w-full rounded-md" src="/images/02.png" alt="" />

              <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                <div className="overflow-hidden bg-transparent rounded-md">
                  <div className="px-10 py-2">
                    <div className="bg-black/50 py-2 px-2 mt-5">
                      <h2 className="text-xl text-white text-center py-2">
                        Industry Pricing Averages
                      </h2>
                      <div className="max-w-7xl mx-auto border-2 border-white my-8 text-center">
                        <div className="flex border-b-2 border-white text-white py-2 px-5 mx-8 justify-center items-center">
                          <h2 className="w-1/2 text-lg">Term (Months)</h2>
                          <h2 className="w-1/2 text-lg ml-20">Cost</h2>
                        </div>
                        <div className="flex  text-white ">
                          <div className="w-1/2">
                            <ul className="px-2 pb-10">
                              <li>3 Months</li>
                              <li>6 Months</li>
                              <li>9 Months</li>
                            </ul>
                          </div>
                          <div className="w-1/2">
                            <ul className="ml-10 pb-10">
                              <li>10%</li>
                              <li>20%</li>
                              <li>26%</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="my-16 text-2xl md:text-3xl font-bold leading-tight text-white sm:text-4xl  lg:leading-tight">
                Unsecured Merchant Cash Advance
              </h2>
              <div className="flex flex-col items-start justify-start my-10">
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
                  &nbsp;Repayments Daily, Weekly & Monthly
                </p>
              </div>
              <a
                href="https://apply.getfunds.co.za?broker=getfunds"
                title=""
                className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                role="button"
              >
                {" "}
                Get Funds Now{" "}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-black sm:py-16 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div>
              <h2 className="my-10 md:my-16 text-2xl md:text-3xl font-bold leading-tight text-white sm:text-4xl  lg:leading-tight">
                Stack Advance
              </h2>
              <p>
                If you have a current cash advance facility but require more
                funds. Get Funds has access to funders that fund over and above
                current cash advances, known as stacking. Its super quick and
                costs a little more but it beats being forced to change funders
                and face the heavy settlement penalties
              </p>
              <a
                href="https://apply.getfunds.co.za?broker=getfunds"
                title=""
                className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                role="button"
              >
                {" "}
                Get Funds Now{" "}
              </a>
            </div>
            <div className="hidden md:block relative mb-12">
              <img className="w-full rounded-md" src="/images/01.png" alt="" />

              <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                <div className="overflow-hidden bg-transparent rounded">
                  <div className="px-10 py-6">
                    <div className="bg-black/50 py-2 px-4 mt-5">
                      <h2 className="text-lg text-white text-center py-2">
                        Average Stack Pricing
                      </h2>
                      <div className="max-w-7xl mx-auto border-2 border-white my-5 text-center">
                        <div className="flex border-b-2 border-white text-white py-2 px-5 mx-8 justify-center items-center">
                          <h2 className="w-1/2 text-">Term (Months)</h2>
                          <h2 className="w-1/2 text-lg ml-20">Cost</h2>
                        </div>
                        <div className="flex  text-white ">
                          <div className="w-1/2">
                            <ul className="px-2 pb-10">
                              <li>6 Months</li>
                              <li>7 Months</li>
                              <li>8 Months</li>
                            </ul>
                          </div>
                          <div className="w-1/2">
                            <ul className="ml-10 pb-10">
                              <li>25%</li>
                              <li>28%</li>
                              <li>31%</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20">
        <div className="px-4  max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
              <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                <img
                  src="/images/application4.gif/"
                  className="dark:hidden w-[272px] h-[572px]"
                  alt=""
                />
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
                  className="hidden dark:block w-[272px] h-[572px]"
                  alt=""
                />
              </div>
            </div>
            <div className="py-8 justify-self-start">
              <h1 className="text-2xl font-bold md:text-3xl text-white mb-10">
                Revolving Credit
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
              <a
                href="https://apply.getfunds.co.za?broker=getfunds"
                title=""
                className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-12 bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                role="button"
              >
                {" "}
                Get Funds Now{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-black sm:py-16 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div>
              <h2 className="my-16 text-3xl font-bold leading-tight text-white sm:text-3xl  lg:leading-tight">
                3 Month Baloon
              </h2>
              <div className="flex flex-col items-start justify-start my-10">
                <p className="text-white flex ">
                  <span className="text-green-500 text-xl">
                    <IoCheckbox />
                  </span>
                  &nbsp;Up to One Month Revenue as a Cash Advance{" "}
                </p>
                <p className="text-white flex mt-3">
                  <span className="text-green-500 text-xl">
                    <IoCheckbox />
                  </span>
                  &nbsp;3 Months Term{" "}
                </p>
                <p className="text-white flex mt-3">
                  <span className="text-green-500 text-xl">
                    <IoCheckbox />
                  </span>
                  &nbsp;Total Cost 10%{" "}
                </p>
                <p className="text-white flex mt-3">
                  <span className="text-green-500 text-xl">
                    <IoCheckbox />
                  </span>
                  &nbsp;Only Pay at the end of the 3 months
                </p>
              </div>
              <a
                href="https://apply.getfunds.co.za?broker=getfunds"
                title=""
                className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                role="button"
              >
                {" "}
                Get Funds Now{" "}
              </a>
            </div>
            <div className="hidden md:block relative mb-12">
              <img
                className="w-full rounded-md"
                src="/images/blackman.jpg"
                alt=""
              />

              <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                <div className="overflow-hidden bg-[#17b556] rounded">
                  <div className="px-10 py-6">
                    <div className="flex items-center">
                      <p className="pl-6 text-sm uppercase font-semibold text-black sm:text-lg">
                        5 - 7 Day Turnaround time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-black sm:pt-10 lg:pt-24 mb-10">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24 space-x-reverse">
          <div className="hidden md:block relative mb-12">
              <img
                className="w-full rounded-md"
                src="/images/06.png"
                alt=""
              />

              <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                <div className="overflow-hidden bg-[#17b556] rounded">
                  <div className="px-10 py-6">
                    <div className="flex items-center">
                      <p className="pl-3 text-sm uppercase font-semibold text-black sm:text-lg">
                      Easy and accessible funding 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="my-16 text-2xl md:text-3xl font-bold leading-tight text-white sm:text-4xl  lg:leading-tight">
                Medical Funding
              </h2>
              <div className="flex flex-col items-start justify-start my-10">
                <p>
                  Get a cash Advance and pay as you practice. Your repayments
                  work directly in line with your medical aid claims: A debit
                  order will run directly against your practice&apos;s bank
                  account and your Medical Practice Advance facility is paid
                  back as a percentage of all future medical aid claims
                </p>
              </div>
              <a
                href="https://apply.getfunds.co.za?broker=getfunds"
                title=""
                className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                role="button"
              >
                {" "}
                Get Funds Now{" "}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
