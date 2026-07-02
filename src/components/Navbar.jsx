import React from "react";
import bag from "../assets/0cc12c30ffef0466f2779edadcefe9250d10e34e.png"
import logo from "../assets/5e88b52117aa40baa6a96e43b5c4e57858edaa47.png"
import search from "../assets/743cbcfb287217bc1d51247b1ef3fbccb15f8b6c.png"
import menu from "../assets/menu-two-line (1).png"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between md:p-6 p-2 ">
      <div className="flex items-center gap-1.5 p-2">
        <img
          src={logo}
          alt="Logo"
          className="w-[4vh] md:w-[3.5vw] "
        />
        <h1 className="font-black font-inter md:text-[2vw] text-white text-lg">
          FloraVision.
        </h1>
      </div>
      <div className="hidden md:flex p-2 ">
        <ul className="flex gap-12 items-center font-indie font-black text-[1.5vw] ">
          <li>
            <a href="#" className="text-white hover:hoverOnAnchor ">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-[indie flower] hover:hoverOnAnchor">
              Plants Type <span></span>
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-[indie flower] hover:hoverOnAnchor">
              More
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-[indie flower] hover:hoverOnAnchor">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="flex md:gap-8 gap-4 px-3 py-2 items-center ">
        <img
          src={search}
          alt="search"
          className="w-[4vw] md:w-[2vw]"
        />
        <img
          src={bag}
          alt="bag"
          className="w-[4vw] md:w-[2vw]"
        />

        <img src={menu} alt="menu" className="w-[4vh] md:w-[3vw] -scale-x-100" />
      </div>
    </div>
  );
};

export default Navbar;
