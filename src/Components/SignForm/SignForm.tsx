import React from "react";
import { useForm } from "react-hook-form";
import { ArrowLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import TextButton from "../Button/TextButton";

function SignForm() {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex flex-col items-center justify-center w-4/5 p-2 ">
      <div className="flex flex-row items-center justify-start  w-full">
        <ArrowLeftIcon className="item-center justify-center w-5 h-auto text-black m-2 " />
        <h1 className="text-xl">Sign Up</h1>
      </div>

      <form
        action=""
        className=" flex flex-col items-center justify-center mt-6 w-full  "
      >
        <div className=" w-full mb-6 ">
          <h3 className="text-sm p-2 ml-2 ">Email/Phone</h3>
          <input
            id="email"
            type="email"
            placeholder="Samuel.HK6@gmail.com"
            className="form w-full h-12 text-start p-4 mr-3"
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <p className="errorMsg">Email is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="errorMsg">Email is not valid.</p>
          )}
        </div>

        <div className=" w-full mb-6 ">
          <h3 className="text-sm p-2 ml-2 ">Password</h3>
          <input
            id="password"
            type="password"
            placeholder="*********"
            className="form w-full h-12 text-start p-4 mr-3  "
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

        <div className=" w-full mb-6 ">
          <h3 className="text-sm p-2 ml-2 ">Confirmed Password</h3>
          <input
            id="confirmedpassword"
            type="password"
            placeholder="*********"
            className="form w-full h-12 text-start p-4 mr-3  "
            {...register("confirmedpassword", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
          />
          {errors.confirmedpassword &&
            errors.confirmedpassword.type === "required" && (
              <p className="errorMsg">Password is required.</p>
            )}
          {errors.confirmedpassword &&
            errors.confirmedpassword.type === "pattern" && (
              <p className="errorMsg">Password is not valid.</p>
            )}

          <div className="flex flex-row items-center justify-between mt-4">
            <div className="flex flex-row items-center justify-start">
              <img
                className="h-[26px] w-[26px] relative object-cover pr-2 "
                loading="lazy"
                alt=""
                src="/assets/img/Lock.png"
              />

              <h3 className="text-sm">Authentication Method</h3>
            </div>
            <div className="flex flex-row items-center justify-end">
              <h3 className="face-ID text-sm">Face ID</h3>
              <ChevronRightIcon className=" item-center justify-center w-5 h-auto text-black m-2 " />
            </div>
          </div>
        </div>
      </form>

      <div className="flex flex-col items-center justify-start mt-24 w-full">
        <div className="flex flex-row items-center">
          <img
            className="h-[26px] w-[26px] relative object-cover pr-2 "
            loading="lazy"
            alt=""
            src="/assets/img/Checkmark.png"
          />
          <h3 className="text-xs ">I have agree to the Creso</h3>
          <h3 className="termcon text-xs text">
            <a href="/term and condition"></a>
            Terms and Conditions
          </h3>
        </div>

        {/* icon required */}
        <TextButton buttonText="Sign Up" />
      </div>
    </div>
  );
}

export default SignForm;
