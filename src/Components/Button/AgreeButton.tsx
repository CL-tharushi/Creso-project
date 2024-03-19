
import React from "react";

interface ButtonProps {
  buttonText: string;
  className: string;
}

const AgreeButton: React.FC<ButtonProps> = ({ buttonText, className }) => {
  return (
    <div className="flex items-start justify-center w-full">
      <button
        className={`${className} border border-[#0000001A]  rounded-[100px] m-1 p-4 w-11/12 text-black text-sm 2 font-bold`}>
        {buttonText}
      </button>
    </div>
  );
};

export default AgreeButton;



