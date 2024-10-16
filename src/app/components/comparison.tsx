"use client"
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Comparison = () => {
  return (
    <div className="hidden md:block py-32 md:mx-32 ">
      <h2 className="text-2xl py-10 font-bold leading-tight uppercase text-center text-[#07d159] sm:text-4xl lg:text-3xl">
        Why Choose Getfunds
      </h2>
      <div className=" mx-auto border-b-2 border-white flex pt-5 pb-3 text-white">
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl">Going Direct</h2>
        </div>
        <div className="w-full md:w-1/3 text-center">
          <h2 className="text-2xl">Broker With Multiple Funders</h2>
        </div>
        <div className="w-full md:w-1/3 text-right">
          <h2 className="text-2xl">Why We Are Better</h2>
        </div>
      </div>
      {/* First Section */}
      <div className=" mx-auto flex gap-24 py-5 text-white">
        <div className="w-full md:w-1/3  border-[#07d159] pt-10">
          <p>Limited to one set of products and terms</p>
        </div>
        <div className="w-full md:w-1/3 text-center  border-[#07d159] pt-10">
          <p>Access to a wide range of products and terms</p>
        </div>
        <div className="w-full md:w-1/3 text-right  border-[#07d159] pt-10">
          <p className="text-[#07d159]">
            More flexibility and options to match your needs
          </p>
        </div>
      </div>
      {/* Second Section */}
      <div className=" mx-auto gap-24 flex py-5 text-white">
        <div className="w-full md:w-1/3  border-white pt-5">
          <p>Approval rate is based on one funder&apos;s criteria</p>
        </div>
        <div className="w-full md:w-3/4 px-10 py-3  rounded-md text-center  border-white pt-5">
          <p>Higher approval rates by shopping around multiple funders</p>
        </div>
        <div className="w-full md:w-1/3 text-right  border-white pt-5">
          <p className="text-[#07d159] ">
            Increases chances of approval by finding the right match
          </p>
        </div>
      </div>
      {/* Third Section */}
      <div className="gap-24 mx-auto flex py-5 text-white">
        <div className="w-full md:w-1/3  border-white pt-5">
          <p>Funding costs are Fixed by the single funder</p>
        </div>
        <div className="w-full md:w-3/4 px-10 py-3  rounded-md text-center  border-white pt-5">
          <p>Competitive pricing by comparing different funders</p>
        </div>
        <div className="w-full md:w-1/3 text-right  border-white pt-5">
          <p className="text-[#07d159]">
            Potentially lower rates by comparing offers
          </p>
        </div>
      </div>
      {/* Fouth Section */}
      <div className="gap-24 mx-auto flex py-5 text-white">
        <div className="w-full md:w-1/3  border-white pt-5">
          <p>Speed depends on one funder&apos;s process </p>
        </div>
        <div className="w-full md:w-3/4 px-10 py-3  rounded-md text-center  border-white pt-5">
          <p>Faster funding by finding the quickest funder available</p>
        </div>
        <div className="w-full md:w-1/3 text-right  border-white pt-5">
          <p className="text-[#07d159]">Ability to choose the fastest option</p>
        </div>
      </div>
      {/* Fiveth Section */}
      <div className="gap-24 mx-auto flex py-5 text-white">
        <div className="w-full md:w-1/3  border-white pt-5">
          <p>Limited customisation based on one funder&apos;s products and mandates</p>
        </div>
        <div className="w-full md:w-1/3 text-center  border-white pt-5">
          <p>Highly tailored solutions by mixing and matching funders</p>
        </div>
        <div className="w-full md:w-1/3 text-right  border-white pt-5">
          <p className="text-[#07d159]">More Personalised funding solutions</p>
        </div>
      </div>
      {/* Fiveth Section */}
      <div className="gap-24 mx-auto flex py-5 text-white">
        <div className="w-full md:w-1/3  border-white pt-5">
          <p>Limited leverage to negotiating terms</p>
        </div>
        <div className="w-full md:w-1/3 text-center  border-white pt-5">
          <p>Broker can negotiate better terms with multiple funders</p>
        </div>
        <div className="w-full md:w-1/3 text-right  border-white pt-5">
          <p className="text-[#07d159]">Increased negotiation power through our volumes and network</p>
        </div>
      </div>
      {/* Seventh Section */}
      <div className="gap-24 mx-auto flex py-5 border-b-2 border-white text-white">
        <div className="w-full md:w-1/3  border-white pt-5">
          <p>Market knowledge limited to one funder&apos;s expertise</p>
        </div>
        <div className="w-full md:w-1/3 text-center  border-white pt-5">
          <p>Brokers provide market insight across multiple funders</p>
        </div>
        <div className="w-full md:w-1/3 text-right  border-white pt-5">
          <p className="text-[#07d159]">Access to broader market knowledge and advice</p>
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
  );
};

export default Comparison;
