import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [Nav, setNav] = useState(false);

  const HandleNav = () => {
    setNav(!Nav);
  };
  return (
    <div className="flex mt-[20%] justify-evenly items-center h-20 w-[75%] max-w-[1240px] mx-auto border-solid border-8 border-[#191919] text-[#f9f4f0] font-azeret bg-[#353535]">
      <img
        src="https://see.fontimg.com/api/renderfont4/ZVd9K/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/Um9oaXRoIGRhbmRp/rousset-bilast.png"
        alt="RTG"
        width="100"
        height="44"
      />
      <li className="hidden md:flex p-4">About</li>
      <li className="hidden md:flex p-4">Projects</li>
      <li className="hidden md:flex p-4">Resume</li>
      <li className="hidden md:flex p-4"> Contact</li>
      <div onClick={HandleNav} className="flex md:hidden">
        {!Nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !Nav
            ? "fixed right-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-300"
            : "fixed right-[-100%]"
        }
      >
        <li className="uppercase p-4">About</li>
        <li className="uppercase p-4">Projects</li>
        <li className="uppercase p-4">Resume</li>
        <li className="uppercase p-4"> Contact</li>
      </div>
    </div>
  );
};

export default Navbar;
