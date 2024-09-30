"use client"
import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./phone.json";


const style = {
    height: 150,
  };
const Lottiee = () => <Lottie animationData={groovyWalkAnimation} loop={true}  style={style} />;

export default Lottiee; 