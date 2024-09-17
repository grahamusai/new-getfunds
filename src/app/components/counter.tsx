"use client"
// components/Counter.tsx
import React, { useEffect, useRef } from 'react';
import { CountUp } from 'countup.js';

interface CounterProps {
  end: number;
  label: string;
  duration?: number; // Optional: duration for the animation in seconds
}

const Counter: React.FC<CounterProps> = ({ end, label, duration = 9 }) => {
  const countUpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (countUpRef.current) {
      const countUp = new CountUp(countUpRef.current, end, {
        duration,
        decimalPlaces: 1,
        startVal: 0,
      });
      countUp.start();
    }
  }, [end, duration]); 

  return (
    <div className="">
      <h3 className="">
        <span ref={countUpRef} />
      </h3>
      <p className="mt-4 text-lg text-gray-100">{label}</p>
    </div>
  );
};

export default Counter;
