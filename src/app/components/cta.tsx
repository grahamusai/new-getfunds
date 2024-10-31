"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Cta = () => {
  return (
    <>
      <div className='w-full flex bg-green-500/10 md:px-[40rem] mt-[5.5rem] h-[70vh] flex-col items-center justify-center  bg-[url("/images/backgroundimage-min.png")] bg-cover bg-no-repeat bg-top text-center'>
        <h2 className="text-3xl  uppercase drop-shadow-md drop-shadow-green-400 text-center  md:text-4xl font-medium text-white py-3">
          Our Funding Options
        </h2>
        <a
          href="https://apply.getfunds.co.za?broker=getfunds"
          title=""
          className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-5 md:mt-12 bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-80 focus:opacity-80"
          role="button"
        >
          {" "}
          Get Funds Now{" "}
        </a>
      </div>
    </>
  );
};

export default Cta;
