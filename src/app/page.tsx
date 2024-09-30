import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import "animate.css";
import Credibility from "./components/credibility";
import Options from "./components/options";
import Contact from "./components/contact";
import Process from "./components/process";
import WhyUs from "./components/fundingOptions";
import Calculator from "./components/calculator";

const Home = () => {
  return (
    <div className="bg-[#000]">
      <Navbar />
      <Hero />
      <Credibility />
      <Calculator />
      <Options />
      <Process />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
