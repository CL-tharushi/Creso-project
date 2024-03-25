import React from "react";

interface ButtonProps {
  buttonText: string;
  className: string;
}

const NonFill: React.FC<ButtonProps> = ({ buttonText, className }) => {
  return (
    <div className="flex items-start justify-center w-full">
      <button
        className={`${className} bg-white border border-[#66666666] rounded-[100px] p-4 w-full text-[#000] h-[72px] font-semibold`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default NonFill;