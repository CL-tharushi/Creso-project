import { useState } from "react";
import Step1 from "./Images/step1";
import Step2 from "./Images/step1";
import Step3 from "./Images/step3";


function MultipleStepForm() {
  const steps = ["Create Password", "Secure Waller", "Confirm Code"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const handleStepClick = (step) => {
    if (!complete) {
      setCurrentStep(step);
    }
  };

  const icons = [<Step1/> ,<Step2/> ,<Step3/>];

  return (
    <>
      <div className="flex justify-between ">
        {steps?.map((step, i) => (
          <div
            key={i}
            onClick={() => handleStepClick(i + 1)}
            className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"}`}
          >
            <div className={`border rounded-full w-16 h-16 bg-white overflow-hidden z-[2] flex items-center justify-center ${i === 0 && currentStep === 1 && "!bg-[#D0F500] border-1 border-[#000]" } ${(i !== 0 || currentStep !== 1) && ""}`}>
              {i + 1 < currentStep || complete ? <Step1/> : icons[i]}
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
