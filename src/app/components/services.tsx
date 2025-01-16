import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div className="max-w-5xl mx-auto mt-20">
      <h2 className="text-5xl text-[#fc4757] font-extrabold text-center">
        What Can We Do For Your <br /> Business?
      </h2>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="text-center">
            <Image src="/gifs/seo.gif" alt="" width={120} height={120} unoptimized />
            <h3 className="text-[#fc4757] text-2xl font-bold">SEO</h3>
            <p>Increase your organic reach by outranking competitors.</p>
          </div>
          <div className="text-center">
            <Image src="/gifs/ppc.gif" alt="" width={200} height={200} unoptimized />
            <h3 className="text-[#fc4757] text-2xl font-bold">
              PPC Management
            </h3>
            <p>Meet your customers when they are looking to buy.</p>
          </div>
          <div className="text-center">
            <Image src="/gifs/smm.gif" alt="" width={120} height={120} unoptimized />
            <h3 className="text-[#fc4757] text-2xl font-bold">Social Media</h3>
            <p>
              Leveraging social media platforms to build brand presence and
              engage with audiences.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          <div className="text-center">
            <Image src="/gifs/websites.gif" alt="" width={180} height={180} unoptimized />
            <h3 className="text-[#fc4757] text-2xl font-bold">
              Website Design
            </h3>
            <p>
              Custom websites optimized for better engagement, greater
              conversions and brand recognition for South African businesses.
            </p>
          </div>
          <div className="text-center">
            <Image src="/gifs/apps.gif" alt="" width={130} height={130} unoptimized />
            <h3 className="text-[#fc4757] text-2xl font-bold">
              App Developments
            </h3>
            <p>
              We continuously adapt to the best ways to get your brand noticed
              and stand out from the competition.
            </p>
          </div>
          <div className="text-center">
            <Image src="/gifs/design.gif" alt="" width={170} height={170} unoptimized />
            <h3 className="text-[#fc4757] text-2xl font-bold">
              Graphic Design
            </h3>
            <p>
              Website and app design, Corporate Identity and logo development,
              branding, collateral, animation
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          <div className="text-center">
            <Image src="/gifs/consult.gif" alt="" width={130} height={130} unoptimized />
            <h3 className="text-[#fc4757] text-2xl font-bold">
              Business Consulting
            </h3>
            <p>
              Custom websites optimized for better engagement, greater
              conversions and brand recognition for South African businesses.
            </p>
          </div>
          <div className="text-center">
            <Image src="/gifs/leads.gif" alt="" width={230} height={230} unoptimized />
            <h3 className="text-[#fc4757] text-2xl font-bold">
              Lead Generation
            </h3>
            <p>
              We continuously adapt to the best ways to get your brand noticed
              and stand out from the competition.
            </p>
          </div>
          <div className="text-center">
            <Image src="/gifs/brand.gif" alt="" width={130} height={130} unoptimized />
            <h3 className="text-[#fc4757] text-2xl font-bold">
              Brand Identity
            </h3>
            <p>
              Stay fresh and distinctive with clear brand positioning and
              identity, reinforced by consistent messaging and graphic design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
