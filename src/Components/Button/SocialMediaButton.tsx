import React from "react";

interface ButtonProps {
  buttonText: string;
  imgUrl: string;
}

const SocialMediaButton: React.FC<ButtonProps> = ({ buttonText, imgUrl }) => {
  return (
    <div className=" flex flex-row items-start justify-center w-full">
      <button className="bg-white border border-black rounded-[100px]  p-4 w-full text-black flex items-center gap-2 justify-center">
        <img src={imgUrl} alt="social" className="w-6 h-6" />
        {buttonText}
      </button>
    </div>
  );
};

export default SocialMediaButton;
