import React from "react";
import InnerVideo from "@/app/components/innervideo";

const Innerhero = () => {
  return (
    <div>
      <div className="hidden md:flex flex-col  text-center  z-10 h-[70%] px-10 md:px-24 lg:px-32 2xl:px-[14rem] pt-[18rem]">
        {/* Background Video */}
        <div className="hidden md:block">
          <div className=" -0 z-0 opacity-70">
            <InnerVideo />
          </div>
        </div>
        {/* Text Content */}
        <div className="relative flex z-50   text-white">
          <div className="w-full text-center">
            <h2 className="text-lg md:text-6xl font-bold max-w-3xl mx-auto">
              Website Design<br /> Package
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innerhero;
