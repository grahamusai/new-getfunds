import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import { MacbookScrollDemo } from "./components/process";
import Footer from "./components/footer";
import 'animate.css';
import Credibility from "./components/credibility";
import Options from "./components/options";

const Home = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <Navbar />
      <Hero />
      <MacbookScrollDemo />
     <Credibility />
     <Options />
      
    </div>
  );
};

export default Home;
