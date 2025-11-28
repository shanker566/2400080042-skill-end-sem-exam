import React from "react";

const Input = ({ placeholder, type = "text", value, onChange, borderColor = "gray" }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border-2 border-${borderColor}-400 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-${borderColor}-500`}
    />
  );
};

export default Input;
