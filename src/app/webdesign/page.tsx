import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Innerhero from "./components/innerhero";

const Webdesign = () => {
  return (
    <div>
      <Navbar />
      <Innerhero />
      <div className="mt-[24rem] flex gap-10 max-w-5xl mx-auto z-50 text-slate-300">
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center ">
          <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">Basic</h2>
          <li>Custom Design Template</li>
          <li>Up to 5 Pages</li>
          <li>Responsive Design</li>
          <li>Basic SEO Setup</li>
          <li>Contact Form Integration</li>
          <li>Social Media Integration</li>
          <li>Google Analytics Setup</li>
          <li>1 Month of Support</li>
        </div>
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center">
          <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">
            Standard
          </h2>
          <li>Custom Design with Multiple Revisions</li>
          <li>Up to 10 Pages</li>
          <li>Responsive Design</li>
          <li>Advanced SEO Setup</li>
          <li>Content Management System</li>
          <li>Blog Setup</li>
          <li>E-commerce Integration</li>
          <li>Basic Security Features</li>
          <li>Google Analytics and Search Console Setup</li>
          <li>3 Months of Support</li>
        </div>
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center">
          <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">
            Comprehensive
          </h2>
          <li>Custom E-commerce Design</li>
          <li>Up to 50 Products</li>
          <li>Shopping Cart and Payment Gateway Integration</li>
          <li>Responsive Design</li>
          <li>Advanced SEO and Product Optimization</li>
          <li>Inventory Management System</li>
          <li>Customer Account Setup</li>
          <li>Product Reviews and Ratings</li>
          <li>Sales Reports and Analytics</li>
        </div>
      </div>
      <div className="my-[2rem] flex gap-10 max-w-5xl mx-auto z-50">
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center ">
          <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">
            Premium Website
          </h2>
          <li>Custom UX/UI Design</li>
          <li>Unlimited Pages</li>
          <li>Responsive and Mobile-Optimized Design</li>
          <li>Advanced SEO with Keyword Research</li>
          <li>Blog and Content Management</li>
          <li>E-commerce Integration (unlimited products)</li>
          <li>Advanced Security Features</li>
          <li>Custom API Integrations</li>
          <li>CRM Integration</li>
          <li>Ongoing Monthly Maintenance and Updates</li>
        </div>
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center">
          <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">
            Landing Page
          </h2>
          <li>Single Custom Landing Page Design</li>
          <li>Conversion Optimization</li>
          <li>15 Email Accounts</li>
          <li>A/B Testing</li>
          <li>Lead Capture Form Integration</li>
          <li>SEO Optimization</li>
          <li>Thank You Page</li>
          <li>Social Media and PPC Integration</li>
          <li>1 Month of Support</li>
        </div>
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center">
          <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">
            Website Redesign
          </h2>
          <li>Comprehensive Website Audit</li>
          <li>Full Redesign of Existing Website</li>
          <li>UX/UI Improvements</li>
          <li>Content Migration</li>
          <li>SEO and Performance Optimization</li>
          <li>Responsive Design</li>
          <li>Custom Graphics and Imagery</li>
          <li>3 Months of Post-Launch Support</li>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Webdesign;
