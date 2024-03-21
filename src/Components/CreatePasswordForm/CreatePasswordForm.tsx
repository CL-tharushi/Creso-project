import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import TextButton from "../Button/TextButton";
import MultiStepForm from "../MultipleStepForm/MultipleStepForm";

function CreatePasswordForm() {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex flex-col items-center justify-between px-[26px] w-full h-full">
      <div className="flex flex-row items-center justify-start  w-full">
        <ArrowLeftIcon className="item-center justify-center w-5 h-auto text-black m-2 " />
        <h1 className="text-2xl font-extrabold">Create EOA Wallet</h1>
      </div>

      {/* multiple step form  */}
      <div className="flex items-center justify-center">
        <MultiStepForm />
      </div>

      <img
        className="CPline "
        loading="lazy"
        alt="crate pw line"
        src="/assets/img/CPline.png"
      />


      <form
        action=""
        className=" flex flex-col items-center justify-center mt-6 w-full  "
      >
        <div className=" w-full mb-6 ">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-sm font-semibold p-2 ml-2 ">New Password</h3>
            <h3 className="text-xs font-medium  p-2 ml-2 text-[#FF4085] ">
              Show
            </h3>
          </div>
          <input
            id="newpassword"
            type="newpassword"
            placeholder="Please Enter Your New Password"
            className="form  w-full h-20 text-start px-8  text-base font-medium  "
            {...register("newpassword", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <p className="errorMsg">Password is required.</p>
          )}
          {errors.password && errors.password.type === "pattern" && (
            <p className="errorMsg">Password is not valid.</p>
          )}
        </div>

        <div className=" w-full mb-6 ">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-sm font-semibold p-2 ml-2 ">
              Confirm Password
            </h3>
            <h3 className="text-xs font-medium  p-2 ml-2 text-[#FF4085] ">
              Show
            </h3>
          </div>

          <input
            id="password"
            type="password"
            placeholder="Please Enter Your Confirm Password"
            className="form  w-full h-20 text-start px-8  text-base font-medium "
            {...register("password", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <p className="errorMsg">Password is required.</p>
          )}
          {errors.password && errors.password.type === "pattern" && (
            <p className="errorMsg">Password is not valid.</p>
          )}
        </div>
      </form>

      <div className="flex flex-col items-center justify-center -full">
        <div className="flex flex-row items-center justify-start">
          <img
            className="h-[26px] w-[26px] relative object-contain pr-2 "
            loading="lazy"
            alt=""
            src="/assets/img/Checkmark.png"
          />

          <div className="item-center justify-center">
            <h3 className=" item-center justify-center text-base font-semibold">
              I understand that Creso cannot recover this password for me.{" "}
              <span className="text-base font-semibold text-[#FF4085]">
                learn more
              </span>
            </h3>
          </div>
        </div>
        <div className=" w-full flex items-center justify-center flex-col mt-4">
        {/* icon required */}
        <TextButton buttonText="Create New Password " className="" />
      </div>
      </div>

      
    </div>
  );
}

export default CreatePasswordForm;
