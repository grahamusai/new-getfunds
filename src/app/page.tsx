import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import "animate.css";
import Credibility from "./components/credibility";
import Options from "./components/options";
import { TabsDemo } from "./components/tabsDemo";
import DataTable from "./components/table";
import Process from "./components/process";
import FundingOptions from "./components/fundingOptions";

const Home = () => {
  return (
    <div className="bg-[#000]">
      <Navbar />
      <Hero />
      <Credibility />
      <Options />
      <Process />
      <FundingOptions />
      <Footer />
    </div>
  );
};

export default Home;
