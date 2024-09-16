import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useFormspark } from "@formspark/use-formspark";
import { useState } from "react";
import Link from "next/link";

const ContactForm = () => {
  const [submit, submitting] = useFormspark({
    formId: "eOsEAKx4P",
  });

    const [name, setName] = useState("");
    const [isNameError, setIsNameError] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [company, setCompany] = useState("");
    const [individual, setIndividual] = useState("");
    const router = useRouter();

    const sendEmail = async () => {
      if (
        name != "" &&
        phone != "" &&
        email != "" &&
        message != "" 
      ) {
        try {
          setIsLoading(true);
          const send = await fetch('/api/email', {
            method: "POST",
            body: JSON.stringify({
              name: name,
              email: email,
              phone: phone
            }),
          });
          if (send.status == 200){
            setIsLoading(false);
            router.push("/brokers")
            alert('Thank you for your application. we sent you an email with the affiliate brochure attached.')
          } else {
            setIsError(true);
            setIsLoading(false);
          } 
        } catch (error) {
          setIsError(true);
          setIsLoading(false);
        }
        }else {
          setIsError(true);
      }
    }


  return (
    <div className="px-10 md:px-24  mb-10">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-1/2 pt-12">
          <h2 className="text-[3rem] font-bold">
            Become an <span className="text-teal-600">Affiliate</span>
          </h2>
          <p>
            We provide quick access to capital with flexible terms and daily or
            weekly repayment options, designed to support your business
            immediate needs.
          </p>
          <div className="hidden md:block">
            <div className="flex mt-16 gap-3">
              <div className=" w-min h-min bg-[#e0cb70] border-[#1E394C] text-[#1E394C] border-2 flex justify-center items-center px-3 py-3 rounded-full">
                <FaPhoneAlt />
              </div>
              <h4 className="pt-3">+27 84 516 3307</h4>
            </div>
            <div className="flex mt-5 gap-3">
              <div className=" w-min h-min bg-[#e0cb70] border-[#1E394C] border-2 text-[#1E394C] flex justify-center items-center px-3 py-3 rounded-full">
                <FaLinkedinIn />
              </div>
              <h4 className="pt-3">Fund Genie</h4>
            </div>
            <div className="flex mt-5 gap-3">
              <div className=" w-min h-min bg-[#e0cb70] border-[#1E394C] text-[#1E394C] border-2 flex justify-center items-center px-3 py-3 rounded-full">
                <IoMail />
              </div>
              <h4 className="pt-3">info@fundgenie.co.za</h4>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
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
            className="mt-3 lg:mt-10"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm  mb-2"
                htmlFor="businessname"
              >
                Name<span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="First Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                onBlur={(e) => {
                  e.target.value == ""
                    ? setIsNameError(true)
                    : setIsNameError(false);
                }}
                className={` w-full border-2 rounded-lg border-[#1E394C] px-5 py-3 mt-2 bg-transparent placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100 ${
                  isNameError ? "border-red-500" : "border-primary"
                }`}
              />
              {isNameError ? (
                <p className=" text-xs text-red-500">name cannot be empty</p>
              ) : null}
                {/* required */}
            </div>

            <div className="mb-4 flex flex-col md:flex-col lg:flex-row gap-5">
              <div className="w-full lg:w-1/2">
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="phone"
                >
                  Email<span className="text-rose-500">*</span>
                </label>
                <input
                  className="w-full border-2 rounded-lg border-[#1E394C] px-5 py-3 mt-2 bg-transparent placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="graham@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="w-full lg:w-1/2">
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="phone"
                >
                  Phone Number<span className="text-rose-500">*</span>
                </label>
                <input
                  className="w-full border-2 rounded-lg border-[#1E394C] px-5 py-3 mt-2 bg-transparent placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
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
                Tell us about your work experience
                <span className="text-rose-500">*</span>
              </label>
              <textarea
                className="w-full h-[8rem] border-2 rounded-lg border-[#1E394C] px-5 py-3 mt-2 focus:placeholder-opacity-0 bg-transparent placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
                id="email"
                name="experience"
                placeholder="Type in your message"
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <h3>Select the application type</h3>
            <div className="mb-4 flex">
              <div className="flex">
                <label
                  className="block text-gray-700 text-sm mx-2 "
                  htmlFor="businessname"
                >
                  Company<span className="text-rose-500">*</span>
                </label>
                <input
                  onChange={(e) => setIndividual(e.target.value)}
                  type="checkbox"
                  name="Individual"
                  id=""
                />
              </div>
              <div className="flex">
                <label
                  className="block text-gray-700 text-sm mx-2 "
                  htmlFor="businessname"
                >
                  Individual<span className="text-rose-500">*</span>
                </label>
                <input
                  onChange={(e) => setCompany(e.target.value)}
                  type="checkbox"
                  name="company"
                  id=""
                />
              </div>
            </div>

            <motion.button
            onClick={sendEmail}
              type="submit"
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="rounded-full bg-[#e0cb70] border-[#1E394C] text-[#1E394C] border-2 px-12 py-3 font-bold text-xl mt-3 lg:mt-6"
            >
              Apply
            </motion.button>
          </form>
        </div>
        <div className=" md:hidden">
          <div className="flex mt-5 gap-3">
            <div className=" w-min h-min bg-[#e0cb70] border-[#1E394C] text-[#1E394C] border-2 flex justify-center items-center px-3 py-3 rounded-full">
              <FaPhoneAlt />
            </div>
            <h4 className="pt-3">+27 84 516 3307</h4>
          </div>
          <div className="flex mt-5 gap-3">
            <div className=" w-min h-min bg-[#e0cb70] border-[#1E394C] border-2 text-[#1E394C] flex justify-center items-center px-3 py-3 rounded-full">
              <FaLinkedinIn />
            </div>
            <Link href="https://www.linkedin.com/company/fund-genie/">
            <h4 className="pt-3">Fund Genie</h4>
            </Link>
            
          </div>
          <div className="flex mt-5 gap-3">
            <div className=" w-min h-min bg-[#e0cb70] border-[#1E394C] text-[#1E394C] border-2 flex justify-center items-center px-3 py-3 rounded-full">
              <IoMail />
            </div>
            <Link href="mailto:info@fundgenie.co.za">
            <h4 className="pt-3">info@fundgenie.co.za</h4>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
