import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import TextButton from "../Button/TextButton";

function VerifyForm() {
  return (
    <div className="flex flex-col items-center justify-center w-4/5 p-2 ">
      <div className="flex flex-row items-center justify-start  w-full">
        <ArrowLeftIcon className="item-center justify-center w-5 h-auto text-black m-2 " />
        <h1 className="text-xl">Verify</h1>
      </div>

      <div className="flex flex-col items-center justify-center w-full mt-8">
        <h3 className="text-sm p-1">
          An email with a verication code was just sent to{" "}
        </h3>
        <button className="verifybutton mt-4">
          <h3 className="text-white text-xs">Samuel.hawking@gmail.com</h3>
        </button>
      </div>

      {/* get code  */}
      <div className=""></div>

      <div className=" verify-endbutton flex  items-center justify-start mt-48 w-full">
        <div className="mt-60 w-full">
          {/* icon required */}
          <TextButton buttonText="Sign Up " className="" />
        </div>
      </div>
    </div>
  );
}

export default VerifyForm;
