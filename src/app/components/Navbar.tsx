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
    <nav className="mr-[12rem] mt-2 bg-[#00000075] fixed w-full z-20 px:14  top-0 start-0 text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-5">
        <a
          href="/"
          className="flex items-center ml-3 space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/images/getfund-logo.png"
            alt="fund-genie-logo"
            height={238}
            width={153}
            className=""
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link href="https://apply.getfunds.co.za" target="_blank">
            <motion.p
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="hidden lg:block bg-[#07d159] shadow-md shadow-green-600 px-6 py-2 rounded-md hover:bg-transparent hover:border-[#07d159] hover:border-2 hover:text-white hover:shadow-none text-black font-medium"
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
                <DropdownMenuLabel>
                  <h3 className="text-center">Menu</h3>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem value="top">
                    <a className="text-black" href="/">Home</a>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="About">
                    <a className="text-black" href="/services">Funding Options</a>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">
                    <a className="text-black" href="/contact">Become an broker</a>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">
                    <a className="text-black" href="/faqs">FAQ&apos;s</a>
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
                href="/faqs"
                className="block py-2 px-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#42f44b] md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                FAQ&apos;s
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="block py-2 px-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#42f44b] md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Funding options
              </a>
            </li>
            
            <li>
              <ul>
                <li>
                  <div>
                    <Modal>
                      <ModalTrigger className="bg-transparent dark:bg-white dark:text-black text-white flex justify-center group/modal-btn mt-[-9px]">
                        <span className="hover:text-[#07d159] text-center ">Contact us</span>
                      </ModalTrigger>
                      <ModalBody>
                        <ModalContent>
                          <div className="w-full ">
                            <h2 className="text-black font-bold text-2xl">Please fill in the form </h2>
                            <form
                              onSubmit={async (e) => {
                                e.preventDefault();

                                await submit({
                                  name,
                                  message,
                                  phone,
                                  email,
                                  company,
                                  individual,
                                });
                                alert(
                                  "Your email has been submitted successfully \n \n We will be in touch with you shortly"
                                );
                                window.location.href = "/";
                              }}
                              className=" lg:mt-10"
                            >
                              <div className="mb-4">
                                <label
                                  className="block text-gray-700 text-sm  mb-2"
                                  htmlFor="businessname"
                                >
                                  Name<span className="text-rose-500">*</span>
                                </label>
                                <input
                                  className="w-full text-gray-500 border-2 rounded-lg border-[#1E394C] px-5 py-3 mt-2 bg-transparent placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
                                  id="name"
                                  name="name"
                                  type="text"
                                  onChange={(e) => setName(e.target.value)}
                                  placeholder="Your Name"
                                  required
                                />
                              </div>

                              <div className="mb-4 flex flex-col md:flex-row gap-5">
                                <div className="w-full md:w-1/2">
                                  <label
                                    className="block text-gray-700 text-sm mb-2"
                                    htmlFor="phone"
                                  >
                                    Email
                                    <span className="text-rose-500">*</span>
                                  </label>
                                  <input
                                    className="w-full text-gray-500 border-2 rounded-lg border-[#1E394C] px-5 py-3 mt-2 bg-transparent placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="graham@example.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                  />
                                </div>
                                <div className="w-full md:w-1/2">
                                  <label
                                    className="block text-gray-700 text-sm mb-2"
                                    htmlFor="phone"
                                  >
                                    Phone Number
                                    <span className="text-rose-500">*</span>
                                  </label>
                                  <input
                                    className="w-full border-2 rounded-lg border-[#1E394C] px-5 py-3 mt-2 bg-transparent placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl text-gray-500 focus:border-transparent duration-100"
                                    id="phone"
                                    type="number"
                                    name="phone"
                                    placeholder="062456789"
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                  />
                                </div>
                              </div>

                              <div className="mb-4">
                                <label
                                  className="block text-gray-700 text-sm  mb-2"
                                  htmlFor="email"
                                >
                                  Message
                                  <span className="text-rose-500">*</span>
                                </label>
                                <textarea
                                  className="w-full h-[8rem] text-gray-500 border-2 rounded-lg border-[#1E394C] px-5 py-3 mt-2 focus:placeholder-opacity-0 bg-transparent placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
                                  id="email"
                                  name="experience"
                                  placeholder="Type in your message"
                                  onChange={(e) => setMessage(e.target.value)}
                                  required
                                />
                              </div>

                              <button
                                type="submit"
                                className="rounded-full bg-[#07d159] border-[#1E394C] text-[#1E394C] border-2 px-12 py-3 font-bold text-xl mt-3 lg:mt-6"
                              >
                                Submit
                              </button>
                            </form>
                          </div>
                        </ModalContent>
                        <ModalFooter className="gap-4">
                          <h2>&nbsp;</h2>
                          
                        </ModalFooter>
                      </ModalBody>
                    </Modal>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <div>
                    <Modal>
                      <ModalTrigger className="bg-transparent dark:bg-white dark:text-black text-white flex justify-center group/modal-btn mt-[-9px]">
                        <span className="hover:text-[#07d159] text-center ">Become a broker</span>
                      </ModalTrigger>
                      <ModalBody>
                        <ModalContent>
                          <div className="w-full ">
                            <h2 className="text-black font-bold text-2xl">Please fill in the form </h2>
                            <form
                              onSubmit={async (e) => {
                                e.preventDefault();

                                await submit({
                                  name,
                                  message,
                                  phone,
                                  email,
                                  company,
                                  individual,
                                });
                                alert(
                                  "Your email has been submitted successfully \n \n We will be in touch with you shortly"
                                );
                                window.location.href = "/";
                              }}
                              className=" lg:mt-10"
                            >
                              <div className="mb-4">
                                <label
                                  className="block text-gray-700 text-sm  mb-2"
                                  htmlFor="businessname"
                                >
                                  Name<span className="text-rose-500">*</span>
                                </label>
                                <input
                                  className="w-full text-gray-500 border-2 rounded-lg border-[#1E394C] px-5 py-3 mt-2 bg-transparent placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
                                  id="name"
                                  name="name"
                                  type="text"
                                  onChange={(e) => setName(e.target.value)}
                                  placeholder="Your Name"
                                  required
                                />
                              </div>

                              <div className="mb-4 flex flex-col md:flex-row gap-5">
                                <div className="w-full md:w-1/2">
                                  <label
                                    className="block text-gray-700 text-sm mb-2"
                                    htmlFor="phone"
                                  >
                                    Email
                                    <span className="text-rose-500">*</span>
                                  </label>
                                  <input
                                    className="w-full text-gray-500 border-2 rounded-lg border-[#1E394C] px-5 py-3 mt-2 bg-transparent placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="graham@example.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                  />
                                </div>
                                <div className="w-full md:w-1/2">
                                  <label
                                    className="block text-gray-700 text-sm mb-2"
                                    htmlFor="phone"
                                  >
                                    Phone Number
                                    <span className="text-rose-500">*</span>
                                  </label>
                                  <input
                                    className="w-full text-gray-500 border-2 rounded-lg border-[#1E394C] px-5 py-3 mt-2 bg-transparent placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
                                    id="phone"
                                    type="number"
                                    name="phone"
                                    placeholder="062456789"
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                  />
                                </div>
                              </div>

                              <div className="mb-4">
                                <label
                                  className="block text-gray-700 text-sm  mb-2"
                                  htmlFor="email"
                                >
                                  Message
                                  <span className="text-rose-500">*</span>
                                </label>
                                <textarea
                                  className="w-full text-gray-500 h-[8rem] border-2 rounded-lg border-[#1E394C] px-5 py-3 mt-2 focus:placeholder-opacity-0 bg-transparent placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
                                  id="email"
                                  name="experience"
                                  placeholder="Type in your message"
                                  onChange={(e) => setMessage(e.target.value)}
                                  required
                                />
                              </div>

                              <button
                                type="submit"
                                className="rounded-full bg-[#07d159] border-[#1E394C] text-[#1E394C] border-2 px-12 py-3 font-bold text-xl mt-3 lg:mt-6"
                              >
                                Submit
                              </button>
                            </form>
                          </div>
                        </ModalContent>
                        <ModalFooter className="gap-4">
                          <h2>&nbsp;</h2>
                          
                        </ModalFooter>
                      </ModalBody>
                    </Modal>
                  </div>
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
