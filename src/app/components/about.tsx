"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { ParallaxSection } from "./parallax";

const About = () => {
  return (
    <div>
      <div className="mt-[12rem] flex justify-center items-center max-w-5xl mx-auto gap-10 bg-black ">
        <div className="w-full md:w-1/2 text-center">
          <h1 className="text-5xl font-bold text-center text-[#fc4757] leading-12">
            About Alpha <br /> Performance
          </h1>
          <p className="text- mt-8 text-gray-100">
            We are a Digital Marketing agency based nationally and
            internationally. We are extremely passionate about helping other
            businesses meet their goals through many different marketing
            strategies ranging from; Web Design Social Media Marketing;
            Branding; Reputation Management and much more. We hold ourselves to
            the high standard and constantly strive for excellence. No matter
            who you are and what you do, we care about your success by sharing
            our core values.
          </p>
          {/* Align Apply Now button to the left */}
          <div className="hidden md:block justify-center items-center gap-7 mt-8">
            <a
              href="https://apply.getfunds.co.za?broker=getfunds"
              title=""
              className="uppercase inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-full mt-3 bg-gradient-to-r from-red-600 to-rose-600 hover:opacity-80 focus:opacity-80"
              role="button"
            >
              <FaArrowRight /> &nbsp;
              <span>Book a meeting</span>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/images/creatives.jpg"
            width={600}
            height={600}
            alt="Picture of the author"
          />
        </div>
      </div>
      
      <div className="mt-[12rem] flex justify-center items-center bg-cover px-20 bg-opacity-80 py-20 bg-no-repeat  bg-[url('/images/parallax.jpg')]">
        <div className="w-full md:w-1/2 text-right">
          <Image
            src="/images/digital.png"
            width={600}
            height={600}
            alt="Picture of the author"
          />
        </div>
        <div className="w-full md:w-1/2 text-center max-w-xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-[#fc4757] leading-12">
            Get in Touch With Us
          </h1>
          <p className="text- mt-8 text-gray-100">
            A team of experts. Our team of digital marketing experts has the
            skills and knowledge to help you grow your online business faster
            than you thought possible. Our team is constantly learning and
            keeping up with the latest trends.
          </p>
          {/* Align Apply Now button to the left */}
          <div className="hidden md:block justify-center items-center gap-7 mt-8">
            <a
              href="https://apply.getfunds.co.za?broker=getfunds"
              title=""
              className="uppercase inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-full mt-3 bg-gradient-to-r from-red-600 to-rose-600 hover:opacity-80 focus:opacity-80"
              role="button"
            >
              <span>Explore our services</span>
              &nbsp;
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
