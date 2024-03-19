import AgreeButton from "../Button/AgreeButton";
import TextButton from "../Button/TextButton";

function AgreeForm() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center  w-full">
        <h1 className="text-2xl  text-black  font-extrabold ">
          Let's Get Started
        </h1>
        <h3 className="  text-sm font-semibold  text-[#66666666] p-4 px-5">
          Creso would like to gather usage data to better understand how our
          users interact with Creso. This data will be used to provide the
          service, which includes improving the service based on your use.
        </h3>
      </div>

      {/* require icons for buttons */}

      <div className="flex flex-col items-center justify-center w-full">
        <AgreeButton
          buttonText="Always allow you to opt-out via Settings"
          className=""
        />
        <AgreeButton
          buttonText="Send anonymized click and pageview events"
          className=""
        />
        <AgreeButton
          buttonText="Never Collect your full IP address"
          className=""
        />
        <AgreeButton buttonText="Never sell data. Ever!" className="" />
      </div>

      <div className=" items-center justify-center">
        <h3 className="  text-sm font-semibold  text-[#66666666] p-4 px-5">
          This data is aggregated and is therefore anonymous for the purposes of
          General Data Protection Regulation (EU) 2016/679 When you use Infura
          as your default RPC provider in Creso, Infura will collect your IP
          address and your Ethereum wallet address when you send a transaction.
          We don't store this information in a way that allows our systems to
          associate those two pieces of data. For more information on our
          privacy practices in general, see our 
          <h3 className="  text-sm font-semibold  text-[#FF4085]">
           Privacy Policy here.
        </h3>
        </h3>
      </div>
      
      <div className=" verify-endbutton flex  items-center justify-start w-full mt-8">
        <div className=" w-full mx-4">
          {/* icon required */}
          <TextButton buttonText="I Agree" className="" />
        </div>
      </div>
      
    </div>
  );
}

export default AgreeForm;