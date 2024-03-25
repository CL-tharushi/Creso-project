import { ArrowLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import OTPInput from "../OTPInput/OTPInput";
import Icon from "../Button/Icon";

function VerifyForm() {
  return (
    <div className="flex flex-col items-center justify-between px-[26px] w-full h-full">
      {/* <div className="flex flex-col gap-[50px] w-full">
        <div className="flex flex-row items-center justify-start  w-full">
          <ArrowLeftIcon className="item-center justify-center w-5 h-auto text-black m-2 " />
          <h1 className="text-2xl font-extrabold">Verify</h1>
        </div>
        <div className="flex flex-col gap-[3rem]">
          <div className="flex flex-col items-center justify-center w-full mt-8 ">
            <h3 className="text-sm font-semibold  ">
              An email with a verication code was just sent to
            </h3>
            <button className="verifybutton mt-4">
              <h3 className="text-white text-xs">Samuel.hawking@gmail.com</h3>
            </button>
          </div>
          <div className="flex flex-col items-start gap-3">
            <OTPInput length={6} />

            <div className="flex flex-row items-center justify-start  w-full ml-10 gap-1">
              <h3 className="text-sm font-semibold ">Not received?</h3>
              <h3 className="text-sm font-semibold text-[#FF4085]">
                Resend code 46s
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className=" verify-endbutton flex  items-center justify-start  w-full">
        <div className="w-full">
          <TextButton buttonText="Verify " className="" />
        </div>
      </div> */}
      <div className="flex flex-col w-full items-center justify-center">
        <div className="flex flex-row items-center justify-start  w-full">
          <ArrowLeftIcon className="item-center justify-center w-5 h-auto text-black m-2 " />
          <h1 className="text-2xl font-extrabold">Verify</h1>
        </div>

        <div className="flex flex-col items-center justify-center w-full mt-8 ">
          <h3 className="text-sm font-semibold  ">
            An email with a verication code was just sent to{" "}
          </h3>
          <button className="verifybutton mt-4">
            <h3 className="text-white text-xs">Samuel.hawking@gmail.com</h3>
          </button>
        </div>

        <div className="flex  items-center justify-center mt-8">
          <OTPInput length={6} />
        </div>

        <div className="flex flex-row items-center justify-start  w-full p-2">
          <h3 className="text-sm font-semibold ">Not received?</h3>
          <h3 className="text-sm font-semibold text-[#FF4085]">
            {" "}
            Resend code 46s
          </h3>
        </div>
      </div>

      <div className=" verify-endbutton flex  items-center justify-start mt-48 w-full">
        <div className="mt-60 w-full">
          {/* icon required */}
          <Icon buttonText="Verify" className="" icon={ChevronRightIcon} />
        </div>
      </div>
    </div>
  );
}

export default VerifyForm;
