import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Innerhero from "./components/innerhero";

const Webdev = () => {
  return (
    <div>
      <Navbar />
      <Innerhero />
      <div className="mt-[24rem] flex gap-10 max-w-5xl mx-auto z-50 text-slate-300">
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center ">
          <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">Basic</h2>
          <li>Custom UI/UX design</li>
          <li>Single-Page Application (SPA)</li>
          <li>Responsive Design</li>
          <li>Basic Functionality Development</li>
          <li>Cross-Browser Compatibility</li>
          <li>Basic Security Features</li>
          <li>Basic Analytics Integration</li>
          <li>1 Month of Post-Launch Support</li>
        </div>
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center">
          <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">
            Standard
          </h2>
          <li>Custom UI/UX Design with Multiple Revisions</li>
          <li>Multi-Page Application</li>
          <li>3 Months of Support</li>
          <li>Advanced Functionality</li>
          <li>Database Integration</li>
          <li>Cross-Device Compatibility</li>
          <li>Advanced Security Features</li>
          <li>Third-Party API Integration</li>
          <li>Comprehensive Analytics Integration</li>
          <li>3 Months of Post-Launch Support</li>
        </div>
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center">
          <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">
          E-Commerce
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
      <div className="mt-[2rem] flex gap-10 max-w-5xl mx-auto z-50">
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center ">
          <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">
          Enterprise Web App
          </h2>
          <li>Custom Enterprise-Level Design</li>
          <li>Complex Functionality</li>
          <li>Scalable Architecture for High Traffic</li>
          <li>Advanced User Role Management</li>
          <li>Data Migration and Integration</li>
          <li>Custom API Development</li>
          <li>Enterprise-Level Security Features</li>
          <li>Ongoing Maintenance and Support</li>
          <li>Dedicated Support Team</li>
        </div>
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center">
        <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">
          SaaS Web App Development
          </h2>
          <li>Custom SaaS Application Design</li>
          <li>Subscription Management and Billing Integration</li>
          <li>User Authentication and Access Control</li>
          <li>Multi-Tenant Architecture</li>
          <li>Data Analytics and Reporting Tools</li>
          <li>Third-Party API Integration</li>
          <li>Scalability Planning</li>
          <li>Comprehensive Security Features</li>
          <li>Ongoing Support and Feature Updates</li>
         
        </div>
        <div className="w-1/3 border-[1px] border-gray-300 p-10 list-none text-center">
          <h2 className="text-[#fc4757] pb-5 font-semibold text-2xl ">
          API Development and Integration
          </h2>
          <li>Custom API Development</li>
          <li>Third-Party API Integration</li>
          <li>API Documentation and Testing</li>
          <li>RESTful and GraphQL APIs</li>
          <li>Security and Rate Limiting</li>
          <li>API Versioning and Maintenance</li>
          <li>Ongoing Support and Updates</li>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Webdev;
