"use client";
import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/moving-border";
import Calltoaction from "../components/calltoaction";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import Cta from "../components/cta";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-[url('/images/PlanetMoula.jpeg')] bg-cover bg-no-repeat bg-center md:bg-white text-white">
      <div className="bg-black bg-opacity-50 md:bg-opacity-70">
        <Navbar />
        <div className="flex flex-col md:flex-row gap-12 mx-auto px-10 md:px-24 pt-20 mt-16">
          <div className="w-full md:w-3/5">
            <h1 className="font-semibold text-[42px] mb-5 leading-tight">
              About Fundgenie
            </h1>
            <p className="pt-5">
              2 million years ago on planet Moula, Lived the universes most
              powerful genies. These genies had an insatiable thirst for wealth
              and possessed great power. The Genie King concealed their
              existence from all the realms. Knowing that should their existence
              ever come to light their riches would be at risk. He was the
              greediest of all.
            </p>
            <p className="pt-5">
              The king had a boy and named the prince Fund Genie. He hoped that
              one day Fund Genie would be the heir to his kingdom, but soon
              realized that his boy was not like the rest of them, The young
              genie used his power to see the state of the universe and wanted
              to share wealth with all. This Notion threatened what the king
              worked so hard to keep secret. As Fund Genie grew so did his power
              and his Desire to help others outside Planet Moula.
            </p>
            <p className="pt-5 mb-10">
            Fund Genie challenged the kings selfish hording of treasures and
            started conjuring treasures for the citizens of neighbouring
            galaxies without the kings approval. Fund genie did this in the dead
            of night and never revealed himself for fear of his father. Word
            quickly spread that the economies of these galaxies were
            flourishing. The king filled jealousy led an investigation, and the
            magic used was easily traced back to Fund Genie.
          </p>
          </div>
          <div className="w-full md:w-2/5 hidden md:block">
            <motion.img
              src="/images/Genie _Casual_cropped.png"
              alt="Bouncing"
              style={{ width: "26rem" }}
              // Important styles below. Read the explanation
            />
          </div>
        </div>
       
        <div className="w-full md:hidden mt-10 flex flex-col justify-center items-center">
          <Link href="/brokers">
            <Image
              src="/images/Lamp.png"
              alt="fund-genie-logo"
              height={621}
              width={400}
              className="h-14 w-24"
            />
          </Link>
          <span className="mt-3 uppercase">Become a broker</span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
