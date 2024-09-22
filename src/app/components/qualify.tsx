import React from 'react'
import { FlipWords } from "./ui/flip-words";

const Qualify = () => {
    const words = [
        "1. Complete a 2 minute online application",
        "2. Broker Contacts you to understand your needs (personalized attention)",
        "3. Matched with best funders (Correct funder match first time)",
        "4. Funding in 1-3 days (Highest approval rate in SA)",
      ];
  return (
    <div className='text-black px-16 my-5'>
        
        <FlipWords words={words} />
    </div>
  )
}

export default Qualify