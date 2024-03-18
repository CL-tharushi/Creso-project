import React from 'react';


interface ButtonProps {
  buttonText: string;
}

const TextButton: React.FC<ButtonProps> = ({ buttonText }) => {
  return (
    <div className="flex items-start justify-center w-full mt-6">
      <button className='button border rounded-3xl p-4 w-full text-white'>
        {buttonText}
      </button>
    </div>
  );
};

export default TextButton;
