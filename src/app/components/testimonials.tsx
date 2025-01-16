import React from "react";

const Tesimonial = () => {
  return (
    <div className="bg-[url('/images/hexagon.png')] mt-20 pb-32">
      <h2 className="text-[#fc4757] text-5xl font-bold text-center pt-[4rem]">
        Client Testimonails
      </h2>
      <div className="flex gap-10 max-w-5xl mx-auto mt-10">
        <div className="w-1/3 hover:border-2 hover:border-[#fc4757] bg-[#333] py-10 px-5 text-white">
          <p>
            Alpha performance delivers!, innovative, and results-driven. Highly
            recommend for all marketing needs!
          </p>
          <h4 className="text-xl font-semibold mt-4">Darren VD</h4>
        </div>
        <div className="w-1/3 hover:border-2 hover:border-[#fc4757] hover:border-solid bg-[#333] py-10 px-5 text-white">
          <p>
            Alpha Performance exceeded expectations. Very professional and
            responsive. Definitely recommend!
          </p>
          <h4 className="text-xl font-semibold mt-4">Darren VD</h4>
        </div>
        <div className="w-1/3 hover:border-2 hover:border-[#fc4757] bg-[#333] py-10 px-5 text-white">
          <p>
            Consultant listened to my needs!! Very happy with the service and
            will definitely recommend them!
          </p>
          <h4 className="text-xl font-semibold mt-4">Darren VD</h4>
        </div>
      </div>
    </div>
  );
};

export default Tesimonial;
