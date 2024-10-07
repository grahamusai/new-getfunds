import React from "react";

const Comparison = () => {
  return (
    <div className="py-32 md:mx-32 ">
      <h2 className="text-2xl py-10 font-bold leading-tight uppercase text-center text-green-500 sm:text-4xl lg:text-3xl">
        Why Choose Getfunds
      </h2>

      <div className="w-full md:w-1/3">
        <h2 className="text-2xl">Single Funder</h2>
      </div>
      <div className="w-full md:w-1/3 text-center">
        <h2 className="text-2xl">Broker With Multiple Funders</h2>
      </div>
      <div className="w-full md:w-1/3">
        <h2 className="text-2xl">Why We Are Better</h2>
      </div>
      <div className="text-white grid gap-4 grid-cols-1 md:grid-cols-3 w-full text-center ">
        <div className="w-full md:w-3/4 px-10 py-3 bg-[#222222] rounded-md  border-green-500 ">
          <p>Limited to one set of products and terms</p>
        </div>
        <div className="w-full md:w-3/4 px-10 py-3 bg-[#222222] rounded-md text-center  border-green-500 ">
          <p>Access to a wide range of products and terms</p>
        </div>
        <div className="w-full md:w-3/4 px-10 py-3 bg-[#222222] rounded-md  border-green-500 ">
          <p className="text-green-500">
            More flexibility and options to match your needs
          </p>
        </div>

        <div className="w-full md:w-3/4 px-10 py-3 bg-[#222222] rounded-md  border-white pt-5">
          <p>Approval rate is based on one funder&apos;s criteria</p>
        </div>
        <div className="w-full md:w-3/4 px-10 py-3 bg-[#222222] rounded-md text-center  border-white pt-5">
          <p>Higher approval rates by shopping around multiple funders</p>
        </div>
        <div className="w-full md:w-3/4 px-10 py-3 bg-[#222222] rounded-md  border-white pt-5">
          <p className="text-green-500 ">
            Increases chances of approval by finding the right match
          </p>
        </div>

        {/* Third Section */}

        <div className="w-full md:w-3/4 px-10 py-3 bg-[#222222] rounded-md  border-white pt-5">
          <p>Funding costs are Fixed by the single funder</p>
        </div>
        <div className="w-full md:w-3/4 px-10 py-3 bg-[#222222] rounded-md text-center  border-white pt-5">
          <p>Competitive pricing by comparing different funders</p>
        </div>
        <div className="w-full md:w-3/4 px-10 py-3 bg-[#222222] rounded-md  border-white pt-5">
          <p className="text-green-500">
            Potentially lower rates by comparing offers
          </p>
        </div>

        {/* Fouth Section */}

        <div className="w-full md:w-3/4 px-10 py-3 bg-[#222222] rounded-md  border-white pt-5">
          <p>Loan Amount is limited to the single funder&apos;s maximum</p>
        </div>
        <div className="w-full md:w-3/4 px-10 py-3 bg-[#222222] rounded-md text-center  border-white pt-5">
          <p>Access to various loan amounts across multiple funders</p>
        </div>
        <div className="w-full md:w-3/4 px-10 py-3 bg-[#222222] rounded-md  border-white pt-5">
          <p className="text-green-500">
            More options to find the right loan sizes
          </p>
        </div>

        {/* Fifth Section */}

        <div className="w-full md:w-3/4 px-10 py-3 bg-[#222222] rounded-md  border-white pt-5">
          <p>Speed of funding dependent on one funder&apos;s process</p>
        </div>
        <div className="w-full md:w-3/4 px-10 py-3 bg-[#222222] rounded-md text-center  border-white pt-5">
          <p>Faster funding by finding the quickest funder available</p>
        </div>
        <div className="w-full md:w-3/4 px-10 py-3 bg-[#222222] rounded-md  border-white pt-5">
          <p className="text-green-500">Ability to choose the fastest option</p>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
