import React from "react";
import Navbar from "../components/Navbar";
import VideoBackground from "../components/videobackground";
import Innerhero from "./components/innerhero";
import Footer from "../components/footer";

const Ppc = () => {
  return (
    <div>
      <Navbar />
      <Innerhero />
      <div className="mt-[20rem] flex gap-10 max-w-5xl mx-auto z-50 text-slate-300">
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center ">
          <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">Basic</h2>
          <li>Campaign Setup</li>
          <li>Keyword Research</li>
          <li>Ad Creation (Text Ads)</li>
          <li>Landing Page Recommendations</li>
          <li>Monthly Budget Management</li>
          <li>Basic Analytics and Reporting</li>
          <li>1 Ad Platform (e.g., Google Ads)</li>
        </div>
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center">
          <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">
            Standard
          </h2>
          <li>Campaign Setup and Management</li>
          <li>Advanced Keyword Research</li>
          <li>Ad Creation (Text and Display Ads)</li>
          <li>A/B Testing of Ads</li>
          <li>Landing Page Optimisation</li>
          <li>Conversion Tracking Setup</li>
          <li>Monthly Budget Management</li>
          <li>Bi-Weekly Analytics and Reporting</li>
          <li>2 Ad Platforms (e.g., Google Ads, Bing Ads)</li>
        </div>
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center">
          <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">
            Premium
          </h2>
          <li>Comprehensive Campaign Setup and Management</li>
          <li>In-Depth Keyword Research and Competitor Analysis</li>
          <li>Ad Creation (Text, Display, and Video Ads)</li>
          <li>Ongoing A/B Testing and Ad Optimization</li>
          <li>Custom Landing Page Design and Optimization</li>
          <li>Conversion Rate Optimization (CRO)</li>
          <li>Monthly Strategy Sessions</li>
          <li>Weekly Analytics and Reporting</li>
          <li>Multi-Platform Management</li>
        </div>
      </div>
      <div className="mt-[2rem] flex gap-10 max-w-5xl mx-auto z-50">
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center ">
          <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">
            E-commerce PPC
          </h2>
          <li>Product Listing Ads (PLAs)</li>
          <li>Shopping Campaign Setup and Management</li>
          <li>Dynamic Remarketing Ads</li>
          <li>Advanced Keyword Research for Products</li>
          <li>Landing Page Optimization for E-commerce</li>
          <li>Conversion Tracking and ROI Analysis</li>
          <li>Integration with E-commerce Platforms</li>
          <li>Monthly Performance Reporting</li>
        </div>
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center">
          <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">
            Local PPC
          </h2>
          <li>Local Campaign Setup and Management</li>
          <li>Location-Based Keyword Research</li>
          <li>Google My Business Integration</li>
          <li>Ad Creation (Local Search and Display Ads)</li>
          <li>Geo-Targeting and Location Extensions</li>
          <li>Call Tracking Setup</li>
          <li>Monthly Budget Management</li>
          <li>Monthly Local Performance Reporting</li>
          <li>Multi-Platform Management</li>
        </div>
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center">
          <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">
            Retargeting PPC
          </h2>
          <li>Retargeting Campaign Setup</li>
          <li>Custom Audience Segmentation</li>
          <li>Ad Creation for Retargeting</li>
          <li>Dynamic Retargeting Ads</li>
          <li>Cross-Platform Retargeting</li>
          <li>Conversion Tracking and Optimization</li>
          <li>Monthly Retargeting Performance Reporting</li>
          <li>
            Multi-Platform Management (Google Ads, Facebook Ads, LinkedIn Ads)
          </li>
        </div>
      </div>
      <div className="mt-[2rem] flex gap-10 max-w-5xl mx-auto z-50 mb-10">
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center ">
          <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">
            Enterprise PPC
          </h2>
          <li>Enterprise-Level Campaign Strategy and Management</li>
          <li>Extensive Keyword Research and Market Analysis</li>
          <li>Custom Ad Creation</li>
          <li>Dedicated Account Manager</li>
          <li>Multi-Campaign and Multi-Platform Management</li>
          <li>Custom Landing Page Design</li>
          <li>Advanced Conversion Tracking and Attribution Modelling</li>
          <li>Real-Time Analytics Dashboard</li>
        </div>
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center">
          <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">
            Startup PPC
          </h2>
          <li>Campaign Setup for Startups</li>
          <li>Basic Keyword Research</li>
          <li>Ad Creation (Text Ads)</li>
          <li>Budget-Friendly Campaign Management</li>
          <li>Conversion Tracking</li>
          <li>Landing Page Recommendations</li>
          <li>Monthly Reporting</li>
          <li>1 Ad Platform (e.g., Google Ads, Facebook Ads)</li>
        </div>
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center ">
          <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">
            Custom PPC
          </h2>
          <li>Tailored Campaign Strategy</li>
          <li>Custom Keyword Research</li>
          <li>Bespoke Ad Creation</li>
          <li>Ongoing Campaign Management and Optimization</li>
          <li>Custom Reporting and Analytics</li>
          <li>Flexible Platform Management</li>
          <li>Budget and Bidding Strategy Optimization</li>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ppc;
