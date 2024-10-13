"use client";
import Link from "next/link";
import React from "react";
import { useGlobalState } from "../../../libs/global_state";
import { useState, useEffect } from "react";
import { Helpers } from "postcss";
import Switcher from "./switcher";
import Image from "next/image";
import { motion } from "framer-motion";
import Modal from "./modal";
import TermsModal from "./termsModal";
import { formatCurrency, round } from "../../../libs/helpers";

const Calculator = () => {
  // @ts-ignore
  const handleKeyDown = (event) => {
    event.preventDefault();
    if (turnOver === 0) {
      setIsModalOpen(true);
      setModalErrorMessage("Please enter your monthly turnover.");
    }
    return false;
  };

  const handleFocus = () => {
    // Handle focus event

    if (turnOver === 0) {
      setIsModalOpen(true);
      setModalErrorMessage("Please enter your monthly turnover.");
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    // Handle blur event
    if (turnOver <= 30000) {
      setIsModalOpen(true);
      setModalErrorMessage("Monthly turnover must be above R30 thousand.");
    } else if (turnOver > 15000000) {
      setIsModalOpen(true);
      setModalErrorMessage("You cannot enter an amount above R15M");
    }
  };

  const {
    setTurnOver,
    setNeededAmount,
    setDuration,
    setGrossProfit,
    turnOver,
    grossProfit,
    setIsModalOpen,
    modalErrorMessage,
    isModalOpen,
    setModalErrorMessage,
    termsModalIsOpen,
    setTermsModalIsOpen,
  } = useGlobalState();
  const { neededAmount, duration, frequency, useSlider } = useGlobalState();

  const repaymentAmount = (grossProfit: number, duration: number) => {
    return grossProfit * duration;
  };
  const maxAmount: number = turnOver * 0.7;

  const calculateTotalPay = () => {
    const interestRates = [0, 0, 0, 12, 16, 18, 21, 23, 25, 28, 30, 27.5, 3.0];

    if (duration >= 3 && duration <= 10) {
      const interestRate = interestRates[duration];
      return neededAmount + (neededAmount * interestRate) / 100;
    }
  };

  const formattedMaxAmount: string = maxAmount.toLocaleString("en-US");

  const [rangeValue, setRangeValue] = useState(50000);
  // @ts-ignore
  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  const [rangeValue2, setRangeValue2] = useState(5);
  // @ts-ignore
  const handleRangeChange2 = (e) => {
    setRangeValue2(e.target.value);
  };

  const calculateRepayAmount = () => {
    const totalDays = [0, 0, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300];
    const totalWeeks = [0, 0, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48];
    const totalPayOver = calculateTotalPay() || 0;
    if (frequency === "daily") {
      return totalPayOver / totalDays[duration - 1];
    }
    if (frequency === "weekly") {
      return totalPayOver / totalWeeks[duration - 1];
    }
    return neededAmount;
  };

  return (
    <div className="w-full y-10 md:my-20 md:px-32">
      {isModalOpen && <Modal />}
      {termsModalIsOpen && <TermsModal />}
      <div className="py-5 md:py-16 text-center">
        <h2 className="font-bold text-lg md:text-4xl mb-4 text-[#07d159] dark:text-white">
          How much funding can I get?
        </h2>
        <p className="text-white text-lg ">
          Use our simple funding calculator to find out how much you qualify for
        </p>
      </div>

      <div className="flex flex-col rounded-md lg:flex-row  bg-[#18413C] py-4  md:py-12 md:max-w-[85%]">
        {/* First Column */}
        <div className="w-full lg:w-1/2  z-10 py-3 md:py-6 px-3">
          <div className="flex flex-col ">
            <div className=" w-full px-5 md:px-16">
              <h1 className="text-[16px] mb-2  text-white">
                Enter your average monthly turnover?
                <span className="text-rose-500">*</span>
              </h1>
              <div className="flex">
                <h2 className="text-[#D9D9D9] text-3xl  mr-2">R</h2>
                <input
                  type="number"
                  id="activeInput"
                  name="turnover"
                  max={15000000}
                  min={50000}
                  placeholder="R100,000"
                  className=" rounded-md border-b border-1 border-slate-800 focus:border-1 w-full py-3 px-2 text-[#1E394C] bg-[#D9D9D9]"
                  onChange={(e) => {
                    setTurnOver(parseInt(e.target.value));
                    setNeededAmount(maxAmount) + "0";
                  }}
                  onBlur={handleBlur}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      // @ts-ignore
                      e.target.blur(); // Blur the input to hide the keyboard
                    }
                  }}
                />
              </div>
            </div>

            <div className="mt-4 md:mt-5  w-full px-5 md:px-16">
              <h1 className="text-[16px] mb-2  text-white">
                Funding required <span className="text-rose-500">*</span>
              </h1>
              <input
                type="range"
                min={30000}
                max={maxAmount}
                step="10000"
                // value={maxAmount}
                defaultValue={maxAmount}
                onKeyDown={handleKeyDown}
                disabled={isModalOpen}
                onFocus={handleFocus}
                onTouchStart={handleFocus}
                onChange={(e) => {
                  setNeededAmount(parseInt(e.target.value) / 10);
                }}
                className="w-full"
              />
              <p className=" text-slate-300  font-[600] italic text-base md:text-[13px]">
                R
                {formatCurrency(
                  neededAmount === 0 ? maxAmount : neededAmount * 10
                )}
              </p>
            </div>

            <div className="mt-3 md:mt-5 md-2 md:mb-5  w-full px-5 md:px-16">
              <h3 className="text-[16px] mb-2  text-white">
                Repayment Term<span className="text-rose-500">*</span>
              </h3>
              <div className="flex flex-row w-full">
                <h3 className="mr-2 text-white">3</h3>
                <input
                  type="range"
                  min="3"
                  max="10"
                  step="1"
                  defaultValue={3}
                  disabled={isModalOpen}
                  onKeyDown={handleKeyDown}
                  onTouchStart={handleFocus}
                  onFocus={handleFocus}
                  onChange={(e) => {
                    setDuration(parseInt(e.target.value));
                  }}
                  className="bg-teal-500 z-0 w-full"
                />
                <h3 className="ml-2 text-slate-300">10</h3>
              </div>

              <p className=" text-slate-300 italic font-[600] text-base md:text-[13px]">
                {duration} months
              </p>
            </div>

            <div className="mt-4 md:mt-0 w-full px-5 md:px-16">
              <h1 className="text-[16px] mb-2  text-white">
                Select Repayment <br /> Method
                <span className="text-rose-500">*</span>
              </h1>
              <Switcher />
            </div>
          </div>
        </div>
        {/* Second Column */}
        <div className="w-full flex flex-col text-center lg:w-1/2 z-10  md:pt-3  pb-6 px-2 md:px-10 border-l-2 border-[#07d159]">
          <div className="mb-3">
            <h2 className="text-[28px] text-[#07d159] mb-3 hidden md:block ">
              Get an instant quote
            </h2>
            <div className="flex flex-row md:flex-col mt-16">
              <div className="w-full md:w-1/2 ">
                <h3 className="text-[16px] mb-2  text-white">
                  Pre-Approved For:
                </h3>
                <h4 className="text-md font-bold text-slate-400 italic">
                  R{`${formattedMaxAmount}`}
                </h4>
              </div>
            </div>
          </div>
          <div className="flex flex-rol md:flex-col md:gap-5">
            <div className="md:mt-3 w-1/2 md:w-full">
              <h3 className="text-[16px] mb-2  text-white">Total Payover</h3>
              <h4 className="text-[15px] text-slate-400 italic">
                R{`${formatCurrency(round(calculateTotalPay() || 0) * 10)}`}
              </h4>
            </div>
            <div className="md:mt-3 w-1/2 md:w-full">
              <h3 className="text-[16px] mb-2  text-white">Repayments</h3>
              <h4 className="text-[15px] text-slate-400 italic">
                R{formatCurrency(round(calculateRepayAmount() || 0) * 10)}
              </h4>
            </div>
          </div>
          <div className=" pt-20">
            <Link href="https://apply.getfunds.co.za?broker=getfunds">
              <button className="bg-[#07d159] px-5 py-2 rounded-lg text-white text-lg font-[500]">
                Apply Now
              </button>
            </Link>
          </div>
          <p className="text-xs pt-3 text-white">
            All quotes are subject to change
            <span className="text-red-500">*</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;