import React from 'react'
import { FlipWords } from "./ui/flip-words";

const qualify = () => {
    const words = [
        "Min monthly revenue of +R100,000",
        "12 months trading history,",
        "More than 15 incoming payments per month",
      ];
  return (
    <div>
        To qualify you need: <br />
        <FlipWords words={words} />
    </div>
  )
}

export default qualify