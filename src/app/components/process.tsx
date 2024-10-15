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
    <section className="py-10 bg-[#111] sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
          <div className="relative lg:mb-12">
            <img
              className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
              src="/images/dots-pattern.png"
              alt=""
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pl-12 pr-6"
            >
              <img className="relative" src="/images/phones.png" alt="" />
            </motion.div>
            <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
              <div className="max-w-xs bg-[#0c873d] rounded-lg sm:max-w-md xl:max-w-md">
                <div className="px-3 py-2 sm:px-5 sm:py-8">
                  <div className="flex items-start">
                    <p className="text-3xl sm:text-4xl">👋</p>
                    <blockquote className="ml-5">
                      <p className="text-sm font-semibold text-white sm:text-lg">
                        Instant Access to Multiple Funders with one application
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  items-center py-8">
            <h1 className="text-[2.5rem] text-center text-white mb-10">
              How To Get Funded
            </h1>

            <div className="flex gap-5 text-white">
              <div className="w-1/2 flex flex-col items-center border-2 border-[#07d159] p-6 rounded-lg">
                <div className="bg-green-300 p-4 rounded-full mb-4">
                  <h2 className="text-black">01</h2>
                </div>
                <p className="text-lg text-center">
                  Complete a 2min online application
                </p>
              </div>

              <div className="w-1/2 flex flex-col items-center border-2 border-[#07d159] p-6 rounded-lg">
                <div className="bg-green-200 p-4 rounded-full mb-4">
                  <h2 className="text-black">02</h2>
                </div>
                <p className="text-lg text-center">
                  Broker contacts you to understand your needs
                </p>
              </div>
            </div>

            <div className="flex gap-5 mt-5 text-white">
              <div className="w-1/2 flex flex-col items-center border-2 border-[#07d159] p-6 rounded-lg">
                <div className="bg-green-300 p-4 rounded-full mb-4">
                  <h2 className="text-black">03</h2>
                </div>
                <p className="text-lg text-center">
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
              <Link href="https://apply.getfunds.co.za" target="_blank">
                <motion.p
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  className="hidden lg:block bg-[#07d159] shadow-md shadow-green-600 px-6 py-3 rounded-md hover:bg-transparent hover:border-[#07d159] hover:border-2 hover:text-white hover:shadow-none text-black font-medium"
                >
                  Get Funds Now
                </motion.p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
