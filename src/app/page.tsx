import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import "animate.css";
import Credibility from "./components/credibility";
import Options from "./components/options";
import Process from "./components/process";
import ComparisonTable from "./components/table";

const Home = () => {
  return (
    <div className="bg-[#000]">
      <Navbar />
      <Hero />
      <Credibility />
      {/* <Calculator /> */}
      <h2 className=" uppercase text-xl md:text-[2.5rem] mb-4 text-white dark:text-white py-16 text-center ">
        Funding options
      </h2>
      <Options />
      <Process />
      {/* <WhyUs /> */}
      <ComparisonTable />
      {/* <Contact /> */}
      <Footer />
      
    </div>
  );
};

export default Home;
