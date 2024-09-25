import React from "react";
import { motion } from "framer-motion";
import VideoBackground from "../videobackground";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full md:relative z-10 bg-[#1e394c] px-10 md:px-24 flex flex-col md:flex-row  py-10 gap-14">
      <div className="hidden md:block">
        <VideoBackground />
      </div>
      <div className="w-full md:w-3/5">
        <h2 className="font-bold text-4xl md:text-[60px] leading-normal text-white">
          PARTNER WITH Get Funds
        </h2>
        <p className="text-white pt-3 text-sm">
          We Partner with Accounting Firms, Suppliers, ISOs, Brokerages, and
          Independent Advisors that work within the SME sector. United we use
          our economies of scale to get the best deals and service for our
          clients.
        </p>
        
          <div className="mx-0 flex pt-6 gap-3">
          <Link href="#contactForm" className="mx-0">
            <button className="px-14 py-3 rounded-full mx-0 bg-white">Become a Broker</button>
            </Link>
          </div>
        

        <div className="hidden md:block">
          <h3 className="pt-10 text-white font-semibold ">
            Instead of your clients using Google when they need funds, Backed By
            Get Funds you can offer the following:
          </h3>
          <div className="flex gap-12">
            <p className="text-white text-sm pt-3">
              • Free Service <br /> • We offer multiple options <br />• Correct
              funder match first time <br /> • Highest approval rates <br />
            </p>
            <p className="text-white text-sm pt-3">
              • Get Funds does all the work
              <br />• Access to all the top funders <br />• 1-3 Days turnaround
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/5">
        <motion.img
          src="/images/Genie _Business.png"
          alt="Bouncing"
          style={{ width: "23rem" }}
        />
      </div>
    </div>
  );
};

export default Hero;
