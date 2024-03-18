import SocialMediaButton from "../Button/SocialMediaButton";
import TextButton from "../Button/TextButton";

function GetStartForm() {
  return (
    <div className="flex flex-col items-center justify-center w-4/5 p-2 ">
      <div className="flex flex-row items-center justify-center  w-full">
        <h1 className="getstart-text text-2xl mt-4">Let's Get Started</h1>
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

<div className="flex flex-col items-center justify-start mt-12 w-full">
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

        <div className=" w-full">
          {/* icon required */}
        <TextButton  buttonText="Create New Wallet " />
        <SocialMediaButton buttonText="Import and existing wallet" />
        </div>
      </div>

    </div>
  );
}

export default GetStartForm;
