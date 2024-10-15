"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Cta = () => {
  return (
    <>
      
      <div className='w-full flex mt-[5rem] h-[60vh] flex-col items-center justify-center bg-black bg-[url("/images/group.png")] bg-no-repeat bg-center text-center'>
        <h2 className="text-5xl font-medium text-[#ffffff]">
          Our Funding <br /> Options
        </h2>
        <p className="pt-5 text-lg font-semibold text-white"> 
          Home | Funding Options
        </p>
      </div>
     
    </>
  );
};

export default Cta;
