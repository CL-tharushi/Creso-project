// import { ArrowLeftIcon } from "@heroicons/react/24/outline";
// import { useForm } from "react-hook-form";
// import TextButton from "../Button/TextButton";

// function CreatePasswordForm() {

//     const {
//         register,
//         formState: { errors },
//       } = useForm();

//   return (
//     <div className="flex flex-col items-center justify-center w-full">
//       <div className="flex flex-row items-center justify-start">
//         <ArrowLeftIcon className="item-center justify-center w-5 h-auto text-black m-2 " />
//         <h1 className="text-2xl font-extrabold">Create EOA Wallet</h1>
//       </div>

//       {/* shift icons */}

//       <div className=""></div>

//       <form
//         action=""
//         className=" flex flex-col items-center justify-center mt-6 w-full  "
//       >
//         <div className=" w-full mb-6 ">
//           <h3 className="text-sm p-2 ml-2 ">Email/Phone</h3>
//           <input
//             id="email"
//             type="email"
//             placeholder="Samuel.HK6@gmail.com"
//             className="form w-full h-12 text-start p-4 mr-3"
//             {...register("email", {
//               required: true,
//               pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
//             })}
//           />
//           {errors.email && errors.email.type === "required" && (
//             <p className="errorMsg">Email is required.</p>
//           )}
//           {errors.email && errors.email.type === "pattern" && (
//             <p className="errorMsg">Email is not valid.</p>
//           )}
//         </div>

//         <div className=" w-full mb-6 ">
//           <h3 className="text-sm p-2 ml-2 ">New Password</h3>
//           <input
//             id="password"
//             type="password"
//             placeholder="Please Enter Your New Password"
//             className="form w-full h-12 text-start p-4 mr-3  "
//             {...register("password", {
//               required: true,
//               pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
//             })}
//           />
//           {errors.password && errors.password.type === "required" && (
//             <p className="errorMsg">Password is required.</p>
//           )}
//           {errors.password && errors.password.type === "pattern" && (
//             <p className="errorMsg">Password is not valid.</p>
//           )}
//         </div>

//         <div className=" w-full mb-6 ">
//           <h3 className="text-sm p-2 ml-2 ">Confirmed Password</h3>
//           <input
//             id="confirmedpassword"
//             type="password"
//             placeholder="Please Enter Your Confirm Password"
//             className="form w-full h-12 text-start p-4 mr-3  "
//             {...register("confirmedpassword", {
//               required: true,
//               pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
//             })}
//           />
//           {errors.confirmedpassword &&
//             errors.confirmedpassword.type === "required" && (
//               <p className="errorMsg">Password is required.</p>
//             )}
//           {errors.confirmedpassword &&
//             errors.confirmedpassword.type === "pattern" && (
//               <p className="errorMsg">Password is not valid.</p>
//             )}

         
//         </div>

//         <div className="flex flex-col items-center justify-start mt-48 w-full">
//         <div className="flex flex-row items-center">
//           <img
//             className="h-[26px] w-[26px] relative object-cover pr-2 "
//             loading="lazy"
//             alt=""
//             src="/assets/img/Checkmark.png"
//           />
//           <h3 className="text-xs ">I understand that Creso cannot recover this password for me.</h3>
//           <h3 className="termcon text-xs text">
//             <a href="/term and condition"></a>
//             learn more
//           </h3>
//         </div>

//         <div className="mt-58 w-full">
//           {/* icon required */}
//         <TextButton  buttonText="Create New Password " className=""  />
//         </div>
//       </div>
//       </form>
      

//     </div>
//   );
// }

// export default CreatePasswordForm;
