"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [position, setPosition] = React.useState("bottom");
  return (
    <nav className="bg-[#000000] fixed w-full z-20 px:14 md:px-0 lg:px-24 top-0 start-0 text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-10">
        <a href="/" className="flex items-center ml-3 space-x-3 rtl:space-x-reverse">
          <Image
            src="/images/getfund-logo.png"
            alt="fund-genie-logo"
            height={338}
            width={203}
            className=""
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link href="https://apply.getfunds.co.za" target="_blank">
          <motion.p
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            
            className="bg-green-500 shadow-md shadow-green-600 px-6 py-2 rounded-md hover:bg-green-700 text-black font-medium"
          >
            Apply Now
          </motion.p>
          </Link>

          <div className="block md:hidden text-black">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="text-4xl font-bold mr-3 text-white ">
                  <IoMenu />
                </div>
              </DropdownMenuTrigger> 
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel><h3 className="text-center">Menu</h3></DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem value="top">
                    <a href="/">Home</a>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="About">
                    <a href="/about">About</a>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">
                    <a href="/brokers">
                      Become an Broker
                    </a>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">
                    <a href="/faqs">FAQs</a>
                  </DropdownMenuRadioItem>
                 
                  <DropdownMenuRadioItem value="right">
                    <a href="/contact">Contact</a>
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <a
                href="/"
                className="block py-2 px-8 text-white  rounded md:bg-transparent md:hover:text-[#42f44b] md:p-0 "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 px-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#42f44b] md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/faqs"
                className="block py-2 px-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#42f44b] md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                FAQs
              </a>
            </li>
            {/* <li>
              <a
                href="/"
                className="block py-2 px-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#42f44b] md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Blog
              </a>
            </li> */}
            <li>
              <a
                href="/contact"
                className="block py-2 px-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#42f44b] md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
            <li>
              <ul>
                <li>
                  <a
                    href="/brokers"
                    className="block py-2 px-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#42f44b] md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Become an Broker
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
