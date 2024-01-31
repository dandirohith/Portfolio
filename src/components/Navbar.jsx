import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import background1 from "../artifacts/icon28.png";
import About from "./About";

const Navbar = () => {
  const [Nav, setNav] = useState(false);

  const HandleNav = () => {
    setNav(!Nav);
  };

  const handleOpenPdf = () => {
    // Specify the path to your PDF file
    const pdfUrl = "/rohith_dandi_resume.pdf";

    // Open the PDF in a new tab
    const newTab = window.open(pdfUrl, "_blank");
  };
  return (
    <div
      className="relative flex flex-col w-full"
      style={{
        backgroundImage: `url(${background1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="flex-1 flex justify-evenly items-center h-20 mt-40 mx-auto border-solid border-8 border-[#191919] text-[#f9f4f0] font-azeret bg-[#353535] w-full md:w-[75%] lg:w-[75%]">
        <img
          className="object-cover p-4"
          src="https://see.fontimg.com/api/renderfont4/ZVd9K/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/Um9oaXRoIGRhbmRp/rousset-bilast.png"
          alt="RTG"
          width="150"
        />
        <a className="hidden md:flex p-4" href="#about">
          About
        </a>
        <a className="hidden md:flex p-4" href="#projects">
          Projects
        </a>
        <a className="hidden md:flex p-4" href="/" onClick={handleOpenPdf}>
          Resume
        </a>
        <a className="hidden md:flex p-4" href="#contact">
          Contact
        </a>
        <div onClick={HandleNav} className="flex md:hidden">
          {Nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            Nav
              ? "flex flex-col fixed left-0 top-0 w-[60%]  border-r border-r-gray-900 bg-black ease-in-out duration-300"
              : "fixed left-[100%]"
          }
        >
          <a className="uppercase p-4" href="#about">
            About
          </a>
          <a className="uppercase p-4" href="#projects">
            Projects
          </a>
          <a className="uppercase p-4" href="/" onClick={handleOpenPdf}>
            Resume
          </a>
          <a className="uppercase p-4" href="#contact">
            Contact
          </a>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Navbar;
