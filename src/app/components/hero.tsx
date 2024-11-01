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
    <>
    <div className="md:hidden relative min-h-screen bg-[url('/images/symbol.png')] bg-contain bg-no-repeat bg-center bg-opacity-15">
      
      {/* Content */}
      <div className="block md:hidden md:relative z-10 md:h-screen px-10 md:px-24 lg:px-32 2xl:px-[14rem] pt-[70px]">
        {/* Text Content */}
        <div className="relative flex flex-col items-start lg:items-start lg:text-left mt-2 md:mt-12 text-white">
          <div className="w-full md:w-1/2">
            <h1 className="text-center md:text-left text-4xl md:text-[3rem] md:text-5xl border-[#07d159] mt-9 text-white">
              Get Funds
            </h1>
            <hr className="hidden md:block max-w-20 border-t-2 border-[#07d159] mt-10" />
            <p className="text-center md:text-left text-xl md:text-2xl font-bold mt-10">
              Your<span className="text-[#07d159]"> Cashflow Brokers</span>{" "}
              <br />
            </p>
            <p className="text-xl md:text-2xl font-bold mt-3 text-center md:text-left">
              Access multiple funders in <span className="text-[#07d159]">under 2 minutes</span>{" "}
              <br />
            </p>
            
            <p className="leading-1 text-center md:text-left text-gray-300 mt-10 text-xl">
              We are a specialist consulting firm.  
            </p>
            <p className="leading-1 text-center md:text-left text-gray-300 mt-2 text-xl">
              Partnered with multiple working capital providers giving SMEs instant access to a range of
              funding solutions.
            </p>
            <p className="leading-1 text-center md:text-left text-gray-300 mt-2 text-xl">
              Just one paperless application and no capital raising fees.
            </p>

            <div className="flex justify-center items-center gap-7 my-14">
              <a
                href="https://apply.getfunds.co.za?broker=getfunds"
                title=""
                className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md my-3 bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                role="button"
              >
                Get Funds Now
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2"></div>
        </div>
      </div>
    </div>
    
    <div className="hidden md:block md:relative z-10  h-screen  px-10 md:px-24 lg:px-32 2xl:px-[14rem] pt-[70px]">
      {/* Background Video */}
      <div className="hidden md:block">
        <div className="absolute inset-0 z-0 opacity-70">
          <VideoBackground />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-transparent bg-opacity-50"></div>
      </div>

      {/* Text Content */}
      <div className="relative flex z-50 items-center h-full mt-12 text-white">
        <div className="w-full md:w-1/2">
          <h1 className="text-[3rem] md:text-5xl border-[#07d159]  text-white">
            Get Funds 
          </h1>
          <hr className="max-w-20 border-t-2 border-[#07d159] mt-10" />
          <p className="text-lg md:text-2xl font-bold mt-10">
          Your<span className="text-[#07d159]"> Cashflow Brokers</span> <br />
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
          <div className="hidden md:block  justify-start items-center gap-7 mt-14 ">
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
        <div className="w-full md:w-1/2"></div>
      </div>
    </div>
    
    </>
  );
};

export default Hero;
