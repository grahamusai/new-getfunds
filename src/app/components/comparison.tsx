import React from "react";

const Comparison = () => {
  return (
    <div className="my-20 md:mx-32 ">
      <h2 className="text-2xl font-bold leading-tight uppercase text-center text-green-500 sm:text-4xl lg:text-3xl">
        Advatages to Choosing Us
      </h2>
      <div className=" mx-auto flex py-10 text-white">
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl">Single Funder</h2>
        </div>
        <div className="w-full md:w-1/3 text-center">
          <h2 className="text-3xl">Broker With Multiple Funders</h2>
        </div>
        <div className="w-full md:w-1/3 text-right">
          <h2 className="text-3xl">Why We Are Better</h2>
        </div>
      </div>
      {/* First Section */}
      <div className=" mx-auto flex py-5 text-white">
        <div className="w-full md:w-1/3 border-t-2 border-green-500 pt-10">
          <p>Limited to one set of products and terms</p>
        </div>
        <div className="w-full md:w-1/3 text-center border-t-2 border-green-500 pt-10">
          <p>Access to a wide range of products and terms</p>
        </div>
        <div className="w-full md:w-1/3 text-right border-t-2 border-green-500 pt-10">
          <p>More flexibility and options to match your needs</p>
        </div>
      </div>
      {/* Second Section */}
      <div className=" mx-auto flex py-5 text-white">
        <div className="w-full md:w-1/3 border-t-2 border-white pt-5">
          <p>Approval rate is based on one funder's criteria</p>
        </div>
        <div className="w-full md:w-1/3 text-center border-t-2 border-white pt-5">
          <p>Higher approval rates by shopping around multiple funders</p>
        </div>
        <div className="w-full md:w-1/3 text-right border-t-2 border-white pt-5">
          <p>Increases chances of approval by finding the right match</p>
        </div>
      </div>
      {/* Third Section */}
      <div className=" mx-auto flex py-5 text-white">
        <div className="w-full md:w-1/3 border-t-2 border-white pt-5">
          <p>Funding costs are Fixed by the single funder</p>
        </div>
        <div className="w-full md:w-1/3 text-center border-t-2 border-white pt-5">
          <p>Competitive pricing by comparing different funders</p>
        </div>
        <div className="w-full md:w-1/3 text-right border-t-2 border-white pt-5">
          <p>Potentially lower rates by comparing offers</p>
        </div>
      </div>
      {/* Fouth Section */}
      <div className=" mx-auto flex py-5 text-white">
        <div className="w-full md:w-1/3 border-t-2 border-white pt-5">
          <p>Loan Amount is limited to the single funder's maximum</p>
        </div>
        <div className="w-full md:w-1/3 text-center border-t-2 border-white pt-5">
          <p>Access to various loan amounts across multiple funders</p>
        </div>
        <div className="w-full md:w-1/3 text-right border-t-2 border-white pt-5">
          <p>More options to find the right loan sizes</p>
        </div>
      </div>
      {/* Fifth Section */}
      <div className=" mx-auto flex py-5 text-white">
        <div className="w-full md:w-1/3 border-t-2 border-white pt-5">
          <p>Speed of funding dependent on one funder's process</p>
        </div>
        <div className="w-full md:w-1/3 text-center border-t-2 border-white pt-5">
          <p>Faster funding by finding the quickest funder available</p>
        </div>
        <div className="w-full md:w-1/3 text-right border-t-2 border-white pt-5">
          <p>Ability to choose the fastest option</p>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
