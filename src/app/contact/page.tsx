"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { useFormspark } from "@formspark/use-formspark";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";

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
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-black text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-24 pt-48">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Contact us</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have questions or need assistance? We&apos;re here to help! Reach out to
            us via the form below, or email us at{" "}
            <span className="text-green-400">info@getfunds.co.za</span>. We will
            get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="border border-green-800 p-8 rounded-lg flex flex-col items-center text-center h-64 justify-center">
            <div className="bg-green-900 p-3 rounded-full mb-4">
              <MdOutlinePhone className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Phone</h3>
            <p className="text-gray-400 mb-2">Mon-Fri from 8am to 5pm</p>
            <a href="tel:+27115689953" className="text-green-400 font-medium">
              +27 11 568 9953
            </a>
          </div>

          <div className="border border-green-800 p-8 rounded-lg flex flex-col items-center text-center h-64 justify-center">
            <div className="bg-green-900 p-3 rounded-full mb-4">
              <MdOutlineEmail className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Email</h3>
            <p className="text-gray-400 mb-2">
              Our friendly team is here to help
            </p>
            <a
              href="mailto:info@getfunds.co.za"
              className="text-green-400 font-medium"
            >
              info@getfunds.co.za
            </a>
          </div>

          <div className="border border-green-800 p-8 rounded-lg flex flex-col items-center text-center h-64 justify-center">
            <div className="bg-green-900 p-3 rounded-full mb-4">
              <FiMapPin className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Office</h3>
            <p className="text-gray-400 mb-2">Come say hello at our office</p>
            <p className="text-gray-300">Johannesburg, South Africa</p>
          </div>
        </div>

        <div className="border border-green-800 rounded-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Send us a message
            </h2>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  await submit({
                    name,
                    message,
                    phone,
                    email,
                    company,
                    individual,
                  });
                  setSubmitted(true);
                  // Reset form
                  setName("");
                  setEmail("");
                  setPhone("");
                  setCompany("");
                  setMessage("");
                  // Reset submitted state after 5 seconds
                  setTimeout(() => setSubmitted(false), 5000);
                } catch (error) {
                  console.error("Error submitting form:", error);
                }
              }}
              className="space-y-6 max-w-4xl mx-auto"
            >
              {submitted && (
                <div className="bg-transparent border border-green-800 text-green-400 px-4 py-3 rounded mb-6">
                  Thank you for your message! We will get back to you soon.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="w-full">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-green-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your full email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-green-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="w-full">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-green-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Company name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Enter your company name"
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 bg-transparent border border-green-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-6 w-full">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Write your message here..."
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-green-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                ></textarea>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 ease-in-out"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
