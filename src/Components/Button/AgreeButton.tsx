
import React from "react";

interface ButtonProps {
  buttonText: string;
  className: string;
}

const AgreeButton: React.FC<ButtonProps> = ({ buttonText, className }) => {
  return (
      <button
        className={`${className} border border-black flex items-start justify-start w-full gap-2  rounded-[100px] p-4  text-black text-sm 2 font-bold`}>
        {buttonText}
      </button>

  );
};

export default AgreeButton;



