import React from "react";

interface OTPInputProps {
  length: number;
}

const OTPInput: React.FC<OTPInputProps> = ({ length }) => {
  const inputs = Array.from({ length }, (_, index) => index + 1);

  return (
    <div className="flex justify-center space-x-4 mt-4">
      {inputs.map((index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          className="w-12 h-12 rounded-full border-2 border-[#E5E5F0] text-center text-2xl font-semibold focus:outline-blue "
        />
      ))}
    </div>
  );
};

export default OTPInput;
