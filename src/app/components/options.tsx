import React from "react";
import { FlipWords } from "./ui/flip-words";
import { ExpandableCardDemo } from "./expandablecCards";
import { FocusCards } from "./ui/focus-cards";

const Options = () => {
  const words = [
    "Min monthly revenue of +R100,000",
    "12 months trading history,",
    "More than 15 incoming payments per month",
  ];
  const cards = [
    {
      title: "Forest Adventure",
      src: "/images/meeting.jpg",
    },
    {
      title: "Valley of life",
      src: "/images/meeting.jpg",
    },
    {
      title: "Sala behta hi jayega",
      src: "/images/meeting.jpg",
    },
    {
      title: "Camping is for pros",
      src: "/images/meeting.jpg",
    },
    {
      title: "The road not taken",
      src: "/images/meeting.jpg",
    },
    {
      title: "The First Rule",
      src: "/images/meeting.jpg",
    },
  ];

  return (
    <div className="py-20 text-4xl bg-[#0d1017] mx-auto font-extrabold text-center text-green-600 dark:text-neutral-400">
      To qualify you need: <br />
      <FlipWords words={words} />
      <div className="mt-20 flex flex-col justify-center items-center">
        <h1 className="text-[2rem] md:text-5xl border-green-500 font-semibold text-green-500">
          Funding Options
        </h1>
        <hr className="max-w-20 border-t-2 border-green-500 mt-10" />
        <FocusCards cards={cards} />
      </div>
    </div>
  );
};

export default Options;
