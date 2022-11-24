import React from "react";
import Button from "../Button/buttons";
import Buttons from "../Button/button";

const About = () => {
  return (
    <div className="px-3 py-10 sm:p-16">
      <div className="items-center sm:flex sm:flex-row-reverse">
        <div className="p-10">
          <img src={"/Images/Group7.png"} alt="" />
        </div>
        <div className="sm:w-1/2 ">
          <h1 className="text-2xl sm:text-5xl font-bold mb-5 text-main">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          </h1>
          <p className="text-justify text-main">
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
            <Buttons>Register</Buttons>
            <Button>View Scholarships</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
