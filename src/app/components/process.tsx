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
    <div className="px-24">
      <h2 className=" text-center uppercase text-lg md:text-4xl mb-4 text-green-500 dark:text-white py-20">
        How to <br />
        Get Funded
      </h2>
      <div className="flex gap-10 text-white">
        <div className="flex flex-col w-full md:w-1/4 text-center mt-2">
          <Lottiee  />
          <p className="mt-3 text-lg">Complete a 2min online application</p>
        </div>
        <div className="flex flex-col w-full md:w-1/4 text-center mt-2">
        <div className="flex">
          <h2 className="text-4xl">02/</h2>
        <Lottiee />
        </div>
          
          <p className="mt-3  text-lg">Broker Contacts your to understand your needs</p>
        </div>
        <div className="flex flex-col w-full md:w-1/4 text-center mt-2">
          <Lottiee />
          <p className="mt-3  text-lg">Matched with the right funder</p>
        </div>
        <div className="flex flex-col w-full md:w-1/4 text-center mt-2">
          <Lottiee />
          <p className="mt-3  text-lg">Recieve funds in 1 - 3 days</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
      <Link href="https://apply.getfunds.co.za" target="_blank">
            <motion.p
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="hidden lg:block bg-green-500 shadow-md shadow-green-600 px-6 py-2 mt-20 rounded-md hover:bg-transparent hover:border-green-500 hover:border-2 hover:text-white hover:shadow-none text-black font-bold"
            >
              Start an Application
            </motion.p>
          </Link>
      </div>
    </div>
  );
};

export default Process;
