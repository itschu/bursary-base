import React from "react";
import Button from "../Button";

const About = () => {
  return (
    <div className="p-3 sm:p-16">
      <div className="items-center sm:flex sm:flex-row-reverse">
        <div className="p-10">
          <img src={"/Images/Group7.png"} alt="" />
        </div>
        <div className="sm:w-1/2 ">
          <h1 className="text-2xl sm:text-5xl font-bold mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          </h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <div className="flex justify-between sm:gap-10 sm:justify-start mt-10">
            <button className="relative border-2 font-medium border-gray-100 bg-black py-2.5 px-5 uppercase text-gray-200 rounded-md">
              Button
            </button>
            <button className="relative border-2 font-medium border-gray-500 bg-transparent py-2.5 px-10 uppercase text-black-200 rounded-md">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
