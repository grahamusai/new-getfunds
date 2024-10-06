import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import "animate.css";
import Credibility from "./components/credibility";
import Options from "./components/options";
import Process from "./components/process";
import Comparison from "./components/comparison";

const Home = () => {
  return (
    <div className="bg-[#000]">
      <Navbar />
      <Hero />
      <Credibility />
      {/* <Calculator /> */}
      <h2 className="font-bold text-lg md:text-4xl mb-4 text-green-500 dark:text-white pt-20 text-center">Funding Options</h2>
      <Options />
      <Process />
      {/* <WhyUs /> */}
      <Comparison />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Home;
