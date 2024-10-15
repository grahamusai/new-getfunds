import React from "react";

const Options = () => {
  const Content = [
    {
      src: "/images/blackman.jpg",
      title: "Merchant Cash Advancing",
      paragraph:
        "Receive up to one months revenue as a lump sum payable over 3-12 months with daily, weekly or monthly repayment options",
    },
    {
      src: "/images/02.png",
      title: "Business Cash Advancing",
      paragraph:
        "Receive up to one month’s revenue as a lump sum payable over 3-12 months with weekly or monthly repayment options",
    },
    {
      src: "/images/03.png",
      title: "Revolving Credit",
      paragraph:
        "Receive A line of credit payable over an agreed initial term of 3-12 months. As you pay, the capital becomes available for drawdown extending the term",
    },
  ];
  const Content2 = [
    {
      src: "/images/04.png",
      title: "3-month balloon Advances",
      paragraph:
        "Receive a cash advance, and only pay the capital plus 10% mark up at the end of three months",
    },
    {
      src: "/images/05.png",
      title: "24-month term loans ",
      paragraph: "Enhanced business cash advance now payable over 24 months",
    },
    {
      src: "/images/06.png",
      title: "Medical Funding",
      paragraph:
        "get a cash Advance and pay as you practice. Your repayments work directly in line with your medical aid claims: A debit order will run directly against your practice’s bank account and your Medical Practice Advance facility is paid back as a percentage of all future medical aid claims",
    },
  ];

  const Title = ["01", "02", "03"];
  return (
    <>
      <div className="md:hidden grid min-h-screen place-items-center bg-black mb-5 px-4 md:px-0">
        <ul className="grid gap-4 w-full md:max-w-6xl md:grid-cols-2">
          {Content.map((item, index) => (
            <li
              key={index}
              className="h-[300px] md:h-[400px] border-[2px] border-[#07d159] rounded-2xl w-full bg-rose-300 relative overflow-hidden group transition-all duration-700"
            >
              <img
                src={item.src}
                className="absolute h-full w-full inset-0 object-cover"
                alt=""
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 from-40% p-4">
                <h2 className="text-lg md:text-2xl text-white font-extrabold">
                  {item.title}
                </h2>

                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all">
                  <p className="text-white/70 overflow-hidden mt-2 opacity-0 group-hover:opacity-100 transition duration-1000">
                    {item.paragraph}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <ul className="grid gap-4 w-full md:max-w-6xl mt-5 md:grid-cols-2">
          {Content2.map((item, index) => (
            <li
              key={index}
              className="h-[300px] md:h-[400px] border-[2px] border-[#07d159] rounded-2xl w-full bg-rose-300 relative overflow-hidden group transition-all duration-700"
            >
              <img
                src={item.src}
                className="absolute h-full w-full inset-0 object-cover"
                alt=""
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 from-40% p-4">
                <h2 className="text-lg md:text-2xl text-white font-extrabold">
                  {item.title}
                </h2>

                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all">
                  <p className="text-white/70 overflow-hidden mt-2 opacity-0 group-hover:opacity-100 transition duration-1000">
                    {item.paragraph}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:grid min-h-screen place-items-center bg-black mb-20">
        <ul className="flex gap-4 w-full max-w-6xl">
          {Content.map((item, index) => (
            <li
              key={index}
              className="h-[400px] border-[2px] border-[#07d159] rounded-2xl w-full bg-rose-300 relative overflow-hidden group flex-1 hover:grow-[2] transition-all duration-700"
            >
              <img
                src={item.src}
                className="absolute h-full w-full inset-0 object-cover"
                alt=""
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 from-40% p-4">
                <h2 className="text-2xl text-white font-extrabold ">
                  {item.title}
                </h2>

                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all">
                  <p className="text-white/70 overflow-hidden mt-2 opacity-0 group-hover:opacity-100 transition duration-1000">
                    {item.paragraph}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <ul className="flex gap-4 w-full max-w-6xl">
          {Content2.map((item, index) => (
            <li
              key={index}
              className="h-[400px] mt-5 rounded-2xl w-full border-[2px] border-[#07d159] bg-rose-300 relative overflow-hidden group flex-1 hover:grow-[2] transition-all duration-700"
            >
              <img
                src={item.src}
                className="absolute h-full w-full inset-0 object-cover "
                alt=""
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 from-40%  p-4">
                <h2 className="text-2xl text-white font-extrabold ">
                  {item.title}
                </h2>

                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all">
                  <p className="text-white/70 overflow-hidden mt-2 opacity-0 group-hover:opacity-100 transition duration-1000">
                    {item.paragraph}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Options;
