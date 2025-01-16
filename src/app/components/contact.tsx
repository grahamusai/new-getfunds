import React from "react";
import ContactForm from "./form";
import Image from "next/image";
import { LiaFacebookF } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";


const Contact = () => {
  return (
    <div>
      <div className="bg-[url('/images/office.png')] mt-20 ">
        <ContactForm />
      </div>
      <div className="flex justify-center items-center mt-12 flex-col gap-5 py-20">
        <Image
          src="/images/logo-white.png"
          width={200}
          height={200}
          alt="Picture of the author"
        />
        <p>Leading performance marketing agency based in Cape Town and Johannesburg (Head Office)</p>
        <a href="tel:+27740430904" className="text-[#fc4757]">+27740430904</a>
        <div className="flex gap-5 mt-10">
          <a
            href="https://www.facebook.com/AlphaPerformance/"
            target="_blank"
            className="text-[#ffffff] border-2 border-[#ffffff] rounded-full p-2"
          >
            <LiaFacebookF size={25} />
          </a>
          <a
            href="https://www.facebook.com/AlphaPerformance/"
            target="_blank"
            className=" text-[#ffffff] border-2 border-[#ffffff] rounded-full p-2"
          >
            <FaInstagram size={25} />
          </a>
          <a
            href="https://www.facebook.com/AlphaPerformance/"
            target="_blank"
            className=" text-[#ffffff] border-2 border-[#ffffff] rounded-full p-2"
          >
            <FaLinkedinIn size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
