import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Faqs from "../components/faq";
import Cta from "../components/cta";
import { FaHandshake } from "react-icons/fa";

const faqs = () => {
  return (
    <div>
      <Navbar />
      
      <div className="px-3 md:px-24 py-12">
        <Faqs />
      </div>
      <Footer />
    </div>
  );
};

export default faqs;
