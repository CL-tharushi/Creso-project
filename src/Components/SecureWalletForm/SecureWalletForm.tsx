import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import TextButton from "../Button/TextButton";
import MultipleStepForm from "../MultipleStepForm/MultipleStepForm";
import NonFill from "../Button/NonFill";

function SecureWalletForm() {
  return (
    <div className="flex flex-col items-center justify-between px-[26px] w-full h-full">
      <div className="flex flex-row items-center justify-start  w-full">
        <ArrowLeftIcon className="item-center justify-center w-5 h-auto text-black m-2 " />
        <h1 className="text-2xl font-extrabold">Create EOA Wallet</h1>
      </div>

      {/* multiple step form  */}
      <div className="flex items-center justify-center">
        <MultipleStepForm />
      </div>

      <img
        className="CPline "
        loading="lazy"
        alt="crate pw line"
        src="/assets/img/CPline.png"
      />

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-extrabold">Secure Your Wallet</h1>

        <h3 className="text-sm font-extrabold text-[#66666666] py-3">Before getting started, watch this short video to learn<br/> about your Secret Recovery Pharse and how to keep<br/> your wallet safe</h3>
      </div>

      <div className="flex item-center justify-center border w-96 h-32 rounded-3xl bg-[#D0F500]">
      <div className=" flex items-center justify-center ">
        <img
          className="flex items-center justify-center  w-[48px] h-[48px]  "
          loading="lazy"
          alt="video icon"
          src="/assets/img/video.png"
        />
      </div>
      </div>

      <div className=" w-full flex items-center justify-center flex-col mt-4 gap-2">
        {/* icon required */}
        <TextButton buttonText="Create New Password " className="" />
        <NonFill buttonText="Remind me later" className="" />
      </div>
    </div>
  );
}

export default SecureWalletForm;
