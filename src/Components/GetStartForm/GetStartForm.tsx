import TextButton from "../Button/TextButton";

function GetStartForm() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 h-full">
      <div className="flex flex-row items-center justify-center  w-full">
        <h1 className="text-[32px] text-center text-black -tracking-[0.96px] leading-[48.8px] font-extrabold mt-4">
          Let's Get Started
        </h1>
      </div>
      <img
        className="getstart-line-img mt-8"
        loading="lazy"
        alt="Get start page image"
        src="/assets/img/getstart_line.png"
      />
      <img
        className="getstart-img mt-24"
        loading="lazy"
        alt="Get start page image"
        src="/assets/img/Getstart.png"
      />

      <div className="flex flex-col items-center justify-start mt-12 gap-4 w-full">
        <div className="flex flex-row items-center">
          <img
            className="h-[26px] w-[26px] relative object-contain pr-2 "
            loading="lazy"
            alt=""
            src="/assets/img/Checkmark.png"
          />
          <div className="flex items-center gap-1">
            <h3 className="text-base font-semibold">
              I have agree to the Creso
            </h3>
            <h3 className="text-[#ff4085] text-base font-semibold">
              <a href="/term and condition"></a>
              Terms and Conditions
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
  );
}

export default GetStartForm;
