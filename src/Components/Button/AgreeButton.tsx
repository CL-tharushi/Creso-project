import React from "react";

interface ButtonProps {
  buttonText: string;
  className: string;
  imageSrc: string; 
}

const AgreeButton: React.FC<ButtonProps> = ({ buttonText, className, imageSrc }) => {
  return (
    <button
      className={`${className} border border-[#E5E5F0] flex items-center justify-start w-full gap-2 rounded-[100px] p-4 text-black text-sm font-bold`}
    >
      
      <img src={imageSrc} alt="Button Icon" className="w-6 h-6" /> 
      {buttonText}
      
    </button>
  );
};

export default AgreeButton;




