import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#1e394c] px-24 pt-8 pb-8 text-white  ">
     
      <div className="flex text-center">
        <div className="text-sm text-center">
          Copyright <span className="font-bold">&copy;</span> 2024 Fundgenie.
          All Rights reserved | Designed by <span className="text-[#e0cb70]"> Alpha Perfomance</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
