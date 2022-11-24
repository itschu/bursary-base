import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="px-3 py-10 bg">
      <div className="sm:flex justify-center sm:gap-32">
        <div className="flex items-center gap-10 mb-5">
          <img src={"/Images/circle.svg"} alt="" />
          <h1 className="text-2xl sm:text-3xl font-bold text-main">
            Bursary Base
          </h1>
        </div>
        <div className="mb-5">
          <h4 className="text-sm sm:text-1xl font-bold text-main mb-2">
            Quick Links
          </h4>
          <h5 className="text-main">Home</h5>
          <h5 className="text-main">About Us</h5>
          <h5 className="text-main"> Scholarships</h5>
          <h5 className="text-main">Accounts</h5>
        </div>
        <div className="mb-5">
          <h4 className="text-sm sm:text-1xl font-bold text-main mb-2">
            Legal
          </h4>
          <h5 className="text-main">Terms & Conditions</h5>
          <h5 className="text-main">Privacy Policy</h5>
        </div>
        <div className="mb-5">
          <h4 className="text-sm sm:text-1xl font-bold text-main mb-3">
            Contact Us
          </h4>
          <div className="flex gap-6 mb-5">
            <img src={"/Images/facebook.svg"} alt="" />
            <img src={"/Images/twitter.svg"} alt="" />
            <img src={"/Images/instagram.svg"} alt="" />
          </div>
          <div className="flex gap-3 mb-2">
            <img src={"/Images/phone.svg"} alt="" />
            <h5 className="text-main">+234 816 6685 033</h5>
          </div>
          <div className="flex gap-3">
            <img src={"/Images/mail.svg"} alt="" />
            <h5 className="text-main">info@bursarybase.ng</h5>
          </div>
        </div>
      </div>
      <div className="mt-20 flex justify-center">
        <p className="text-main text-sm sm:text-1xl">
          Copyrights © 2022 All Rights Reserved by Bursary Base.
        </p>
      </div>
    </div>
  );
}

export default Footer;
