import { useState } from "react";
import { LockClosedIcon, ShieldCheckIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

function MultipleStepForm() {
  const steps = ["Create Password", "Secure Waller", "Confirm Code"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const handleStepClick = (step ) => {
    if (!complete) {
      setCurrentStep(step);
    }
  };

  const icons = [<LockClosedIcon className="w-7" />, <ShieldCheckIcon className="w-7" />, <CheckBadgeIcon className="w-7" />];

  return (
    <>
      <div className="flex justify-between ">
        {steps?.map((step, i) => (
          <div
            key={i}
            onClick={() => handleStepClick(i + 1)}
            className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"}`}
          >
            <div className={`border rounded-full w-16 h-16 bg-white overflow-hidden z-[2] flex items-center justify-center ${i === 0 && currentStep === 1 && "bg-yellow-300"} ${(i !== 0 || currentStep !== 1) && "opacity-50"}`}>
              {i + 1 < currentStep || complete ? <LockClosedIcon className="w-7" /> : icons[i]}
            </div>
            <p className="text-black text-sm font-bold mt-3">{step}</p>
          </div>
        ))}
      </div>
      {!complete && (
        <button
          className="btn"
          onClick={() => {
            currentStep === steps.length ? setComplete(true) : setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep === steps.length ? "" : ""}
        </button>
      )}
    </>
  );
}

export default MultipleStepForm;
