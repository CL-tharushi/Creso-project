function EthereumMainnetForm() {
  return (
    <div className="flex flex-col items-center justify-between px-[26px] w-full h-full">
      {/* card */}
      <img
        className="plus "
        loading="lazy"
        alt="crate pw line"
        src="/assets/img/card.png"
      />

      <div className="flex flex-row items-center justify-between w-full">
        <h2 className="flex items-center justify-start text-xl font-bold">
          Ethereum Mainnet
        </h2>
        <div className="flex flex-row items-center justify-end ">
          <img
            className="plus "
            loading="lazy"
            alt="crate pw line"
            src="/assets/img/Plus.png"
          />
          <h3 className="text-lg font-bold text-[#FF4085]">Create</h3>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full py-10">
        <div className="flex flex-row items-center justify-between w-full">
          <img
            className="keyless secure wallet "
            alt="crate pw line"
            src="/assets/img/wallet.png"
          />

          <div className="flex flex-col   items-start  w-full px-3">
            <h3 className="text-base font-bold">Keyless Secure Wallet</h3>
            <h3 className=" text-sm font-semibold text-[#A09FAA]">
              0xc213 ... 34dr
            </h3>
          </div>

          <img
            className="plus px-2 "
            loading="lazy"
            alt="crate pw line"
            src="/assets/img/copy.png"
          />

          <img
            className="plus px-2 "
            loading="lazy"
            alt="crate pw line"
            src="/assets/img/Line h.png"
          />

          <img
            className="plus px-2 "
            loading="lazy"
            alt="crate pw line"
            src="/assets/img/Arrowblack.png"
          />
        </div>

        <form className="flex flex-col items-center justify-between w-full py-4">
          <div className="  flex flex-row items-center justify-between  py-3 border-b w-96">
            <div className="flex flex-row items-center justify-center w-full ">
              <img
                className="plus px-2 "
                loading="lazy"
                alt="crate pw line"
                src="/assets/img/ETHpay.png"
              />
              <h3 className=" text-sm font-semibold text-[#A09FAA]">ETH</h3>
            </div>
            <div className="flex flex-row items-center justify-center w-full gap-2">
              <h3 className=" text-xs font-semibold text-[#A09FAA]">
                $1,794.28
              </h3>
              <h3 className=" text-sm font-bold text-[##000]">0.54</h3>
            </div>
          </div>
          <div className="  flex flex-row items-center justify-between  py-3 border-b w-96">
            <div className="flex flex-row items-center justify-center w-full ">
              <img
                className="plus px-2 "
                loading="lazy"
                alt="crate pw line"
                src="/assets/img/dal.png"
              />
              <h3 className=" text-sm font-semibold text-[#A09FAA]">DAI</h3>
            </div>
            <div className="flex flex-row items-center justify-center w-full gap-2">
              <h3 className=" text-xs font-semibold text-[#A09FAA]">$594.17</h3>
              <h3 className=" text-sm font-bold text-[##000]">594.2344</h3>
            </div>
          </div>
          <div className="  flex flex-row items-center justify-between  py-3 border-b w-96">
            <div className="flex flex-row items-center justify-center w-full ">
              <img
                className="plus px-2 "
                loading="lazy"
                alt="crate pw line"
                src="/assets/img/bnb.png"
              />
              <h3 className=" text-sm font-semibold text-[#A09FAA]">BNB</h3>
            </div>
            <div className="flex flex-row items-center justify-center w-full gap-2">
              <h3 className=" text-xs font-semibold text-[#A09FAA]">
                $2,732.54
              </h3>
              <h3 className=" text-sm font-bold text-[##000]">0.72</h3>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EthereumMainnetForm;
