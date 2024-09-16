import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Image from "next/image";
import Cta from "../components/cta";
import ContactSection from "../components/contactSection";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row px-6 lg:px-24 py-20 lg:py-24">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
