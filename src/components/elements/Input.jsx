import React from "react";
import "./Elements.css";

const Input = ({type, onChange}) => {
  return <input className="input-field" type={type} onChange={onChange} />;
};

export default Input;
