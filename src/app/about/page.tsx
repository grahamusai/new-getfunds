"use client";
import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import { motion } from "framer-motion";

const About = () => {
  const [submit, submitting] = useFormspark({
    formId: "RKcXJYZhr",
  });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [individual, setIndividual] = useState("");
  const [position, setPosition] = React.useState("bottom");
  return (
    <div className=" text-white">
      <div className="bg-black bg-opacity-50 md:bg-opacity-70">
        <Navbar />
        <div className="relative">
          <section className="bg-black text-white overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
              <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                <div className="absolute bottom-0 right-0 hidden lg:block">
                  <img
                    className="object-contain w-auto h-48"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
                    alt="curves"
                  />
                </div>

                <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
                  <h1 className="text-4xl font-bold text-[#07d159] sm:text-4xl xl:text-4xl">
                    About
                    <br />
                    GetFunds
                  </h1>
                  <p className="mt-8 text-xl text-white">
                    Get Funds is a specialist consulting firm partnered with
                    best in class funders to offer a range of funding lines.
                  </p>
                  <p className="mt-8 text-xl text-white">
                    We use our economies of scale to get you the best pricing,
                    terms and service for your business.
                  </p>

                  <form
                    action="#"
                    method="POST"
                    className="max-w-xl mx-auto mt-8 bg-white lg:mx-0 sm:bg-transparent lg:mt-12 rounded-xl"
                  >
                    <div className="p-4 sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-orange-500 sm:focus-within:ring-1 sm:focus-within:ring-orange-500">
                      <div className="flex flex-col items-start sm:flex-row">
                        <div className="flex-1 w-full min-w-0">
                          <div className="relative text-gray-400 focus-within:text-gray-600">
                            <label className="sr-only"></label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Enter email to get started"
                              className="block w-full px-4 py-4 text-base text-center text-white placeholder-gray-500 transition-all duration-200 border-transparent rounded-full sm:text-left focus:border-transparent focus:ring-0 caret-orange-500"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="inline-flex items-center justify-center w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-[#07d159] border border-transparent rounded-full sm:w-auto sm:ml-4 sm:mt-0 hover:bg-orange-600 focus:bg-orange-600"
                        >
                          Get Funded
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="mt-5 text-base text-white">
                    Get your business funded in under 3 days
                  </p>
                </div>

                <div className="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-20">
                  <img
                    className="w-32 h-32 md:w-40 md:h-40"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/circular-text.png"
                    alt="curves"
                  />
                </div>
              </div>

              <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
                <div className="absolute inset-0">
                  <img
                    className="object-cover w-full h-full scale-150"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/man-working-on-laptop.jpg"
                    alt=" map working on laptop"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0">
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-center">
                      <svg
                        className="w-10 h-10 text-orange-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <h2 className="font-bold text-white text-7xl ml-2.5">
                        395
                      </h2>
                    </div>
                    <p className="max-w-xs mt-1.5 text-xl text-white">
                      Professionals have organized their desk via PostCra
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="mt-20 mb-10">
        <h2 className="text-center text-4xl text-[#07d159] mb-4">
          Start a Career in Sales
        </h2>
        <p className="text-center text-xl">
          Fill in the form below if you are interested in joining <br /> our
          team and we will get back to you
        </p>
        <div className="w-[70%] px-[10rem]">
          <h2 className="text-black font-bold text-2xl">
            Please fill in the form{" "}
          </h2>
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
                className="block text-gray-200 text-sm  mb-2"
                htmlFor="businessname"
              >
                Name<span className="text-rose-500">*</span>
              </label>
              <input
                className="w-full border-2 rounded-lg border-[#a9a9a9] px-5 py-3 mt-2 bg-transparent placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
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
                  className="block text-gray-200 text-sm mb-2"
                  htmlFor="phone"
                >
                  Email
                  <span className="text-rose-500">*</span>
                </label>
                <input
                  className="w-full border-2 rounded-lg border-[#a9a9a9] px-5 py-3 mt-2 bg-transparent placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
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
                  className="block text-gray-200 text-sm mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                  <span className="text-rose-500">*</span>
                </label>
                <input
                  className="w-full border-2 rounded-lg border-[#a9a9a9] px-5 py-3 mt-2 bg-transparent placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
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
                className="block text-gray-200 text-sm  mb-2"
                htmlFor="email"
              >
                Message
                <span className="text-rose-500">*</span>
              </label>
              <textarea
                className="w-full h-[8rem] border-2 rounded-lg border-[#a9a9a9] px-5 py-3 mt-2 focus:placeholder-opacity-0 bg-transparent placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
                id="email"
                name="experience"
                placeholder="Type in your message"
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-[#07d159] hover:bg-green-700 border-[#b9b9b9] text-[#000000] border-2 px-12 py-3 font-bold text-xl mt-3 lg:mt-6"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
