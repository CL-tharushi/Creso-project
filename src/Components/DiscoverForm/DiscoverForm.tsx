import {
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

function DiscoverForm() {
  return (
    <div className="flex flex-col items-center justify-between px-[26px] w-full h-full gap-4">
      <div className="flex flex-row items-center justify-between w-full">
        <h2 className="text-2xl font-extrabold">Discover</h2>
        <div className="flex items-center justify-center gap-5">
          <img
            className="h-[28px] w-[28px] relative m-1"
            loading="lazy"
            alt="discover nav bar"
            src="/assets/img/Star.png"
          />
          <img
            className="h-[28px] w-[28px] relative m-1"
            loading="lazy"
            alt="discover nav bar"
            src="/assets/img/time.png"
          />
          <img
            className="h-[28px] w-[28px] relative m-1"
            loading="lazy"
            alt="discover nav bar"
            src="/assets/img/menu.png"
          />
        </div>
      </div>
      {/* image */}
      <div className="flex flex-col items-center justify-center border  w-[378px] h-[228.75px]"></div>

      {/* card */}
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row items-start justify-center border rounded-[20px] w-[183px] h-[115px] relative">
          <img
            className="h-[45px] w-[183px] absolute"
            loading="lazy"
            alt="discover nav bar"
            src="/assets/img/marcketcap.png"
          />
          <img
            className="h-[35px] w-[36px] absolute right-0 "
            loading="lazy"
            alt="discover nav bar"
            src="/assets/img/capdot.png"
          />
          <h3 className=" flex items-center justify-center text-white absolute text-[10px] font-semibold top-4 left-6">
            Market Cap
          </h3>
        </div>

        <div className="flex flex-row items-start justify-center border rounded-[20px] w-[183px] h-[115px] relative">
          <img
            className="h-[45px] w-[183px] absolute"
            loading="lazy"
            alt="discover nav bar"
            src="/assets/img/marcketcap.png"
          />
          <img
            className="h-[35px] w-[36px] absolute right-0 "
            loading="lazy"
            alt="discover nav bar"
            src="/assets/img/capdot.png"
          />
          <h3 className=" flex items-center justify-center text-white absolute text-[10px] font-semibold top-4 left-6">
            Market Cap
          </h3>
        </div>
      </div>
      {/* card 2 */}
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-col items-center justify-center w-[118px] h-[123px] border rounded-3xl gap-3">
          <img
            className="h-[42px] w-[42px]  "
            loading="lazy"
            alt="discover nav bar"
            src="/assets/img/Joystick.png"
          />

          <h3 className="text-[13px] font-semibold">Games</h3>
        </div>
        <div className="flex flex-col items-center justify-center w-[118px] h-[123px] border rounded-3xl gap-3">
          <img
            className="h-[42px] w-[42px]  "
            loading="lazy"
            alt="discover nav bar"
            src="/assets/img/Shop.png"
          />

          <h3 className="text-[13px] font-semibold">MarketPlace</h3>
        </div>
        <div className="flex flex-col items-center justify-center w-[118px] h-[123px] border rounded-3xl gap-3">
          <img
            className="h-[42px] w-[42px]  "
            loading="lazy"
            alt="discover nav bar"
            src="/assets/img/Dollar.png"
          />

          <h3 className="text-[13px] font-semibold">DEFI</h3>
        </div>
      </div>
      {/* card3 */}
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-col items-center justify-center bg-[#FFF2D0] border border-black rounded-[18px] w-[179px] h-[271px] ">
          <img
            className="h-[198.928px] w-[219.614px]  "
            loading="lazy"
            alt="discover nav bar"
            src="/assets/img/crypto.png"
          />
          <div className="flex flex-row items-center justify-between w-full px-[22px] ">
            <h2 className="text-[19px] font-bold">
              Crypto
              <br />
              News
            </h2>
            <ArrowRightIcon className="w-7" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#FFF2D0] border border-black rounded-[18px] w-[179px] h-[271px] ">
          <img
            className="h-[198.928px] w-[219.614px]  "
            loading="lazy"
            alt="discover nav bar"
            src="/assets/img/discover.png"
          />
          <div className="flex flex-row items-center justify-between w-full px-[22px] ">
            <h2 className="text-[19px] font-bold">
              Discover
              <br />
              Dapps
            </h2>
            <ArrowRightIcon className="w-7" />
          </div>
        </div>
      </div>
      {/* top NFT */}
      <div className="flex flex-row items-center justify-center w-full gap-[181px] ">
        <div className="flex flex-row items-center justify-center w-full gap-1">
          <h3 className="flex items-center justify-center text-[18px] font-bold">
            Top NFTs
          </h3>
          <h3 className="text-[14px] font-semibold text-[#A09FAA]">(24h)</h3>
        </div>
        <h3 className="flex item-center justify-center text-[#FF4085] text-sm font-medium">
          see more
        </h3>
      </div>
      {/* token */}
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="border rounded-[65px] w-[65px] h-[65px]">
            <img
              className="h-[65px] w-[65px]  "
              loading="lazy"
              alt="discover nav bar"
              src="/assets/img/De.png"
            />
          </div>
          <h3 className="text-[14.8px] font-semibold text-black">Degods</h3>
          <h3 className="text-[#A09FAA] text-[12px] font-medium">3,141 ETH</h3>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="border rounded-[65px] w-[65px] h-[65px]">
            <img
              className="h-[65px] w-[65px]  "
              loading="lazy"
              alt="discover nav bar"
              src="/assets/img/azu.png"
            />
          </div>
          <h3 className="text-[14.8px] font-semibold text-black">Azuki</h3>
          <h3 className="text-[#A09FAA] text-[12px] font-medium">3,141 ETH</h3>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="border rounded-[65px] w-[65px] h-[65px]">
            <img
              className="h-[65px] w-[65px]  "
              loading="lazy"
              alt="discover nav bar"
              src="/assets/img/pta.png"
            />
          </div>
          <h3 className="text-[14.8px] font-semibold text-black">
            The Potatoz
          </h3>
          <h3 className="text-[#A09FAA] text-[12px] font-medium">3,141 ETH</h3>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="border rounded-[65px] w-[65px] h-[65px]">
            <img
              className="h-[65px] w-[65px]  "
              loading="lazy"
              alt="discover nav bar"
              src="/assets/img/hv.png"
            />
          </div>
          <h3 className="text-[14.8px] font-semibold text-black">HV-MTL</h3>
          <h3 className="text-[#A09FAA] text-[12px] font-medium">3,141 ETH</h3>
        </div>
      </div>
      {/* card 4 */}
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row items-start justify-center border rounded-[20px] w-[183px] h-[115px] relative">
          <img
            className="h-[45px] w-[183px] absolute"
            loading="lazy"
            alt="discover nav bar"
            src="/assets/img/marcketcap.png"
          />
          <img
            className="h-[35px] w-[36px] absolute right-0 "
            loading="lazy"
            alt="discover nav bar"
            src="/assets/img/capdot.png"
          />
          <h3 className=" flex items-center justify-center text-white absolute text-[10px] font-semibold top-4 left-6">
            Market Cap
          </h3>
        </div>

        <div className="flex flex-row items-start justify-center border rounded-[20px] w-[183px] h-[115px] relative">
          <img
            className="h-[45px] w-[183px] absolute"
            loading="lazy"
            alt="discover nav bar"
            src="/assets/img/marcketcap.png"
          />
          <img
            className="h-[35px] w-[36px] absolute right-0 "
            loading="lazy"
            alt="discover nav bar"
            src="/assets/img/capdot.png"
          />
          <h3 className=" flex items-center justify-center text-white absolute text-[10px] font-semibold top-4 left-6">
            Market Cap
          </h3>
        </div>
      </div>

      {/* button */}
      <div className="flex flex-row items-center justify-between w-full">
        <button className="border border-black rounded-[108px] bg-[#D0F500] text-black w-[185px] h-[56px]">
          <h3 className="text-[16px] font-semibold">Top Gainers</h3>
        </button>
        <button className="border border-[#E5E5F0] rounded-[108px]  text-black w-[185px] h-[56px]">
          <h3 className="text-[16px] font-semibold">Top Gainers</h3>
        </button>
      </div>

      {/* form */}
      <div className="flex flex-col items-center justify-between w-full">
        <div className="flex  items-center justify-between w-[378px] border-b p-1">
          <div className="flex flex-row items-start justify-center w-full  ">
            <div className="flex border rounded-[42px] w-[42px] h-[42px]  ">
            <img
              className="h-[42px] w-[42px]  "
              loading="lazy"
              alt="discover nav bar"
              src="/assets/img/sure.png"
            />
            </div>
            
            <div className="flex flex-col items-start justify-center w-full">
              <h3 className="text-[14px] font-bold text-black">SURE</h3>
              <h3 className="text-[12px] font-medium text-[#A09FAA]">
                240 inSure DeFi
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-end justify-center w-full">
            <h3 className="text-[12px] font-semibold">$0,0041.66</h3>
            <div className="flex flex-row items-end justify-center ">
              <ChevronDownIcon className="w-[18px] h-[18px] text-[#FF4085]" />
              <h3 className="text-[12px] font-medium text-[#FF4085]">0.23%</h3>
            </div>
          </div>
        </div>

        <div className="flex  items-center justify-between w-[378px] border-b p-1">
          <div className="flex flex-row items-start justify-center w-full  ">
            <div className="flex border rounded-[42px] w-[42px] h-[42px]  ">
            <img
              className="h-[42px] w-[42px]  "
              loading="lazy"
              alt="discover nav bar"
              src="/assets/img/cfx.png"
            />
            </div>
            
            <div className="flex flex-col items-start justify-center w-full">
              <h3 className="text-[14px] font-bold text-black">CFX</h3>
              <h3 className="text-[12px] font-medium text-[#A09FAA]">
              76 Conflux
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-end justify-center w-full">
            <h3 className="text-[12px] font-semibold">$0.159046</h3>
            <div className="flex flex-row items-end justify-center ">
              <ChevronUpIcon className="w-[18px] h-[18px] text-[#14B195]" />
              <h3 className="text-[12px] font-medium text-[#14B195]">44.91%</h3>
            </div>
          </div>
        </div>

        <div className="flex  items-center justify-between w-[378px] border-b p-1">
          <div className="flex flex-row items-start justify-center w-full  ">
            <div className="flex border rounded-[42px] w-[42px] h-[42px]  ">
            <img
              className="h-[42px] w-[42px]  "
              loading="lazy"
              alt="discover nav bar"
              src="/assets/img/mina.png"
            />
            </div>
            
            <div className="flex flex-col items-start justify-center w-full">
              <h3 className="text-[14px] font-bold text-black">MINA</h3>
              <h3 className="text-[12px] font-medium text-[#A09FAA]">
              51 Mina Protocol
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-end justify-center w-full">
            <h3 className="text-[12px] font-semibold">$0,8366.21</h3>
            <div className="flex flex-row items-end justify-center ">
              <ChevronDownIcon className="w-[18px] h-[18px] text-[#14B195]" />
              <h3 className="text-[12px] font-medium text-[#14B195]">101.91%</h3>
            </div>
          </div>
        </div>

        <div className="flex  items-center justify-between w-[378px] ">
          <div className="flex flex-row items-start justify-center w-full  ">
            <div className="flex border rounded-[42px] w-[42px] h-[42px]  ">
            <img
              className="h-[42px] w-[42px]  "
              loading="lazy"
              alt="discover nav bar"
              src="/assets/img/pete.png"
            />
            </div>
            
            <div className="flex flex-col items-start justify-center w-full">
              <h3 className="text-[14px] font-bold text-black">PEPE</h3>
              <h3 className="text-[12px] font-medium text-[#A09FAA]">
              51 PEPE
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-end justify-center w-full">
            <h3 className="text-[12px] font-semibold">$1,794.28</h3>
            <div className="flex flex-row items-end justify-center ">
              <ChevronDownIcon className="w-[18px] h-[18px] text-[#FF4085]" />
              <h3 className="text-[12px] font-medium text-[#FF4085]">0.23%</h3>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default DiscoverForm;
