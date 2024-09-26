"use client"
import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./text.json";


const style = {
    height: 60,
  };
const Lottiee = () => <Lottie animationData={groovyWalkAnimation} loop={true}  style={style} />;

export default Lottiee;