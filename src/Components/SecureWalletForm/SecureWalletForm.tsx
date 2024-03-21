import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import TextButton from "../Button/TextButton"
import MultipleStepForm from "../MultipleStepForm/MultipleStepForm"


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


      
      <div className="flex flex-col items-center justify-center -full">
        

          
        <div className=" w-full flex items-center justify-center flex-col mt-4">
        {/* icon required */}
        <TextButton buttonText="Create New Password " className="" />
      </div>
      </div>

      
    </div>
  )
}

export default SecureWalletForm
