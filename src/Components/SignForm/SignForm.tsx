import { useForm } from "react-hook-form";
import { ArrowLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Icon from "../Button/Icon";

function SignForm() {
  const goback = () => {
    window.history.back();
  };

  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex flex-col items-center justify-between px-[26px] w-full h-full">
      <div className="flex flex-col w-full  h-full">
        <div className="flex flex-row items-center justify-start  w-full">
          <ArrowLeftIcon
            onClick={goback}
            className="item-center justify-center w-5 h-auto text-black m-2 "
          />
          <h1 className="text-2xl font-extrabold">Sign Up</h1>
        </div>

        <form
          action=""
          className=" flex flex-col items-center justify-center mt-6 w-full  gap-6"
        >
          <div className=" w-full flex flex-col items-start gap-2.5">
            <label htmlFor="email" className="text-xs font-semibold px-2 ml-2 ">
              Email/Phone
            </label>
            <input
              id="email"
              type="email"
              placeholder="Samuel.HK6@gmail.com"
              className="form w-full h-20 text-start p-4 mr-3"
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

          <div className="w-full flex flex-col items-start gap-2.5">
            <label
              htmlFor="password"
              className="text-xs font-semibold px-2 ml-2 "
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="*********"
              className="form w-full h-20 text-start p-4 mr-3  "
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

          <div className="w-full flex flex-col items-start gap-2.5">
            <label
              htmlFor="confirmedpassword"
              className="text-xs font-semibold px-2 ml-2 "
            >
              Confirmed Password
            </label>
            <input
              id="confirmedpassword"
              type="password"
              placeholder="*********"
              className="form w-full h-20 text-start p-4 mr-3  "
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

            <div className="flex flex-row items-center justify-between mt-4 w-full">
              <div className="flex flex-row items-center justify-start gap-2">
                <img
                  className="h-6 w-6 relative object-cover pr-2 "
                  loading="lazy"
                  alt=""
                  src="/assets/img/Lock.png"
                />

                <h3 className="text-base font-semibold">
                  Authentication Method
                </h3>
              </div>
              <button className="flex flex-row items-center justify-end gap-2">
                <span className="text-[#2100ec] text-sm font-semibold">
                  Face ID
                </span>
                <ChevronRightIcon className=" item-center justify-center w-6 h-6 text-black p-1" />
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="flex flex-col items-center justify-start w-full gap-6">
        <div className="flex flex-row items-center">
          <img
            className="h-6 w-6 relative object-cover  mr-2 "
            loading="lazy"
            alt=""
            src="/assets/img/Checkmark.png"
          />
          <div className="text-base flex items-center w-full gap-[2px]">
            {/* <span className="text-base -tracking-[0.48px]">
              I have agree to the Creso
            </span>
            <a
              href="/term and condition"
              className="text-base -tracking-[0.48px] text-[#FF4085]"
            >
              Terms and Conditions
            </a> */}
            <h3 className=" item-center justify-center text-base font-semibold -tracking-[0.48px] ">
              I have agree to the Creso{" "}
              <a href="/term and condition">
                <span className="text-base font-semibold text-[#FF4085]">
                  Terms and Conditions
                </span>
              </a>
            </h3>
          </div>
        </div>

        <div className=" w-full">
          {/* icon required */}
          <Icon buttonText="SignUp" className="" icon={ChevronRightIcon} />
        </div>
      </div>
    </div>
  );
}

export default SignForm;
