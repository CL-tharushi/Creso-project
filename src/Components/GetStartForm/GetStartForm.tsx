import TextButton from "../Button/TextButton";

function GetStartForm() {
  return (
    <div className="flex flex-col items-center justify-between px-[26px] w-full h-full">
      <div className="flex flex-col items-center justify-center  w-full">
        <h1 className="text-[32px] text-center text-black -tracking-[0.96px] leading-[48.8px] font-extrabold ">
          Let's Get Started
        </h1>

        <img
          className="getstart-line-img mt-8 "
          loading="lazy"
          alt="Get start page image"
          src="/assets/img/getstart_line.png"
        />
      </div>

      <img
        className="getstart-img "
        loading="lazy"
        alt="Get start page image"
        src="/assets/img/Getstart.png"
      />

      
      <div className="flex flex-col items-center justify-center w-full">
      <div className="mb-5">
        <div className="flex flex-row items-center mb-3">
          <img
            className="h-[26px] w-[26px] relative object-contain pr-2 "
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

        <div className=" w-full flex items-center justify-center flex-col gap-2">
          {/* icon required */}
          <TextButton buttonText="Create New Wallet " className="" />
          <TextButton
            buttonText="Import and existing wallet"
            className="!bg-white !border !border-black !text-black"
          />
        </div>
      </div>
      </div>
    </div>
  );
}

export default GetStartForm;
