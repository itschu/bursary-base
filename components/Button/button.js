import React from "react";
import "../../styles/globals.css";

const Button = ({ children }) => {
  return (
    <div>
      <button className="relative border-2 font-medium border-gray-100 bg-main py-2.5 px-5 uppercase text-gray-200 rounded-md">
        {children}
      </button>
    </div>
  );
};

export default Button;
