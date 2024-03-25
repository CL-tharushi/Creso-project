import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import MultipleStepForm from "../MultipleStepForm/MultipleStepForm";
import TextButton from "../Button/TextButton";
import ShowHideForm from "../showHideForm/showHideForm";

function RecoveryPharseForm() {


  return (
    <div className="flex flex-col items-center justify-between px-[26px] w-full h-full ">
      <div className="flex flex-col items-center justify-center w-full gap-5">
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

        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-center text-xl font-extrabold ">
            Write down your Secret Recovery <br /> Pharse
          </h1>

          <h3 className="text-sm font-extrabold text-[#66666666] py-3">
            Write down this 12-world secret recovery pharse and <br />
            save it in a place that you trust and only you can access.
          </h3>
        </div>
        {/* <img
          className="flex items-center justify-center  w-[398px] h-[268px]  "
          loading="lazy"
          alt="video icon"
          src="/assets/img/recover.png"
        /> */}
        <div className="flex items-center justify-center w-full">
          <ShowHideForm/>
        </div>
      </div>

      <div className=" w-full flex items-center justify-center flex-col mt-4 gap-2">
        {/* icon required */}
        <TextButton buttonText="Reveal Secret Recovery Pharse" className="" />
      </div>
    </div>
  );
}

export default RecoveryPharseForm;
