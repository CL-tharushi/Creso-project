import React from "react";


interface ButtonProps {
  buttonText: string;
  className: string;
  icon?: React.ElementType; // Define a prop for the icon component
}

const Icon: React.FC<ButtonProps> = ({ buttonText, className, icon: IconComponent }) => {
  return (
    <div className="flex   items-center justify-center w-full">
      <button
        className={`${className} bg-black border rounded-[100px] p-4 w-full text-white h-[72px] font-semibold flex items-center justify-center pl-5`}
      >
        {buttonText}
        {IconComponent && <IconComponent className="flex items-center justify-center w-6 h-6 p-1 ml-3 " />}
        
      </button>
    </div>
  );
};

export default Icon;

