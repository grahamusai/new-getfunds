"Use Client";
// pages/index.tsx
import type { NextPage } from "next";
import Counter from "./counter";
import Image from "next/image";

const Credibility: NextPage = () => {
  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Our Achievements</h2>
          <p className="mt-4 text-lg text-gray-600">
            Some key numbers that showcase our success
          </p>
        </div> */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex text-center   p-2 rounded-lg text-6xl font-bold text-green-500">
            
            <Counter end={5.3} label="billion funded and counting " />
          </div>
          <div className="flex text-center   p-2 rounded-lg text-6xl font-bold text-green-500">
            <Counter end={9.6} label="clients and counting" />
          </div>
          <Image
            src="/images/shariah.png"
            alt="fund-genie-logo"
            height={151}
            width={171}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Credibility;
