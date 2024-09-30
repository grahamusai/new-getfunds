"use client";
// pages/index.tsx
import type { NextPage } from "next";
import Counter from "./counter";
import Image from "next/image";
import { motion } from "framer-motion";
import Qualify from "./qualify";

const Credibility: NextPage = () => {
  return (
    <div className="bg-[#000] pt-[6rem]">
      {/* <Qualify /> */}
      <div className=" ">
        <div className="px-10 md:px-16 xl:px-[8rem] mb-14">
          <h2 className="text-[2.5rem]  drop-shadow-md drop-shadow-green-400 text-center font-bold text-green-500 uppercase">
            Numbers to back OUR <br />
            CREDIBILITY
          </h2>
          <p className="mt-3 text-xl md:px-[10rem] text-center leading-relaxed text-gray-300 md:mt-8">
            We have used our economies of Scale to get the best pricing, terms and
            service for over 9000 businesses in South Africa.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center w-full mx-0 px-0">
            <div className="text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              <Counter end={5.3} label="billion funded and counting" />
              <span></span>
            </div>
            <div className="text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              <Counter end={9600} label="clients funded and counting" />
            </div>
            <Image
              src="/images/shariah.png"
              alt="fund-genie-logo"
              height={151}
              width={171}
              className="p-4 "
            />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Credibility;
