import React from "react";
import Button from "../Button/button";

const Principle = () => {
  return (
    <div className="px-3 py-10 sm:p-16">
      <div>
        <h1 className="text-2xl sm:text-4xl font-bold text-main mb-5">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="text-main mb-8 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco{" "}
        </p>
      </div>
      <div className="sm:flex sm:gap-10">
        <div className="sm:w-1/3">
          <div className="mb-5">
            <div className="flex gap-3 mb-3">
              <img src={"/Images/intuitive.svg"} alt="" />
              <h3 className="text-main font-bold">Intuitive</h3>
            </div>
            <p className="text-main mb-5 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt elit, sed do eiusmod tempor incididunt
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
          <div className="mb-5">
            <div className="flex gap-3 mb-3">
              <img src={"/Images/secure.svg"} alt="" />
              <h3 className="text-main font-bold">Secure</h3>
            </div>
            <p className="text-main mb-5 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt elit, sed do eiusmod tempor incididunt
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
          <div className="sm:mb-5 mb-10">
            <div className="flex gap-3 mb-3">
              <img src={"/Images/reliable.svg"} alt="" />
              <h3 className="text-main font-bold">Reliable</h3>
            </div>
            <p className="text-main mb-5 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt elit, sed do eiusmod tempor incididunt
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
          <div className="mb-10 hidden sm:flex">
            <div className="mt-5">
              <Button>Register Today</Button>
            </div>
          </div>
        </div>
        <div className="flex gap-3 mb-3">
          <img src={"/Images/Group6.png"} alt="" />
        </div>
        <div className="">
          <div className="flex gap-10 sm:grid sm:gap-0">
            <div>
              <h1 className="text-main font-bold">200 +</h1>
              <p className="text-main mb-5 text-justify">
                Awarding Scholarships
              </p>
            </div>
            <div>
              <h1 className="text-main font-bold">67 +</h1>
              <p className="text-main mb-5 text-justify">Active Bursary</p>
            </div>
          </div>
          <div>
            <h1 className="text-main font-bold">1000 +</h1>
            <p className="text-main mb-5 text-justify">Students Awarded</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principle;
