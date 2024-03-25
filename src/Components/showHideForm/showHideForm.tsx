import React, { useState } from "react";
import RecoveryForm from "../RecoveryForm/RecoveryForm";

const ShowHideForm: React.FC = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(!showComponent); // Toggle the state when clicking the icon
  };

  return (
    <div className="relative w-[398px] h-[268px]">
      {!showComponent && (
        <div className="bgblur absolute inset-0 flex items-center justify-center border rounded-3xl">
          <div className="flex flex-col items-center justify-center">
            <img
              className="h-6 w-6 relative m-1 cursor-pointer"
              loading="lazy"
              alt="logo icon"
              src="/assets/img/show.png"
              onClick={handleClick} // Call handleClick when clicking the icon
            />
            <span className="text-sm font-bold ml-2 cursor-pointer" onClick={handleClick}>
              Make sure nobody is looking
            </span>
          </div>
        </div>
      )}
      {showComponent && (
        <div className="absolute inset-0 flex items-center justify-center">
          <RecoveryForm />
        </div>
      )}
    </div>
  );
};

export default ShowHideForm;
