import React from 'react';

interface ButtonProps {
  buttonText: string;
}

const SocialMediaButton: React.FC<ButtonProps> = ({ buttonText }) => {
  return (
    <div className=" flex flex-row items-start justify-center w-full mt-4">
      <button className='socialmediaButton border rounded-3xl p-4 w-full text-black'>
        {buttonText}
      </button>
    </div>
  );
};

export default SocialMediaButton;
