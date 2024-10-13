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
    <div className="md:relative z-10  h-screen  px-10 md:px-24 lg:px-32 2xl:px-[14rem] pt-[70px]">
      {/* Background Video */}
      <div className="hidden md:block">
        <div className="absolute inset-0 z-0">
          <VideoBackground />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Text Content */}
      <div className="relative flex z-50 items-center h-full mt-12 text-white">
        <div className="w-full md:w-1/2">
          <h1 className="text-[3rem] md:text-5xl border-[#07d159]  text-white">
            Getfunds
          </h1>
          <hr className="max-w-20 border-t-2 border-[#07d159] mt-10" />
          <p className="text-2xl font-bold mt-10">
            Your Cashflow brokers <br />
            Access multiple funders in{" "}
            <span className="text-[#07d159] drop-shadow-emerald-600 drop-shadow-md font-semibold">
              under 2 minutes
            </span>
          </p>
          <p className="text-2xl mt-10"></p>
          <p className="leading-relaxed text-gray-300 mt-10 text-xl">
            We are a specialist consulting firm partnered with multiple working
            capital providers giving SMEs instant access to a range of funding
            solutions with just one paperless application and no capital raising
            fees.
          </p>

          {/* Align Apply Now button to the left */}
          <div className="hidden md:block  justify-start items-center gap-7 mt-14 mr-[20rem]">
            <Link href={"https://apply.getfunds.co.za"}>
              <motion.p className="flex justify-center items-center text-center cursor-pointer bg-[#07d159] shadow-md shadow-green-600 px-10 py-3 rounded-md hover:bg-transparent hover:border-[#07d159] hover:border-2 hover:text-white hover:shadow-none font-semibold text-black">
                Start An Application
              </motion.p>
            </Link>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default Hero;
