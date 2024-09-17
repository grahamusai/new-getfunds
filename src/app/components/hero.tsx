"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Calculator from "./calculator";
import { motion } from "framer-motion";
import "animate.css";
import VideoBackground from "./videobackground";

const Hero = () => {
  return (
    <div className="md:relative z-10 bg-[#1e394c] h-screen  px-10 md:px-32 lg:px:48 2xl:px-[24rem] pt-[70px]">
      {/* Background Video */}
      <div className="hidden md:block">
        <div className="absolute inset-0 z-0">
          <VideoBackground />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Text Content */}
      <div className="relative flex z-50 items-center h-full text-white">
        <div className="w-full">
          <h1 className="text-[2rem] md:text-5xl border-green-500 font-bold text-green-500">
            Getfunds
          </h1>
          <hr className="max-w-20 border-t-2 border-green-500 mt-10" />
          <h2 className="text-2xl font-bold mt-10">
          &#9989;&nbsp;Your Cashflow brokers <br />
          &#9989;&nbsp;Access multiple funders in  <span className="text-green-500 drop-shadow-emerald-600 drop-shadow-md font-semibold">under 2 minutes</span>
          </h2>
          <p className="text-2xl mt-10">
            
          </p>
          <p className="text-base mt-10">
            We are a specialist consulting firm partnered with multiple
            working capital <br />providers giving  SMEs instant access to a
            range of funding solutions with <br />just one paperless application  and no capital
            raising fees.
          </p>

          {/* Align Apply Now button to the left */}
          <div className="flex justify-start items-center gap-7 mt-14">
            <motion.p
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="flex justify-center items-center text-center cursor-pointer bg-green-500 shadow-md shadow-green-600 px-10 py-2 rounded-md hover:bg-transparent hover:border-green-500 hover:border-2 hover:text-white hover:shadow-none font-semibold text-black"
            >
              Apply Now
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="flex justify-center items-center text-center bg-green-500 shadow-md shadow-green-600 px-10 py-2 rounded-md hover:bg-transparent hover:border-green-500 hover:border-2 hover:text-white hover:shadow-none font-semibold text-black"
            >
              Get A Quote
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
