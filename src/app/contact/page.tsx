"use client"
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";


const Contact = () => {
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
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row px-6 lg:px-24 py-20 lg:py-24">
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
                                  className="block text-gray-100 text-sm  mb-2"
                                  htmlFor="businessname"
                                >
                                  Name<span className="text-rose-500">*</span>
                                </label>
                                <input
                                  className="w-full text-gray-500 border-2 rounded-lg border-[#a0bbcf] px-5 py-3 mt-2 bg-transparent placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
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
                                    className="block text-gray-100 text-sm mb-2"
                                    htmlFor="phone"
                                  >
                                    Email
                                    <span className="text-rose-500">*</span>
                                  </label>
                                  <input
                                    className="w-full text-gray-500 border-2 rounded-lg border-[#a0bbcf] px-5 py-3 mt-2 bg-transparent placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
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
                                    className="block text-gray-100 text-sm mb-2"
                                    htmlFor="phone"
                                  >
                                    Phone Number
                                    <span className="text-rose-500">*</span>
                                  </label>
                                  <input
                                    className="w-full border-2 rounded-lg border-[#a0bbcf] px-5 py-3 mt-2 bg-transparent placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl text-gray-500 focus:border-transparent duration-100"
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
                                  className="block text-gray-100 text-sm  mb-2"
                                  htmlFor="email"
                                >
                                  Message
                                  <span className="text-rose-500">*</span>
                                </label>
                                <textarea
                                  className="w-full h-[8rem] text-gray-500 border-2 rounded-lg border-[#a0bbcf] px-5 py-3 mt-2 focus:placeholder-opacity-0 bg-transparent placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
                                  id="email"
                                  name="experience"
                                  placeholder="Type in your message"
                                  onChange={(e) => setMessage(e.target.value)}
                                  required
                                />
                              </div>

                              <button
                                type="submit"
                                className="rounded-full bg-[#07d159] border-[#a0bbcf] text-[#1E394C] border-2 px-12 py-3 font-bold text-xl mt-3 lg:mt-6"
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

export default Contact;
