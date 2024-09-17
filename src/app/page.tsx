import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import { MacbookScrollDemo } from "./components/process";
import Footer from "./components/footer";
import 'animate.css';
import Credibility from "./components/credibility";
import Options from "./components/options";
import { TimelineDemo } from "./components/timelineDemo";

const Home = () => {
  return (
    <div className="bg-[#000]">
      <Navbar />
      <Hero />
      {/* <MacbookScrollDemo /> */}
     <Credibility />
     <Options />
     <TimelineDemo />
      
    </div>
  );
};

export default Home;
