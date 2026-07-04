import React from "react";
import trendy1 from "../assets/b48312dbddc890f7f35ef3964ae1e7900b89782c.png";
import trendy2 from "../assets/95e728282f4fb901ee2edc80783c2fbd7df490c2.png";
import bag from "../assets/0cc12c30ffef0466f2779edadcefe9250d10e34e.png";

const TrendyCards = () => {
  return (
    <>
    <div
      id="cardHolder1"
      className="
        relative w-full h-86 rounded-[140px] p-6 flex justify-around items-center
        border border-white/25
        shadow-xl
        backdrop-blur-[2px]
        bg-transparent
        overflow-visible
      "
    >
      <div className="absolute -top-40 -translate-x-96 z-20 pointer-events-none select-none  w-[50%] flex justify-center ">
        <img
          src={trendy1}
          alt=""
          loading="lazy"
          className="w-[540px] transition-all duration-500 transform hover:scale-105 object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.32)]"
          draggable={false}
        />
      </div>

      {/* Content Section */}
      <div className="text-amber-50 w-[54%] px-8 font-inter absolute right-0 flex flex-col justify-center ">
        <h1 className="font-semibold text-[38px]">For Your Desks Decoration</h1>
        <p className="text-sm font-semibold  mt-4 ">
          I recently added a beautiful desk decoration plant to my workspace,
          and it has made such a positive difference!
        </p>
        <div className="flex flex-col">
          <h1 className="font-semibold text-[38px]">
            Rs. <span>599/-</span>
          </h1>
        <div className="flex items-center mt-4 gap-6">
        <span className="border-white p-2 rounded-lg border px-5">
            <button className="text-md font-medium">Explore</button>
          </span>
          <span className="border border-white p-2.5  rounded-lg">
            <img src={bag} alt="" srcset="" className="w-5" />
          </span>
        </div>
        </div>
      </div>
    </div>

    {/* second Card details */}
    <div
      id="cardHolder1"
      className="
        relative w-full h-86 rounded-[140px] p-6 flex justify-around items-center
        border border-white/25
        shadow-xl
        backdrop-blur-[2px]
        bg-transparent
        overflow-visible
        mt-30
      "
    >
      <div className="absolute  z-20 pointer-events-none select-none   flex justify-center right-0 -top-40">
        <img
          src={trendy2}
          alt=""
          loading="lazy"
          className="w-[540px] transition-all duration-500 transform hover:scale-105 object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.32)]"
          draggable={false}
        />
      </div>

      {/* Content Section */}
      <div className="text-amber-50 w-[54%] px-8 font-inter absolute  flex flex-col justify-center  -translate-x-50 ">
        <h1 className="font-semibold text-[38px]">For Your Desks Decoration</h1>
        <p className="text-sm font-semibold  mt-4 ">
        The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming
        </p>
        <div className="flex flex-col">
          <h1 className="font-semibold text-[38px]">
            Rs. <span>399/-</span>
          </h1>
        <div className="flex items-center mt-4 gap-6">
        <span className="border-white p-2 rounded-lg border px-5">
            <button className="text-md font-medium">Explore</button>
          </span>
          <span className="border border-white p-2.5  rounded-lg">
            <img src={bag} alt="" srcset="" className="w-5" />
          </span>
        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default TrendyCards;
