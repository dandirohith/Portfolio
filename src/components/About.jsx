import React from "react";
import dp from "../artifacts/dp2.png";

const About = () => {
  return (
    <div className="flex mx-auto border-solid border-x-8 border-[#191919] text-[#f9f4f0] w-full md:w-3/4 md:bg-[#111111]">
      <div className="flex flex-col w-full lg:flex-row justify-center items-center py-8 md:bg-[#111111]">
        <div className="flex justify-center items-center w-full font-azeret p-4 ">
          <div className="flex-1 flex w-full max-w-[320px] lg:max-w-[500px] text-xl md:text-2xl">
            Hello, I am a final year undergradute at Mahindra University Ecole
            Centrale pursuing major in CSE department.
          </div>
        </div>
        <div className="w-1/2 lg:w-full bg-[#111111]">
          <img className="flex-1" src={dp} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
