import React from 'react'; 

function VideoBackground() {
  return (
    <div className="absolute bg-[#0d1a24] -z-10 top-0 left-0 w-full h-[full] overflow-hidden">
      <video 
          autoPlay 
          muted 
          loop 
          className="min-w-full min-h-[70%] "
      >
        <source src="/videos/main_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoBackground;
