import React from "react";
import background2 from "../artifacts/icon3.png";

const projects = () => {
  return (
    <div
      className="relative flex flex-col w-full h-screen"
      style={{
        backgroundImage: `url(${background2})`,
        backgroundSize: "20% 20%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left",
      }}
    ></div>
  );
};

export default projects;
