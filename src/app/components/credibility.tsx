"use client";
// pages/index.tsx
import type { NextPage } from "next";
import Counter from "./counter";
import Image from "next/image";
import { motion } from "framer-motion";
import Qualify from "./qualify";
import Link from "next/link";

const Credibility: NextPage = () => {
  return (
    <div className="bg-[#111] py-10 md:py-[6rem]">
      {/* <Qualify /> */}
      <div className=" ">
        <div className="px-10 md:px-16 xl:px-[8rem] mb-14">
          <h2 className="text-xl md:text-[2.5rem] md:leading-10 pt-16 drop-shadow-md drop-shadow-green-400 md:text-center font-bold text-white uppercase">
            Numbers to back OUR <br />
            CREDIBILITY
          </h2>
          <p className="hidden md:block mt-3 text-xl md:px-[10rem] text-center leading-relaxed text-gray-300 md:mt-8">
            We have used our economies of Scale to get the best pricing, terms
            and service for over 9000 businesses in South Africa.
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

export default Credibility;
