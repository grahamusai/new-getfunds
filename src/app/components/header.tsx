import Link from 'next/link'

export default function Header() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/getfund-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-start text-center lg:items-start lg:text-left">
            <h1 className="mb-4 text-4xl font-bold leading-tight text-white ">
              Welcome to Our Platform
            </h1>
            <p className="mb-8 max-w-md text-xl text-gray-200">
              Discover amazing features and boost your productivity with our cutting-edge solutions.
            </p>
            <div className="hidden md:block  justify-start items-center gap-7 mt-14 ">
            <a
              href="https://apply.getfunds.co.za?broker=getfunds"
              title=""
              className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-3 bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-80 focus:opacity-80"
              role="button"
            >
              {" "}
              Get Funds Now{" "}
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}