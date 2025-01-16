"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
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
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";

const Navbar = () => {
  const [submit, submitting] = useFormspark({
    formId: "opxueG6Xb",
  });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [individual, setIndividual] = useState("");
  const [position, setPosition] = React.useState("bottom");
  
  return (
    <nav className="bg-[#00000066] fixed w-full z-20 top-0 start-0 text-white">
      <div className="flex flex-wrap items-center justify-between mx-20 py-5">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse" aria-label="logo image"
        >
          <img className="h-14 z-50" src="/images/logo.png" alt="" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link href="https://apply.getfunds.co.za" target="_blank">
            <motion.p
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="uppercase hidden lg:block bg-[#fc4757] shadow-md shadow-red-800 px-6 py-2 rounded-md hover:bg-transparent hover:border-[#fc4757] hover:border-2 hover:text-white hover:shadow-none text-white font-bold"
            >
              Get in touch
            </motion.p>
          </Link>

          <div className="block md:hidden text-black">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="text-4xl font-bold mr-3 text-white">
                  <IoMenu />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>
                  <h3 className="text-center">Menu</h3>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem value="top">
                    <a className="text-black text-left" href="/">Home</a>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="About">
                    <a className="text-black" href="/services">About Us</a>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">
                    <a className="text-black" href="/contact">Contact</a>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">
                    <a className="text-black" href="/faqs">Free Sales Course</a>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">
                    <a className="text-black" href="/contact">Contact</a>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">
                    <a className="text-black" href="https://apply.getfunds.co.za?broker=getfunds">Apply Now</a>
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
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="/"
                className="block py-2 px-8 text-white rounded md:bg-transparent md:hover:text-[#fc4757] md:p-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/faqs"
                className="block py-2 px-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#fc4757] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="block py-2 px-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#fc4757] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="block py-2 px-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#fc4757] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Free Sales Course
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="block py-2 px-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#fc4757] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Blog
              </a>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="block py-2 px-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#fc4757] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Services
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 text-left">
                  
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    <DropdownMenuRadioItem value="business-funding">
                      <a className="text-black" href="/brand">Brand Indentity</a>
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="equipment-financing">
                      <a className="text-black" href="/ppc">Pay Per Click</a>
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="working-capital">
                      <a className="text-black" href="/webdesign">Website Design</a>
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="invoice-factoring">
                      <a className="text-black" href="/webdev">Website Development</a>
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="merchant-cash-advance">
                      <a className="text-black" href="/services/merchant-cash-advance">Lead Generation</a>
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="merchant-cash-advance">
                      <a className="text-black" href="/services/merchant-cash-advance">SEO</a>
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="merchant-cash-advance">
                      <a className="text-black" href="/services/merchant-cash-advance">Social Media</a>
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;