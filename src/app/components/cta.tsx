"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Cta = () => {
  return (
    <>
      <div className='w-full flex mt-[5.5rem] h-[70vh] flex-col items-center justify-center  bg-[url("/images/backgroundimage-min.png")] bg-cover bg-no-repeat bg-top text-center'>
        <h2 className="text-3xl bg-green-500/30 md:px-[40rem] uppercase drop-shadow-md drop-shadow-green-400 text-center  md:text-4xl font-medium text-white py-3">
          Our Funding Options
        </h2>
      </div>
    </>
  );
};

export default Cta;
