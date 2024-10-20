"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Cta = () => {
  return (
    <>
      
      <div className='w-full flex mt-[5.5rem] h-[70vh] flex-col items-center justify-center  bg-[url("/images/backgroundimage-min.png")] bg-cover bg-no-repeat bg-top text-center'>
        <h2 className="text-3xl md:text-5xl font-medium text-[#ffffff]">
          Our Funding <br /> Options
        </h2>
       
      </div>
     
    </>
  );
};

export default Cta;
