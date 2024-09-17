"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline";
import { motion } from "framer-motion";


export function TimelineDemo() {
  const data = [
    {
      title: "Online Application",
      content: (
        <div className="bg-black">
          <h3 className="text-neutral-100 font-bold dark:text-neutral-200 text-lg md:text-lg mb-8">
            Complete a 2 minute online application
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/1.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-[80%] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/2.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-[80%] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/3.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-[80%] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/4.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-[80%] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Personalized attention",
      content: (
        <div className="bg-black">
          <p className="text-neutral-100 font-bold dark:text-neutral-200 text-lg md:text-lg mb-8">
            A funding specialist contacts you to undertsnd your needs and gives you personalised attantion
          </p>
         
          <div className=" gap-4">
            <Image
              src="/images/fundung.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-[60%] w-[80%] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
        </div>
      ),
    },
    {
      title: "Funder Matching",
      content: (
        <div>
          <p className="text-neutral-100 font-bold dark:text-neutral-200 text-lg md:text-lg mb-8">
            We match you with the best funder, according to your requirements
          </p>
          
          <div className=" gap-4">
            <Image
              src="/images/fundung.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-[70%] w-[80%] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
           
          </div>
        </div>
      ),
    },
    {
      title: "Funding in 1-3 Days",
      content: (
        <div>
          <p className="text-neutral-100 font-bold dark:text-neutral-200 text-lg md:text-lg mb-8">
            We match you with the best funder, according to your requirements
          </p>
          
          <div className=" gap-4">
            <Image
              src="/images/fundung.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-[70%] w-[80%] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
           
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center mb-10">
      <Timeline data={data} />
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
  );
}
