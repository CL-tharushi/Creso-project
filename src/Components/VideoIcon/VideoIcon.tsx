import React from "react";

const VideoIcon: React.FC = () => {
  const handleVideoClick = () => {
    
    window.location.href = "https://www.youtube.com/watch?v=YOUR_VIDEO_ID";
  };

  return (
    <div className="flex items-center justify-center border w-96 h-32 rounded-3xl bg-[#D0F500]">
      <div className="flex items-center justify-center" onClick={handleVideoClick}>
        <img
          className="w-[48px] h-[48px]"
          loading="lazy"
          alt="video icon"
          src="/assets/img/video.png"
        />
      </div>
    </div>
  );
};

export default VideoIcon;
