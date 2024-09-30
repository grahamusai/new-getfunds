import React from "react";

const WhyUs = () => {
  return (
    <section className="my-20 ">
      <div>
        <section className="py-10 bg-black sm:py-16 lg:py-24">
          <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold leading-tight text-green-500 sm:text-4xl lg:text-3xl">
                YOUR ADVANTAGES TO CHOOSING US
              </h2>
             S
            </div>

            <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-green-500 rounded-full">
                  <span className="text-lg font-semibold text-white">1</span>
                </div>
                <div className="ml-4">
                  <p className="text-xl font-semibold text-white">
                    Funding Options
                  </p>
                  <p className="mt-4 text-base text-gray-400">
                    We offer more flexible funding options to match your needs
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-green-500 rounded-full">
                  <span className="text-lg font-semibold text-white">2</span>
                </div>
                <div className="ml-4">
                  <p className="text-xl font-semibold text-white">
                    Approval Rates
                  </p>
                  <p className="mt-4 text-base text-gray-400">
                    Because we work with multiple funders, we boast of the
                    highest approval rate in the country.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-green-500 rounded-full">
                  <span className="text-lg font-semibold text-white">3</span>
                </div>
                <div className="ml-4">
                  <p className="text-xl font-semibold text-white">
                    Funding Costs
                  </p>
                  <p className="mt-4 text-base text-gray-400">
                    By comparing different funders we are able to provide
                    competitive pricing.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-green-500 rounded-full">
                  <span className="text-lg font-semibold text-white">4</span>
                </div>
                <div className="ml-4">
                  <p className="text-xl font-semibold text-white">
                    Speed of Funding
                  </p>
                  <p className="mt-4 text-base text-gray-400">
                    We provide faster funding by finding the quickest funder
                    available that suits your business&apos;s needs
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-green-500 rounded-full">
                  <span className="text-lg font-semibold text-white">5</span>
                </div>
                <div className="ml-4">
                  <p className="text-xl font-semibold text-white">
                    Customer Service
                  </p>
                  <p className="mt-4 text-base text-gray-400">
                    We have a team of consultants to provide guidance and
                    ongoing support and professional customer service.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center mt-12 md:mt-20">
              <div className="px-8 py-4 text-center bg-gray-800 rounded-full">
                <p className="text-gray-50">
                  Do you have questions about our services?{" "}
                  <a
                    href="/faqs"
                    title=""
                    className="text-green-500 transition-all duration-200 hover:text-green-600 focus:text-green-400 hover:underline"
                  >
                    Read Our FAQ&apos;s
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default WhyUs;
