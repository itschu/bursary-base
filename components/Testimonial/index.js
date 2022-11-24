import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="px-3 py-10 sm:p-16">
      <h1 className="text-2xl sm:text-4xl font-bold text-main mb-5">
        What People Say
      </h1>
      <div className="flex sm:gap-10 items-center">
        <div className="hidden sm:w-1/2  sm:grid">
          <div className="flex items-center testimonial p-3 m-5">
            <img src={"/Images/profile.svg"} alt="" />
            <div>
              <h3>Ada Jegede</h3>
              <p className="text-main ">200L Chemical Engineering, Uniport</p>
            </div>
          </div>
          <div className="flex items-center testimonial p-3 m-5">
            <img src={"/Images/profile.svg"} alt="" />
            <div>
              <h3>Ada Jegede</h3>
              <p className="text-main ">200L Chemical Engineering, Uniport</p>
            </div>
          </div>
          <div className="flex items-center testimonial p-3 m-5">
            <img src={"/Images/profile.svg"} alt="" />
            <div>
              <h3>Ada Jegede</h3>
              <p className="text-main ">200L Chemical Engineering, Uniport</p>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2">
          <img src={"/Images/stars.svg"} alt="" />
          <h1 className="text-2xl sm:text-4xl font-bold text-main mb-5">
            Lorem Ipsum dolor sit amet!
          </h1>
          <p className="text-main  text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
