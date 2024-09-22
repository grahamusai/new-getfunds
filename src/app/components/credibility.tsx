"use client";
// pages/index.tsx
import type { NextPage } from "next";
import Counter from "./counter";
import Image from "next/image";
import { motion } from "framer-motion";
import Qualify from "./qualify";

const Credibility: NextPage = () => {
  return (
    <div className="bg-slate-900 py-32">
      {/* <Qualify /> */}
      <div className=" flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-500">Our Credibility</h2>
          
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-[12rem]">
          <div className="flex text-center   p-2 rounded-lg text-6xl font-bold text-white">
            <Counter end={5.3} label="billion funded and counting " />
          </div>
          <div className="flex text-center   p-2 rounded-lg text-6xl font-bold text-white">
            <Counter end={9600} label="clients and counting" />
          </div>
          <Image
            src="/images/shariah.png"
            alt="fund-genie-logo"
            height={151}
            width={171} 
            className=""
          />
        </div>
        <div className="flex justify-start items-center m-auto gap-7 mt-[7rem]">
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
            className="flex justify-center items-center text-center bg-green-500 shadow-md shadow-green-600 px-10 py-2 rounded-md hover:bg-transparent hover:border-green-500 hover:border-2 hover:text-white hover:shadow-none font-bold text-black"
          >
            Get A Quote
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Credibility;
