"use client";
import React from "react";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import Qualify from "./qualify";
import Lottiee from "./lottie/text";
import LottieSequence from "./lottie/animations";
import { motion } from "framer-motion";

const Process = () => {
  const style = {
    height: 300,
  };
  return (
    <section className="py-10 bg-[#000] sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
          <div className="relative lg:mb-12">
            {/* <img
              className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
              src="/images/dots-pattern.png"
              alt=""
            /> */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className=""
            >
              <img className="relative " src="/images/platform2.png" alt="" />
            </motion.div>
            {/* <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
              <div className="max-w-xs bg-[#17b556] rounded-lg sm:max-w-md xl:max-w-md">
                <div className="px-3 py-2 sm:px-5 sm:py-3">
                  <div className="flex items-start">
                    <p className="text-3xl sm:text-4xl">👋</p>
                    <blockquote className="ml-5">
                      <p className="text-sm font-semibold text-black sm:text-lg">
                        Instant Access to Multiple Funders with one application
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="flex flex-col items-center py-8">
            <h1 className="text-[2.5rem] text-center text-white mb-10">
              How to Get Funded
            </h1>

            <div className="flex gap-5 text-white">
              <div className="w-1/2 flex flex-col items-center border-2 border-[#07d159] p-6 rounded-lg">
                <div className="bg-green-300 p-4 rounded-full mb-4">
                  <h2 className="text-black">01</h2>
                </div>
                <p className="block md:hidden text-lg text-center">
                  Complete a 2min online application
                </p>
                <p className="hidden md:block text-lg text-center">
                  Complete a 2min <br />online application
                </p>
              </div>

              <div className="w-1/2 flex flex-col items-center border-2 border-[#07d159] p-6 rounded-lg">
                <div className="bg-green-200 p-4 rounded-full mb-4">
                  <h2 className="text-black">02</h2>
                </div>
                <p className="md:text-lg text-center">
                  Your broker contacts you to understand your needs
                </p>
              </div>
            </div>

            <div className="flex gap-5 mt-5 text-white">
              <div className="w-1/2 flex flex-col items-center border-2 border-[#07d159] p-6 rounded-lg">
                <div className="bg-green-300 p-4 rounded-full mb-4">
                  <h2 className="text-black">03</h2>
                </div>
                <p className="md:text-lg text-center">
                  Get matched with the right funders 
                </p>
              </div>

              <div className="w-1/2 flex flex-col items-center border-2 border-[#07d159] p-6 rounded-lg">
                <div className="bg-green-200 p-4 rounded-full mb-4">
                  <h2 className="text-black">04</h2>
                </div>
                <p className="text-lg  text-center">Get Funds in 1 - 3 days</p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-12">
              <a
                href="https://apply.getfunds.co.za?broker=getfunds"
                title=""
                className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-3 bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-80 focus:opacity-80"
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
  );
};

export default Process;
