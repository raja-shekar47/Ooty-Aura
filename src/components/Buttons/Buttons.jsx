import React from "react";

import "./Button.css";

const Button = ({ label, onClick }) => {
  return (
    <button
      className="px-5 py-2.5 rounded-lg font-semibold text-white 
         bg-gradient-to-r from-blue-600 to-indigo-600 
         shadow-md hover:from-blue-700 hover:to-indigo-700 
         active:scale-95 transition-transform duration-200"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
