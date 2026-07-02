import React from "react";
import { FaRegCirclePlay, FaS } from "react-icons/fa6";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; //
import PlantCarousel from "./PlantCarousel";
import profile from "../assets/72419c36cae7ef6f9c25b97e39a231fc9059935c.png"

const Hero = () => {
  return (
    <div className=" w-full flex justify-between mt-6">
        
      <div id="left" className="w-[60%] flex flex-col p-10 px-15 ">
        
        <div
          id="top"
          className=" font-inter "
        >
          <h1 className="font-semibold text-[7vw] text-white">
            Earth's Exhale
          </h1>
          <p className="font-medium text-[0.9rem] text-white ">
            "Earth Exhale" symbolizes the purity and vitality of the Earth's
            natural
          </p>
          <p className="font-medium text-[0.9rem] text-white">
            environment and its essential role in sustaining life.
          </p>
          <div className="flex gap-5 mt-5">
            <button className=" border-[1.4px] border-gray-300 text-white/70 text-[1.4rem] px-8  rounded-lg hover:bg-gray-300 hover:text-black transition-all duration-300">
              Buy Now
            </button>
            <button className="font-indie flex gap-3 items-center text-white text-[1.4rem]">
              <span>
                <FaRegCirclePlay size={50} className="text-white/80" />
              </span>
              Live Demo
            </button>
          </div>
        </div>
        {/* bottom start from here */}
        
          <div id="bottom" className="mt-14 flex  items-center">
            {/* review card start from here */}
            <div className="relative w-102 h-59 rounded-[40px] p-2 flex flex-col items-center overflow-hidden
          border border-white/50
          shadow-xl
          backdrop-blur-[2px]
          bg-transparent">
             <div className="p-6 px-8">
                {/* Header */}
                <div className="flex items-center gap-8">
                  <img 
                    src={profile}
                    alt="profile"
                    className="w-16 h-16 rounded-full object-cover"
                  />

                  <div>
                    <h2 className="text-white text-lg font-semibold">
                      Ronnie Hamill
                    </h2>

                    <div className="flex gap-2 mt-2 text-yellow-400 text-lg">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                      <span><FaStarHalfAlt /></span>
                    </div>
                  </div>
                </div>

                {/* Review */}
                <p className="mt-4 text-gray-300 text-lg leading-relaxed max-w-135">
                 I can't express how thrilled I am with my 
                 new natural plants! They bring such a 
                 fresh and vibrant energy to my home.
                </p>
              </div>
            </div>
          </div>
        
      </div>
      <div id="right" className="w-[40%] flex justify-center  ">
        <PlantCarousel />
      </div>
    </div>
  );
};

export default Hero;
