"use client";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";

// Import your Lottie animation JSON files
import animation1 from "./apply.json";
import animation2 from "./call.json";
import animation3 from "./select.json";

const LottieSequence = () => {
  const animations = [animation1, animation2, animation3];
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnimationIndex(
        (prevIndex) => (prevIndex + 1) % animations.length
      );
    }, 5000); // Change animation every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [animations.length]);

  return (
    <div>
      {/* src={animations[currentAnimationIndex]} */}
      <Lottie
        loop={true}
        animationData={animations[currentAnimationIndex]}
        style={{ width: 550, height: 550 }}
      />
    </div>
  );
};

export default LottieSequence;
