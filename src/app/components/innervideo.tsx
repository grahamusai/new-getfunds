import React from 'react'; 

function InnerVideo() {
  return (
    <div className="absolute bg-[#0d1a24] -z-10 top-0 left-0 w-full h-[70vh] overflow-hidden">
      <video 
          autoPlay 
          muted 
          loop 
          className="hidden md:block min-w-full min-h-[70%] "
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video 
          autoPlay 
          muted 
          loop 
          className=" md:hidden min-w-full min-h-[100%] "
      >
        <source src="/videos/mobile-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default InnerVideo;
