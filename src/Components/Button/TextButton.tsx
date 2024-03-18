import React from "react";

interface ButtonProps {
  buttonText: string;
  className: string;
}

const TextButton: React.FC<ButtonProps> = ({ buttonText, className }) => {
  return (
    <div className="flex items-start justify-center w-full">
      <button
        className={`${className} bg-black border rounded-[100px] p-4 w-full text-white h-[72px] font-semibold`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default TextButton;
