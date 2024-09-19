import React from "react";

interface ContentItem {
  src: string;
  title: string;
  paragraph: string;
}

const Options: React.FC = () => {
  const Content: ContentItem[] = [
    {
      src: "https://player.vimeo.com/video/1010876011?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "Merchant Cash Advancing",
      paragraph: "Receive up to one months revenue as a lump sum payable over 3-12 months with daily, weekly or monthly repayment options"
    },
    {
      src: "https://player.vimeo.com/video/1010876011?h=fff1df0e66&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "Business Cash Advancing",
      paragraph: "Receive up to one month's revenue as a lump sum payable over 3-12 months with weekly or monthly repayment options"
    },
    {
      src: "https://player.vimeo.com/video/1010876011?h=fff1df0e66&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "Revolving Credit",
      paragraph: "Receive A line of credit payable over an agreed initial term of 3-12 months. As you pay, the capital becomes available for drawdown extending the term"
    },
  ];
  
  const Content2: ContentItem[] = [
    {
      src: "https://player.vimeo.com/video/1010876011?h=fff1df0e66&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "3-month balloon Advances",
      paragraph: "Receive a cash advance, and only pay the capital plus 10% mark up at the end of three months"
    },
    {
      src: "https://player.vimeo.com/video/1010876011?h=fff1df0e66&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "24-month term loans ",
      paragraph: "Enhanced business cash advance now payable over 24 months"
    },
    {
      src: "https://player.vimeo.com/video/1010876011?h=fff1df0e66&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "Medical Funding",
      paragraph: "get a cash Advance and pay as you practice. Your repayments work directly in line with your medical aid claims: A debit order will run directly against your practice's bank account and your Medical Practice Advance facility is paid back as a percentage of all future medical aid claims"
    },
  ];

  const renderVideoBackground = (src: string): JSX.Element => (
    <div className="absolute inset-0 w-full h-full">
      <iframe
        src={`${src}&autoplay=1&loop=1&background=1`}
        className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Background video"
      ></iframe>
    </div>
  );

  const renderContent = (items: ContentItem[]): JSX.Element => (
    <ul className="flex gap-4 w-full max-w-6xl mb-5">
      {items.map((item, index) => (
        <li
          key={index}
          className="h-[400px] border-[.5px] border-green-500 rounded-2xl w-full relative overflow-hidden group flex-1 hover:grow-[2] transition-all duration-700"
        >
          {renderVideoBackground(item.src)}
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
  );

  return (
    <div className="grid min-h-screen place-items-center bg-black py-[6rem]">
      <h2 className="font-bold text-lg md:text-4xl mb-4 text-green-500 dark:text-white max-w-4xl py-20">Funding Options</h2>
      {renderContent(Content)}
      {renderContent(Content2)}
    </div>
  );
};

export default Options;