"use client"
import React from "react";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import Qualify from "./qualify";
import Lottiee from "./lottie/text";
import LottieSequence from "./lottie/animations";
import { motion } from "framer-motion";

const Process = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-full md:w-1/2 bg-gray-300">
         <LottieSequence />
        </div>
        <div className="w-full md:w-1/2 bg-[#0ad652] px-12 py-20">
          <h2 className="font-bold text-4xl">HOW TO GET FUNDED</h2>
          <p className="py-12 text-base pr-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            eligendi odit maxime cum optio dolorum.
          </p>
          <div className="w-full flex">
            <h2 className="bg-black text-white h-6 w-6 px-6 py-6 md:px-10 md:py-10 rounded-full font-extrabold text-3xl flex justify-center items-center">
              <span><MdOutlineArrowOutward /></span>
            </h2>
            <Qualify />
          </div>
          <div className="flex justify-start items-center gap-7 mt-20">
            <motion.p
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="flex justify-center items-center text-center cursor-pointer bg-black shadow-md  px-10 py-2 rounded-md hover:bg-transparent hover:border-black hover:border-2 hover:text-black hover:shadow-none font-semibold text-white"
            >
              Apply Now
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="flex justify-center items-center text-center bg-black shadow-md px-10 py-2 rounded-md hover:bg-transparent hover:border-black hover:border-2 hover:text-black hover:shadow-none font-semibold text-white"
            >
              Get A Quote
            </motion.p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Process;
