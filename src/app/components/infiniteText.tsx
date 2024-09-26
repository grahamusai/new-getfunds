import React from 'react';

// @ts-ignore
const InfiniteText = ({ text, speed = 2 }) => {
  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="whitespace-nowrap animate-scroll inline-block"
        style={{
          animationDuration: `${text.length * speed}ms`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
      >
        <span className="mr-8">{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default InfiniteText;