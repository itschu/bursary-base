import React from "react";
import "./section.css";

const Section = () => {
  return (
    <div className="section px-3 py-10 sm:p-16 flex items-center sm:justify-end">
      <div className="sm:w-1/2">
        <div className="">
          <h1 className="text-2xl sm:text-4xl font-bold text-main mb-5">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-main mb-5 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco
          </p>
          <div className="mb-5">
            <ol>
              <li className="mb-3">
                <h3 className="text-main mb-1 font-bold">
                  Lorem ipsum dolor sit
                </h3>
                <p className="text-main">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididu
                </p>
              </li>
              <li className="mb-3">
                <h3 className="text-main mb-1 font-bold">
                  Lorem ipsum dolor sit
                </h3>
                <p className="text-main">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididu
                </p>
              </li>
              <li className="mb-3">
                <h3 className="text-main mb-1 font-bold">
                  Lorem ipsum dolor sit
                </h3>
                <p className="text-main">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididu
                </p>
              </li>
              <li className="mb-3">
                <h3 className="text-main mb-1 font-bold">
                  Lorem ipsum dolor sit
                </h3>
                <p className="text-main">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididu
                </p>
              </li>
            </ol>
          </div>
          <div className="mt-5">
            <button className="relative border-2 font-medium border-gray-500 bg-transparent py-2.5 px-10 text-main rounded-md">
              Register Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
