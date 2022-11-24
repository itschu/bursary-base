import React from "react";
import "../../styles/globals.css";

const Button = ({ children }) => {
  return (
    <div>
      <button className="relative border-2 font-medium border-gray-100 bg-transparent py-2.5 px-5 uppercase text-main rounded-md">
        {children}
      </button>
    </div>
  );
};

export default Button;
