import React from "react";
import Navbar from "../components/Navbar";
import VideoBackground from "../components/videobackground";
import Innerhero from "./components/innerhero";

const Brand = () => {
  return (
    <div>
      <Navbar />
      <Innerhero />
      <div className="mt-[24rem] flex gap-10 max-w-5xl mx-auto z-50 text-slate-300">
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center ">
            <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">Basic</h2>
            <li>Brand Consultation</li>
            <li>Logo Design</li>
            <li>Color Palette and Typography</li>
            <li>Business Card Design</li>
            <li>Social Media Kit</li>
        </div>
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center">
            <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">Standard</h2>
            <li>Brand Discovery Session</li>
            <li>Logo Design</li>
            <li>Color Palette and Typography</li>
            <li>Stationery Design</li>
            <li>Social Media Kit</li>
            <li>Basic Website Design</li>
        </div>
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center">
            <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">Comprehensive</h2>
            <li>In-Depth Brand Strategy</li>
            <li>Advanced Logo Design</li>
            <li>Comprehensive Brand Guidelines</li>
            <li>Marketing Collateral Design</li>
            <li>Social Media and Content Strategy</li>
            <li>Website Design and Development</li>
            <li>Brand Launch Campaign</li>
        </div>
      </div>
      <div className="mt-[2rem] flex gap-10 max-w-5xl mx-auto z-50">
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center ">
            <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">Startup</h2>
            <li>Brand Naming</li>
            <li>Logo and Visual Identity</li>
            <li>Business Cards and Stationery</li>
            <li>Pitch Deck Design</li>
            <li>Landing Page Design</li>
            <li>Brand Launch Campaign</li>
        </div>
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center">
            <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">Rebranding</h2>
            <li>Brand Audit</li>
            <li>Logo Redesign</li>
            <li>Updated Brand Guidelines</li>
            <li>Collateral Redesign</li>
            <li>Pitch Deck Design</li>
            <li>Rebranding Rollout Plan</li>
            <li>Social Media Rebranding</li>
        </div>
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center">
            <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">Digital-First Brand Identity</h2>
            <li>Logo Design for Digital Platforms</li>
            <li>Social Media Branding</li>
            <li>Website Design</li>
            <li>Collateral Redesign</li>
            <li>Digital Content Creation</li>
            <li>SEO Optimization</li>
            <li>Online Advertising Design</li>
        </div>
      </div>
      <div className="mt-[2rem] flex gap-10 max-w-5xl mx-auto z-50">
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center ">
            <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">Industry-Specific Brand Identit</h2>
            <li>Tailored Brand Strategy:</li>
            <li>Logo and Visual Identity</li>
            <li>Sector-Specific Marketing Collateral</li>
            <li>Website and Digital Presence</li>
            <li>Content and Social Media Strategy</li>
        </div>
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center">
            <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">Reputation Management</h2>
            <li>Brand Reputation Audit:</li>
            <li>Logo and Visual Identity</li>
            <li>Sector-Specific Marketing Collateral</li>
            <li>Website and Digital Presence</li>
            <li>Content and Social Media Strategy</li>
        </div>
        <div className="w-1/3 p-10 list-none text-center">
            
        </div>
      </div>
    </div>
  );
};

export default Brand;
