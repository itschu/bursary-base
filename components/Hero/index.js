import React from "react";
import Button from "../Button";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero px-3 sm:px-16 relative">
      <div className="text-gray-200">
        <div className="flex justify-end relative top-5 sm:top-10 ">
          <img src={"/Images/menu.svg"} alt="" className="absolute" />
        </div>
        <div className="grid justify-center items-center h-screen">
          <div className="text-justify">
            <h1 className="text-3xl sm:text-5xl font-normal mb-5 md:w-1/2">
              Lorem ipsum dolor sit amet, consectetur.
            </h1>
            <p className="text-sm md:w-5/12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex mt-10 justify-between md:justify-start md:gap-10">
              <Button />
              <Button />
            </div>
            <div className="hidden sm:flex absolute">
              <div className="flex items-center gap-5">
                <img src={"/Images/Group-13.svg"} alt="" className="" />
                <h1 className=" sm:flex md:flex text-2xl font-bold">
                  Busary Base
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
