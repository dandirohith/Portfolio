import React from "react";
import dp from "../artifacts/dp2.png";

const About = () => {
  return (
    <div className="flex w-3/4 max-w-[1240px] mx-auto border-solid border-x-8 border-[#191919] text-[#f9f4f0] bg-[#111111]">
      <div className="flex flex-col lg:flex-row">
        <div className="flex items-center font-azeret p-4">
          <div className="flex-1 flex flex-col max-w-[320px] lg:max-w-[482px]">
            <span>
              Hello, I am a final year undergradute at Mahindra University Ecole
              Centrale pursuing major in CSE department.
            </span>
          </div>
        </div>
        <div className="">
          <img className="flex-1 w-full h-full" src={dp} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
