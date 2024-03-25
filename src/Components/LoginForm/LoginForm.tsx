import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import TextButton from "../Button/TextButton";
import SocialMediaButton from "../Button/SocialMediaButton";
import { Link } from "react-router-dom";

function LoginForm() {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex flex-col items-center justify-center w-full px-[26px] h-full">
      <div className="flex flex-row items-center justify-start  w-full">
        <ArrowLeftIcon className="item-center justify-center w-5 h-auto text-black m-2 " />
        <h1 className="text-2xl font-extrabold">Login</h1>
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
            className="form w-full h-20 text-start p-4 mr-3 text-base text-[#000]"
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
            className="form w-full h-20 text-start p-4 mr-3 text-base text-[#000]  "
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

          <h3 className="item-start justify-center text-sm p-2 ml-2">
            <a href="/password-reset" className="forgetpassword">
              Forgot Password?
            </a>
          </h3>
          <Link to="/SignUp">
            <TextButton buttonText="Login" className="" />
          </Link>

          <div className="w-[180px] border border-black/10 h-[1px] my-[3rem] flex items-center justify-center mx-auto"></div>

          {/* <TextButton buttonText="Sign Up" /> */}
          {/* <Button buttonText="Sign Up" icon={<ChevronDownIcon className="w-5 h-auto text-white" />} /> */}

          {/* icon apply */}

          <div className="flex flex-col items-center justify-center mt-12 gap-3">

            <SocialMediaButton
              buttonText="Sign with Google"
              imgUrl="/assets/img/google.png"
            />

            <SocialMediaButton
              buttonText="Sign with Twitter"
              imgUrl="/assets/img/twitter.png"
            />
            
            <SocialMediaButton
              buttonText="Sign with Apple"
              imgUrl="/assets/img/apple.png"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
