import React from "react";

const WhyUs = () => {
  return (
    <section className="my-20 ">
      <div>
        <h2 className=" text-center text-lg md:text-3xl mb-4 text-green-500 dark:text-white py-20">
          YOUR ADVANTAGES TO <br />
          CHOOSING US
        </h2>
        <div className="w-full border-y-2 border-gray-500 py-9">
          <p className="text-white px-24 text-[24px]">
            We offer more flexible funding options to match your needs
          </p>
        </div>
        <div className="w-full bg-[#1c1c1c] border-b-2 border-gray-500 py-9">
          <p className="text-white  px-24 text-[24px]">
            Because we work with multiple funders, we boast of the highest
            approval rate in the country.
          </p>
        </div>
        <div className="w-full  border-b-2 border-gray-500 py-9">
          <p className="text-white  px-24 text-[24px]">
            By comparing different funders we are able to provide competitive
            pricing.
          </p>
        </div>
        <div className="w-full border-b-2 border-gray-500 py-9">
          <p className="text-white  px-24 text-[24px]">
            We provide faster funding by finding the quickest funder available
            that suits your business&apos;s needs
          </p>
        </div>
        <div className="w-full border-b-2 border-gray-500 py-9">
          <p className="text-white  px-24 text-[24px]">
            We have a team of consultants to provide guidance and ongoing
            support and professional customer service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
