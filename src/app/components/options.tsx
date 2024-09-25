import React from "react";

const Options = () => {
  const Content = [
    {
      src: "/images/option1.png",
      title: "Merchant Cash Advancing",
      paragraph: "Receive up to one months revenue as a lump sum payable over 3-12 months with daily, weekly or monthly repayment options"
    },
    {
      src: "/images/option2.png",
      title: "Business Cash Advancing",
      paragraph: "Receive up to one month’s revenue as a lump sum payable over 3-12 months with weekly or monthly repayment options"
    },
    {
      src: "/images/option3.png",
      title: "Revolving Credit",
      paragraph: "Receive A line of credit payable over an agreed initial term of 3-12 months. As you pay, the capital becomes available for drawdown extending the term"
    },
  ];
  const Content2 = [
    {
      src: "/images/option4.png",
      title: "3-month balloon Advances",
      paragraph: "Receive a cash advance, and only pay the capital plus 10% mark up at the end of three months"
    },
    {
      src: "/images/option5.png",
      title: "24-month term loans ",
      paragraph: "Enhanced business cash advance now payable over 24 months"
    },
    {
      src: "/images/option6.png",
      title: "Medical Funding",
      paragraph: "get a cash Advance and pay as you practice. Your repayments work directly in line with your medical aid claims: A debit order will run directly against your practice’s bank account and your Medical Practice Advance facility is paid back as a percentage of all future medical aid claims"
    },
  ];
  

  const Title = ["option1", "option2", "option3"];
  return (
    <div className="grid min-h-screen place-items-center  bg-black py-[6rem]">
      <h2 className="font-bold text-lg md:text-4xl mb-4 text-green-500 dark:text-white max-w-4xl py-20">Funding Options</h2>
      
      <ul className="flex gap-4 w-full max-w-6xl mb-5">
        {Content.map((item, index) => (
          <li
            key={index}
            className="h-[400px] border-[.5px] border-green-500 rounded-2xl w-full bg-rose-300 relative overflow-hidden group flex-1 hover:grow-[2] transition-all duration-700"
          >
            <img
              src={item.src}
              className="absolute h-full w-full inset-0 object-cover"
              alt=""
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 from-40% p-4">
              <h2 className="text-2xl text-white font-extrabold ">{item.title}</h2>

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
            className="h-[400px] rounded-2xl w-full border-[.5px] border-green-500 bg-rose-300 relative overflow-hidden group flex-1 hover:grow-[2] transition-all duration-700"
          >
            <img
              src={item.src}
              className="absolute h-full w-full inset-0 object-cover "
              alt=""
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 from-40%  p-4">
              <h2 className="text-2xl text-white font-extrabold ">{item.title}</h2>

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
  );
};

export default Options;
